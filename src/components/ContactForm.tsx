"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/site";
import {
  HONEYPOT_FIELD,
  contactLimits,
  interests,
  type ContactResponse,
} from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500";
const fieldClass =
  "w-full rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest";

const fallbackError = `We couldn't send your message. Please try again, or email us directly at ${contactInfo.email}.`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(
      ["name", "email", "phone", "interest", "message", HONEYPOT_FIELD].map((key) => [
        key,
        String(data.get(key) ?? ""),
      ]),
    );

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as ContactResponse | null;

      if (response.ok && result?.ok) {
        setStatus("sent");
        return;
      }

      // Validation and rate-limit messages are written for visitors. Anything else is a server problem.
      const showServerMessage = response.status === 400 || response.status === 413 || response.status === 429;
      setErrorMessage(showServerMessage && result && !result.ok ? result.error : fallbackError);
    } catch {
      setErrorMessage(fallbackError);
    }
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-stone-200/80 bg-white p-8 text-center shadow-soft"
      >
        <h3 className="text-xl font-bold text-forest">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          We&apos;ve received your message and will get back to you shortly.
          In the meantime you can also reach us directly at{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-semibold text-forest underline">
            {contactInfo.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={contactLimits.name}
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={contactLimits.email}
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={contactLimits.phone}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={interests[0]}
            className={fieldClass}
          >
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={contactLimits.message}
          required
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Anti-spam trap: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group self-start inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-all hover:bg-lime-light hover:shadow-glow active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-lime disabled:hover:shadow-sm disabled:active:scale-100"
      >
        <span>{sending ? "Sending…" : "Send Message"}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
