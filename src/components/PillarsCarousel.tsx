"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { pillars } from "@/data/pillars";

const MotionLink = motion.create(Link);

export default function PillarsCarousel() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        {/* Section Header matching reference screenshot */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Five Pillars</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl md:text-5xl leading-[1.15]">
              Five Pillars for <br />
              <span className="accent font-serif italic text-forest">One Integrated Mission</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm md:text-base leading-relaxed text-stone-600">
            We empower rural communities with ecological restoration, natural farming,
            and traditional wisdom to increase self-reliance and protect future generations.
          </p>
        </Reveal>

        {/* Five Cards in a Row */}
        <Reveal
          delay={0.1}
          className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {pillars.map((pillar) => (
            <MotionLink
              key={pillar.slug}
              href={`/pillars/${pillar.slug}`}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative block aspect-[3/4.3] w-full overflow-hidden bg-stone-900 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Full-bleed image */}
              <Image
                src={pillar.image}
                alt={pillar.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />

              {/* Light gradient overlay for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              {/* Title & Description overlaid on image, bottom-aligned and consistent across cards */}
              <div className="absolute inset-x-0 bottom-0 flex h-[8rem] flex-col px-5 pb-6 pt-5">
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {pillar.hook}
                </p>
              </div>
            </MotionLink>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
