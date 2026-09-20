import NextLink from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sprout, Wheat, Users, TrendingUp, Infinity as InfinityIcon, CheckCircle2 } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Stepper from "@/components/Stepper";
import StatBlock, { type Stat } from "@/components/StatBlock";
import HeroSection from "@/components/HeroSection";
import InteractiveSolutions from "@/components/InteractiveSolutions";
import InteractiveHowItWorks from "@/components/InteractiveHowItWorks";
import FivePillarsSection from "@/components/FivePillarsSection";
import FaqSection from "@/components/FaqSection";
import Reveal from "@/components/Reveal";
import BankDetailsCard from "@/components/BankDetailsCard";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Understand the Village",
    body: "Study its geography, agriculture, water systems and needs.",
  },
  {
    number: "02",
    icon: Sprout,
    title: "Restore the Natural Foundation",
    body: "Soil, water, trees, biodiversity.",
  },
  {
    number: "03",
    icon: Wheat,
    title: "Strengthen Agriculture",
    body: "Support farmers moving to natural farming.",
  },
  {
    number: "04",
    icon: Users,
    title: "Strengthen People",
    body: "Invest in education, health and knowledge.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Strengthen Livelihoods",
    body: "Build economic resilience through productive farming.",
  },
  {
    number: "06",
    icon: InfinityIcon,
    title: "Build Self-Sustainability",
    body: "A village capable of sustaining its own future.",
  },
];

const homeStats: Stat[] = [
  { value: "12000", label: "Villages with Forestation Efforts", verified: true },
  { value: "50,000", label: "Trees / Village Target", verified: true },
  { value: "5 Pillars", label: "Integrated Transformation Model", verified: true },
  { value: "100%", label: "Section 8 Non-Profit Governance", verified: true },
];

export default function HomePage() {
  return (
    <>
      {/* Redesigned Hero Section with animated numbers */}
      <HeroSection />

      {/* Micro-Trust Ticker Strip */}
      <div className="border-b border-stone-200/80 bg-stone-100/70 py-4">
        <div className="container-content flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-stone-600">
          <span className="text-stone-400 uppercase tracking-wider text-[11px]">
            Trusted by 12000 villages across India
          </span>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-lime-dark" />
              Section 8 Non-Profit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-lime-dark" />
              Forestation in 120 Villages
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-lime-dark" />
              Five Pillars Integrated Model
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-lime-dark" />
              Zero Chemical Agriculture
            </span>
          </div>
        </div>
      </div>

      {/* The Core Idea / Statement with Inline Photo Badge */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-5xl text-center">
            <Eyebrow>Our Belief</Eyebrow>

            {/* Headline with Inline Photo Badge */}
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl md:text-5xl leading-tight">
              A Village Is More Than a Place. <br />
              It Is an <span className="accent">Ecosystem.</span>
            </h2>

            {/* Statement text with inline rounded photo thumbnail */}
            <p className="body-copy mt-8 text-lg md:text-xl font-normal leading-relaxed text-stone-700">
              A village cannot become sustainable by fixing one problem at a time.
              Healthy agriculture depends on living soil, water restoration, and
              planting indigenous trees
              <span className="inline-flex align-middle mx-2.5 overflow-hidden rounded-full h-10 w-16 border-2 border-lime shadow-sm relative">
                <Image
                  src="/images/pillar-forestation.webp"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              while resilient communities depend on education, healthcare, and
              traditional knowledge passed down through generations.
            </p>

            {/* Styled Pull-Quote */}
            <div className="mt-12 rounded-3xl border border-stone-200/80 bg-stone-50/90 p-8 sm:p-10 shadow-soft">
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-snug text-forest-light">
                &ldquo;Restore the land. Restore water. Restore agriculture.
                Strengthen communities. Preserve culture. Build self-reliant
                villages.&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Solutions Accordion with Dynamic Photo Preview */}
      <InteractiveSolutions />

      {/* Interactive "How It Works" Tabbed Showcase with Floating Widgets */}
      <InteractiveHowItWorks />

      {/* Five Pillars: One Mission System */}
      <FivePillarsSection />

      {/* The 6-Step Village Transformation Model */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Model</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl">
              From One Investment to a <br />
              <span className="accent">Self-Sustaining</span> Village
            </h2>
            <p className="mt-4 text-sm md:text-base text-stone-600">
              Our structured 6-step roadmap ensures systematic execution from
              ground assessment to long-term village autonomy.
            </p>
          </Reveal>

          <div className="mt-12">
            <Stepper steps={steps} />
          </div>

          <div className="mt-10 flex justify-center">
            <NextLink
              href="/adopt-a-village"
              className="group inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm md:text-base font-bold text-forest shadow-sm transition-all hover:bg-stone-50 hover:border-stone-400"
            >
              <span>See How Adoption Works</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NextLink>
          </div>
        </div>
      </section>

      {/* Impact Snapshot (Data-Driven Development) */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Measured, Not Assumed</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl">
              Data-Driven Rural Development
            </h2>
            <p className="mt-4 text-sm md:text-base text-stone-600">
              Clear accountability and verified field results across all our
              adopted village clusters.
            </p>
          </Reveal>

          <div className="mt-12">
            <StatBlock stats={homeStats} />
          </div>

          <div className="mt-8 text-center">
            <NextLink
              href="/impact"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-light"
            >
              <span>View the full impact dashboard</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NextLink>
          </div>
        </div>
      </section>

      {/* Tradition & Ancient Wisdom Strip */}
      <section className="section bg-stone-50/70 border-y border-stone-200/80">
        <div className="container-content">
          <Reveal className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-stone-200/80 shadow-lifted">
              <Image
                src="/images/home-parampara-elder-and-youth.webp"
                alt="An elderly farmer showing millet seeds to a young man holding a tablet"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <Eyebrow>Parampara</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl">
                Ancient Wisdom. <span className="accent">Contemporary</span>{" "}
                Responsibility.
              </h2>
              <p className="body-copy mt-6 text-base md:text-lg leading-relaxed text-stone-600">
                Traditional knowledge can provide the principles — natural farming,
                soil stewardship, water conservation, Ayurveda. Modern tools can
                provide the means — planning, monitoring, education, data. BPPF brings
                the two together.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <NextLink
                  href="/about#philosophy"
                  className="group inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-bold text-forest shadow-sm transition-all hover:bg-stone-50 hover:border-stone-400"
                >
                  <span>Read Our Philosophy</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </NextLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Direct Bank Transfer / Support Us */}
      <section id="donate" className="section-sm scroll-mt-28 bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Support Directly</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-4xl">
              Prefer a Direct <span className="accent">Bank Transfer?</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-stone-600">
              You can contribute directly to BPPF using the account details
              below, or visit our Participate page for other ways to give.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mx-auto mt-10 max-w-xl rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-10"
          >
            <BankDetailsCard />

            <div className="mt-7 flex justify-center">
              <NextLink
                href="/participate"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-bold text-forest-deep shadow-sm transition-all hover:bg-lime-light hover:shadow-glow"
              >
                <span>More Ways to Participate</span>
                <ArrowUpRight className="h-4 w-4" />
              </NextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
