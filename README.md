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

Fill in `.env`:

| Var | Purpose |
|---|---|
| `VITE_SANITY_PROJECT_ID` | Sanity project ID (see `sanity.config.ts` / `sanity.cli.ts` for the value) |
| `VITE_SANITY_DATASET` | Sanity dataset, e.g. `production` |

Without these set, `src/lib/sanity.ts` (the Sanity client used by the frontend) won't resolve content.

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

```bash
npm run studio:dev     # run Studio locally (Vite dev server for the Studio UI)
npm run studio:build   # build static Studio into dist (Studio build, separate from frontend build)
npm run studio:deploy  # deploy Studio to Sanity's hosted studio URL
```

`projectId`/`dataset` for the Studio are hardcoded in `sanity.config.ts` and `sanity.cli.ts` (must match `.env`'s `VITE_SANITY_PROJECT_ID`/`VITE_SANITY_DATASET`).

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
