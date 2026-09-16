import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  contactInfo,
  footerMoreLinks,
  footerQuickLinks,
} from "@/data/site";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Background Image: public/footerbg.png */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footerbg.png"
          alt="Field background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft top gradient fade transitioning from page into scenic photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-black/20 pointer-events-none" />
      </div>

      <div className="container-content relative z-10">
        {/* Top CTA Block on Background Image (Matching Reference Picture) */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-forest leading-[1.15]">
            Help Build an Entire Ecosystem, <br />
            <span className="accent text-forest">Not Just a Single Project.</span>
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            Through Adopt a Village, your investment brings together soil, water,
            agriculture, trees, education, health and livelihoods into one
            coordinated village transformation.
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              href="/adopt-a-village"
              className="rounded-full bg-[#183a27] hover:bg-[#112a1c] text-white px-8 py-3.5 text-sm font-semibold shadow-md transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Floating White Card sitting on the scenic field (Matching Reference Picture) */}
        <div className="relative mx-auto mt-16 sm:mt-24 max-w-7xl rounded-[32px] sm:rounded-[40px] bg-white/95 backdrop-blur-md p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-white/80 ring-1 ring-white/60">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand & Mission Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/bppflogo.png"
                  alt="BPPF Logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <span className="text-xl font-extrabold tracking-tight text-forest">
                  BPPF
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-stone-600">
                Bharathiya Parampara Prathistan Foundation empowers rural communities
                with ecological restoration, traditional wisdom, and sustainable farming
                for enduring self-reliance.
              </p>

              {/* Email Pill Badge */}
              <div className="mt-5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-medium text-stone-700 shadow-xs hover:border-stone-300 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-stone-500" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-xs font-bold text-stone-700">Social Media</p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={contactInfo.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-lime hover:text-forest-deep transition-all shadow-xs"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={contactInfo.youtube.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn / YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-lime hover:text-forest-deep transition-all shadow-xs"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={contactInfo.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-lime hover:text-forest-deep transition-all shadow-xs"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={contactInfo.youtube.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-700 hover:bg-lime hover:text-forest-deep transition-all shadow-xs"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-stone-600 transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company / Organization Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5">
                {footerMoreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-stone-600 transition-colors hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-forest"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-forest"
                  >
                    Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-forest"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Services & Support
              </h4>
              <div className="mt-4 space-y-2 text-xs text-stone-600">
                <p className="font-semibold text-forest">Village Adoption</p>
                <p className="text-stone-500">Natural Farming Support</p>
                <p className="text-stone-500">Forestation Stewardship</p>
                <Link
                  href="/#donate"
                  className="mt-3 inline-block text-xs font-bold text-forest transition-colors hover:text-forest-light"
                >
                  View Bank Transfer Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar Divider */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4 border-t border-stone-200/80 pt-6 text-center text-xs text-stone-500 sm:flex-row sm:justify-between sm:text-left">
            <p>© 2026 Bharathiya Parampara Prathistan Foundation. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-stone-500">
              <Link href="/transparency" className="whitespace-nowrap hover:text-forest transition-colors">
                Terms of Service
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/transparency" className="whitespace-nowrap hover:text-forest transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">•</span>
              <span className="whitespace-nowrap">CIN: {contactInfo.cin}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
