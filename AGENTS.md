# AGENTS.md

Instructions for agents working in this repository.

## Project Overview

This is the SOMLIA landing and waitlist site. SOMLIA is positioned as a proof-of-progress / proof-of-work network that helps people learn, apply skills through projects, build proof profiles, and unlock company briefs or paid opportunities.

The app is a Vite + React + TypeScript single-page site with Tailwind CSS utilities, deployed with Vercel. Waitlist submissions are stored in Supabase, and a Supabase Edge Function forwards insert events to Loops for role-specific email automation.

The project directory is named `LERN`, and there are a few older LERN/LERNI assets still present, but the active product/brand in the app is SOMLIA.

The SOMLIA MVP dashboard is a separate Angular product surface under `apps/dashboard` inside the npm-workspace monorepo. The existing React/Vite landing and waitlist site remains the public marketing surface in the repo root. Do not move the landing app to `apps/landing`, mix Angular into the root React/Vite app, import React landing components, `src/App.tsx`, landing CSS, or landing-only Tailwind patterns into Angular, or change the landing-site implementation contract unless there is an approved implementation issue and architecture handoff.

The repository is pinned to Node.js `24.18.0` through `.nvmrc` and `.node-version`, with `package.json` accepting Node `>=24.15.0 <25`. Use that Node line for local development, CI, and Vercel unless Engineering approves a later runtime change. The dashboard uses Angular `22.0.x`; keep Angular dependencies, Angular TypeScript constraints, dashboard routes, dashboard env vars, and dashboard deployment settings isolated to `apps/dashboard`. Keep `supabase/` at repo root as the backend boundary, and add shared packages such as `packages/brand` or `packages/design-tokens` only if they are framework-neutral.

The dashboard shell, SOMLIA brand alignment, `core`/`features`/`shared` structure, public environment generation, Supabase Auth Google OAuth flow, auth callback, session guard, and invite-only access-gate code are implemented. Google OAuth was verified on `app.somlia.com`. The invite gate is based on `public.dashboard_invites`, which is separate from `public."Whitelist"`; merged code is not proof that its SQL, Edge Function, Vercel flag, and production cohort configuration are active, so verify those surfaces before claiming the gate is live. A successful Google sign-in may create a Supabase `auth.users` record before the invite gate denies dashboard entry.

Do not expand auth providers, roles, session policy, account lifecycle, or invite provisioning without an approved issue and Backend/Security review. Do not implement private dashboard tables, Project Proof persistence, storage/uploads, feedback writes, admin/support read tooling, production secrets in browser config, public proof profiles, marketplace, payments, verified labels, numeric scores, native chat/voice, or company dashboard flows without approved implementation issues and the relevant SOM-54/SOM-55/SOM-56-backed access matrices, data model, privacy/security requirements, and workflow decisions. Dashboard account/profile/proof/feedback data must remain separate from `public."Whitelist"`; never convert waitlist rows into accounts silently or expose waitlist records to dashboard users.

For Project Proof specifically, SOM-55 defines a conceptual model only. Do not implement real Project Proof schema, storage, evidence handling, feedback references, proof-card persistence, proof-history aggregation, or dashboard data writes until there is an accepted access matrix, RLS test plan, state machine/transition authority, generated type strategy, storage/evidence safety plan, privacy/legal lifecycle, and dedicated implementation issue. Do not model Project Proof as one giant mutable record; future schema work must separate source context, assignment/enrollment, Project Proof root, immutable submitted versions/revisions, deliverables, provenance labels, evidence placeholders, feedback references, proof-card read model, proof-history aggregation, and audit/moderation records.

For Feedback / Review specifically, SOM-56 defines a planning workflow only. Do not implement feedback writes, formal reviews, review assignments, review-derived Project Proof state changes, peer feedback, company reviewer pilots, `Reviewed` or `Company-confirmed` transitions, review notifications, moderation tooling, or review data exposure until there is an accepted Feedback / Review RLS/access matrix, server-side transition plan, rubric/versioning policy, audit log and retention plan, moderation/reporting model, reviewer conduct/conflict policy, peer eligibility and anti-collusion controls, privacy/legal lifecycle, and dedicated implementation issue. Feedback must be assigned/request-based and structured around a specific submitted Project Proof version; do not add open commenting, identity-wide reviews, numeric scores, standalone `Verified` labels, public review pages, marketplace/payment behavior, AI review authority, native chat/voice, or company dashboard review flows without later Product/Security/Legal approval.

## Commands

- `nvm use` - switch to the repo-pinned Node.js version when using nvm.
- `npm run dev` - start the Vite dev server.
- `npm run build` - TypeScript project build plus Vite production build.
- `npm run preview` - preview the production build locally.
- `npm test` - run the Vitest suite once.
- `npm run test:watch` - run Vitest in watch mode.
- `npm run dev:dashboard` - generate public dashboard env config and start Angular locally.
- `npm run test:dashboard` - run the Angular dashboard tests once.
- `npm run build:dashboard` - generate public dashboard env config and build Angular.
- `npm run test:all` / `npm run build:all` - verify both product surfaces.

For frontend changes, run `npm test` and `npm run build` at minimum. For visual or interaction changes, also open the app in a browser and check the affected viewport(s).

## Important Files

- `src/App.tsx` - main site content, route selection, sections, waitlist form, roadmap page, and privacy policy page.
- `src/main.tsx` - React entry point and deferred Vercel Analytics loading.
- `src/lib/waitlist.ts` - client-side Supabase waitlist insert helper.
- `src/styles.css` - Tailwind directives, global styles, shared `.field` class, and animations.
- `apps/dashboard/src/app` - Angular dashboard organized under `core`, `features`, and `shared`.
- `apps/dashboard/scripts/generate-env.mjs` - generates public Angular environment config from documented `DASHBOARD_*` values.
- `apps/dashboard/docs/auth-architecture.md` - dashboard auth/backend boundary and remaining constraints.
- `supabase/dashboard-auth.md` - Google OAuth, session, invite-gate, and deployment setup.
- `supabase/dashboard_invites.sql` - manual invite-only dashboard access list, separate from the waitlist.
- `supabase/functions/dashboard-session/index.ts` - authenticated minimal session-check boundary.
- `supabase/functions/dashboard-access-gate/index.ts` - authenticated invite-list access check.
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
- Before routing or documenting recent work, refresh `origin/main`, inspect the relevant PR/commits, and read the current Linear issue and owner-chat report. Treat merged `main` as implementation truth, Linear as workflow truth, and approved Product/Operations decisions as scope truth. An open branch, unmerged PR, mock, or proposal is not shipped behavior.
- Changes made by the founder, CTO, another developer, or their coding agent are valid concurrent work. Preserve them, never silently revert or absorb them, and route any overlap through the named Linear owner. Founder/CTO authorship does not bypass the normal issue, branch, PR, review, verification, deployment, and docs-closeout workflow.
- Move issues through Linear from the owner chat whenever possible: `In Progress` when that owner starts, `In Review` when implementation or review output is ready for verification, and `Done` only after the required acceptance, merge, or docs follow-up is complete. Operations/Admin may update Linear for coordination, verification, merge follow-up, and docs maintenance, but should not imply owner-lane implementation was completed by Operations/Admin unless it actually was.
- A merged PR is not by itself evidence that external configuration or production behavior is complete. Record merge status separately from Vercel/Supabase/DNS/processor activation and production verification; leave explicit follow-up blockers when those checks are missing.
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

Keep the visual direction restrained, professional, and concrete. Both product surfaces use the limited SOMLIA palette:

- Ink: `#111827`
- Blue: `#2563EB`
- Green: `#16A34A`
- Gold: `#F5B841`
- Cloud: `#F8FAFC`
- Slate: `#64748B`

The React/Vite landing site keeps its established light editorial composition, hard-edged panels, Tailwind utilities, section functions, local data arrays, and `lucide-react` icons unless a scoped issue approves a redesign. Use existing patterns in `src/App.tsx` before adding abstractions. Keep assets real and brand-relevant; active landing assets live in `src/assets/*.webp`.

The Angular dashboard keeps the merged SOM-68 product treatment: consistent 6-8px panel/card radii, restrained Blue/Green/Gold gradients on Cloud/white/Ink foundations, subtle shadows, visible focus states, and dense scan-friendly hierarchy. Preserve the real SOMLIA logo and the existing Angular `core` / `features` / `shared` component boundaries. Do not revert the dashboard to uniformly sharp geometry, add decorative gradient blobs, heavy glassmorphism, or turn workflow pages into marketing sections without an approved visual issue.

Both surfaces include reduced-motion handling. Keep dashboard motion short and purposeful, prefer CSS transform and opacity, avoid continuous loops and expensive animated properties, and disable nonessential motion under `prefers-reduced-motion`.

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
