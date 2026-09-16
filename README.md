# BPPF Website

Next.js (App Router) + React + TypeScript + Tailwind CSS, built from `content.md` (copy/sitemap) and the BPPF palette defined in Part A of `content.md`.

## Setup

Node.js was not available on this machine when the project was generated, so dependencies have not been installed or verified. To run it:

1. Install [Node.js 18.18+ or 20+](https://nodejs.org).
2. From this folder:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Structure

- `src/app/` — one route per sitemap page (`/about`, `/approach`, `/pillars`, `/pillars/[slug]`, `/adopt-a-village`, `/impact`, `/participate`, `/transparency`, `/contact`, `/tradition-culture`).
- `src/components/` — shared building blocks (Nav, Footer, Eyebrow, ButtonPair, Accordion, Stepper, StatBlock, PillarCard, LeadershipCard, StoryCard, CtaBanner, EcosystemDiagram, ContactForm).
- `src/data/` — pillar content and site-wide constants (nav links, bank details, contact info) in one place.

## Notes carried over from content.md

- Stats without verified figures render as `—` / "Pending verification" instead of "0+", per content.md's guidance. Swap in real numbers in `src/data/*` and the relevant page files once available.
- The Adopt a Village page reframes the source PDF's "investment/ROI" language as a sponsorship model, with the detailed figures kept in a clearly labeled, non-primary reference block — per content.md's own compliance caution. Have BPPF's legal/compliance team review before this goes live.
- No real photography was supplied, so the design uses color, shape and typography (no image assets) rather than placeholder/stock photos or guessed image URLs. Swap in real village photography where the design calls for photo treatment (hero, CTA banners, story cards).
- Leadership bios and several stats are explicitly flagged in content.md as pending verification — same flags are preserved in the UI copy.
