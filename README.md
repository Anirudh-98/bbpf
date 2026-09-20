# BPPF Website

Next.js (App Router) + React 18 + TypeScript + Tailwind CSS for the Bharathiya Parampara Prathistan Foundation. Copy and sitemap come from `content.md`.

## Run it

Requires Node.js 20.9 or newer.

```
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Before deploying, all three must pass:

```
npm run lint
npm run typecheck
npm run build
```

## Environment variables and secrets

Copy `.env.example` to `.env.local` locally, and set the same names in your host's dashboard (for example Vercel, Project, Settings, Environment Variables).

| Variable | Secret? | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | **Yes** | API key used by `/api/contact` to email enquiries (create one at resend.com). |
| `CONTACT_TO_EMAIL` | No | Inbox that receives contact-form enquiries. |
| `CONTACT_FROM_EMAIL` | No | Sender on a domain verified in Resend, e.g. `BPPF Website <noreply@bppfindia.org>`. |

The WhatsApp chat number (`+91 89770 07978`) is public contact information and lives in `src/data/site.ts` (`contactInfo.whatsappNumber`, country code plus number, digits only). Change it there.

Rules that keep secrets out of GitHub:

- `.env`, `.env.local`, `.env.*` and key/certificate files are git-ignored. Only `.env.example` (placeholders, no real values) is tracked.
- Never prefix a secret with `NEXT_PUBLIC_`. Those values are compiled into the JavaScript every visitor downloads.
- The email key is only read inside `src/app/api/contact/route.ts`, on the server.
- If a real key is ever committed, revoke it at the provider first; deleting the commit does not make it safe again.
- Turn on GitHub secret scanning and push protection (repository Settings, Code security).

Until the three contact-form variables are set, the form tells visitors it is unavailable and shows the direct email address. It never pretends a message was sent.

## Structure

- `src/app/` has one route per sitemap page, plus `api/contact` (form delivery), `error.tsx` / `global-error.tsx` and `not-found.tsx`.
- `src/components/` holds shared building blocks.
- `src/data/` holds pillar content and site-wide constants (nav links, bank details, contact info). The social links (Facebook, YouTube, Instagram) live in `contactInfo`; the footer icons and the contact-page rows read from there, and the Facebook one disappears if you remove `contactInfo.facebook`.
- `src/lib/contact.ts` holds the contact-form rules shared by the form and the API route.

## Content that still needs real data

- **Stories from the Field**: the homepage testimonial slider was removed. It used invented names and quotes with stock photos of strangers. Per `content.md` this section should launch only with 2 to 3 real, photographed, consented village stories; the old component is in git history (commit `f11e468`) if you want its layout back.
- **Hero and impact figures**: only figures marked verified in `content.md` are shown (120 forestation villages, the 50,000 trees per village goal, five pillars). Add farmers supported, yield and similar only once verified.
- **Privacy Policy and Terms**: the footer links currently point to `/transparency`, which contains neither. The site collects names, emails and phone numbers through the contact form, so publish real policies and update those links.
- **Transparency documents** and the **Adopt a Village** figures are marked pending compliance and legal review in the page copy.
- **Photos**: the site's pictures are AI-generated illustrations (the prompts are in `image-prompts.txt`). Replace them with real BPPF photography over time, keeping the same file names in `public/images/`. The full-size masters live in `public/final-images/` and are git-ignored; the site serves the optimised copies (WebP photos, a JPEG hero poster and share image in `public/images/`, and the compressed hero video in `public/videos/`). Photos use `.webp` file names on purpose: `next/image` caches by URL, so a new photo under an old `.jpg` name could show stale for hours after a deploy. If you replace a photo, give the new file a new name.
