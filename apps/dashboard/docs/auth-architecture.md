# Dashboard auth architecture (SOM-63)

## Recommended MVP boundary

- **Supabase Auth** owns identity, session tokens, email OTP / magic link, and redirect handling.
- **Custom backend** owns privileged dashboard operations, audit logging, verification orchestration, and integrations that must not run in the browser.
- **Angular dashboard** reads public config from `environment` files and never stores server-only secrets.

## Why a parallel backend makes sense for SOMLIA

A dual-layer approach is justified because future dashboard flows include:

- invite-only account provisioning
- Project Proof submission and revision boundaries
- assigned feedback/review workflows
- moderation and support tooling
- Google Cloud verification hooks

Supabase alone is sufficient for basic login, but not for the full server-side workflow surface SOMLIA is planning.

## Server-side scaffold added

- `supabase/functions/dashboard-session/index.ts` — Edge Function using `@supabase/server` with `auth: 'user'`
- `supabase/config.toml` — `verify_jwt = true` for `dashboard-session`
- `supabase/dashboard-auth.md` — deploy and env setup notes
- `supabase/.env.example` — documented `SUPABASE_*` server variable names

`@supabase/server` belongs on the server/Edge Function boundary only. Do not install it in `apps/dashboard`.

## Browser-side scaffold added

- `@supabase/supabase-js` in the dashboard workspace for future client auth
- `core/auth/services/supabase-browser-client.service.ts` — creates a browser client only when public env values are configured

## What is intentionally not implemented yet

- Live Angular login/session flow
- Private dashboard tables or RLS policies
- Google Sign-In or verification flows
- Backend token exchange or session mediation
- Production secret setup

## Auth-ready scaffold in this repo

- `core/auth/services/auth.service.ts` — stub service
- `core/auth/guards/auth.guard.ts` — disabled while `auth.enabled` is false
- `features/auth/pages/login-page` — static auth placeholder route at `/auth/login`

Enable real auth only after access matrix, redirect allowlist, staging Supabase isolation, and privacy requirements are accepted.
