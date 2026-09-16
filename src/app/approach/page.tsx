import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import Stepper from "@/components/Stepper";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How BPPF thinks about the village ecosystem, and the six-step model behind every village transformation.",
};

const steps = [
  {
    number: "01",
    title: "Understand the Village",
    body: "Every village has its own geography, water table, agricultural practices, social structure and challenges. We begin by studying the local context before proposing any intervention.",
  },
  {
    number: "02",
    title: "Restore the Natural Foundation",
    body: "Focus on soil health, water sources, tree cover and biodiversity — the physical base every other outcome depends on.",
  },
  {
    number: "03",
    title: "Strengthen Agriculture",
    body: "Support farmers transitioning from chemical to natural farming, improving both yield quality and long-term soil health.",
  },
  {
    number: "04",
    title: "Strengthen People",
    body: "Invest in education and health — because a resilient village needs capable, healthy people as much as it needs healthy land.",
  },
  {
    number: "05",
    title: "Strengthen Livelihoods",
    body: "Build economic resilience through productive, sustainable agricultural activity that supports families directly.",
  },
  {
    number: "06",
    title: "Build Self-Sustainability",
    body: "The goal is not permanent dependence on outside support — it's a village increasingly capable of sustaining its own people, resources and future.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <section className="section pt-16 md:pt-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How We Think</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
              The Village Ecosystem <span className="accent">Map</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-12">
            <EcosystemDiagram />
          </Reveal>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-stone-500">
            BPPF doesn&apos;t see rural development as separate projects. We
            see the village as one interconnected system.
          </p>
        </div>
      </section>

      <section className="section-sm bg-stone-50/70 border-y border-stone-200/80">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Model</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              How We Work — The <span className="accent">6-Step</span> Model
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Stepper steps={steps} variant="full" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
