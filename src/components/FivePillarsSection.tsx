"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Droplets,
  Leaf,
  BookOpen,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

interface PillarData {
  id: string;
  number: string;
  slug: string;
  title: string;
  statement: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  // Desktop canvas layout (1200 x 780 coordinate space)
  desktop: {
    left: number;
    top: number;
    width: number;
    height: number;
    imagePosition: "left" | "right";
    connectorStart: { x: number; y: number };
    connectorEnd: { x: number; y: number };
  };
}

const PILLARS: PillarData[] = [
  {
    id: "01",
    number: "01",
    slug: "forestation",
    title: "Forestation",
    statement: "Restore the green foundation.",
    description:
      "Up to 50,000 trees per village through native tree plantation and biodiversity restoration.",
    image: "/images/pillar-forestation.webp",
    alt: "A young woman and an elderly man planting a sapling in red soil while a boy holds a pot of water",
    icon: Sprout,
    desktop: {
      left: 20,
      top: 15,
      width: 355,
      height: 160,
      imagePosition: "left",
      connectorStart: { x: 375, y: 150 },
      connectorEnd: { x: 427, y: 205 }, // On r=220 ring at ~218°
    },
  },
  {
    id: "02",
    number: "02",
    slug: "water-harvesting",
    title: "Water Harvesting",
    statement: "Restore what sustains life.",
    description:
      "Rainwater and groundwater restoration for farms, homes and future generations.",
    image: "/images/pillar-water.webp",
    alt: "A woman opening a hand-dug channel to carry pond water into her vegetable rows",
    icon: Droplets,
    desktop: {
      left: 825,
      top: 15,
      width: 355,
      height: 160,
      imagePosition: "right",
      connectorStart: { x: 825, y: 150 },
      connectorEnd: { x: 773, y: 205 }, // On r=220 ring at ~322°
    },
  },
  {
    id: "03",
    number: "03",
    slug: "agriculture",
    title: "Agriculture",
    statement: "Grow with the land, not against it.",
    description:
      "Helping farmers move from chemical-intensive practices to natural and regenerative farming.",
    image: "/images/pillar-agriculture.webp",
    alt: "An elderly woman farmer laughing, holding freshly harvested sorghum ears in a golden field",
    icon: Leaf,
    desktop: {
      left: 15,
      top: 260,
      width: 355,
      height: 160,
      imagePosition: "left",
      connectorStart: { x: 370, y: 340 },
      connectorEnd: { x: 380, y: 340 }, // On r=220 ring at left point (600-220 = 380)
    },
  },
  {
    id: "04",
    number: "04",
    slug: "education",
    title: "Education",
    statement: "Build opportunity where children are.",
    description:
      "Strengthening government schools with resources, technology and better learning environments.",
    image: "/images/pillar-education.webp",
    alt: "A schoolgirl writing in her notebook in a village classroom",
    icon: BookOpen,
    desktop: {
      left: 422,
      top: 590,
      width: 355,
      height: 160,
      imagePosition: "left",
      connectorStart: { x: 600, y: 590 },
      connectorEnd: { x: 600, y: 560 }, // On r=220 ring at bottom point (340+220 = 560)
    },
  },
  {
    id: "05",
    number: "05",
    slug: "health",
    title: "Health",
    statement: "Wellbeing is part of development.",
    description:
      "Holistic wellbeing through yoga, meditation, Ayurveda and healthier communities.",
    image: "/images/pillar-health.webp",
    alt: "Villagers of all ages doing yoga with raised arms at sunrise on the village common ground",
    icon: Heart,
    desktop: {
      left: 830,
      top: 260,
      width: 355,
      height: 160,
      imagePosition: "right",
      connectorStart: { x: 830, y: 340 },
      connectorEnd: { x: 820, y: 340 }, // On r=220 ring at right point (600+220 = 820)
    },
  },
];

interface FivePillarsSectionProps {
  asH1?: boolean;
  eyebrow?: string;
  className?: string;
}

export default function FivePillarsSection({
  asH1 = false,
  eyebrow = "OUR APPROACH",
  className = "",
}: FivePillarsSectionProps) {
  const [activePillarId, setActivePillarId] = useState<string | null>(null);

  const HeadingTag = asH1 ? "h1" : "h2";

  return (
    <section
      className={`relative overflow-hidden bg-[#FAFAF7] py-20 md:py-28 lg:py-32 border-b border-[#E8ECE6] ${className}`}
    >
      <div className="container-content">
        {/* SECTION HEADER */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#52715A]">
              {eyebrow}
            </span>
          </div>

          <HeadingTag className="mt-4 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
            <span className="block text-[#172019]">Five Pillars.</span>
            <span className="block font-serif italic font-normal text-[#244D32]">
              One Mission.
            </span>
          </HeadingTag>

          <p className="mx-auto mt-6 max-w-[660px] text-base md:text-lg leading-[1.65] text-[#59615A]">
            A village cannot become sustainable by fixing one problem at a time.
            Forests, water, farms, education and wellbeing are interconnected —
            together, they form one integrated model for rural transformation.
          </p>
        </Reveal>

        {/* DESKTOP INTERACTIVE PILLARS SYSTEM (>= 1024px) */}
        <div className="hidden lg:block mt-16 xl:mt-20">
          <div className="relative mx-auto w-[1200px] h-[780px] max-w-full origin-top scale-[0.84] xl:scale-100 transition-transform duration-300">
            {/* SVG Connector Lines and Orbit Rings */}
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1200 780"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Subtle Concentric Orbit Ring */}
              <circle
                cx="600"
                cy="340"
                r="255"
                stroke="#CAD5C8"
                strokeWidth="1"
                strokeDasharray="4 6"
                strokeOpacity="0.45"
              />

              {/* Main Interconnected System Dashed Ring */}
              <circle
                cx="600"
                cy="340"
                r="220"
                stroke="#9EAE99"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                strokeOpacity="0.75"
              />

              {/* 5 Connector Lines with Terminating Nodes */}
              {PILLARS.map((pillar) => {
                const isActive = activePillarId === pillar.id;
                const { connectorStart, connectorEnd } = pillar.desktop;

                return (
                  <g key={`connector-${pillar.id}`}>
                    {/* Dashed connector line */}
                    <line
                      x1={connectorStart.x}
                      y1={connectorStart.y}
                      x2={connectorEnd.x}
                      y2={connectorEnd.y}
                      stroke={isActive ? "#244D32" : "#9EAE99"}
                      strokeWidth={isActive ? 2 : 1.2}
                      strokeDasharray="4 4"
                      className="transition-colors duration-300"
                    />

                    {/* Circular termination node at the central orbit ring */}
                    <circle
                      cx={connectorEnd.x}
                      cy={connectorEnd.y}
                      r={isActive ? 5.5 : 4}
                      fill={isActive ? "#244D32" : "#52715A"}
                      className="transition-all duration-300"
                    />
                    {isActive && (
                      <circle
                        cx={connectorEnd.x}
                        cy={connectorEnd.y}
                        r={8}
                        fill="none"
                        stroke="#244D32"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Village Circle Visual */}
            <div
              className="absolute z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: 600,
                top: 340,
                width: 360,
                height: 360,
              }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-full border-[4px] border-white shadow-[0_20px_50px_rgba(23,32,25,0.18)] ring-1 ring-stone-900/5 transition-transform duration-700 ease-out hover:scale-[1.015]">
                <Image
                  src="/images/home-pillars-thriving-village.webp"
                  alt="Thriving green village with a stream, red-tiled homes and distant hills"
                  fill
                  sizes="480px"
                  quality={85}
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Dark gradient overlay for typography clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/35 transition-opacity duration-300" />

                {/* Center Badge Typography */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <span className="font-sans text-xl font-bold tracking-[0.24em] uppercase text-white drop-shadow-sm sm:text-2xl leading-tight">
                    THRIVING
                    <br />
                    VILLAGES
                  </span>
                  <div className="my-2.5 h-[1px] w-8 bg-white/40" />
                  <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-stone-200 drop-shadow-sm sm:text-[11px]">
                    A HEALTHIER, GREENER
                    <br />
                    TOMORROW
                  </span>
                </div>
              </div>
            </div>

            {/* 5 Desktop Pillar Cards */}
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isImageLeft = pillar.desktop.imagePosition === "left";
              const isHovered = activePillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  style={{
                    position: "absolute",
                    left: pillar.desktop.left,
                    top: pillar.desktop.top,
                    width: pillar.desktop.width,
                    height: pillar.desktop.height,
                  }}
                  className="z-20"
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  onMouseLeave={() => setActivePillarId(null)}
                >
                  <Link
                    href={`/pillars/${pillar.slug}`}
                    className={`group relative flex h-full w-full items-center gap-3.5 rounded-[24px] border bg-white p-3.5 transition-all duration-300 ease-out ${
                      isHovered
                        ? "border-[#81927F] -translate-y-1 shadow-[0_12px_28px_rgba(36,77,50,0.09)]"
                        : "border-[rgba(48,30,20,0.12)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {/* Thumbnail on Left */}
                    {isImageLeft && (
                      <div className="relative h-[130px] w-[110px] shrink-0 overflow-hidden rounded-[18px] bg-stone-100">
                        <Image
                          src={pillar.image}
                          alt={pillar.alt}
                          fill
                          sizes="195px"
                          quality={85}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Text Area */}
                    <div className="flex flex-1 flex-col justify-center min-w-0 pr-1">
                      {/* Meta row: Number + Botanical Icon */}
                      <div className="flex items-center gap-2 text-[#52715A]">
                        <span className="text-xs font-bold tracking-wider">
                          {pillar.number}
                        </span>
                        <Icon className="h-3.5 w-3.5 stroke-[2]" />
                      </div>

                      {/* Pillar Title */}
                      <h3 className="mt-1 font-serif text-[21px] font-bold leading-tight text-[#172019] group-hover:text-[#244D32] transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Statement */}
                      <p className="mt-1 text-[13px] font-medium leading-snug text-[#244D32]">
                        {pillar.statement}
                      </p>

                      {/* Description */}
                      <p className="mt-1 text-[12px] leading-[1.42] text-[#697169] line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Thumbnail on Right */}
                    {!isImageLeft && (
                      <div className="relative h-[130px] w-[110px] shrink-0 overflow-hidden rounded-[18px] bg-stone-100">
                        <Image
                          src={pillar.image}
                          alt={pillar.alt}
                          fill
                          sizes="195px"
                          quality={85}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL STORYTELLING EXPERIENCE (< 1024px) */}
        <div className="block lg:hidden mt-10 sm:mt-12">
          {/* Mobile Central Village Feature Visual */}
          <Reveal className="relative mx-auto w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl border-[3px] border-white shadow-[0_16px_40px_rgba(23,32,25,0.12)]">
            <Image
              src="/images/home-pillars-thriving-village.webp"
              alt="Thriving green village with a stream, red-tiled homes and distant hills"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <span className="font-sans text-xl sm:text-2xl font-bold tracking-[0.24em] uppercase text-white drop-shadow-sm leading-tight">
                THRIVING
                <br />
                VILLAGES
              </span>
              <div className="my-2 h-[1px] w-8 bg-white/50" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-stone-200 drop-shadow-sm">
                A HEALTHIER, GREENER TOMORROW
              </span>
            </div>
          </Reveal>

          {/* Mobile Vertical Cards Stack */}
          <div className="mt-8 sm:mt-10 space-y-3.5 sm:space-y-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.id} delay={0.06 * idx}>
                  <Link
                    href={`/pillars/${pillar.slug}`}
                    className="group flex items-center gap-3.5 sm:gap-4 rounded-[20px] border border-[#D9DED7]/80 bg-white p-3 sm:p-3.5 shadow-[0_3px_14px_rgba(0,0,0,0.03)] transition-all duration-200 active:scale-[0.99]"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl bg-stone-100">
                      <Image
                        src={pillar.image}
                        alt={pillar.alt}
                        fill
                        sizes="(min-width: 640px) 170px, 145px"
                        quality={85}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[#52715A]">
                          <span className="text-xs font-bold tracking-wider">
                            {pillar.number}
                          </span>
                          <Icon className="h-3 w-3 stroke-[2]" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-stone-400 group-hover:text-[#244D32] transition-colors" />
                      </div>

                      <h3 className="mt-0.5 font-serif text-lg sm:text-xl font-bold text-[#172019] group-hover:text-[#244D32] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[#244D32]">
                        {pillar.statement}
                      </p>

                      <p className="mt-1 text-[11px] sm:text-xs text-[#626A64] line-clamp-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
