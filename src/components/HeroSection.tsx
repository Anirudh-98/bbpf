"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnimatedStatCounter from "./AnimatedStatCounter";

const MotionLink = motion.create(Link);

export default function HeroSection() {
  return (
    <section className="relative isolate -mt-20 w-full overflow-hidden bg-stone-950 pb-8 pt-28 sm:pb-10 sm:pt-32 short:pb-4 short:pt-20 text-white min-h-screen min-h-[100dvh] flex flex-col justify-between">
      {/* Cinematic looping video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/images/hero-poster.jpg"
          onCanPlay={() => window.dispatchEvent(new Event("hero-video-ready"))}
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Balanced gradient: keeps video footage clear while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="container-content relative z-10 my-auto py-6 sm:py-8 short:py-2">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* 3-Line Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl short:text-3xl font-extrabold tracking-tight text-white leading-[1.08]">
            Boost Productivity <br />
            with Smarter Farming <br />
            Solutions
          </h1>

          {/* Subtitle */}
          <p className="mt-5 short:mt-2 max-w-xl text-sm sm:text-base md:text-lg short:text-sm text-white/90 leading-relaxed font-normal">
            Leveraging technology and traditional wisdom to help rural communities
            grow more, waste less, and work smarter.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 short:mt-4 flex flex-wrap items-center gap-3.5">
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
      <div className="container-content relative z-10 mt-auto pt-4 short:pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/20 pt-6 short:gap-3 short:pt-3">
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

          {/* Animated 3-Column Stats */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 md:gap-16">
            {/* Only figures BPPF has verified (see content.md): 120 forestation villages, the
                50,000 trees/village goal, and the five-pillar model. "Farmers supported" and
                "yield improvement" are still pending verification, so they must not appear here. */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={12000} suffix="+" />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Villages with Forestation
              </span>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={50000} />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Trees / Village Goal
              </span>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime">
                <AnimatedStatCounter target={5} />
              </div>
              <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-300">
                Integrated Pillars
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
   