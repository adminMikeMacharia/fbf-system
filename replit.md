# FBF System — Founders Brand Federation

## Overview
6-portal frontend hub for Founders Brand Federation, part of the MachariaOS ecosystem. All portals are frontend-only React/Vite apps that call the MachariaOS API.

## Architecture
- **Monorepo** using pnpm workspaces
- All portals live under `artifacts/`
- Each portal is an independent Vite + React + Tailwind CSS app

## Portals
| Portal | Package Name | Description |
|--------|-------------|-------------|
| Founders Brand Hub | `@workspace/founders-brand-hub` | Brand HQ |
| Founders Kitchen | `@workspace/founders-kitchen` | Culinary brand portal |
| Founders Gaming | `@workspace/founders-gaming` | Gaming brand portal |
| FVC | `@workspace/fvc` | Investment portfolio |
| Sponsorship Hub | `@workspace/sponsorship-hub` | Sponsor management |
| Chapters & Ledgers | `@workspace/chapters-ledgers` | Book projects & AI writing |

## Shared Workspace Packages (stubs)
- `@workspace/api-client-react` — API client hooks (stub)
- `@workspace/kola-data` — Shared data utilities (stub)
- `@workspace/shopping-data` — Shopping data (stub)

## Environment Variables
- `VITE_API_BASE` — Backend API base URL (set as secret)
- `PORT` — Dev server port (5000 for Replit)
- `BASE_PATH` — URL base path for the portal
- `NODE_OPTIONS` — Set to `--max-http-header-size=65536` for Replit proxy compatibility

## Running
Currently configured to run Founders Brand Hub on port 5000:
```
PORT=5000 BASE_PATH=/ pnpm --filter @workspace/founders-brand-hub run dev
```

To run other portals, update the workflow command filter.

## Tech Stack
- React 19, Vite 7, Tailwind CSS 4
- wouter (routing), framer-motion (animations), lucide-react (icons)
- shadcn/ui components (Founders Kitchen, Sponsorship Hub, Chapters & Ledgers)
- Recharts (charts), React Query (data fetching)
