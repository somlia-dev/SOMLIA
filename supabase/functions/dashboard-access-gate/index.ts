import { withSupabase } from 'npm:@supabase/server@1';
import { createClient } from 'npm:@supabase/supabase-js@2';

/**
 * Invite-only dashboard access gate (SOM-54 / SOM-65).
 *
 * Verifies the caller JWT, then checks public.dashboard_invites for an approved row.
 * Does not expose invite rows or waitlist data to the browser.
 */
export default {
  fetch: withSupabase({ auth: 'user' }, async (_request, ctx) => {
    const { userClaims } = ctx;

    if (!userClaims?.email) {
      return json({ allowed: false, authenticated: false, message: 'No user session found.' }, 401);
    }

    const email = normalizeEmail(userClaims.email);
    const adminClient = createAdminClient();

    if (!adminClient) {
      return json({ allowed: false, authenticated: true, message: 'Server configuration is incomplete.' }, 500);
    }

    const { data, error } = await adminClient
      .from('dashboard_invites')
      .select('status')
      .eq('email', email)
      .eq('status', 'approved')
      .maybeSingle();

    if (error) {
      console.error('dashboard-access-gate lookup failed', error);
      return json({ allowed: false, authenticated: true, message: 'Access check failed.' }, 500);
    }

    const allowed = Boolean(data);

    return json({
      allowed,
      authenticated: true,
      role: allowed ? 'Contributor' : null,
      email,
      message: allowed
        ? 'Dashboard access approved for invited cohort.'
        : 'This Google account is not on the approved dashboard invite list.',
    });
  }),
};

function createAdminClient() {
  const url = Deno.env.get('SUPABASE_URL');
  const secretKey = Deno.env.get('SUPABASE_SECRET_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!url || !secretKey) {
    return null;
  }

  return createClient(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
