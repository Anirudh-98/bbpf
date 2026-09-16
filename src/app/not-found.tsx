import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] items-center pt-16 md:pt-20">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime/20">
            <Compass className="h-8 w-8 text-forest" strokeWidth={1.75} />
          </span>
          <div className="mt-5 flex justify-center">
            <Eyebrow>404</Eyebrow>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            This Path Doesn&apos;t <span className="accent">Lead Anywhere</span>
          </h1>
          <p className="body-copy mt-6">
            The page you&apos;re looking for may have been moved, renamed, or
            never existed. Let&apos;s get you back to solid ground.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <NextLink
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-all duration-200 hover:bg-lime-light hover:shadow-glow"
            >
              <span>Back to Homepage</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm md:text-base font-semibold text-stone-800 shadow-sm transition-all duration-200 hover:bg-stone-50 hover:border-stone-400"
            >
              Contact Us
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
