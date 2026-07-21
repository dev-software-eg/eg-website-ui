# Estipona Group Website

Next.js (App Router) frontend, backed by a Sanity Studio CMS (embedded in this same repo). Hosted on Vercel.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Sanity** (`@sanity/client`) as CMS/content backend — fetched server-side in React Server Components
- **Oxlint** for linting

## Prerequisites

- Node.js (see `package.json` engines if pinned, otherwise a recent LTS)
- npm

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

| Var | Purpose |
|---|---|
| `SANITY_PROJECT_ID` | Sanity project ID (`vsl9pc8r`) |
| `SANITY_DATASET` | `development` locally, `production` in prod (see [Sanity environments](#sanity-environments)) |
| `SANITY_TOKEN` | Read token, only needed against the private `development` dataset |
| `AI_SEARCH_API_URL` | Base URL of the separate `ai-search-api` backend (see [AI chat integration](#ai-chat-integration)) — **don't use `:3000`**, Next's own dev server claims that port |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` | EmailJS credentials for the chat contact form |

These are all read server-side via `process.env` (Sanity vars, `AI_SEARCH_API_URL`) except the `NEXT_PUBLIC_*` EmailJS vars, which ship to the browser since EmailJS sends directly from the client.

Without a resolvable project/dataset, `src/lib/sanity.ts` (used by the Server Component that fetches the featured case study) won't return content.

## Frontend — dev / build / start

```bash
npm run dev      # start Next dev server (:3000)
npm run build    # typecheck + production build
npm run start    # run the production build locally
npm run lint     # oxlint
```

## Sanity Studio

The Studio config lives at the repo root (`sanity.config.ts`, `sanity.cli.ts`), completely separate from the Next app — it's its own app that runs on its own dev server/port via Sanity's own tooling (not part of the Next build).

- **Schema types**: `src/schemaTypes/`. Each content type is its own file (e.g. `featuredCaseStudyType.ts`), and all types are aggregated in `src/schemaTypes/index.ts` via the `schemaTypes` array. To add a new content type, create a file with `defineType`/`defineField`, then add it to that array.
- **Studio plugins enabled**: `structureTool` (default content editing UI) and `visionTool` (GROQ query playground). Presentation/visual-editing tool (`presentationTool`) still isn't wired up — it needs a draft-mode API route, which the app now has the infrastructure for (Route Handlers) if this becomes worth adding.
- **Workspaces**: `sanity.config.ts` defines two workspaces, `production` and `development` (see below) — one deployed Studio, switcher in the UI to move between them.

```bash
npm run studio:dev     # run Studio locally
npm run studio:build   # build static Studio into dist (Studio build, separate from frontend build)
npm run studio:deploy  # deploy Studio to Sanity's hosted studio URL (https://estipona.sanity.studio)
```

## Sanity environments

Single Sanity project (`vsl9pc8r`), two datasets:

| Dataset | ACL | Used by |
|---|---|---|
| `production` | public | live site (deployed frontend on Vercel), Studio's `production` workspace |
| `development` | private | local frontend dev server (`npm run dev`), Studio's `development` workspace |

**Studio**: both datasets are wired into `sanity.config.ts` as two workspaces (hardcoded `dataset` per workspace — can't be env-driven since both must exist in the same build for the switcher to work). `sanity.cli.ts` still defaults to `production` for bare CLI commands (`sanity dataset export/import` etc. take the dataset as an explicit arg anyway, so this default rarely matters).

**Frontend**: dataset comes from `SANITY_DATASET`. Locally, set it in `.env.local`. On Vercel, set it per environment (Development/Preview/Production) in Project Settings — `development` for Preview deployments, `production` for Production.

**Local dev needs one manual setup step**: `development` is a private dataset, so the Sanity client needs a read token to query it (anonymous requests to a private dataset return `200` with an empty result — looks like "no content" rather than an auth error). To fix:
1. `manage.sanity.io` → project `vsl9pc8r` → API → Tokens → Add API token → permission **Viewer** (read-only).
2. Add to `.env.local`:
   ```
   SANITY_DATASET=development
   SANITY_TOKEN=<token>
   ```
3. Restart `npm run dev` (Next doesn't hot-reload env file changes).

This token is only ever read server-side (`src/lib/sanity.ts`, used inside a Server Component) — it's never bundled into client-shipped JS. `useCdn` turns off automatically when a token is set, since the CDN endpoint doesn't support token auth. Production should not have a token set — `production` is public and needs none.

**Promoting content from `development` to `production`**: there's no automatic sync. In practice, treat `development` as a schema/layout testing sandbox and make real content edits directly in the `production` workspace. For bulk/one-off promotion options (full dataset overwrite vs. scripted per-document copy), ask in-repo — not documented here since it's a rare, deliberate operation.

## AI chat integration

Chat/search UI (`src/hooks/useChat.ts`, `useSubmitSearch.ts`, `src/components/chat/`) talks to same-origin Next.js Route Handlers (`app/api/chat`, `app/api/conversation`, `app/api/match`), which proxy server-to-server to a separate backend — the **`ai-search-api`** project (not in this repo).

**`ai-search-api` must be running (locally or deployed) for chat/search to work.** Without it, the route handlers return a `502` with a graceful error the UI already handles ("Failed to get a response").

| Route handler | Proxies to | Purpose |
|---|---|---|
| `app/api/chat` | `AI_SEARCH_API_URL/api/chat` | main chat conversation |
| `app/api/conversation` | `AI_SEARCH_API_URL/api/conversation` | conversation submission |
| `app/api/match` | `AI_SEARCH_API_URL/api/match` | search/matching |

Set `AI_SEARCH_API_URL` (server-only, never sent to the browser) to wherever that backend runs — a different port than `3000` locally, since Next's dev server claims that one. Point it at a deployed instance the same way, per Vercel environment.

If `AI_SEARCH_API_URL` points at a Vercel deployment with **Deployment Protection** enabled (any non-production preview branch, by default), server-to-server requests get a `401` before they even reach the app. Generate a **Protection Bypass for Automation** secret in that project's Settings → Deployment Protection, and set it here as `AI_SEARCH_API_BYPASS_SECRET` — the route handlers send it as an `x-vercel-protection-bypass` header automatically when present.

## Project structure

```
app/
  layout.tsx       root layout (nav, global metadata)
  page.tsx          home (/)
  stylesheet/        /stylesheet
  contact/           /contact
  api/
    chat/             proxies to ai-search-api
    conversation/
    match/
  globals.css        global styles, brand CSS variables
src/
  api/             request/response models
  components/      ui/, layout/, chat/ — shared components
  hooks/           client-side hooks (chat/search state, fetch to same-origin /api/*)
  lib/             sanity.ts (client + image URL builder), sanity.types.ts
  schemaTypes/     Sanity schema definitions (Studio-side, not frontend UI)
```

`.sanity/` (Studio's local cache) and `.next/` (Next build output) are gitignored.
