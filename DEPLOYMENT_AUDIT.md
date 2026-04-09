# FBF Deployment Audit Report

**Date**: April 9, 2026
**Auditor**: Task Agent (Task #4)
**Scope**: Deployment state, code duplication inventory, data package consolidation

---

## 1. Deployment State

### Architecture
- **Type**: Single Autoscale deployment (Replit)
- **Build**: `bash build.sh` — builds all 6 portals in parallel via Vite
- **Run**: `bash start.sh` → `server.mjs` — Express server serving API + all portal static files
- **Post-merge hook**: `scripts/post-merge.sh` — only runs `pnpm install`, does NOT redeploy

### Current State
- **Latest repo commit**: `50f29d0` ("Published your App")
- **Deployment logs**: Production deployment logs show `starting artifact processes for monorepo deployment` followed by `static-only deployment, waiting for signal`. This confirms the last deployment was triggered but the Autoscale deployment is active.
- **Risk**: Post-merge hook only installs dependencies. Any task merge updates code but does NOT trigger a production redeploy, meaning production can become stale after merges.
- **No `.last-build-commit` marker found**: The previous builds did not write commit markers, so we cannot programmatically confirm which commit production is serving. Going forward, `build.sh` now writes `.last-build-commit` at build time to enable tracking.

### Per-Portal Verification (Development Environment)
All 6 portals + API server verified running in the dev environment after data package consolidation:

| Portal | Dev Port | Status | Vite Version | Verification |
|--------|----------|--------|-------------|-------------|
| Founders Brand Hub | 5001 | RUNNING | v7.3.1 | Vite ready, serving at `/founders-brand-hub/` |
| Founders Kitchen | 3002 | RUNNING | v7.3.1 | Vite ready, serving at `/founders-kitchen/` |
| Founders Gaming | 3003 | RUNNING | v7.3.1 | Vite ready, serving at `/founders-gaming/` |
| FVC | 5173 | RUNNING | v7.3.1 | Vite ready, serving at `/fvc/` |
| Sponsorship Hub | 6000 | RUNNING | v7.3.1 | Vite ready, serving at `/sponsorship-hub/` |
| Chapters & Ledgers | 8000 | RUNNING | v7.3.1 | Vite ready, serving at `/chapters-ledgers/` |
| API Server | 3001 | RUNNING | N/A | Express listening, `/api/health` reachable |

All portals started without errors after removing `artifacts/kola-data` and `artifacts/shopping-data`. The `@workspace/kola-data` dependency now resolves unambiguously to `lib/kola-data` (previously two packages had the same name). FVC and Founders Kitchen, the two consumers of kola-data, loaded correctly with the consolidated data.

### Production Portal Inventory
All 6 portals + 1 static page are served from the single Express server in production:

| Portal | Path | Build Output |
|--------|------|-------------|
| Founders Brand Hub | `/founders-brand-hub/` | `artifacts/founders-brand-hub/dist/serve` |
| Founders Kitchen | `/founders-kitchen/` | `artifacts/founders-kitchen/dist/serve` |
| Founders Gaming | `/founders-gaming/` | `artifacts/founders-gaming/dist/serve` |
| FVC | `/fvc/` | `artifacts/fvc/dist/serve` |
| Sponsorship Hub | `/sponsorship-hub/` | `artifacts/sponsorship-hub/dist/serve` |
| Chapters & Ledgers | `/chapters-ledgers/` | `artifacts/chapters-ledgers/dist/serve` |
| Founders Battlefield | `/founders-battlefield/` | `artifacts/founders-battlefield/` (static) |

### Recommendations
1. **Redeploy after this task merges** — the data package consolidation changes require a fresh production build
2. **Always redeploy after merging tasks** — the post-merge script now displays a reminder
3. **Use `scripts/redeploy-check.sh`** to verify build currency via `.last-build-commit` marker
4. **Note**: `build.sh` now writes `.last-build-commit` at build time. Since `build.sh` is the Replit Autoscale build command (configured in `.replit [deployment]`), this marker reflects the last deployment build. However, it could also be written during manual local builds — interpret with context.

---

## 2. Code Duplication Inventory

### 2.1 HubPortalGuard.tsx — CRITICAL (Identical, 6 copies)
**Status**: Identical across all 6 portals (same MD5 hash: `0084b22`)
**Lines**: 142 per file (852 total duplicated lines)
**Files**:
- `artifacts/founders-brand-hub/src/HubPortalGuard.tsx`
- `artifacts/founders-kitchen/src/HubPortalGuard.tsx`
- `artifacts/founders-gaming/src/HubPortalGuard.tsx`
- `artifacts/fvc/src/HubPortalGuard.tsx`
- `artifacts/sponsorship-hub/src/HubPortalGuard.tsx`
- `artifacts/chapters-ledgers/src/HubPortalGuard.tsx`

**Recommendation**: Move to `lib/password-gateway/` or a new `lib/hub-portal-guard/` shared package. All portals import from the shared package.

### 2.2 cn() Utility (`src/lib/utils.ts`) — HIGH (4 copies)
**Status**: Duplicated across 4 portals with minor variations (2 share the same hash)
**Files**:
- `artifacts/chapters-ledgers/src/lib/utils.ts` (hash: `5a6fd53`)
- `artifacts/founders-kitchen/src/lib/utils.ts` (hash: `5a6fd53`)
- `artifacts/founders-brand-hub/src/lib/utils.ts` (hash: `618d00b`)
- `artifacts/sponsorship-hub/src/lib/utils.ts` (hash: `f8f47ec`)

**Recommendation**: Extract `cn()` into a shared `lib/ui-utils/` package that all portals depend on.

### 2.3 EcosystemBar.tsx — MEDIUM (3 copies, inconsistent)
**Status**: Different implementations across 3 portals (all different MD5 hashes)
**Lines**: 57–63 per file
**Files**:
- `artifacts/chapters-ledgers/src/components/EcosystemBar.tsx`
- `artifacts/founders-gaming/src/components/EcosystemBar.tsx`
- `artifacts/founders-kitchen/src/components/EcosystemBar.tsx`

**Recommendation**: Consolidate into a shared component in `lib/` that accepts portal links as configuration. The inconsistent links across portals suggest the component drifted over time.

### 2.4 FBFLogoLockup.tsx — MEDIUM (4 copies, inconsistent)
**Status**: Different implementations across 4 portals (all different MD5 hashes)
**Lines**: 42–61 per file
**Files**:
- `artifacts/founders-brand-hub/src/components/FBFLogoLockup.tsx`
- `artifacts/founders-gaming/src/components/FBFLogoLockup.tsx`
- `artifacts/founders-kitchen/src/components/FBFLogoLockup.tsx`
- `artifacts/sponsorship-hub/src/components/FBFLogoLockup.tsx`

**Recommendation**: Consolidate into a shared component. Variations should be handled via props.

### 2.5 Shadcn UI Components — HIGH (duplicated across 3 portals)
**Status**: Shadcn components independently installed in 3 portals

| Portal | Component Count | Components |
|--------|----------------|------------|
| founders-kitchen | 55 | accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button-group, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input-group, input-otp, input, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toaster, toast, toggle-group, toggle, tooltip |
| sponsorship-hub | 11 | button, card, checkbox, dialog, input, label, select, separator, tabs, textarea, tooltip |
| chapters-ledgers | 10 | badge, button, card, dialog, input, progress, scroll-area, separator, tabs, tooltip |

**Recommendation**: Extract commonly used components (button, card, dialog, input, tabs, separator, tooltip) into a shared `lib/ui/` package. Portal-specific components remain local.

### 2.6 NotFound Pages — LOW (3 copies)
**Files**:
- `artifacts/fvc/src/pages/NotFound.tsx`
- `artifacts/founders-kitchen/src/pages/not-found.tsx`
- `artifacts/chapters-ledgers/src/pages/NotFound.tsx`

**Recommendation**: Low priority — these are simple pages with portal-specific branding.

### 2.7 API Base URL Configuration — MEDIUM
**Status**: Some portals construct API URLs manually instead of using `lib/api-client-react`
**Recommendation**: Audit all fetch calls to ensure they use the centralized API client from `lib/api-client-react`.

---

## 3. Data Package Consolidation (COMPLETED)

### 3.1 kola-data
**Problem**: Two packages with the same name `@workspace/kola-data` existed:
- `lib/kola-data/` — contained generic placeholder AgriTech venture data
- `artifacts/kola-data/` — contained real Kolacopia 3.0 event narrative data (diverged significantly)

Both had the same pnpm package name, creating workspace resolution ambiguity. The consumers (`artifacts/fvc` and `artifacts/founders-kitchen`) were importing the real event data from the artifacts version.

**Action taken**: Replaced `lib/kola-data/index.ts` with the artifacts version (Kolacopia 3.0 narrative data) as the single source of truth. Deleted `artifacts/kola-data/`. The `lib/kola-data` package now contains:
- Real Kolacopia 3.0 event data
- Updated interfaces (`TeamMember`, `GovernanceIssue`, `Lesson`, `TimelineEvent`, `KolaFinancials`)
- Detailed loan agreement, bank history, and governance insights
- Leo's reflection and venture framework

### 3.2 shopping-data
**Problem**: Two identical packages existed:
- `lib/shopping-data/` — source of truth
- `artifacts/shopping-data/` — exact duplicate

Both had identical content (same interfaces, same data).

**Action taken**: Deleted `artifacts/shopping-data/`. The `lib/shopping-data` package remains as the single source of truth. The api-server seed script already imported via relative path to `lib/shopping-data`.

**Workspace impact**: pnpm workspace reduced from 14 to 12 projects. All dependencies resolve correctly.

---

## 4. Post-Merge Automation (COMPLETED)

### Enhanced `scripts/post-merge.sh`
- Now displays a prominent reminder that production redeploy is required after merges
- Directs users to run `scripts/redeploy-check.sh` for status

### New `scripts/redeploy-check.sh`
- Compares the last build commit (tracked via `.last-build-commit` file, written by `build.sh`) with current HEAD
- Reports how many commits the build is behind
- Provides clear instructions for redeployment
- **Note**: This is a build freshness check, not a live deployment query. The `.last-build-commit` marker is written by `build.sh`, which is the Replit Autoscale build command. It may also be written during manual local builds.

---

## 5. Prioritized Recommendations

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| P0 | Redeploy after every task merge | Low | Ensures production matches code |
| P1 | Extract HubPortalGuard to shared lib | Medium | Eliminates 852 lines of duplication |
| P1 | Extract cn() utility to shared lib | Low | Single source for utility function |
| P2 | Consolidate EcosystemBar | Medium | Fixes inconsistent navigation links |
| P2 | Consolidate FBFLogoLockup | Medium | Fixes brand inconsistency |
| P2 | Extract shared Shadcn components | High | Reduces ~76 duplicate component files |
| P3 | Standardize API client usage | Medium | Consistent API communication |
| P3 | Consolidate NotFound pages | Low | Minor cleanup |
