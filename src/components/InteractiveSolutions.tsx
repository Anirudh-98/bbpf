"use client";

import { useState } from "react";
import Image from "next/image";
import { Trees, Sprout, HeartPulse, Sparkles, Plus, Minus } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const solutions = [
  {
    id: "ecological",
    icon: Trees,
    title: "Proven Ecological Restoration",
    desc: "Converting deforestation into thriving green ecosystems by planting up to 30,000 fruit-bearing trees per village across 12,000+ rural communities.",
    bullets: "Restoring biodiversity, increasing tree cover, and creating healthier, climate-resilient micro-climates for villages.",
    image: "/images/home-solutions-tree-planting.webp",
    alt: "Villagers planting rice seedlings by hand in a flooded field",
  },
  {
    id: "agriculture",
    icon: Sprout,
    title: "Natural & Sacred Agriculture",
    desc: "Guiding farmers to transition away from expensive chemical fertilizers and pesticides to traditional, biological, and self-sufficient farming.",
    bullets: "Restores living soil microbiome, boosts moisture retention, and guarantees chemical-free, nutrient-dense harvests.",
    image: "/images/home-solutions-natural-farming.webp",
    alt: "A farmer checking the leaves of a healthy cotton crop",
  },
  {
    id: "community",
    icon: HeartPulse,
    title: "Holistic Health & Rural Education",
    desc: "Strengthening rural schools with infrastructure and creative tools, alongside community health programs grounded in Ayurveda and wellness.",
    bullets: "Empowers youth and women with knowledge, hygiene, and preventative wellness practices.",
    image: "/images/home-solutions-health-learning.webp",
    alt: "A health worker talking with village women and schoolchildren in a shaded courtyard",
  },
  {
    id: "tradition",
    icon: Sparkles,
    title: "Parampara & Water Stewardship",
    desc: "Combining ancestral rainwater harvesting and desilting with contemporary monitoring to secure water resilience for all seasons.",
    bullets: "Rejuvenates dry ponds, recharges village borewells, and honors indigenous conservation traditions.",
    image: "/images/home-solutions-tank-desilting.webp",
    alt: "Water flowing through a stepped irrigation channel between green fields",
  },
];

export default function InteractiveSolutions() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="section scroll-mt-20 bg-stone-50/70 border-y border-stone-200/80">
      <div className="container-content">
        {/* Section Header with Left Heading and Right Summary */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>About BPPF</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl leading-tight">
              Rural Transformation Solutions <br />
              That Deliver Real <span className="accent">Results</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-stone-600">
            Our integrated rural model helps villages thrive sustainably by
            restoring natural eco-system, revitalizing farming, and empowering
            generations of community members.
          </p>
        </Reveal>

        {/* 2-Column Interactive Showcase */}
        <Reveal delay={0.1} className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Interactive Accordion */}
          <div className="flex flex-col gap-3.5 lg:col-span-6">
            {solutions.map((item) => {
              const isActive = activeId === item.id;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-stone-300 bg-white p-6 shadow-soft ring-1 ring-stone-900/5"
                      : "border-stone-200/80 bg-white/70 p-5 hover:border-stone-300 hover:bg-white"
                  }`}
                >
                  <h3 className="text-base md:text-lg font-bold text-charcoal">
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-expanded={isActive}
                      aria-controls={`solution-panel-${item.id}`}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? "bg-lime text-forest-deep"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{item.title}</span>
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                          isActive
                            ? "bg-lime text-forest-deep"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        {isActive ? (
                          <Minus className="h-4 w-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="h-4 w-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isActive && (
                    <div
                      id={`solution-panel-${item.id}`}
                      className="mt-4 pt-3 border-t border-stone-100 animate-fadeIn"
                    >
                      <p className="text-sm md:text-base leading-relaxed text-stone-600">
                        {item.desc}
                      </p>
                      <p className="mt-2 text-xs md:text-sm font-medium text-stone-500">
                        {item.bullets}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Photo Viewport */}
          <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-900 shadow-lifted lg:col-span-6 aspect-[4/3] sm:aspect-[16/11]">
            <Image
              key={activeSolution.image}
              src={activeSolution.image}
              alt={activeSolution.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
