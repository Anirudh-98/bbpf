import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Wheat, Users, ScrollText, Infinity as InfinityIcon } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import LeadershipCard from "@/components/LeadershipCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who BPPF is, our philosophy, our vision and mission, and the leadership guiding our work.",
};

const philosophyItems = [
  {
    number: "01",
    icon: Leaf,
    title: "Nature is a system.",
    body: "Soil, water, plants, animals and people are interconnected.",
  },
  {
    number: "02",
    icon: Wheat,
    title: "Agriculture is more than production.",
    body: "It's the foundation of food, livelihood and rural economic resilience.",
  },
  {
    number: "03",
    icon: Users,
    title: "Development must build capability, not dependence.",
    body: "Our work is designed to strengthen a village's own capacity, not create reliance on outside support.",
  },
  {
    number: "04",
    icon: ScrollText,
    title: "Traditional knowledge has contemporary value.",
    body: "In agriculture, wellness, environment and community, traditional practice still has real, applicable value today.",
  },
  {
    number: "05",
    icon: InfinityIcon,
    title: "A village should be able to sustain its own future.",
    body: "The end goal of every intervention is a village capable of carrying itself forward.",
  },
];

const visionPoints = [
  "soil remains productive",
  "water resources are protected",
  "agriculture supports livelihoods",
  "trees and biodiversity are restored",
  "children have access to better education",
  "families have pathways to healthier lives",
  "traditional knowledge continues across generations",
  "local development strengthens long-term self-reliance",
];

const leadership = [
  {
    name: "Kosaraju Shiva Koti Ram",
    role: "Founder & Chairman",
    bio: "Visionary leader driving sustainable development and cultural preservation through agricultural innovation.",
  },
  {
    name: "Bairi Rani",
    role: "Director",
    bio: "Strategic director overseeing community engagement and environmental restoration.",
  },
  {
    name: "Bolla Srinivasa Omprakash",
    role: "Chief Adviser",
    bio: "Member of the Advisory Board.",
  },
  {
    name: "Sithram Dhara",
    role: "Senior Adviser",
    bio: "Member of the Advisory Board.",
  },
  {
    name: "G. Vinaypurush",
    role: "Chief Adviser",
    bio: "Member of the Advisory Board.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 2.1 Who We Are */}
      <section className="section pt-16 md:pt-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>About BPPF</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
              Who <span className="accent">We</span> Are
            </h1>
            <p className="body-copy mt-6">
              Bharathiya Parampara Prathistan Foundation is a Section 8
              Company (CIN: U85300TG2022NPL167836) working in rural
              development through environmental stewardship, sustainable
              agriculture, community development and the preservation of
              traditional knowledge.
            </p>
            <p className="body-copy mt-4">
              Our work connects six threads into one mission:{" "}
              <strong className="text-forest">
                Nature, Agriculture, Community, Education, Health, Culture.
              </strong>
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto mt-12 aspect-[3/4] w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-stone-200/80 shadow-lifted sm:aspect-[16/9] md:aspect-[16/7]">
            <Image
              src="/images/about-hero-village-dusk.webp"
              alt="Buffaloes and goats returning home along a dusty village lane at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <blockquote className="absolute inset-x-5 bottom-5 font-serif text-base italic leading-snug text-white sm:inset-x-8 sm:bottom-8 sm:text-lg md:inset-x-10 md:bottom-10 md:text-2xl">
              &ldquo;To provide Clean Air, Clean Water and Clean Food to
              society — by helping farmers move from chemical farming to
              natural farming, and by helping villages become
              self-sustaining.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 2.2 Our Philosophy */}
      <section id="philosophy" className="section-sm scroll-mt-28 bg-stone-50/70 border-y border-stone-200/80">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              <span className="accent">Parampara</span> Meets Possibility
            </h2>
            <p className="body-copy mt-6">
              <em className="font-serif not-italic">Parampara</em> means
              continuity — the transmission of knowledge, values and wisdom
              across generations. For BPPF, tradition isn&apos;t about
              staying in the past. It&apos;s about understanding what worked
              in harmony with nature, and applying it to today&apos;s
              challenges.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {philosophyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative flex flex-col gap-3.5 rounded-3xl border border-stone-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime/20 text-forest">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-forest md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* 2.3 Vision & Mission */}
      <section className="section">
        <Reveal className="container-content grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card md:p-10">
            <h2 className="text-2xl font-bold text-forest md:text-3xl">
              Our Mission
            </h2>
            <p className="body-copy mt-5">
              To contribute to environmentally responsible, socially
              empowered and economically self-sustaining rural communities —
              through sustainable agriculture, ecological restoration,
              education, health and the preservation of traditional
              knowledge.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card md:p-10">
            <h2 className="text-2xl font-bold text-forest md:text-3xl">
              Our Vision — Self-Sustaining Villages in{" "}
              <span className="accent">Harmony With Nature</span>
            </h2>
            <p className="mt-5 text-sm font-medium text-stone-500">
              We envision rural communities where:
            </p>
            <ul className="mt-4 space-y-2.5">
              {visionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* 2.4 Leadership */}
      <section className="section-sm bg-stone-50/70 border-y border-stone-200/80">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Tradition, Led Forward</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              Leadership
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <LeadershipCard key={leader.name} {...leader} />
            ))}
          </Reveal>
          
        </div>
      </section>
    </>
  );
}
