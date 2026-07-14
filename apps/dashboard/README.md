# SOMLIA Dashboard

Angular `22.0.x` learner/contributor dashboard served separately from the React/Vite landing site. The dashboard is rooted at `apps/dashboard`, uses the repository's shared npm lockfile, and is deployed from the dashboard Vercel project to `app.somlia.com`.

## Current Surface

- SOMLIA-branded shell and responsive navigation.
- Routes for Tasks / Projects, Learning, Feedback / Review, Profile / Proof, and Settings.
- Supabase Auth Google OAuth at `/auth/login`.
- Explicit PKCE callback exchange at `/auth/callback`.
- Session restore, auth guards, and sign-out.
- Optional invite-only dashboard entry check with `/auth/not-invited` for denied users.
- Mock/no-private-product-data feature pages.

Google OAuth was verified in production under SOM-64. The SOM-65 invite-gate code is merged, but production SQL, Edge Function, feature flag, approved cohort, and invited/non-invited behavior must be verified separately before the gate is described as live.

## Local Setup

From the repository root, use Node.js `24.18.0`:

```bash
nvm use
npm ci
cp apps/dashboard/.env.example apps/dashboard/.env.local
npm run dev:dashboard
```

The dashboard starts at `http://localhost:4200/`. `prestart` and `prebuild` generate `src/environments/environment.generated.ts` from public `DASHBOARD_*` values. Never put service-role keys, secret keys, webhook secrets, or other private values in dashboard browser configuration.

## Commands

Run from the repository root:

```bash
npm run dev:dashboard
npm run test:dashboard
npm run build:dashboard
npm run test:all
npm run build:all
```

## Structure

- `src/app/core` - singleton configuration, auth services/guards, navigation, and dashboard shell.
- `src/app/features` - auth, tasks, learning, feedback, proof, and settings route areas.
- `src/app/shared` - framework-local shared UI and types.
- `src/environments` - public Angular environment configuration.
- `scripts/generate-env.mjs` - public environment generator.
- `docs/auth-architecture.md` - identity and trusted backend boundary.
- `../../supabase/dashboard-auth.md` - OAuth, redirects, session, invite gate, and deployment setup.

## Boundaries

The dashboard does not yet implement private profile/Project Proof data, feedback writes, uploads, marketplace/payment behavior, public proof pages, company dashboards, native chat/voice, or numeric/verified reputation. Those surfaces require dedicated issues and the approved RLS, privacy, security, state-transition, and Legal gates recorded in `PROJECT_BIBLE.md`, `ROADMAP.md`, and `AGENTS.md`.
