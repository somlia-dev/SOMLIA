# Loops Waitlist Email Setup

Use this when a new row is inserted into `public."Whitelist"` and the person should receive a role-specific Loops email.

## 1. Configure Loops

1. In Loops, generate an API key from **Settings -> API**.
2. Add a custom contact property named `waitlistRole` with type `string`.
3. Use the shared waitlist event name `waitlistJoined`.
4. Production currently uses three separate role-specific workflows:
   - `SOMLIA Waitlist - Learner`
   - `SOMLIA Waitlist - Company`
   - `SOMLIA Waitlist - Investor`
5. Filter each workflow by `waitlistRole`:
   - `learner` -> learner welcome email
   - `company` -> company welcome email
   - `investor` -> investor / partner welcome email
6. Use Loops variables like `{firstName}` in the email greeting.

An equivalent single `waitlistJoined` workflow with branches or filters by `waitlistRole` is also valid if the Loops setup is intentionally changed later. If that happens, update this document and the Linear verification notes so Operations knows which structure is live.

## 2. Deploy the Supabase Edge Function

Set the secrets first:

```sh
supabase secrets set \
  LOOPS_API_KEY=your-loops-api-key \
  WAITLIST_WEBHOOK_SECRET=use-a-long-random-secret \
  LOOPS_WAITLIST_EVENT_NAME=waitlistJoined
```

Deploy the function:

```sh
supabase functions deploy loops-waitlist --no-verify-jwt
```

The function URL will be:

```text
https://qufrbaxgiknacfsjfqoy.supabase.co/functions/v1/loops-waitlist
```

## 3. Create the Supabase Database Webhook

In Supabase, go to **Integrations -> Database Webhooks -> Webhooks -> Create webhook**.

Use:

- Table: `public.Whitelist`
- Events: `INSERT`
- Type: HTTP Request
- Method: `POST`
- URL: `https://qufrbaxgiknacfsjfqoy.supabase.co/functions/v1/loops-waitlist`
- Headers:
  - `Content-Type`: `application/json`
  - `x-waitlist-webhook-secret`: the same value as `WAITLIST_WEBHOOK_SECRET`

Do not put `LOOPS_API_KEY` in a `VITE_` environment variable. It must stay server-side.

## 4. Test

Submit the waitlist form from the site. Then check:

1. Supabase `Whitelist` has the new row.
2. Supabase Edge Function logs show a successful request, when logs are available.
3. Loops Audience has the contact with `waitlistRole`.
4. Loops Events shows `waitlistJoined`.
5. The matching role-specific workflow email is sent by one of:
   - `SOMLIA Waitlist - Learner`
   - `SOMLIA Waitlist - Company`
   - `SOMLIA Waitlist - Investor`

## 5. Basic Production Monitoring

During the validation sprint, Operations should check the waitlist path once per active posting day. After the sprint, check weekly unless there is a launch, campaign, outage, or user-reported issue.

Use aggregate counts in Linear updates. Do not copy names, emails, messages, webhook secrets, or Loops API details into Linear.

### Supabase insert check

In Supabase SQL Editor, run:

```sql
select
  role,
  count(*)::int as signup_count,
  max(created_at) as latest_signup_at
from public."Whitelist"
group by role
order by role;
```

For a recent activity view, run:

```sql
select
  date_trunc('day', created_at)::date as signup_day,
  role,
  count(*)::int as signup_count
from public."Whitelist"
where created_at >= now() - interval '14 days'
group by signup_day, role
order by signup_day desc, role;
```

Expected result:

- New public waitlist submissions create rows in `public."Whitelist"`.
- Roles stay inside `Learner`, `Company`, and `Investor / Partner`.
- Counts by role roughly match waitlist, campaign, and Loops observations.

Escalate to Backend/Security if:

- A user reports a successful form submission but no Supabase row appears.
- Any role outside the allowed role list appears.
- Insert failures or duplicate errors spike unexpectedly.
- Public reads, updates, or deletes are accidentally enabled for `public."Whitelist"`.

### Edge Function and webhook check

In Supabase Dashboard, check **Edge Functions -> loops-waitlist**:

1. Open **Invocations** and filter for recent requests and non-2xx status codes.
2. Open **Logs** and look for uncaught exceptions, `Loops request failed`, `Missing Loops or webhook secret configuration`, `Unauthorized`, or repeated 5xx responses.
3. If the Supabase log view is empty, delayed, or unavailable, use end-to-end evidence instead: Supabase row exists, Loops workflow send increased, and the user received the expected email.

Expected result:

- `loops-waitlist` remains active.
- `verify_jwt` remains disabled because the database webhook authenticates with `x-waitlist-webhook-secret`.
- No repeated 401, 500, or 502 responses appear.

Escalate to Backend/Security if:

- The function is inactive or missing.
- `verify_jwt` is enabled without a matching webhook/authentication change.
- The function returns repeated 401, 500, or 502 responses.
- A Supabase row exists but no matching Loops send appears within 15 minutes.
- Logs show webhook-secret, Loops API key, or payload validation failures.

### Loops routing check

In Loops, check the three production workflows:

- `SOMLIA Waitlist - Learner`
- `SOMLIA Waitlist - Company`
- `SOMLIA Waitlist - Investor`

Expected result:

- All three workflows remain active.
- Sends increase for the matching role after live signups.
- Contacts have the expected `waitlistRole` value when inspected during troubleshooting.

Escalate to Marketing/Operations if:

- A workflow is paused.
- Sends do not increase after verified Supabase inserts.
- Contacts are routed to the wrong role workflow.
- Replies arrive and are not tracked in the sprint signal tracker.

### Linear reporting

For routine checks, comment on the relevant Linear issue with:

- Check date.
- Aggregate signup counts by role.
- Whether `loops-waitlist` is active.
- Whether Edge Function errors were visible.
- Whether Loops workflows are active and sending.
- Any blocker, owner chat, and next action.

Create or reopen an implementation issue if a recurring failure needs code, Supabase configuration, or Loops configuration changes.

### Later monitoring upgrade

When SOMLIA moves beyond early waitlist validation, consider external alerting with Supabase Log Drains, Sentry, or another monitoring destination. Treat that as a separate Security/Backend issue because external alert destinations can create privacy and secret-exposure risk if configured carelessly.
