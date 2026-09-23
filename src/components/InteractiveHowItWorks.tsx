"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, Droplets, Sprout, Users, MapPin } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import AnimatedStatValue from "./AnimatedStatValue";

const tabs = [
  {
    id: "overview",
    name: "Overview",
    subtitle: "Village Ecosystem",
    icon: Layers,
    image: "/images/home-how-village-overview.webp",
    alt: "Aerial view of a village with tiled roofs, a tank and green fields at golden hour",
    location: "12000+ Villages, India",
  },
  {
    id: "foundation",
    name: "Foundation",
    subtitle: "Soil & Water",
    icon: Droplets,
    image: "/images/home-how-check-dam.webp",
    alt: "Water spilling over a check dam on a hillside stream, with two farmers standing on the bund",
    location: "Telangana & Karnataka Watersheds",
  },
  {
    id: "farming",
    name: "Natural Farming",
    subtitle: "Zero Chemical",
    icon: Sprout,
    image: "/images/home-how-natural-farming-field.webp",
    alt: "A farming couple harvesting crops in a multi-layered natural farming field",
    location: "Organic Crop Demonstration Acres",
  },
  {
    id: "community",
    name: "Empowerment",
    subtitle: "Health & Education",
    icon: Users,
    image: "/images/home-how-gram-panchayat.webp",
    alt: "A woman addressing a Gram Panchayat community meeting held in the shade of a large tree",
    location: "Rural Gram Panchayats",
  },
];

export default function InteractiveHowItWorks() {
  const [activeTabId, setActiveTabId] = useState("overview");
  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="section bg-white">
      <div className="container-content">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl leading-tight">
              Village Transformation Made <br />
              Simple and <span className="accent">Sustainable</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-stone-600">
            A comprehensive rural model that connects soil health, rainwater
            harvesting, and community stewardship to empower villages for generations.
          </p>
        </Reveal>

        {/* Tab Selector Pill Bar */}
        <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:rounded-2xl sm:bg-stone-100/90 sm:p-1.5 sm:border sm:border-stone-200/80">
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-forest text-white shadow-md ring-1 ring-forest-light"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900 sm:bg-transparent sm:hover:bg-white/70"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                    isActive ? "bg-lime text-forest-deep" : "bg-stone-200/60 text-stone-500"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="truncate text-xs md:text-sm font-bold">
                    {tab.name}
                  </span>
                  <span
                    className={`truncate text-[11px] font-medium transition-colors duration-200 ${
                      isActive ? "text-white/70" : "text-stone-400"
                    }`}
                  >
                    {tab.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </Reveal>

        {/* Main Cinematic Visual Showcase with Floating Overlaid Widgets */}
        <Reveal delay={0.15} className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-stone-900 shadow-lifted min-h-[460px] sm:min-h-[520px] md:min-h-[580px]">
          <Image
            key={currentTab.image}
            src={currentTab.image}
            alt={currentTab.alt}
            fill
            sizes="(max-width: 640px) 160vw, (max-width: 1023px) 130vw, (max-width: 1440px) 100vw, 1200px"
            className="object-cover transition-all duration-700 hover:scale-105"
          />

          {/* Vignette & contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Location Badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-lime" />
            <span>{currentTab.location}</span>
          </div>
        </Reveal>

        {/* 4-Column Stat Strip */}
        <Reveal className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 rounded-3xl border border-stone-200/80 bg-white p-6 md:p-8 shadow-soft divide-stone-200/80 sm:divide-x">
          <div className="flex flex-col items-center px-4 text-center">
            <AnimatedStatValue
              value="12000+"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest"
            />
            <span className="mt-1 text-xs md:text-sm font-semibold text-stone-600">
              Villages with Forestation
            </span>
            <span className="text-[11px] text-stone-400">Active projects</span>
          </div>

          <div className="flex flex-col items-center px-4 text-center">
            <AnimatedStatValue
              value="50,000"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest"
            />
            <span className="mt-1 text-xs md:text-sm font-semibold text-stone-600">
              Trees / Village Goal
            </span>
            <span className="text-[11px] text-stone-400">Green cover restore</span>
          </div>

          <div className="flex flex-col items-center px-4 text-center">
            <AnimatedStatValue
              value="5 Core"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest"
            />
            <span className="mt-1 text-xs md:text-sm font-semibold text-stone-600">
              Integrated Pillars
            </span>
            <span className="text-[11px] text-stone-400">One village model</span>
          </div>

          <div className="flex flex-col items-center px-4 text-center">
            <AnimatedStatValue
              value="100%"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest"
            />
            <span className="mt-1 text-xs md:text-sm font-semibold text-stone-600">
              Section 8 Non-Profit
            </span>
            <span className="text-[11px] text-stone-400">Audited & transparent</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
