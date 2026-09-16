import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import ButtonPair from "@/components/ButtonPair";
import Reveal from "@/components/Reveal";
import { getPillarBySlug, pillars } from "@/data/pillars";

export function generateStaticParams() {
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: pillar.name,
    description: pillar.hook,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const currentIndex = pillars.findIndex((p) => p.slug === pillar.slug);
  const next = pillars[(currentIndex + 1) % pillars.length];
  const Icon = pillar.icon;

  return (
    <section className="section pt-16 md:pt-20">
      <div className="container-content">
        <Link
          href="/pillars"
          className="text-sm font-bold text-forest hover:text-forest-light"
        >
          ← All Pillars
        </Link>

        <Reveal delay={0.05} className="mx-auto mt-8 max-w-3xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime/20">
            <Icon className="h-8 w-8 text-forest" strokeWidth={1.75} />
          </span>
          <div className="mt-5">
            <Eyebrow>{pillar.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            {pillar.headingLead}{" "}
            <span className="accent">{pillar.headingAccent}</span>
            {pillar.headingTrail ? ` ${pillar.headingTrail}` : ""}
          </h1>
          <p className="body-copy mt-6">{pillar.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-12 aspect-[16/8] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-stone-200/80 shadow-lifted">
          <Image
            src={pillar.image}
            alt={pillar.name}
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-soft">
            <h2 className="text-lg font-bold text-forest">Our Focus</h2>
            <ul className="mt-5 space-y-2.5">
              {pillar.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-stone-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-stone-200/80 bg-forest p-8 text-white shadow-soft">
            <h2 className="text-lg font-bold text-lime-light">
              The Objective
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85">
              {pillar.objective}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-6 text-center">
          <ButtonPair
            primary={{ label: "Adopt a Village", href: "/adopt-a-village" }}
            secondary={{ label: `Next: ${next.name} →`, href: `/pillars/${next.slug}` }}
          />
        </div>
      </div>
    </section>
  );
}
