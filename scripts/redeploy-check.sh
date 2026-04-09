#!/bin/bash

echo "============================================================"
echo "  FBF Deployment Status Check"
echo "============================================================"
echo ""

CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)
CURRENT_SHORT=$(git rev-parse --short HEAD 2>/dev/null)
CURRENT_MSG=$(git log -1 --pretty=format:"%s" 2>/dev/null)

if [ -z "$CURRENT_COMMIT" ]; then
  echo "  ERROR: Unable to determine current commit."
  exit 1
fi

echo "  Current HEAD:    $CURRENT_SHORT"
echo "  Commit msg:      $CURRENT_MSG"
echo ""

LAST_BUILD=""
if [ -f ".last-build-commit" ]; then
  LAST_BUILD=$(cat .last-build-commit 2>/dev/null | tr -d '[:space:]')
fi

echo "  --- Build Status ---"
if [ -n "$LAST_BUILD" ]; then
  LAST_BUILD_SHORT=$(echo "$LAST_BUILD" | cut -c1-7)
  echo "  Last build:      $LAST_BUILD_SHORT"
  if [ "$LAST_BUILD" = "$CURRENT_COMMIT" ]; then
    echo "  Build status:    UP TO DATE"
  else
    BUILD_BEHIND=$(git rev-list --count "$LAST_BUILD".."$CURRENT_COMMIT" 2>/dev/null || echo "unknown")
    echo "  Build status:    STALE ($BUILD_BEHIND commit(s) behind)"
  fi
else
  echo "  Last build:      unknown (no .last-build-commit marker)"
  echo "  Build status:    UNKNOWN"
fi

echo ""
echo "  --- Deployment Note ---"
echo "  build.sh runs only during Replit Autoscale deployments."
echo "  .last-build-commit is written at build time."
echo ""
echo "  If this marker is stale or missing, production may not"
echo "  reflect the latest code. Trigger a deploy via the Replit"
echo "  Deployments pane."
echo ""
echo "  The post-merge hook (pnpm install) does NOT redeploy."
echo "  You must manually deploy after each task merge."
echo ""
echo "============================================================"
