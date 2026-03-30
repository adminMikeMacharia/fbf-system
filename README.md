# FBF System — Founders Brand Federation

6-portal frontend + API server hub for Founders Brand Federation, part of the MachariaOS ecosystem.

## Portals
| Portal | Port | Path |
|---|---|---|
| **Sponsorship Hub** | 3000 | `/sponsorship-hub/` |
| **Founders Kitchen** | 3001 | `/founders-kitchen/` |
| **Founders Gaming** | 3002 | `/founders-gaming/` |
| **Founders Venture Capital** | 3003 | `/fvc/` |
| **Founders Brand Hub** | 3004 | `/founders-brand-hub/` |
| **Chapters & Ledgers** | 3005 | `/chapters-ledgers/` |
| **FBF API Server** | 8080 | `/api/` |

## Required Environment Variables

Set these in your Replit Secrets tab:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string (auto-set by Replit when you add a DB) |
| `ZOHO_MAIL_APP_PASSWORD` | For email | Zoho Mail app password for Chapters & Ledgers email |
| `SPONSORSHIP_ADMIN_PIN` | For admin | PIN for Sponsorship Hub admin access |
| `OPENAI_API_KEY` | For Book Agent | OpenAI API key for Chapters & Ledgers Book Agent |
| `OPENAI_MODEL` | Optional | Model name (default: `gpt-4o`) |
| `VITE_API_BASE` | Optional | External API base URL (leave unset to use local FBF API server) |

## Setup

1. **Import this repo** into a new Replit
2. **Add a PostgreSQL database** from the Replit Database tab → the `DATABASE_URL` secret is set automatically
3. **Run the DB setup** — paste `artifacts/api-server/scripts/db-setup.sql` into the Replit SQL console
4. **Add secrets** listed above
5. Click **Run** — all 7 services start in parallel

## Architecture

- All 6 portals proxy `/api` calls to the local FBF API server (port 8080)
- The FBF API server handles: sponsorship inquiries, book agent AI, FBF proxy, and email comms
- When `VITE_API_BASE` is set, portals call that external server instead of the local proxy
- Hub portal auth (`/api/hub/portal-verify`) always returns authorized in the FBF standalone Replit
