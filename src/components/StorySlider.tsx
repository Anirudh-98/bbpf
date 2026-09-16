"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const stories = [
  {
    id: 1,
    quote:
      "The village adoption model restored our water catchment pond and brought back green cover. Within one harvest cycle, our borewell levels rose and natural farming lowered input costs dramatically.",
    author: "Rameshwar Patel",
    role: "Gram Pradhan & Natural Farmer",
    village: "Telangana Village Cluster",
    image: "/images/farmer-story.jpg",
  },
  {
    id: 2,
    quote:
      "Tree plantation across our common lands transformed local temperatures and wind patterns. Planting 50,000 indigenous trees gave our village a renewed sense of shared responsibility and pride.",
    author: "Devendra Sharma",
    role: "Community Stewardship Lead",
    village: "Karnataka Watershed Project",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "By integrating sacred agriculture and Ayurvedic herbs with our children's school programs, the next generation is reconnecting with traditional wisdom and scientific natural farming.",
    author: "Ananya Rao",
    role: "Rural Education Coordinator",
    village: "Village Development Network",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
];

export default function StorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? stories.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === stories.length - 1 ? 0 : curr + 1));
  };

  const current = stories[currentIndex];

  return (
    <section className="section bg-stone-50/70 border-y border-stone-200/80">
      <div className="container-content">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Stories from the Field</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl leading-tight">
              Real Stories Shared <br />
              by Our <span className="accent">Villagers & Farmers</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-stone-600">
            Hear directly from the grassroots communities and farmers who
            experience the tangible revival of soil, water, and livelihoods.
          </p>
        </Reveal>

        {/* Testimonial Card (Frame 00:20-00:23) */}
        <Reveal delay={0.1} className="mt-12 rounded-[2.5rem] border border-stone-200/80 bg-white p-6 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left text column */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <Quote className="h-10 w-10 text-lime fill-lime/30" />
                <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-charcoal">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-forest">{current.author}</h4>
                  <p className="text-xs text-stone-500">{current.role} • {current.village}</p>
                </div>

                {/* Circular arrow controls (Frame 00:20-00:23) */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-700 transition-all hover:bg-lime hover:text-forest-deep active:scale-95"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-700 transition-all hover:bg-lime hover:text-forest-deep active:scale-95"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-100 shadow-md lg:col-span-5 aspect-[4/3] sm:aspect-square">
              <Image
                key={current.image}
                src={current.image}
                alt={current.author}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
