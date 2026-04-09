#!/usr/bin/env bash
set -e

export VITE_API_BASE="${VITE_API_BASE:-https://macharia-os-main.replit.app}"

echo "[fbf] Installing dependencies..."
pnpm install --frozen-lockfile 2>/dev/null || pnpm install

echo "[fbf] Building all portals for production..."
echo "[fbf] VITE_API_BASE=$VITE_API_BASE"

PORT=19200 BASE_PATH=/founders-brand-hub/ pnpm --filter @workspace/founders-brand-hub run build &
PORT=19201 BASE_PATH=/founders-kitchen/ pnpm --filter @workspace/founders-kitchen run build &
PORT=19202 BASE_PATH=/founders-gaming/ pnpm --filter @workspace/founders-gaming run build &
PORT=19203 BASE_PATH=/fvc/ pnpm --filter @workspace/fvc run build &
PORT=19204 BASE_PATH=/sponsorship-hub/ pnpm --filter @workspace/sponsorship-hub run build &
PORT=19205 BASE_PATH=/chapters-ledgers/ pnpm --filter @workspace/chapters-ledgers run build &

wait
echo "[fbf] All portals built successfully."

echo "[fbf] Moving build outputs to dist/serve (avoid static-only artifact mode)..."
for portal in founders-brand-hub founders-kitchen founders-gaming fvc sponsorship-hub chapters-ledgers; do
  if [ -d "artifacts/$portal/dist/public" ]; then
    rm -rf "artifacts/$portal/dist/serve"
    mv "artifacts/$portal/dist/public" "artifacts/$portal/dist/serve"
  fi
done
echo "[fbf] Build complete."
