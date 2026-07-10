import { withSupabase } from 'npm:@supabase/server@1';

/**
 * Server-side dashboard session check.
 *
 * Verifies the caller's Supabase user JWT via @supabase/server and returns
 * only minimal identity metadata. No private dashboard tables are queried.
 *
 * Deploy with platform JWT verification enabled (see supabase/config.toml).
 * On Supabase Edge Functions, SUPABASE_URL, publishable/secret keys, and JWKS
 * are injected automatically.
 */
export default {
  fetch: withSupabase({ auth: 'user' }, async (_request, ctx) => {
    const { userClaims, authMode } = ctx;

    if (!userClaims) {
      return json({ authenticated: false, message: 'No user session found.' }, 401);
    }

    return json({
      authenticated: true,
      scope: 'dashboard-session-check',
      authMode,
      user: {
        id: userClaims.id,
        email: userClaims.email ?? null,
        role: userClaims.role ?? null,
      },
      message:
        'Server-side JWT verification scaffold only. Private dashboard data and account provisioning are not implemented yet.',
    });
  }),
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
