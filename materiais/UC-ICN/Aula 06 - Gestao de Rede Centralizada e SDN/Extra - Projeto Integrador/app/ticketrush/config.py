"""Configuracao lida das variaveis de ambiente (nunca no codigo)."""
import os

REDIS_URL = os.environ.get("REDIS_URL", "redis://redis:6379/0")
DB_DSN = (
    f"host={os.environ.get('DB_HOST', 'db')} "
    f"dbname={os.environ.get('DB_NAME', 'tickets')} "
    f"user={os.environ.get('DB_USER', 'tickets')} "
    f"password={os.environ.get('DB_PASSWORD', '')}"
)
QUEUE = "orders"
