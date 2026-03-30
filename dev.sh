#!/usr/bin/env bash
set -e

export NODE_OPTIONS="--max-http-header-size=65536"

echo "[fbf] Starting all 7 FBF services..."

PORT=3001 pnpm --filter @workspace/api-server run dev &
PORT=5000 BASE_PATH=/ pnpm --filter @workspace/founders-brand-hub run dev &
PORT=3002 BASE_PATH=/ pnpm --filter @workspace/founders-kitchen run dev &
PORT=3003 BASE_PATH=/ pnpm --filter @workspace/founders-gaming run dev &
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/fvc run dev &
PORT=6000 BASE_PATH=/ pnpm --filter @workspace/sponsorship-hub run dev &
PORT=8000 BASE_PATH=/ pnpm --filter @workspace/chapters-ledgers run dev &

wait
