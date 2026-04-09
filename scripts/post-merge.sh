#!/bin/bash
set -e

echo "[post-merge] Installing dependencies..."
pnpm install --frozen-lockfile || pnpm install

echo ""
echo "============================================================"
echo "  POST-MERGE REMINDER: Production Redeploy Required"
echo "============================================================"
echo ""
echo "  Code has been updated but production is NOT automatically"
echo "  redeployed. You must trigger a deployment manually via the"
echo "  Replit Deployments pane to push changes to production."
echo ""
echo "  Run 'bash scripts/redeploy-check.sh' to check if"
echo "  the last build matches the current code."
echo ""
echo "============================================================"

echo "[post-merge] Done."
