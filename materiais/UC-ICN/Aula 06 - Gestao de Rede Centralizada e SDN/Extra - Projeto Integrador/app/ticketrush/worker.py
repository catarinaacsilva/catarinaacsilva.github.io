"""Worker: consome a fila e grava as encomendas; carrega o stock no arranque."""
import json
import time

import psycopg
import redis

from ticketrush import config


def connect_db() -> psycopg.Connection:
    while True:
        try:
            return psycopg.connect(config.DB_DSN, autocommit=True)
        except psycopg.OperationalError:
            print("a aguardar pela base de dados...", flush=True)
            time.sleep(2)


def main() -> None:
    cache = redis.Redis.from_url(config.REDIS_URL, decode_responses=True)
    db = connect_db()
    for event_id, capacity in db.execute("SELECT id, capacity FROM events"):
        cache.setnx(f"stock:{event_id}", capacity)
    print("worker pronto", flush=True)
    while True:
        _, raw = cache.blpop(config.QUEUE)
        msg = json.loads(raw)
        time.sleep(0.2)  # simula trabalho (pagamento, email); aumenta a fila sob carga
        db.execute("INSERT INTO orders (id, event_id, status) VALUES (%s, %s, 'confirmed')",
                   (msg["order"], msg["event"]))


if __name__ == "__main__":
    main()
