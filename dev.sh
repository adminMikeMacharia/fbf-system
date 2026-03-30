#!/usr/bin/env bash
set -e

export VITE_API_BASE="${VITE_API_BASE:-https://macharia-os-main.replit.app}"

echo "[fbf] Starting all services..."

PORT=3001 node_modules/.bin/tsx artifacts/api-server/src/index.ts &

BASE_PATH=/founders-brand-hub/ PORT=5000 pnpm --filter @workspace/founders-brand-hub run dev &
BASE_PATH=/founders-kitchen/ PORT=3002 pnpm --filter @workspace/founders-kitchen run dev &
BASE_PATH=/founders-gaming/ PORT=3003 pnpm --filter @workspace/founders-gaming run dev &
BASE_PATH=/fvc/ PORT=5173 pnpm --filter @workspace/fvc run dev &
BASE_PATH=/sponsorship-hub/ PORT=6000 pnpm --filter @workspace/sponsorship-hub run dev &
BASE_PATH=/chapters-ledgers/ PORT=8000 pnpm --filter @workspace/chapters-ledgers run dev &

wait
