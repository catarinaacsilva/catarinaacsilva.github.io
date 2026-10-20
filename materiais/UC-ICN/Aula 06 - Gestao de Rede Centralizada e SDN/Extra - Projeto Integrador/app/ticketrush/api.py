"""API REST do TicketRush.

Reserva rapida: o stock vive no Redis (DECR atomico) e o pedido vai para uma
fila; o worker grava na base de dados. A API nunca espera pela base de dados.
"""
import json
import socket
import uuid

import psycopg
import redis
from flask import Flask, jsonify

from ticketrush import config

app = Flask(__name__)
cache = redis.Redis.from_url(config.REDIS_URL, decode_responses=True)


def stock_key(event_id: int) -> str:
    return f"stock:{event_id}"


@app.get("/api/health")
def health():
    cache.ping()
    return jsonify(status="ok", instance=socket.gethostname())


@app.get("/api/events")
def events():
    with psycopg.connect(config.DB_DSN) as conn:
        rows = conn.execute("SELECT id, name, capacity FROM events ORDER BY id").fetchall()
    out = []
    for event_id, name, capacity in rows:
        left = cache.get(stock_key(event_id))
        out.append({"id": event_id, "name": name,
                    "left": int(left) if left is not None else capacity})
    return jsonify(events=out, instance=socket.gethostname())


@app.post("/api/events/<int:event_id>/reserve")
def reserve(event_id: int):
    if cache.get(stock_key(event_id)) is None:
        return jsonify(error="evento desconhecido (stock nao carregado)"), 404
    if cache.decr(stock_key(event_id)) < 0:
        cache.incr(stock_key(event_id))
        return jsonify(error="esgotado"), 409
    order_id = str(uuid.uuid4())
    cache.rpush(config.QUEUE, json.dumps({"order": order_id, "event": event_id}))
    return jsonify(order=order_id, status="queued", instance=socket.gethostname()), 202


@app.get("/api/orders/<order_id>")
def order(order_id: str):
    with psycopg.connect(config.DB_DSN) as conn:
        row = conn.execute("SELECT status FROM orders WHERE id = %s", (order_id,)).fetchone()
    return jsonify(order=order_id, status=row[0] if row else "queued")
