# FBF System (Founders Brand Federation)

## Overview
A pnpm monorepo with 6 React/Vite frontend portals + 1 Express API server, connected to a MachariaOS backend at `https://macharia-os-main.replit.app`.

## Architecture
- **Monorepo**: pnpm workspaces with artifacts (portals + API) and lib (shared packages)
- **Frontend portals**: React + Vite SPAs, each deployed as a static artifact
- **API server**: Express 5 + TypeScript (runs via tsx)
- **Backend**: MachariaOS at `VITE_API_BASE=https://macharia-os-main.replit.app`
- **Database**: PostgreSQL (sponsorship_inquiries table)

## Portals
| Portal | Dev Port | Path |
|--------|----------|------|
| Founders Brand Hub | 5000 | /founders-brand-hub/ |
| Founders Kitchen | 3002 | /founders-kitchen/ |
| Founders Gaming | 3003 | /founders-gaming/ |
| FVC | 5173 | /fvc/ |
| Sponsorship Hub | 6000 | /sponsorship-hub/ |
| Chapters & Ledgers | 8000 | /chapters-ledgers/ |
| API Server | 3001 | /api/ |

## Key Files
- `dev.sh` — Starts all 7 services in parallel for development
- `build.sh` — Builds all 6 portal frontends for production
- `start.sh` — Starts the production server via tsx
- `server.mjs` — Express production server serving all portals + API
- `pnpm-workspace.yaml` — Workspace config with catalog dependencies

## Stub Packages
- `lib/api-client-react` — API client hooks (stub for @workspace/api-client-react)
- `lib/kola-data` — Kola venture case study data (stub for @workspace/kola-data)
- `lib/shopping-data` — Shopping/brand data (stub for @workspace/shopping-data)

## Auth Flow
- Portals check for `hub_token` in localStorage
- Unauthenticated users are redirected to MachariaOS Hub for login
- After login, MachariaOS redirects back to the portal with a token

## Deployment
- Target: autoscale
- Build: `bash build.sh`
- Run: `bash start.sh`
- Replit auto-detects 6 static artifacts and serves them

## Secrets
- OPENAI_API_KEY
- ZOHO_MAIL_APP_PASSWORD
- SPONSORSHIP_ADMIN_PIN
- VITE_API_BASE (set in .replit userenv)
