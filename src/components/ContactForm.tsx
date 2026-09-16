"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const interests = [
  "Adopt a Village",
  "Donate",
  "CSR Partnership",
  "Volunteer",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-stone-200/80 bg-white p-8 text-center shadow-soft">
        <h3 className="text-xl font-bold text-forest">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          We&apos;ve received your message and will get back to you shortly.
          In the meantime you can also reach us directly at{" "}
          <a href="mailto:bppf.fou@gmail.com" className="font-semibold text-forest underline">
            bppf.fou@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest"
          />
        </div>
        <div>
          <label htmlFor="interest" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={interests[0]}
            className="w-full rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest"
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
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest focus:bg-white focus:ring-1 focus:ring-forest"
        />
      </div>

      <button
        type="submit"
        className="group self-start inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-all hover:bg-lime-light hover:shadow-glow active:scale-95"
      >
        <span>Send Message</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
