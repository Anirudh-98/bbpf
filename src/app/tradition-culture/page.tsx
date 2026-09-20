import type { Metadata } from "next";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tradition & Culture",
  description:
    "BPPF works to preserve traditional practices and indigenous knowledge for the generations ahead.",
};

export default function TraditionCulturePage() {
  return (
    <section className="section pt-16 md:pt-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Preserving What Should Not Be Lost</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            Tradition &amp; <span className="accent">Culture</span>
          </h1>
          <p className="body-copy mt-6">
            A village carries more than land and buildings — it carries
            agricultural knowledge, food traditions, wellness practices,
            local ecological knowledge and the relationships between
            generations. BPPF works to preserve traditional practices and
            indigenous knowledge for the generations ahead.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 aspect-[16/8] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-stone-200/80 shadow-lifted">
          <Image
            src="/images/tradition-hero-bullock-ploughing.webp"
            alt="A farmer ploughing a red-soil field with a pair of bullocks at dawn while egrets follow"
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft md:p-12">
          <h2 className="text-2xl font-bold text-forest md:text-3xl">
            Ancient Wisdom, <span className="accent">Contemporary</span>{" "}
            Responsibility
          </h2>
          <p className="body-copy mt-5">
            Traditional knowledge can inform natural farming, soil
            stewardship, water conservation, Ayurveda, yoga and community
            practice. Contemporary tools can support measurement, planning,
            monitoring, education and communication. Responsible development
            brings the two together.
          </p>
        </Reveal>

        <p className="mx-auto mt-12 max-w-xl text-center font-serif text-xl italic text-forest-light md:text-2xl">
          Development should not require communities to abandon their
          identity.
        </p>
      </div>
    </section>
  );
}
