import { createClient } from "@supabase/supabase-js";

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

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

export async function submitWaitlistSignup(signup: WaitlistSignup) {
  if (!supabase) {
    throw new Error("Supabase is not configured yet. Add your Supabase URL and anon key to .env.local.");
  }

  const payload = {
    name: signup.name.trim(),
    email: signup.email.trim().toLowerCase(),
    role: signup.role,
    message: signup.message.trim() || null,
  };

  const { error } = await supabase.from(waitlistTable).insert(payload);

  if (error) {
    if (error.code === "23505") {
      throw new Error("This email is already on the early access list.");
    }

    throw new Error(error.message || "We could not save your signup. Please try again.");
  }
}
