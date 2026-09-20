import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import BankDetailsCard from "@/components/BankDetailsCard";

export const metadata: Metadata = {
  title: "Participate",
  description:
    "Four ways to participate in BPPF's work — Adopt a Village, Donate, Partner With Us, or Join the Network.",
};

const ways = [
  {
    number: "01",
    title: "Adopt a Village",
    body: "Support the full village transformation model.",
    cta: { label: "Learn More", href: "/adopt-a-village" },
  },
  {
    number: "02",
    title: "Donate",
    body: "Support a specific pillar directly — Agriculture, Water, Forestation, Education or Health.",
    cta: { label: "Donate Now", href: "#donate" },
  },
  {
    number: "03",
    title: "Partner With Us",
    body: "For CSR teams, institutions, agricultural partners and foundations.",
    cta: { label: "Start a Partnership", href: "/contact" },
  },
  {
    number: "04",
    title: "Join the Network",
    body: "For individuals contributing time, skills or resources.",
    cta: { label: "Join Us", href: "/contact" },
  },
];

export default function ParticipatePage() {
  return (
    <section className="section pt-16 md:pt-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Be Part of the Transformation</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            Four Ways to <span className="accent">Participate</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ways.map((way) => (
            <div
              key={way.number}
              className="group flex flex-col gap-4 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime/20 text-sm font-extrabold text-forest">
                {way.number}
              </span>
              <h2 className="text-xl font-bold text-forest">{way.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-stone-600">
                {way.body}
              </p>
              <Link
                href={way.cta.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-forest transition-colors hover:text-forest-light"
              >
                {way.cta.label}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.15}
          id="donate"
          className="mx-auto mt-14 max-w-2xl scroll-mt-28 rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-10"
        >
          <BankDetailsCard title="Bank Transfer Details" />
          <p className="mt-5 text-xs text-stone-400">
            QR Code: Coming Soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
