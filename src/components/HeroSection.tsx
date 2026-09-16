"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnimatedStatCounter from "./AnimatedStatCounter";

const MotionLink = motion.create(Link);

export default function HeroSection() {
  return (
    <section className="relative isolate -mt-20 w-full overflow-hidden bg-stone-950 pb-8 pt-28 sm:pb-12 sm:pt-36 text-white min-h-[660px] md:min-h-[740px] lg:min-h-[820px] flex flex-col justify-between">
      {/* Cinematic looping video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-wheat.jpg"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Balanced gradient: keeps video footage clear while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Main Hero Content (Frame 00:00) */}
      <div className="container-content relative z-10 pt-6 sm:pt-12">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* 3-Line Headline matching reference */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Boost Productivity <br />
            with Smarter Farming <br />
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal">
            Leveraging technology and traditional wisdom to help rural communities
            grow more, waste less, and work smarter.
          </p>

          {/* CTA Buttons matching reference */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <MotionLink
              href="/approach"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-colors duration-200 hover:bg-lime-light hover:shadow-glow"
            >
              <span>Get Started Today</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MotionLink>
            <MotionLink
              href="/adopt-a-village"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/40 px-7 py-3.5 text-sm md:text-base font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/60 hover:border-white/50"
            >
              How It Works
            </MotionLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar: SCROLL indicator on left & Animated numbers on right */}
      <div className="container-content relative z-10 mt-16 sm:mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/20 pt-6">
          {/* SCROLL indicator */}
          <a
            href="#solutions"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white group"
          >
            <span>SCROLL</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </a>

          {/* Animated 3-Column Stats matching user's reference picture */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 md:gap-16">
            {/* Stat 1: 120+ VILLAGES IMPACTED */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={120} suffix="+" />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Villages Impacted
              </span>
            </div>

            {/* Stat 2: 5,000+ FARMERS SUPPORTED */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={5000} suffix="+" />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Farmers Supported
              </span>
            </div>

            {/* Stat 3: 35% YIELD IMPROVEMENT */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={35} suffix="%" />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Yield Improvement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
