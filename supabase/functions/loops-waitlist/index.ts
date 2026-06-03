type WaitlistRole = "Learner" | "Company" | "Investor / Partner";

type WaitlistRecord = {
  id: number | string;
  created_at?: string;
  name: string;
  email: string;
  role: WaitlistRole;
  message?: string | null;
};

type DatabaseWebhookPayload = {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: WaitlistRecord | null;
  old_record: unknown;
};

const LOOPS_EVENTS_ENDPOINT = "https://app.loops.so/api/v1/events/send";
const ROLE_KEYS: Record<WaitlistRole, "learner" | "company" | "investor"> = {
  Learner: "learner",
  Company: "company",
  "Investor / Partner": "investor",
};

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return json({ success: false, message: "Method not allowed" }, 405);
  }

  const loopsApiKey = Deno.env.get("LOOPS_API_KEY");
  const webhookSecret = Deno.env.get("WAITLIST_WEBHOOK_SECRET");
  const eventName = Deno.env.get("LOOPS_WAITLIST_EVENT_NAME") || "waitlistJoined";

  if (!loopsApiKey || !webhookSecret) {
    return json({ success: false, message: "Missing Loops or webhook secret configuration" }, 500);
  }

  if (request.headers.get("x-waitlist-webhook-secret") !== webhookSecret) {
    return json({ success: false, message: "Unauthorized" }, 401);
  }

  try {
    const payload = (await request.json()) as DatabaseWebhookPayload;

    if (payload.type !== "INSERT" || payload.schema !== "public" || payload.table !== "Whitelist") {
      return json({ success: true, ignored: true });
    }

    if (!payload.record) {
      return json({ success: false, message: "Missing inserted record" }, 400);
    }

    const signup = normalizeSignup(payload.record);
    const roleKey = ROLE_KEYS[signup.role];
    const { firstName, lastName } = splitName(signup.name);

    const loopsResponse = await fetch(LOOPS_EVENTS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loopsApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `waitlist-${signup.id}-${eventName}`,
      },
      body: JSON.stringify({
        email: signup.email,
        userId: `waitlist:${signup.id}`,
        eventName,
        firstName,
        ...(lastName ? { lastName } : {}),
        source: "SOMLIA waitlist",
        userGroup: roleKey,
        waitlistRole: roleKey,
        eventProperties: {
          signupId: String(signup.id),
          name: signup.name,
          firstName,
          role: roleKey,
          roleLabel: signup.role,
          message: truncate(signup.message || "", 480),
          createdAt: signup.created_at || new Date().toISOString(),
        },
      }),
    });

    const loopsBody = await readJsonSafely(loopsResponse);

    if (!loopsResponse.ok) {
      console.error("Loops request failed", loopsResponse.status, loopsBody);
      return json(
        {
          success: false,
          message: "Loops request failed",
          loopsStatus: loopsResponse.status,
          loopsBody,
        },
        502,
      );
    }

    return json({ success: true, loops: loopsBody });
  } catch (error) {
    console.error(error);
    return json({ success: false, message: error instanceof Error ? error.message : "Unknown error" }, 500);
  }
});

function normalizeSignup(record: WaitlistRecord): WaitlistRecord {
  const name = String(record.name || "").trim();
  const email = String(record.email || "").trim().toLowerCase();

  if (!record.id || !name || !email || !ROLE_KEYS[record.role]) {
    throw new Error("Invalid waitlist record");
  }

  return {
    ...record,
    name,
    email,
    message: typeof record.message === "string" ? record.message.trim() : null,
  };
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  return {
    firstName: parts[0] || name,
    lastName: parts.slice(1).join(" "),
  };
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}...` : value;
}

async function readJsonSafely(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
