# FBF System — Founders Brand Federation

## Overview
6-portal frontend hub + API server for Founders Brand Federation, part of the MachariaOS ecosystem. All portals are frontend-only React/Vite apps. The API server handles sponsorship, book agent AI, comms, and proxy routes.

## Architecture
- **Monorepo** using pnpm workspaces
- All services live under `artifacts/`
- Each portal is an independent Vite + React + Tailwind CSS app
- API server is Express + Drizzle ORM + PostgreSQL
- Startup script `dev.sh` launches all 7 services in parallel

## Services
| Service | Package | Port | Description |
|---------|---------|------|-------------|
| API Server | `@workspace/api-server` | 3001 | Express API (health, sponsorship, book-agent, comms, fbf-proxy) |
| Founders Brand Hub | `@workspace/founders-brand-hub` | 5000 | Brand HQ (preview portal) |
| Founders Kitchen | `@workspace/founders-kitchen` | 3002 | Culinary brand portal |
| Founders Gaming | `@workspace/founders-gaming` | 3003 | Gaming brand portal |
| FVC | `@workspace/fvc` | 5173 | Investment portfolio |
| Sponsorship Hub | `@workspace/sponsorship-hub` | 6000 | Sponsor management |
| Chapters & Ledgers | `@workspace/chapters-ledgers` | 8000 | Book projects & AI writing |

## Shared Workspace Packages (stubs)
These packages are referenced by portals but originate from the main MachariaOS project. Stub versions with placeholder data are provided:
- `@workspace/api-client-react` — API client hooks
- `@workspace/kola-data` — Kola Entertainment venture case study data (types + constants)
- `@workspace/shopping-data` — Household shopping/brand data for FK pipeline

## Database
- PostgreSQL via Replit built-in database
- Table: `sponsorship_inquiries` (created from `artifacts/api-server/scripts/db-setup.sql`)
- Drizzle ORM for queries

## Secrets
- `VITE_API_BASE` — Backend API base URL (https://macharia-os-main.replit.app)
- `OPENAI_API_KEY` — for Book Agent AI (Chapters & Ledgers)
- `ZOHO_MAIL_APP_PASSWORD` — for email summaries
- `SPONSORSHIP_ADMIN_PIN` — for Sponsorship Hub admin access
- `DATABASE_URL` — auto-set by Replit PostgreSQL

## Environment Variables
- `PORT` — set per-service in `dev.sh`
- `BASE_PATH` — URL base path (set to `/` for dev)
- `NODE_OPTIONS` — `--max-http-header-size=65536`

## Running
All 7 services start via `bash dev.sh`. The workflow is configured as "Start application".

## Tech Stack
- React 19, Vite 7, Tailwind CSS 4
- Express 5, Drizzle ORM, postgres.js
- wouter (routing), framer-motion (animations), lucide-react (icons)
- shadcn/ui components, Recharts, React Query
- OpenAI SDK, Nodemailer
