import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Because BPPF asks people to participate financially, transparency is not optional.",
};

const documents = [
  `Section 8 registration certificate (CIN: ${contactInfo.cin})`,
  "Annual reports",
  "Financial statements",
  "Project reports by village",
  "Impact reports",
  "Board & governance information",
  "Project locations",
  "Donation utilization reports",
  "CSR eligibility details (if applicable)",
];

export default function TransparencyPage() {
  return (
    <section className="section pt-16 md:pt-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Trust, Built on Openness</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            <span className="accent">Transparency</span>
          </h1>
          <p className="body-copy mt-6">
            Because BPPF asks people to participate financially, we believe
            transparency isn&apos;t optional.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-10">
          <h2 className="text-sm font-bold uppercase tracking-wide text-forest">
            This page will host
          </h2>
          <ul className="mt-5 space-y-3">
            {documents.map((doc) => (
              <li
                key={doc}
                className="flex items-center justify-between gap-4 border-b border-stone-100 pb-3 text-sm text-stone-700 last:border-none last:pb-0"
              >
                <span>{doc}</span>
                <span className="shrink-0 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
                  Pending
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-stone-400">
          None of these documents are published yet — publishing them is the
          single highest-priority addition for institutional credibility.
        </p>
      </div>
    </section>
  );
}
