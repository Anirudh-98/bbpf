"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6 md:pt-4 transition-all duration-300">
      <div
        className={`mx-auto flex max-w-content items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 ${scrolled
          ? "border-forest/20 bg-forest/90 text-white shadow-lifted backdrop-blur-xl"
          : "border-white/30 bg-black/25 text-white shadow-soft backdrop-blur-md"
          }`}
      >
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 pl-1 group">
          <Image
            src="/bppflogo.png"
            alt="BPPF Logo"
            width={573}
            height={502}
            className="h-10 w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-11"
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-tight text-white transition-colors">
              BPPF
            </span>
          </div>
        </Link>

        {/* Center Pill Segmented Nav Bar (Frame 00:00) */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md lg:flex shadow-inner">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "rounded-full bg-white px-4 py-1.5 text-xs md:text-sm font-semibold text-charcoal shadow-sm transition-all duration-200"
                    : "rounded-full px-3.5 py-1.5 text-xs md:text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/15 hover:text-white"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs md:text-sm font-semibold text-charcoal shadow-sm transition-all duration-200 hover:bg-lime hover:text-forest-deep active:scale-95"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`h-0.5 w-full bg-white transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="mx-auto mt-2 max-w-content rounded-3xl border border-white/20 bg-forest-deep/95 p-4 shadow-lifted backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "rounded-2xl bg-white px-4 py-3 text-sm font-bold text-charcoal"
                      : "rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                  }
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-lime px-4 py-3 text-sm font-bold text-forest-deep shadow-sm transition-all hover:bg-lime-light active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
