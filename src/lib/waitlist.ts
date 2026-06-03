export type WaitlistRole = "Learner" | "Company" | "Investor / Partner";

export type WaitlistSignup = {
  name: string;
  email: string;
  role: WaitlistRole;
  message: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const waitlistTable = import.meta.env.VITE_SUPABASE_WAITLIST_TABLE || "Whitelist";

let supabaseClientPromise: ReturnType<typeof createSupabaseClient> | null = null;

async function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase is not configured yet. Add your Supabase URL and anon key to .env.local.");
  }

  const { createClient } = await import("@supabase/supabase-js");

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

function getSupabaseClient() {
  supabaseClientPromise ??= createSupabaseClient();
  return supabaseClientPromise;
}

export async function submitWaitlistSignup(signup: WaitlistSignup) {
  const payload = {
    name: signup.name.trim(),
    email: signup.email.trim().toLowerCase(),
    role: signup.role,
    message: signup.message.trim() || null,
  };

  const supabase = await getSupabaseClient();
  const { error } = await supabase.from(waitlistTable).insert(payload);

  if (error) {
    if (error.code === "23505") {
      throw new Error("This email is already on the early access list.");
    }

    throw new Error(error.message || "We could not save your signup. Please try again.");
  }
}
