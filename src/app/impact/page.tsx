import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import StatBlock, { type Stat } from "@/components/StatBlock";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "BPPF's impact dashboard: the figures we have verified so far, and the ones still pending verification.",
};

const stats: Stat[] = [
  { value: "120+", label: "Villages with Forestation Efforts", verified: true },
  { value: "—", label: "Villages Engaged" },
  { value: "—", label: "Farmers Supported" },
  { value: "—", label: "Trees Planted" },
  { value: "—", label: "Acres Under Natural Farming" },
  { value: "—", label: "Water Systems Restored" },
  { value: "—", label: "Students Reached" },
];

export default function ImpactPage() {
  return (
    <>
      <section className="section pt-16 md:pt-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Measure What Matters</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
              Our <span className="accent">Impact</span>, In Numbers
            </h1>
            <p className="body-copy mt-6">
              Verified today: 120 villages with forestation efforts underway.
              The remaining figures are pending verification and will be
              published, with year, location and methodology, once confirmed.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <StatBlock stats={stats} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
