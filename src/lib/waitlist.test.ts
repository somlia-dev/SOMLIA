import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const supabaseMocks = vi.hoisted(() => ({
  createClient: vi.fn(),
  from: vi.fn(),
  insert: vi.fn(),
}));

vi.mock("@supabase/supabase-js", () => ({
  createClient: supabaseMocks.createClient,
}));

async function importWaitlistModule() {
  vi.resetModules();
  return import("./waitlist");
}

describe("submitWaitlistSignup", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "public-anon-key");
    vi.stubEnv("VITE_SUPABASE_WAITLIST_TABLE", "Whitelist");

    supabaseMocks.insert.mockResolvedValue({ error: null });
    supabaseMocks.from.mockReturnValue({ insert: supabaseMocks.insert });
    supabaseMocks.createClient.mockReturnValue({ from: supabaseMocks.from });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.clearAllMocks();
  });

  it("inserts a normalized waitlist signup into the configured table", async () => {
    const { submitWaitlistSignup } = await importWaitlistModule();

    await submitWaitlistSignup({
      name: "  Ada Lovelace  ",
      email: "  ADA@Example.COM  ",
      role: "Learner",
      message: "  I want to build proof.  ",
    });

    expect(supabaseMocks.createClient).toHaveBeenCalledWith("https://example.supabase.co", "public-anon-key", {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
    expect(supabaseMocks.from).toHaveBeenCalledWith("Whitelist");
    expect(supabaseMocks.insert).toHaveBeenCalledWith({
      name: "Ada Lovelace",
      email: "ada@example.com",
      role: "Learner",
      message: "I want to build proof.",
    });
  });

  it("stores an empty message as null", async () => {
    const { submitWaitlistSignup } = await importWaitlistModule();

    await submitWaitlistSignup({
      name: "Ada Lovelace",
      email: "ada@example.com",
      role: "Company",
      message: "   ",
    });

    expect(supabaseMocks.insert).toHaveBeenCalledWith({
      name: "Ada Lovelace",
      email: "ada@example.com",
      role: "Company",
      message: null,
    });
  });

  it("uses a friendly duplicate-email message for Supabase unique constraint errors", async () => {
    supabaseMocks.insert.mockResolvedValue({
      error: { code: "23505", message: "duplicate key value violates unique constraint" },
    });
    const { submitWaitlistSignup } = await importWaitlistModule();

    await expect(
      submitWaitlistSignup({
        name: "Ada Lovelace",
        email: "ada@example.com",
        role: "Learner",
        message: "",
      }),
    ).rejects.toThrow("This email is already on the early access list.");
  });

  it("requires Supabase environment configuration", async () => {
    vi.unstubAllEnvs();
    vi.stubEnv("VITE_SUPABASE_URL", "");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "");
    const { submitWaitlistSignup } = await importWaitlistModule();

    await expect(
      submitWaitlistSignup({
        name: "Ada Lovelace",
        email: "ada@example.com",
        role: "Learner",
        message: "",
      }),
    ).rejects.toThrow("Supabase is not configured yet.");
  });
});
