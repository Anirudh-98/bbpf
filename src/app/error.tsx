"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { contactInfo } from "@/data/site";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // The digest matches this error to the server-side log entry.
    console.error(error);
  }, [error]);

  return (
    <section className="section flex min-h-[70vh] items-center pt-16 md:pt-20">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Something went wrong</Eyebrow>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-forest md:text-5xl">
            We hit a <span className="accent">snag</span>
          </h1>
          <p className="body-copy mt-6">
            This page couldn&apos;t load properly. Please try again. If it keeps
            happening, write to us at{" "}
            <a href={`mailto:${contactInfo.email}`} className="font-semibold text-forest underline">
              {contactInfo.email}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => retry()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm md:text-base font-bold text-forest-deep shadow-sm transition-all duration-200 hover:bg-lime-light hover:shadow-glow"
            >
              <span>Try again</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm md:text-base font-semibold text-stone-800 shadow-sm transition-all duration-200 hover:bg-stone-50 hover:border-stone-400"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
