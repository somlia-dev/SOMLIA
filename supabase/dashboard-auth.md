# Dashboard auth server setup

This document covers the **server-side** Supabase auth boundary for the SOMLIA dashboard. It is separate from the landing waitlist flow and from any future Angular browser auth wiring.

## What lives where

| Layer | Package / surface | Purpose |
| --- | --- | --- |
| Browser dashboard | `@supabase/supabase-js` | Future client auth/session in Angular |
| Server / Edge Functions | `@supabase/server` | JWT verification and privileged server work |
| Landing waitlist | existing `loops-waitlist` function | Unchanged; not a dashboard lifecycle function |

Do **not** install `@supabase/server` in `apps/dashboard`. That package is server-only.

## Edge Function: `dashboard-session`

Path: `supabase/functions/dashboard-session/index.ts`

Purpose:
- verify a caller's Supabase user JWT with `@supabase/server`
- return minimal identity metadata only
- establish the future backend boundary before private dashboard tables exist

Platform config:
- `supabase/config.toml` sets `verify_jwt = true` for `dashboard-session`
- `loops-waitlist` remains `verify_jwt = false` because it uses a custom webhook secret header

## Environment variables

### Supabase Edge Functions

On deployed Supabase Edge Functions these are injected automatically:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY` or `SUPABASE_PUBLISHABLE_KEYS`
- `SUPABASE_SECRET_KEY` or `SUPABASE_SECRET_KEYS`
- `SUPABASE_JWKS` or `SUPABASE_JWKS_URL`

For local/other runtimes, copy documented names from `supabase/.env.example` into an untracked local env file. Never commit real secret keys.

Example JWKS URL shape:

```txt
https://<project-ref>.supabase.co/auth/v1/.well-known/jwks.json
```

### Dashboard browser env

Public-only values for Angular belong in dashboard deployment settings or local untracked env, documented in `apps/dashboard/.env.example`:

- `DASHBOARD_SUPABASE_URL`
- `DASHBOARD_SUPABASE_PUBLISHABLE_KEY`

Never put `SUPABASE_SECRET_KEY`, service-role keys, or webhook secrets into Angular or `VITE_` variables.

## Deploy

From repo root, after Supabase CLI is configured for the project:

```bash
supabase functions deploy dashboard-session
```

Test with a valid user access token:

```bash
curl -i "https://<project-ref>.supabase.co/functions/v1/dashboard-session" \
  -H "Authorization: Bearer <user-access-token>" \
  -H "apikey: <publishable-key>"
```

Expected result while dashboard data is still blocked:
- `200` with `authenticated: true`
- minimal `user.id`, `user.email`, `user.role`
- no private dashboard records

## Still blocked before real dashboard auth launch

- private dashboard tables and RLS
- invite-only account provisioning
- Angular live login/session refresh
- redirect allowlist rollout for `app.somlia.com`
- privacy policy / notice updates for account data
