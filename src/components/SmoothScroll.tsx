"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A malformed escape in the URL hash (e.g. "#%E0%A4%A") makes decodeURIComponent throw.
function readHashId(): string {
  const raw = window.location.hash.slice(1);
  try {
    return decodeURIComponent(raw);
  } catch {
    return "";
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Without this the browser restores the old scroll offset on reload and back/forward.
    // Every page should open at the top instead.
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Clicking a link while the page is still gliding would otherwise let Lenis pull the
      // next page back down to the previous offset.
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    // Keep a reference: gsap.ticker.remove only works with the exact function that was added.
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Clicking a link to the page you're already on does no navigation, so nothing would scroll.
    // Take the visitor back to the top, like the other links do.
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (
        anchor.origin === window.location.origin &&
        anchor.pathname === window.location.pathname &&
        !anchor.hash
      ) {
        lenis.scrollTo(0);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenisRef.current = null;
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    // Every route change opens the new page at the top, unless the URL points at a #section.
    // Lenis ignores native scrolls while it is mid-glide, so it has to be told directly.
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Lenis caches the page height and its own scroll position. Both are stale right after a
    // route change, and it would clamp the jump to the previous page's length. Re-measure first.
    lenis.resize();

    const id = readHashId();
    const target = id ? document.getElementById(id) : null;

    if (target) {
      // Give Lenis an absolute position from the live DOM (not the element: it would compute
      // from its stale position and undo the browser's own jump). Honour the section's
      // scroll-margin so it lands clear of the sticky nav.
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const y = target.getBoundingClientRect().top + window.scrollY - margin;
      lenis.scrollTo(Math.max(0, y), { immediate: true, force: true });
      return;
    }

    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
