# FBF System — Founders Brand Federation

6-portal frontend hub for Founders Brand Federation, part of the MachariaOS ecosystem.

## Portals
- **Sponsorship Hub** — sponsor management and live stats
- **Founders Kitchen** — culinary brand portal
- **Founders Gaming** — gaming brand portal
- **Founders Venture Capital (FVC)** — investment portfolio
- **Founders Brand Hub** — brand HQ
- **Chapters & Ledgers** — book projects and AI writing assistant

## Setup (Replit)
1. Import this repo into a new Replit
2. Add the following environment variable:
   ```
   VITE_API_BASE=https://macharia-os-main.replit.app
   ```
3. Run: `pnpm install && pnpm run dev`

## Architecture
All 6 portals are fronted-only and call the MachariaOS API for:
- Hub session verification (`/api/hub/portal-verify`)
- Sponsorship admin (`/api/sponsorship/admin/verify-pin`)
- FBF proxy stats (`/api/fbf-proxy/*`)
- Book Agent AI (`/api/book-agent/*`)
- Comms/email (`/api/comms/chapters-ledgers-summary`)

The `VITE_API_BASE` env var routes all API calls to the correct backend.
When running on MachariaOS directly (no VITE_API_BASE), falls back to local `/api`.
