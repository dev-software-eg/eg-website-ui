# Estipona Group Website

React + TypeScript + Vite frontend, backed by a Sanity Studio CMS (embedded in this same repo).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **react-router-dom** for routing
- **@tanstack/react-query** for data fetching/caching
- **Sanity** (`@sanity/client`) as CMS/content backend
- **Oxlint** for linting

## Prerequisites

- Node.js (see `package.json` engines if pinned, otherwise a recent LTS)
- npm

## Setup

```bash
npm install
cp .env.example .env
```

Fill in `.env` (shared across dev/build, both modes load this):

| Var | Purpose |
|---|---|
| `VITE_SANITY_PROJECT_ID` | Sanity project ID (`vsl9pc8r`) |

Dataset is set per Vite mode via `.env.development` / `.env.production` (gitignored, same as `.env` — each dev sets these up locally) — see [Sanity environments](#sanity-environments) below for how that works and the one manual step (a read token) needed for local dev.

Without a resolvable project/dataset, `src/lib/sanity.ts` (the Sanity client used by the frontend) won't return content.

## Frontend — dev / build / preview

```bash
npm run dev      # start Vite dev server
npm run build    # typecheck (tsc -b) + production build
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

## Sanity Studio

The Studio config lives at the repo root (`sanity.config.ts`, `sanity.cli.ts`), separate from the Vite app — it's its own app that runs on its own dev server/port.

- **Schema types**: `src/schemaTypes/`. Each content type is its own file (e.g. `featuredCaseStudyType.ts`), and all types are aggregated in `src/schemaTypes/index.ts` via the `schemaTypes` array. To add a new content type, create a file with `defineType`/`defineField`, then add it to that array.
- **Studio plugins enabled**: `structureTool` (default content editing UI) and `visionTool` (GROQ query playground). Presentation/visual-editing tool (`presentationTool`) is intentionally not wired up — it needs a draft-mode API route on the frontend, which this Vite SPA doesn't have (no server).
- **Workspaces**: `sanity.config.ts` defines two workspaces, `production` and `development` (see below) — one deployed Studio, switcher in the UI to move between them.

```bash
npm run studio:dev     # run Studio locally (Vite dev server for the Studio UI)
npm run studio:build   # build static Studio into dist (Studio build, separate from frontend build)
npm run studio:deploy  # deploy Studio to Sanity's hosted studio URL (https://estipona.sanity.studio)
```

## Sanity environments

Single Sanity project (`vsl9pc8r`), two datasets:

| Dataset | ACL | Used by |
|---|---|---|
| `production` | public | live site (`vite build` / deployed frontend), Studio's `production` workspace |
| `development` | private | local frontend dev server (`npm run dev`), Studio's `development` workspace |

**Studio**: both datasets are wired into `sanity.config.ts` as two workspaces (hardcoded `dataset` per workspace — can't be env-driven since both must exist in the same build for the switcher to work). `sanity.cli.ts` still defaults to `production` for bare CLI commands (`sanity dataset export/import` etc. take the dataset as an explicit arg anyway, so this default rarely matters).

**Frontend**: dataset comes from `VITE_SANITY_DATASET`, set per Vite mode:
- `.env.development` → `development` (used by `npm run dev`)
- `.env.production` → `production` (used by `npm run build`)
- `.env` → holds `VITE_SANITY_PROJECT_ID` only, shared across both modes

**Local dev needs one manual setup step**: `development` is a private dataset, so the frontend's Sanity client needs a read token to query it (anonymous requests to a private dataset return `200` with an empty result — looks like "no content" rather than an auth error). To fix:
1. `manage.sanity.io` → project `vsl9pc8r` → API → Tokens → Add API token → permission **Viewer** (read-only).
2. Copy the token into `.env.development`:
   ```
   VITE_SANITY_DATASET=development
   VITE_SANITY_TOKEN=<token>
   ```
3. Restart `npm run dev` (Vite doesn't hot-reload env file changes).

`src/lib/sanity.ts` picks up `VITE_SANITY_TOKEN` automatically if present (`useCdn` turns off when a token is set, since the CDN endpoint doesn't support token auth). `.env.production` should not have a token — `production` is public and needs none.

**Promoting content from `development` to `production`**: there's no automatic sync. In practice, treat `development` as a schema/layout testing sandbox and make real content edits directly in the `production` workspace. For bulk/one-off promotion options (full dataset overwrite vs. scripted per-document copy), ask in-repo — not documented here since it's a rare, deliberate operation.

## AI chat integration

Chat/search UI (`src/hooks/useChat.ts`, `useSubmitChat.ts`, `useSubmitSearch.ts`, `src/components/chat/`) calls a separate backend — the **`ai-search-api`** project (not in this repo). This app has no server of its own for that; it's a pure client calling out.

**`ai-search-api` must be running (locally or deployed on Vercel) for chat/search to work.** Without it, sending a chat message will fail (fetch to a dead endpoint).

Endpoints currently called, all hardcoded to `http://localhost:3000` in the hooks:

| Hook | Endpoint | Purpose |
|---|---|---|
| `useChat` | `POST /api/chat` | main chat conversation |
| `useSubmitChat` | `POST /api/conversation` | conversation submission |
| `useSubmitSearch` | `POST /api/match` | search/matching |

To run against a local `ai-search-api`, start it on port 3000. To point at a deployed Vercel instance instead, swap the hardcoded `http://localhost:3000` base in each hook for the deployed URL (there's no env var for this yet — URLs are hardcoded per-hook, with a commented-out `marketing-matcher.vercel.app` reference left in `useSubmitChat.ts`/`useSubmitSearch.ts` as an example of a prior deployed URL).

## Project structure

```
src/
  api/           request/response models
  components/    ui/, layout/, chat/ — shared components
  hooks/         data-fetching hooks (react-query wrappers around Sanity/API calls)
  lib/           sanity.ts (client + image URL builder), sanity.types.ts
  schemaTypes/   Sanity schema definitions (Studio-side, not frontend UI)
  screens/       route-level pages (Home, ContactUs, RootLayout, Stylesheet)
  router.tsx     route definitions
  main.tsx       app entry
```

`.sanity/` (Studio's local cache) and `dist/` are build output, gitignored.
