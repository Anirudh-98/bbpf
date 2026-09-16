"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

type PillarCardData = {
  slug: string;
  image: string;
  name: string;
  hook: string;
};

export default function PillarCard({ pillar }: { pillar: PillarCardData }) {
  return (
    <MotionLink
      href={`/pillars/${pillar.slug}`}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative block aspect-[4/5] w-full overflow-hidden bg-stone-900 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <Image
        src={pillar.image}
        alt={pillar.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex h-[8rem] flex-col px-5 pb-6 pt-5">
        <h3 className="text-lg font-bold tracking-tight text-white">
          {pillar.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {pillar.hook}
        </p>
      </div>
    </MotionLink>
  );
}
