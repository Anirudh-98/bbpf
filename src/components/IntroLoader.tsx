"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_DISPLAY_MS = 1000;
const MAX_DISPLAY_MS = 4000;
const FADE_MS = 500;

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Lock scroll while the intro is showing.
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let done = false;

    function finish() {
      if (done) return;
      done = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      window.setTimeout(() => {
        setFadingOut(true);
        document.body.style.overflow = "";
        window.setTimeout(() => setVisible(false), FADE_MS);
      }, remaining);
    }

    // The hero section dispatches this once its background video can play.
    window.addEventListener("hero-video-ready", finish);
    // Fallback for pages without a hero video (or if the event never fires).
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
    // Hard cap so the intro never blocks the site indefinitely.
    const maxTimer = window.setTimeout(finish, MAX_DISPLAY_MS);

    return () => {
      window.removeEventListener("hero-video-ready", finish);
      window.removeEventListener("load", finish);
      window.clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-6 transition-opacity duration-500 ease-out ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/bppflogo.png"
        alt="BPPF Logo"
        width={573}
        height={502}
        priority
        className="h-20 w-auto sm:h-24 md:h-28"
      />
      <p className="mt-5 max-w-[280px] text-center text-sm font-extrabold uppercase tracking-wide text-forest sm:max-w-sm sm:text-base md:max-w-md md:text-lg">
        Bharathiya Parampara Prathistan Foundation
      </p>
    </div>
  );
}
