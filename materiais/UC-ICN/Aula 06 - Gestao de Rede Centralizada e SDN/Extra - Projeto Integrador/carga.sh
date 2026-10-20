#!/usr/bin/env bash
# Uso: ./carga.sh [N pedidos] [evento]   -- gera carga de reservas e mostra que instancia respondeu
set -euo pipefail
[[ "${1:-}" == "-h" ]] && { sed -n '2p' "$0"; exit 0; }
n="${1:-50}"; ev="${2:-1}"
for _ in $(seq "$n"); do
  curl -s -X POST "http://localhost:8080/api/events/$ev/reserve" &
done | grep -o '"instance":"[^"]*"\|"error":"[^"]*"' | sort | uniq -c
wait
