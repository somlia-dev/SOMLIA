# Loops Waitlist Email Setup

Use this when a new row is inserted into `public."Whitelist"` and the person should receive a role-specific Loops email.

## 1. Configure Loops

1. In Loops, generate an API key from **Settings -> API**.
2. Add a custom contact property named `waitlistRole` with type `string`.
3. Create a workflow triggered by the event `waitlistJoined`.
4. Branch or filter that workflow by `waitlistRole`:
   - `learner` -> learner welcome email
   - `company` -> company welcome email
   - `investor` -> investor / partner welcome email
5. Use Loops variables like `{firstName}` in the email greeting.

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
2. Supabase Edge Function logs show a successful request.
3. Loops Audience has the contact with `waitlistRole`.
4. Loops Events shows `waitlistJoined`.
5. The matching role-specific workflow email is sent.
