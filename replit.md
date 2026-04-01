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

## Shared Packages
- `lib/api-client-react` — API client hooks (stub for @workspace/api-client-react)
- `lib/kola-data` — Kola venture case study data (stub for @workspace/kola-data)
- `lib/shopping-data` — Real household consumption data parsed from 15 Carrefour receipts (Apr 2025–Mar 2026). Exports `TOP_BRANDS` (79 brands sorted by spend) and `SHOPPING_SUMMARY` with `{ totalSpend, dateRange, totalLineItems, uniqueProducts }`. Powers the Brand Engagement Pipeline on the FK Partnerships page.

## Founders Kitchen v2 Set Design Brief
- Vision Board page reflects the permanent owned studio concept (brick-and-timber, Karen/Muthaiga/Runda/Gigiri)
- 7 Luke Carter / IN 5 Architects renders in public/images/ (render-*.jpg)
- 2 brand placement reference photos (placement-samsung-fridge.jpg, placement-spice-shelf.jpg)
- Sections: Design Renders, Architecture, Arrival Sequence, Kitchen Interior, Fridge Decision, Brand Integration Map, Production Strategy & Timeline, Budget
- Modes of Operation: FK Filming, Private Dining, Corporate Events
- Partnerships page includes brand-zone placement partners from the v2 brief

## Password Gateway
- All 6 portals use a shared `PasswordGateway` component (`lib/password-gateway/index.tsx`)
- PIN: 2403 (stored as `DEMO_PIN`)
- Session-based auth via `sessionStorage`

## Ecosystem Links
- All EcosystemBar components across portals cross-link to sibling portals
- AFOS Atlas / MachariaOS Hub links point to `https://macharia-os-main.replit.app/hub/`
- Brand Hub Ecosystem Map page shows all products with dynamic stats
- External links (MachariaOS, foundersbattlefield.org) open in new tabs

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
