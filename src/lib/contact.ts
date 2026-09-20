// Shared by the contact form (client) and /api/contact (server) so the two can't drift apart.

export const interests = [
  "Adopt a Village",
  "Donate",
  "CSR Partnership",
  "Volunteer",
  "General Enquiry",
] as const;

export type Interest = (typeof interests)[number];

export const contactLimits = {
  name: 100,
  email: 254,
  phone: 20,
  message: 4000,
} as const;

// Name of the hidden anti-spam field. Real visitors never see or fill it. Deliberately not a
// name browsers autofill (like "website" or "url"), which would drop real messages as spam.
export const HONEYPOT_FIELD = "bot_trap";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  interest: Interest;
  message: string;
};

export type ContactResponse = { ok: true } | { ok: false; error: string };
