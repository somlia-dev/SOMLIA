# AGENTS.md

Instructions for agents working in this repository.

## Project Overview

This is the SOMLIA landing and waitlist site. SOMLIA is positioned as a proof-of-progress / proof-of-work network that helps people learn, apply skills through projects, build proof profiles, and unlock company briefs or paid opportunities.

The app is a Vite + React + TypeScript single-page site with Tailwind CSS utilities, deployed with Vercel. Waitlist submissions are stored in Supabase, and a Supabase Edge Function forwards insert events to Loops for role-specific email automation.

The project directory is named `LERN`, and there are a few older LERN/LERNI assets still present, but the active product/brand in the app is SOMLIA.

The SOMLIA MVP dashboard has been approved as a separate Angular product surface. The existing React/Vite landing and waitlist site remains the public marketing surface in the repo root for the first dashboard scaffold. Future Angular dashboard work belongs in `apps/dashboard` inside a small npm-workspace monorepo. Do not move the landing app to `apps/landing`, mix Angular into the root React/Vite app, import React landing components, `src/App.tsx`, landing CSS, or landing-only Tailwind patterns into Angular, scaffold dashboard code, or change the landing-site implementation contract unless there is an approved implementation issue and architecture handoff.

The repository is pinned to Node.js `24.18.0` through `.nvmrc` and `.node-version`, with `package.json` accepting Node `>=24.15.0 <25`. Use that Node line for local development, CI, and Vercel unless Engineering approves a later runtime change. The future Angular dashboard target is Angular `22.0.x`; keep Angular dependencies, Angular TypeScript constraints, dashboard routes, dashboard env vars, and dashboard deployment settings isolated to `apps/dashboard` once scaffolded. Keep `supabase/` at repo root as the backend boundary, and add shared packages such as `packages/brand` or `packages/design-tokens` only if they are framework-neutral.

Dashboard implementation is currently GO only for a non-authenticated, no-private-data Angular shell/mock after a dedicated implementation issue is accepted. Do not implement real dashboard auth, Supabase schema, RLS policies, private dashboard tables, storage/uploads, feedback writes, Project Proof records, admin/support read tooling, production secrets/private Preview data, public proof profiles, marketplace, payments, verified labels, numeric scores, native chat/voice, or company dashboard flows without approved implementation issues and the relevant SOM-54/SOM-55/SOM-56-backed access matrices, data model, privacy/security requirements, and workflow decisions. Dashboard account/profile/proof/feedback data must remain separate from `public."Whitelist"`; never convert waitlist rows into accounts silently or expose waitlist records to dashboard users.

For Project Proof specifically, SOM-55 defines a conceptual model only. Do not implement real Project Proof schema, storage, evidence handling, feedback references, proof-card persistence, proof-history aggregation, or dashboard data writes until there is an accepted access matrix, RLS test plan, state machine/transition authority, generated type strategy, storage/evidence safety plan, privacy/legal lifecycle, and dedicated implementation issue. Do not model Project Proof as one giant mutable record; future schema work must separate source context, assignment/enrollment, Project Proof root, immutable submitted versions/revisions, deliverables, provenance labels, evidence placeholders, feedback references, proof-card read model, proof-history aggregation, and audit/moderation records.

For Feedback / Review specifically, SOM-56 defines a planning workflow only. Do not implement feedback writes, formal reviews, review assignments, review-derived Project Proof state changes, peer feedback, company reviewer pilots, `Reviewed` or `Company-confirmed` transitions, review notifications, moderation tooling, or review data exposure until there is an accepted Feedback / Review RLS/access matrix, server-side transition plan, rubric/versioning policy, audit log and retention plan, moderation/reporting model, reviewer conduct/conflict policy, peer eligibility and anti-collusion controls, privacy/legal lifecycle, and dedicated implementation issue. Feedback must be assigned/request-based and structured around a specific submitted Project Proof version; do not add open commenting, identity-wide reviews, numeric scores, standalone `Verified` labels, public review pages, marketplace/payment behavior, AI review authority, native chat/voice, or company dashboard review flows without later Product/Security/Legal approval.

## Commands

- `nvm use` - switch to the repo-pinned Node.js version when using nvm.
- `npm run dev` - start the Vite dev server.
- `npm run build` - TypeScript project build plus Vite production build.
- `npm run preview` - preview the production build locally.
- `npm test` - run the Vitest suite once.
- `npm run test:watch` - run Vitest in watch mode.

For frontend changes, run `npm test` and `npm run build` at minimum. For visual or interaction changes, also open the app in a browser and check the affected viewport(s).

## Important Files

- `src/App.tsx` - main site content, route selection, sections, waitlist form, roadmap page, and privacy policy page.
- `src/main.tsx` - React entry point and deferred Vercel Analytics loading.
- `src/lib/waitlist.ts` - client-side Supabase waitlist insert helper.
- `src/styles.css` - Tailwind directives, global styles, shared `.field` class, and animations.
- `supabase/waitlist.sql` - `public."Whitelist"` schema, constraints, grants, and RLS insert policy.
- `supabase/functions/loops-waitlist/index.ts` - Deno Edge Function that receives Supabase DB webhooks and sends Loops events.
- `supabase/loops-waitlist.md` - setup/deploy instructions for Loops and the Supabase database webhook.
- `vercel.json` - rewrites for `/roadmap` and `/privacy-policy` so direct visits load `index.html`.
- `.env.example` and `supabase/.env.example` - documented env var names only. Do not put real secrets in tracked files.

## Cross-Chat Reporting And Docs Ownership

- Preserve `PROJECT_BIBLE.md` as the durable product source of truth.
- Preserve `ROADMAP.md` as the repo execution roadmap.
- Preserve `AGENTS.md` as the working-agent instruction file.
- Respect owner-chat boundaries before taking action. Operations/Admin owns routing, Linear hygiene, blocker/status tracking, docs coordination, release/deployment coordination, and access/process setup. Product owns product decisions, scope, acceptance criteria, and implementation handoff. Frontend owns UI/frontend implementation. Backend owns Supabase, auth, database, API, storage, and backend deployment planning/implementation. Security/Privacy owns security, privacy, trust, safety, and abuse review. Marketing owns campaigns, content, community, and validation assets.
- When an implementation-ready issue has a dedicated owner chat, routing or docs chats must not start code, scaffolding, schema, copy execution, campaign execution, or configuration work unless the user explicitly assigns that work to the current chat, the owner chat is unavailable, or the task is a narrow docs/update task in the current chat's lane. Record any exception in Linear.
- Treat user approval as approval of the current routed scope, not as a transfer of ownership between chats, unless the user explicitly says the current chat should perform the work.
- If a chat starts work outside its owner lane, pause as soon as it is noticed, preserve any useful local state, report what happened, hand off to the proper owner chat, and record the correction or blocker in Linear.
- When Operations/Admin dispatches a docs update or docs-review task and asks for a report-back, report completion, blockers, or scope questions back to the Operations/Admin thread using Codex thread messaging.
- When another SOMLIA chat reports a decision, completed work, blocker, or workflow change that may require updating `PROJECT_BIBLE.md`, `ROADMAP.md`, or `AGENTS.md`, coordinate with Operations/Admin and the relevant source chat using Codex thread messaging.
- If Codex thread messaging tools are not visible, explicitly say thread messaging is unavailable and provide a ready-to-send report for Operations/Admin.
- Keep Linear as the operational source of truth for actionable work, handoffs, blockers, and implementation status.
- Move issues through Linear from the owner chat whenever possible: `In Progress` when that owner starts, `In Review` when implementation or review output is ready for verification, and `Done` only after the required acceptance, merge, or docs follow-up is complete. Operations/Admin may update Linear for coordination, verification, merge follow-up, and docs maintenance, but should not imply owner-lane implementation was completed by Operations/Admin unless it actually was.
- Do not make product strategy decisions by editing docs. If a requested docs update requires product judgment, send it back to Operations/Admin and Product for clarification or approval.
- When important decisions are made elsewhere, suggest or apply the correct Decision Log, roadmap, or agent-instruction update only after the decision is approved.

## App Structure And Routing

Routing is intentionally simple and handled in `src/App.tsx` by reading `window.location.pathname`.

Known routes:

- `/` - landing page.
- `/roadmap` - roadmap page.
- `/privacy-policy` - privacy policy page.

If you add a new route, update both the path handling in `src/App.tsx` and `vercel.json` rewrites so direct Vercel visits work.

## Brand And UI Notes

Keep the visual direction restrained, professional, and concrete. The current site uses a light editorial/product style with hard-edged panels, Tailwind utilities, and a limited SOMLIA palette:

- Ink: `#111827`
- Blue: `#2563EB`
- Green: `#16A34A`
- Gold: `#F5B841`
- Cloud: `#F8FAFC`
- Slate: `#64748B`

Use existing components and patterns in `src/App.tsx` before adding new abstractions. Most UI is built from section functions, local data arrays, Tailwind classes, and `lucide-react` icons. Keep assets real and brand-relevant; active SOMLIA assets live in `src/assets/*.webp`.

The site already includes global reduced-motion handling. If adding animations, make sure they degrade under `prefers-reduced-motion`.

## Waitlist Contract

The waitlist depends on several files staying in sync:

- `WaitlistRole` in `src/lib/waitlist.ts`
- the role select options in `WaitlistSection` inside `src/App.tsx`
- the role check constraint in `supabase/waitlist.sql`
- `ROLE_KEYS` in `supabase/functions/loops-waitlist/index.ts`
- Loops workflow branches described in `supabase/loops-waitlist.md`
- privacy copy if the data collected or processors change

Current roles are:

- `Learner`
- `Company`
- `Investor / Partner`

The Supabase table name is intentionally `public."Whitelist"` and the client default is `VITE_SUPABASE_WAITLIST_TABLE=Whitelist`. If changing the table name, update the client env/default, SQL, Edge Function table guard, webhook setup docs, and Supabase configuration.

## Supabase And Loops

Client-side code may use only public Vite env vars:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_WAITLIST_TABLE`

Never expose Loops or webhook secrets through `VITE_` env vars. Server-only values belong in Supabase Edge Function secrets:

- `LOOPS_API_KEY`
- `WAITLIST_WEBHOOK_SECRET`
- `LOOPS_WAITLIST_EVENT_NAME`

The Loops Edge Function is deployed with `--no-verify-jwt` because it authenticates the database webhook using the `x-waitlist-webhook-secret` header. Preserve that header check if editing the function.

## Privacy And Compliance Notes

The privacy policy is embedded in `src/App.tsx`. It currently names Supabase, Loops, and Vercel Analytics as service providers and lists an effective date of June 4, 2026.

If the site starts collecting new categories of data, uses new processors, changes analytics behavior, or adds account/payment/community/hiring features, update the privacy policy and notice-at-collection content in the same change.

## Generated And Local Files

Do not edit `node_modules/` or `dist/` for source changes. `dist/` is generated by `npm run build` and is ignored by git.

Do not commit real local secrets. `.env.local`, `supabase/.env`, and `*.local` env files are ignored for a reason.

The repo contains some `.DS_Store` files and older image artifacts. Avoid creating more metadata churn unless explicitly cleaning them up.

## Verification Checklist

Before handing off changes:

1. Run `npm run build` unless the change is documentation-only.
2. For UI changes, verify the changed pages in browser at desktop and mobile widths.
3. For waitlist changes, confirm the submit path still inserts the expected shape into `public."Whitelist"`.
4. For Edge Function changes, confirm method checks, secret-header auth, role mapping, Loops payload, and idempotency key behavior still make sense.
5. For route changes, confirm direct navigation works through Vercel rewrites.
