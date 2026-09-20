import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you want to adopt a village, partner with us, or simply learn more — we'd like to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="section pt-16 md:pt-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            Let&apos;s <span className="accent">Talk</span>
          </h1>
          <p className="body-copy mt-6">
            Whether you want to adopt a village, partner with us, or simply
            learn more — we&apos;d like to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-6 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft">
            <h2 className="text-lg font-bold text-forest">
              Direct Contact
            </h2>
            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-medium text-forest hover:text-forest-light"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
                  Website
                </p>
                <p>{contactInfo.website}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
                  YouTube
                </p>
                <a
                  href={contactInfo.youtube.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest hover:text-forest-light"
                >
                  {contactInfo.youtube.label}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
                  Instagram
                </p>
                <a
                  href={contactInfo.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest hover:text-forest-light"
                >
                  {contactInfo.instagram.label}
                </a>
              </div>
              {contactInfo.facebook && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
                    Facebook
                  </p>
                  <a
                    href={contactInfo.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest hover:text-forest-light"
                  >
                    {contactInfo.facebook.label}
                  </a>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
