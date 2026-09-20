import {
  HONEYPOT_FIELD,
  contactLimits,
  interests,
  type ContactPayload,
  type ContactResponse,
} from "@/lib/contact";

const MAX_BODY_BYTES = 16 * 1024;

// Best-effort per-IP limit. State lives in one server instance's memory, so on serverless
// hosting it slows casual abuse but is not a hard guarantee.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
// A host that passes no client-IP header puts every visitor in one shared bucket, so that
// bucket gets a much larger allowance to avoid locking real visitors out.
const UNKNOWN_IP = "unknown";
const RATE_MAX_UNKNOWN_IP = 60;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string, now: number): boolean {
  if (recentRequests.size > 1000) {
    for (const [key, times] of recentRequests) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }
  const limit = ip === UNKNOWN_IP ? RATE_MAX_UNKNOWN_IP : RATE_MAX_REQUESTS;
  const times = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (times.length >= limit) {
    recentRequests.set(ip, times);
    return true;
  }
  times.push(now);
  recentRequests.set(ip, times);
  return false;
}

function json(body: ContactResponse, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

const fail = (error: string, status: number) => json({ ok: false, error }, status);

// Keeps a value on one line so it can't inject extra lines into the subject.
const oneLine = (value: string) => value.replace(/\s+/g, " ").trim();

function readString(source: Record<string, unknown>, key: string): string {
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(raw: unknown): ContactPayload | string {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return "Invalid request.";
  }
  const data = raw as Record<string, unknown>;

  const name = readString(data, "name");
  const email = readString(data, "email");
  const phone = readString(data, "phone");
  const interest = readString(data, "interest");
  const message = readString(data, "message");

  if (!name || name.length > contactLimits.name) return "Please enter your name.";
  if (
    !email ||
    email.length > contactLimits.email ||
    !/^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]+$/.test(email)
  ) {
    return "Please enter a valid email address.";
  }
  if (phone && (phone.length > contactLimits.phone || !/^[0-9+()\-.\s]+$/.test(phone))) {
    return "Please enter a valid phone number.";
  }
  if (!(interests as readonly string[]).includes(interest)) {
    return "Please choose what you are interested in.";
  }
  if (!message) return "Please enter a message.";
  if (message.length > contactLimits.message) {
    return `Please keep your message under ${contactLimits.message} characters.`;
  }

  return { name, email, phone, interest: interest as ContactPayload["interest"], message };
}

export async function POST(request: Request) {
  // Requiring JSON forces browsers to send a CORS preflight for cross-site requests,
  // which this endpoint never approves.
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return fail("Unsupported request.", 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return fail("Your message is too long.", 413);

  let text: string;
  try {
    text = await request.text();
  } catch {
    return fail("Invalid request.", 400);
  }
  if (text.length > MAX_BODY_BYTES) return fail("Your message is too long.", 413);

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return fail("Invalid request.", 400);
  }

  // Bots that fill every field get a fake success and nothing is sent.
  if (typeof raw === "object" && raw !== null && readString(raw as Record<string, unknown>, HONEYPOT_FIELD)) {
    return json({ ok: true });
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || UNKNOWN_IP;
  if (isRateLimited(ip, Date.now())) {
    return fail("Too many messages sent. Please try again in a few minutes.", 429);
  }

  const parsed = parsePayload(raw);
  if (typeof parsed === "string") return fail(parsed, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must all be set.");
    return fail("The contact form is temporarily unavailable.", 503);
  }

  const { name, email, phone, interest, message } = parsed;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry: ${interest} — ${oneLine(name)}`,
        text: [
          `Interest: ${interest}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "not provided"}`,
          "",
          message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      // Log the provider status only. The response body and the enquiry are never logged.
      console.error(`[contact] Email provider rejected the request (HTTP ${response.status}).`);
      return fail("We couldn't send your message. Please try again shortly.", 502);
    }
  } catch (error) {
    console.error("[contact] Email provider request failed:", error instanceof Error ? error.name : "unknown error");
    return fail("We couldn't send your message. Please try again shortly.", 502);
  }

  return json({ ok: true });
}
