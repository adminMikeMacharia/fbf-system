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

## Canonical Data Modules (single source of truth for seed + UI)
- `artifacts/chapters-ledgers/src/data/columns.ts` — `foundersArenaColumns` (36 Business Daily columns)
- `artifacts/chapters-ledgers/src/data/volumes.ts` — `volumes` (6 AFOS book volumes/arcs)
- `artifacts/chapters-ledgers/src/data/books.ts` — `readingList2026` (10 curated books)
- `artifacts/chapters-ledgers/src/data/transcripts.ts` — `transcripts` (13 episode transcript metadata)
- `artifacts/sponsorship-hub/src/data/service-catalog.ts` — `SERVICE_CATALOG` (14 sponsorship products)
- `artifacts/sponsorship-hub/src/data/tier-pricing.ts` — `TIERS` (4 tiers), `RATE_CARD` (8 groups, 25 items)
- `artifacts/sponsorship-hub/src/data/pipeline.ts` — `TARGET_PIPELINE` (35 prospects), `PODCAST_TOPICS` (30), `BSE_AGENTS` (7)
- `artifacts/fvc/src/data/ventures.ts` — `VENTURES` (4 ventures), `STAGE_COLORS`, `PIPELINE_STAGES`
- `artifacts/fvc/src/data/portfolio.ts` — `PORTFOLIO` (3 investments), `NOTIFICATIONS` (7 alerts)
- `artifacts/fvc/src/data/milestones.ts` — `VENTURE_MILESTONES` (23 milestones across 4 ventures)
- `artifacts/fvc/src/data/case-study.ts` — `KOLA_CASE_STUDY`, `KOLA_FINANCIALS`, `KOLA_TIMELINE`, `KOLA_GOVERNANCE`, `KOLA_LESSONS`

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

## Unified Database (PostgreSQL + Drizzle ORM)
- **Schema**: `artifacts/api-server/src/lib/schema.ts` — 30+ tables across 7 domains
- **Migration**: `artifacts/api-server/scripts/db-migration.sql` (idempotent CREATE TABLE IF NOT EXISTS)
- **Seed**: `artifacts/api-server/scripts/seed.ts` — seeds all domains with FK cross-references, imports from canonical source modules: `lib/shopping-data`, `chapters-ledgers/src/data/*`, `sponsorship-hub/src/data/*`, `fvc/src/data/*`
- **Migration runner**: `artifacts/api-server/scripts/db-migrate.ts`
- **npm scripts**: `db:migrate` and `db:seed` in api-server package.json

### Data Domains & Tables (seed counts)
1. **People & Orgs**: `people` (50), `organizations` (39), `people_organizations` (5 links)
2. **Content & Episodes (AFOS)**: `arcs` (6), `episodes` (40), `episode_founders` (with personId), `transcripts` (13, with full_content), `volumes` (6), `books` (40), `columns` (36)
3. **Sponsorship & Commercial**: `sponsorship_inquiries` (existing), `sponsorship_services` (14), `sponsorship_tiers` (4), `rate_card_items`, `pipeline_targets` (35, with bseAgentId+organizationId), `podcast_topics` (30)
4. **Ventures & Investment (FVC)**: `ventures` (4, with founderId), `venture_milestones` (23), `portfolio_investments` (3), `venture_notifications` (7)
5. **Case Studies**: `case_studies` (1), `case_study_financials` (5), `case_study_timeline` (10), `case_study_governance` (5), `case_study_lessons` (6), `loan_agreements` (1, with lenderId+borrowerId)
6. **Shopping & Consumption**: `shopping_receipts` (13), `shopping_items` (61, from lib/shopping-data), `shopping_brands` (75, from lib/shopping-data)
7. **Project Management**: `project_tasks` (10, with assignedToId), `project_subtasks` (20), `cost_items` (10), `partners` (10)

### API Routes (all under `/api/`)
- List + detail: `/episodes`, `/arcs`, `/volumes`, `/books`, `/columns`, `/transcripts`, `/people`, `/organizations`
- List + detail: `/ventures`, `/portfolio`, `/venture-notifications`, `/case-studies`, `/loans`
- List + detail: `/sponsorship-services`, `/sponsorship-tiers`, `/rate-card`, `/pipeline`, `/podcast-topics`
- List + detail: `/shopping/receipts`, `/shopping/brands`
- List + detail: `/tasks`, `/cost-items`, `/partners`

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
