"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CtaLink = {
  label: string;
  href: string;
};

const MotionLink = motion.create(Link);

export default function ButtonPair({
  primary,
  secondary,
  onDark = false,
  className = "",
}: {
  primary: CtaLink;
  secondary?: CtaLink;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      <MotionLink
        href={primary.href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-colors duration-200 hover:bg-lime-light hover:shadow-glow"
      >
        <span>{primary.label}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </MotionLink>
      {secondary && (
        <MotionLink
          href={secondary.href}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-colors duration-200 ${
            onDark
              ? "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50"
              : "border border-stone-300 bg-white text-stone-800 shadow-sm hover:bg-stone-50 hover:border-stone-400"
          }`}
        >
          {secondary.label}
        </MotionLink>
      )}
    </div>
  );
}
