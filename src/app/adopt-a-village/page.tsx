import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ButtonPair from "@/components/ButtonPair";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Adopt a Village",
  description:
    "Adopt a Village brings soil, water, agriculture, trees, education, health and livelihoods together into one coordinated rural development model.",
};

const useOfFunds = [
  "Basic Amenities",
  "Agriculture",
  "Health",
  "Education",
  "Culture of the village",
];

const referenceFigures = [
  { label: "Sponsorship for one village", value: "₹10,00,000 (₹10 lakh)" },
  { label: "Manufacturing cost of product", value: "₹4,000 / acre" },
  { label: "Selling cost of product", value: "₹6,900 / acre" },
  { label: "Programme & operating expenditure", value: "₹1,20,00,000" },
  {
    label: "Net surplus reinvested into the village",
    value: "₹1,13,00,000",
  },
];

export default function AdoptVillagePage() {
  return (
    <>
      <section className="section pt-16 md:pt-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Participate</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
              Adopt a Village. Help Build an{" "}
              <span className="accent">Ecosystem.</span>
            </h1>
            <p className="body-copy mt-6">
              A village needs more than a single intervention — it needs
              healthy soil, reliable water, productive agriculture, trees,
              education, health and livelihood opportunities. Adopt a Village
              brings all of these together into one coordinated rural
              development model.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonPair
                primary={{ label: "Get Started", href: "/contact" }}
                secondary={{ label: "View the Sustainability Model", href: "#model" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="model" className="section-sm scroll-mt-28 bg-stone-50/70 border-y border-stone-200/80">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              The Village Sustainability <span className="accent">Model</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-10">
            <p className="body-copy">
              Your contribution funds one full village adoption cycle. Beyond
              agricultural output, surplus is reinvested directly into the
              village&apos;s amenities, health, education and cultural
              continuity — the model behind how BPPF makes villages
              self-sustaining.
            </p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-forest">
              Where the surplus goes
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {useOfFunds.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-stone-600"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-8 max-w-3xl rounded-3xl border border-lime/30 bg-lime/5 p-6 text-sm leading-relaxed text-stone-700 md:p-8">
            <p className="font-bold text-forest">
              A note on the figures below
            </p>
            <p className="mt-2">
              These reference figures are reproduced from BPPF&apos;s internal
              village-adoption workings for transparency. They describe how
              contributions and programme income are allocated across one
              village cycle — they are not a financial investment product or
              a promised monetary return, and are presented here pending
              final review by BPPF&apos;s compliance and legal team.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {referenceFigures.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl bg-white px-4 py-3 shadow-soft"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-stone-400">
                    {row.label}
                  </dt>
                  <dd className="mt-1 font-serif text-lg font-semibold text-forest">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-12 flex justify-center">
            <ButtonPair
              primary={{
                label: "Talk to Us About Adopting a Village",
                href: "/contact",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
