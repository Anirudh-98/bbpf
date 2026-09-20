# Outgrid Design System

## Overview

Outgrid is a modern agriculture technology platform featuring a **nature-inspired, high-contrast design system** with deep earth tones and vibrant accent colors. The visual language combines photography-heavy layouts with clean typography, organic rounded shapes, and purposeful whitespace. The base canvas alternates between **pure white** (`{colors.canvas}` — #ffffff) and **deep charcoal** (`{colors.dark-bg}` — #1a1a1a), with a single energetic accent color **lime-green** (`{colors.primary}` — #b8e034) carrying every primary CTA, hover states, and key brand moments. Typography is modern and approachable, using a sans-serif stack with confident weights that vary by context. The shape language is **rounded and organic**, reflecting the agricultural theme—cards use 12px radius, buttons are 8px, and interactive elements feel natural and touchable.

**Key Characteristics:**
- Dual-surface design: white canvas for light sections, dark charcoal for hero and featured content
- Single vibrant accent color: `{colors.primary}` (#b8e034 — "Lime Green") carries every CTA, hover indicator, and brand accent
- Clean sans-serif typography with confident weight variation (400–700)
- Rounded, organic shapes throughout—cards, buttons, and badges feel natural
- Photography-first approach with text overlays using transparent backdrops for readability
- High contrast between dark backgrounds and white text for brand moments
- Generous spacing reinforcing premium, approachable positioning

---

## Colors

### Brand & Accent
- **Lime Green** (`{colors.primary}` — #b8e034): The single brand accent. Used for primary CTA buttons (Reserve, Explore, Learn More), hover states on interactive elements, numbered lists, and inline brand highlights. The most energetic color in the system—represents growth and sustainability.
- **Lime Green Active** (`{colors.primary-active}` — #9ecc1c): The press / pointer-down variant. Slightly more saturated and darker, used on `{component.button-primary-active}`.
- **Lime Green Disabled** (`{colors.primary-disabled}` — #d4f284): A pale tint used on disabled CTAs and secondary states.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default light background for body sections, card containers, and editorial zones.
- **Dark Background** (`{colors.dark-bg}` — #1a1a1a): Deep charcoal used for hero sections, featured full-width bands, and high-impact zones. Creates dramatic contrast for white text.
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): Barely-off-white used for disabled states, subtle dividers, and light background zones without full contrast.
- **Surface Strong** (`{colors.surface-strong}` — #2a2a2a): Secondary dark surface for layered dark sections and elevated dark components.
- **Card Surface** (`{colors.card-surface}` — #ffffff): Explicit white for card containers on light backgrounds, with subtle shadow elevation.

### Text & Contrast
- **Ink** (`{colors.ink}` — #1a1a1a): The dominant text color on light surfaces. Display headlines, body paragraphs, and primary links. Near-black for maximum readability.
- **Ink Inverted** (`{colors.ink-inverted}` — #ffffff): White text on dark surfaces—headlines, body copy, and CTAs on dark backgrounds.
- **Body** (`{colors.body}` — #4a4a4a): Secondary running-text color for longer-form copy, meta information, and sub-labels where `{colors.ink}` would feel too heavy.
- **Body Light** (`{colors.body-light}` — #707070): Muted text for captions, timestamps, and secondary metadata.
- **Muted** (`{colors.muted}` — #999999): Sub-titles, disabled states, and placeholder text. Used sparingly to maintain hierarchy.

### Borders & Dividers
- **Hairline** (`{colors.hairline}` — #e0e0e0): Default 1px border tone on light backgrounds—card borders, input outlines, section dividers.
- **Hairline Dark** (`{colors.hairline-dark}` — #404040): 1px border on dark backgrounds, for separation without contrast loss.
- **Border Strong** (`{colors.border-strong}` — #cccccc): A heavier stroke used on focused input fields and emphasized borders.

### Semantic Colors
- **Success** (`{colors.success}` — #4caf50): Positive states, checkmarks, and confirmations.
- **Warning** (`{colors.warning}` — #ff9800): Alerts and cautionary messaging.
- **Error** (`{colors.error}` — #f44336): Inline error text and validation failures.
- **Info** (`{colors.info}` — #2196f3): Informational messaging and tooltips.

### Scrim & Overlay
- **Scrim** (`{colors.scrim}` — #000000 at 50% opacity): Global modal backdrop. Stored as base hex; opacity applied at render time.
- **Photo Overlay Dark** (`{colors.overlay-dark}` — #000000 at 30% opacity): Applied over photography for text readability on image backgrounds.
- **Photo Overlay Light** (`{colors.overlay-light}` — #ffffff at 20% opacity): Subtle light overlay on dark images for depth.

---

## Typography

### Font Family
The system runs **Inter** or **Segoe UI** for all text—display, body, navigation, captions, and microcopy. Fallback stack: `"Inter", "Segoe UI", -apple-system, system-ui, sans-serif`. This ensures clean, modern rendering across all contexts.

**No separate display family.** A single sans-serif stack carries the entire hierarchy through confident weight variation (400–700).

### Hierarchy & Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use | Text Alignment |
|---|---|---|---|---|---|---|
| `{typography.display-2xl}` | 48px | 700 | 1.2 | -0.5px | Hero h1 ("Revolutionizing Agriculture Through Innovation") | Left |
| `{typography.display-xl}` | 36px | 700 | 1.3 | -0.3px | Section h1 / Featured band titles | Left / Center |
| `{typography.display-lg}` | 28px | 600 | 1.35 | 0 | Section h2 ("Explore Outgrid's Pioneering Technology…") | Left |
| `{typography.display-md}` | 24px | 600 | 1.4 | 0 | Card titles, sub-section heads | Left |
| `{typography.display-sm}` | 20px | 600 | 1.45 | 0 | Feature card titles ("Increase Crop Yield") | Left |
| `{typography.title-lg}` | 18px | 600 | 1.4 | 0 | List item headers, card meta titles | Left |
| `{typography.title-md}` | 16px | 600 | 1.5 | 0 | Navigation labels, card headings | Left |
| `{typography.title-sm}` | 14px | 600 | 1.5 | 0 | Sub-labels, badge text | Left |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Display body copy (hero subheading) | Left |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running-text in card/section body | Left |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Meta information, card descriptions | Left |
| `{typography.caption}` | 13px | 400 | 1.4 | 0.5px | Figure captions, timestamps, secondary text | Left |
| `{typography.caption-sm}` | 12px | 400 | 1.3 | 0 | Footer legal, micro-labels | Left |
| `{typography.badge}` | 11px | 600 | 1.2 | 0.3px | Badge labels ("01", "NEW") | Center |
| `{typography.button-md}` | 16px | 600 | 1.5 | 0 | Primary CTA button labels | Center |
| `{typography.button-sm}` | 14px | 600 | 1.4 | 0 | Secondary button / link labels | Center |
| `{typography.stat-display}` | 32px | 700 | 1.1 | -0.2px | Large numbers in stat blocks ("500+") | Right / Center |
| `{typography.nav-link}` | 14px | 500 | 1.5 | 0 | Top nav and footer link labels | Center |

### Hierarchy Principles
- **Display weights (600–700)** are used confidently for headlines and feature moments—the system trusts typography for hierarchy.
- **Body weight (400)** is used exclusively for running text and secondary copy to maintain readability.
- **Hero h1 (48px / 700)** is the loudest typographic moment on the page—positioned prominently over the hero image.
- **Stat display (32px / 700)** is used for key numbers ("500+ Farms", "45% Water Saved") to create visual emphasis.
- **Numbered list headers** (`{typography.display-sm}` 20px / 600) use the primary accent color to create visual hierarchy.

### Text Alignment Rules
- **Left alignment** is the default for all body copy, card text, and narrative content.
- **Center alignment** is used for:
  - Hero h1 and subheadings when above photography
  - Button labels within `{component.button-primary}` and `{component.button-secondary}`
  - Badge text and numbered list indicators
  - Modal headlines
- **Right alignment** is used for:
  - Stat numbers and metrics in data blocks
  - Price / value indicators
  - Footer legal text (when single-line)

### Font Substitute
If Inter and Segoe UI are unavailable, **Roboto** or **Open Sans** are acceptable open-source substitutes. Adjust display headlines down by ~1% in line-height to match Inter's tight cap height. Body text proportions transfer cleanly.

---

## Layout & Spacing

### Spacing System
- **Base unit:** 8px (with 4px micro-step).
- **Token scale:** 
  - `{spacing.xxs}` 4px
  - `{spacing.xs}` 8px
  - `{spacing.sm}` 12px
  - `{spacing.md}` 16px
  - `{spacing.base}` 24px
  - `{spacing.lg}` 32px
  - `{spacing.xl}` 48px
  - `{spacing.xxl}` 64px
  - `{spacing.section}` 80px

### Spacing Rules by Context

| Context | Vertical Padding | Horizontal Padding | Margin Between |
|---|---|---|---|
| Hero Section | 80px (top/bottom) | 40px (left/right) | — |
| Featured Band (dark bg) | 64px (top/bottom) | 40px (left/right) | — |
| Content Section (light bg) | 48px (top/bottom) | 24px (left/right) | — |
| Card Container | 24px | 24px | 16px (between cards) |
| Card Internal (meta/text) | — | 16px (text block) | — |
| List Item Padding | 12px (top/bottom) | 16px (left/right) | 8px (between rows) |
| Button Internal | 14px (vertical) | 24px (horizontal) | — |
| Form Input Padding | 12px (vertical) | 16px (horizontal) | 16px (between fields) |
| Footer Column Gutter | — | 32px | — |

### Grid & Container
- **Max content width:** ~1200px centered on desktop. Editorial sections cap tighter at ~1080px.
- **Hero banner:** Full viewport width with 40px horizontal padding on desktop; edge-to-edge on mobile.
- **Card grid (features):** 3-column grid at desktop with 16px gutter; 2-column at tablet; 1-column at mobile.
- **Stat blocks:** 3-column grid with centered content; 2-column at tablet; 1-column at mobile.
- **Image grid (testimonials):** 2-3 column layout depending on viewport; images maintain aspect ratio with card padding.
- **Footer:** 4-column link groups at desktop, collapsing to 2-column at tablet and 1-column at mobile.

### Whitespace Philosophy
Sections are separated by **80px of vertical breathing room** (top + bottom padding) to create visual hierarchy and reading rhythm. Within card grids, items sit **16px apart** to balance density with clarity. Hero sections get the most whitespace—generous top margin and full-width treatment. Testimonial / image-heavy sections use full-width photo blocks with minimal internal padding to maximize impact.

---

## Components

### Buttons

**`button-primary`**
- Background: `{colors.primary}` (#b8e034)
- Text color: `{colors.ink}` (#1a1a1a) — dark text on lime green for contrast
- Border radius: 8px
- Padding: 14px vertical × 24px horizontal
- Height: 48px
- Font: `{typography.button-md}` (16px / 600)
- Text alignment: Center
- Cursor: pointer
- Used for: "Explore Now", "Learn More", "Reserve", primary CTAs

**`button-primary-active`**
- Background: `{colors.primary-active}` (#9ecc1c) — darker lime on press
- Text color: `{colors.ink}` (#1a1a1a)
- No transform or shadow change; immediate color flip

**`button-primary-disabled`**
- Background: `{colors.primary-disabled}` (#d4f284) — pale lime tint
- Text color: `{colors.ink}` (#1a1a1a)
- Cursor: not-allowed
- Opacity: 0.6

**`button-secondary`**
- Background: `{colors.surface-soft}` (#f5f5f5)
- Text color: `{colors.ink}` (#1a1a1a)
- Border: 1px solid `{colors.hairline}` (#e0e0e0)
- Border radius: 8px
- Padding: 14px vertical × 24px horizontal
- Height: 48px
- Font: `{typography.button-sm}` (14px / 600)
- Text alignment: Center
- Used for: "Cancel", "Secondary Action", alternative CTAs

**`button-tertiary-text`**
- Background: transparent
- Text color: `{colors.ink}` (#1a1a1a)
- Border: none
- Text decoration: underline on hover
- Font: `{typography.button-sm}` (14px / 600)
- Used for: "Learn More", "View All", modal close

**`button-icon-round`**
- Background: `{colors.surface-soft}` (#f5f5f5)
- Border radius: 50% (fully circular)
- Padding: 12px (icon centered)
- Size: 44×44px minimum (touch-target)
- Icon color: `{colors.ink}` (#1a1a1a)
- Hover: background shifts to `{colors.primary}` (#b8e034)
- Used for: navigation arrows, info icons

### Search & Input Surfaces

**`text-input`**
- Background: `{colors.canvas}` (#ffffff)
- Border: 1px solid `{colors.hairline}` (#e0e0e0)
- Border radius: 8px
- Padding: 12px vertical × 16px horizontal
- Height: 44px
- Font: `{typography.body-md}` (16px / 400)
- Placeholder text: `{colors.muted}` (#999999)
- On focus: border color changes to `{colors.ink}` (#1a1a1a), border width increases to 2px
- Label above: `{typography.caption}` (13px / 400) in `{colors.body}` (#4a4a4a)

**`text-area`**
- Same as text-input but with multi-line support
- Min height: 120px
- Max height: 300px
- Resize: vertical only

### Navigation

**`top-nav`**
- Background: `{colors.canvas}` (#ffffff)
- Height: 64px
- Border bottom: 1px solid `{colors.hairline}` (#e0e0e0)
- Logo: flush left, 24px padding
- Nav links: centered, `{typography.nav-link}` (14px / 500) in `{colors.ink}`
- CTA button: flush right, `{component.button-primary}`
- Padding: 12px horizontal

**`nav-link-active`**
- Text color: `{colors.primary}` (#b8e034)
- Border bottom: 2px solid `{colors.primary}` (#b8e034)
- Font weight: 600

**`nav-link-inactive`**
- Text color: `{colors.body}` (#4a4a4a)
- Border bottom: none
- Font weight: 500

### Cards & Containers

**`feature-card`**
- Background: `{colors.canvas}` (#ffffff)
- Border: 1px solid `{colors.hairline}` (#e0e0e0)
- Border radius: 12px
- Padding: 24px
- Image height: 200px (if present)
- Image border radius: 12px (top only if image is at top)
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.08)` on hover
- Title: `{typography.display-sm}` (20px / 600) in `{colors.ink}`
- Description: `{typography.body-sm}` (14px / 400) in `{colors.body}`
- Footer CTA: `{component.button-tertiary-text}` or small `{component.button-secondary}`

**`card-with-number`**
- Featured list card with large numbered heading
- Number: `{typography.display-sm}` (20px / 600) in `{colors.primary}` (#b8e034)
- Title: `{typography.title-lg}` (18px / 600) in `{colors.ink}`
- Description: `{typography.body-sm}` (14px / 400) in `{colors.body}`
- Arrow indicator: → in `{colors.primary}` (#b8e034), flush right

**`image-card`**
- Aspect ratio: 16:9 (photography) or 1:1 (square grid)
- Border radius: 12px
- Image overflow: hidden with rounded corners
- Overlay: optional text with `{colors.overlay-dark}` at 30% opacity
- Caption: positioned bottom-left, `{colors.ink-inverted}` (#ffffff), `{typography.caption}` (13px / 400)
- Shadow: `0 8px 16px rgba(0, 0, 0, 0.12)` on hover

**`hero-banner`**
- Background: photography full-width with `{colors.overlay-dark}` at 30% opacity
- Min height: 500px (desktop) / 300px (mobile)
- Padding: 80px top/bottom, 40px left/right
- Text alignment: Left (unless centered design specified)
- Headline: `{typography.display-2xl}` (48px / 700) in `{colors.ink-inverted}` (#ffffff)
- Subheading: `{typography.body-lg}` (18px / 400) in `{colors.ink-inverted}` (#ffffff)
- CTA button: `{component.button-primary}`

**`stat-block`**
- Layout: grid 3-column (desktop), 2-column (tablet), 1-column (mobile)
- Stat number: `{typography.stat-display}` (32px / 700) in `{colors.primary}` (#b8e034), right-aligned
- Stat label: `{typography.caption}` (13px / 400) in `{colors.body}` (#4a4a4a), left-aligned below number
- Padding: 24px per cell
- Border: none (unless separated by hairlines)

### Badges & Tags

**`badge-primary`**
- Background: `{colors.primary}` (#b8e034)
- Text color: `{colors.ink}` (#1a1a1a)
- Border radius: 12px (pill-ish)
- Padding: 6px vertical × 12px horizontal
- Font: `{typography.badge}` (11px / 600)
- Text alignment: Center
- Used for: "NEW", "Featured", status labels

**`badge-secondary`**
- Background: `{colors.surface-soft}` (#f5f5f5)
- Text color: `{colors.body}` (#4a4a4a)
- Border: 1px solid `{colors.hairline}` (#e0e0e0)
- Border radius: 12px
- Padding: 6px vertical × 12px horizontal
- Font: `{typography.badge}` (11px / 600)

**`badge-number`**
- Background: `{colors.primary}` (#b8e034)
- Text color: `{colors.ink}` (#1a1a1a)
- Border radius: 50% (fully circular)
- Width: 32px, Height: 32px
- Font: `{typography.badge}` (11px / 600), centered
- Used for: "01", "02", "03" in numbered lists

### Forms

**`form-group`**
- Label: `{typography.caption}` (13px / 400) in `{colors.body}` (#4a4a4a), margin-bottom 8px
- Input: `{component.text-input}`
- Helper text: `{typography.caption-sm}` (12px / 400) in `{colors.body-light}` (#707070), margin-top 4px
- Error text: `{typography.caption-sm}` (12px / 400) in `{colors.error}` (#f44336), margin-top 4px
- Spacing between groups: 24px

**`form-checkbox`**
- Box: 20×20px, 4px border radius, 1px border in `{colors.hairline}`
- Checked state: background `{colors.primary}` (#b8e034), checkmark in white
- Label: `{typography.body-md}` (16px / 400) in `{colors.ink}`, 12px margin-left

**`form-radio`**
- Circle: 20×20px diameter, 1px border in `{colors.hairline}`
- Checked state: outer circle `{colors.primary}` (#b8e034), inner dot 8px solid `{colors.primary}`
- Label: same as checkbox

### Footer

**`footer-standard`**
- Background: `{colors.canvas}` (#ffffff) or `{colors.surface-soft}` (#f5f5f5)
- Border top: 1px solid `{colors.hairline}` (#e0e0e0)
- Padding: 64px top/bottom, 40px left/right
- Layout: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Column gutter: 32px

**`footer-column-head`**
- Font: `{typography.title-md}` (16px / 600)
- Color: `{colors.ink}` (#1a1a1a)
- Margin-bottom: 16px

**`footer-link`**
- Font: `{typography.body-sm}` (14px / 400)
- Color: `{colors.body}` (#4a4a4a)
- Hover: color shifts to `{colors.primary}` (#b8e034)
- Margin-bottom: 12px

**`footer-legal`**
- Background: `{colors.dark-bg}` (#1a1a1a)
- Color: `{colors.body-light}` (#707070)
- Font: `{typography.caption-sm}` (12px / 400)
- Padding: 24px
- Text alignment: Center (stacked at mobile)

---

## Elevation & Shadow

The system uses **two shadow tiers**:

- **Flat (no shadow):** Hero, body, footer, all editorial bands — ~90% of surfaces.
- **Card hover elevation:** `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)` — applied to feature cards on pointer hover, input fields on focus, and dropdowns.
- **Prominent elevation:** `box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12)` — applied to modals, floating action buttons, and floating cards that demand visual separation.
- **Modal scrim:** `{colors.scrim}` (#000000 at 50% opacity) — global modal backdrop.

Depth comes from photography, layered backgrounds (dark featured sections over white body), rounded-corner clipping, and color contrast—shadow is reserved for interactive elements and elevated components.

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Top nav collapses to logo + hamburger; card grids stack 1-up; feature cards full-width; hero banner height reduced to 300px; footer 1-column; buttons remain full-width CTAs |
| Tablet | 640–1024px | Top nav keeps links but tightens spacing; card grids 2-up; hero height ~400px; footer 2-column; buttons stay wide |
| Desktop | 1024–1440px | Full top nav with all links visible; card grids 3-up; hero full height (500px+); footer 4-column; max content width 1200px |
| Wide | > 1440px | Content width caps at 1200px; gutters absorb extra space |

### Touch Targets
- Primary CTAs: minimum 48×48px (WCAG AAA compliant).
- Icon buttons: 44×44px circular minimum.
- Input fields: 44px height minimum.
- Link targets: 44×44px minimum hit area.

### Collapsing Strategy
- Top nav product tabs collapse into a hamburger menu below 640px.
- Card grids reduce columns cleanly: 3-up → 2-up → 1-up.
- Image grids maintain aspect ratio but reduce column count.
- Form fields stack single-column on mobile.
- Hero banner height reduces but maintains readable text size.
- Footer columns collapse from 4 → 2 → 1 progressively.

---

## Known Gaps & Future Considerations

- **Hover state micro-interactions:** Transition timings and transform effects not explicitly documented; recommend 300ms ease cubic-bezier(0.4, 0, 0.2, 1).
- **Focus states for accessibility:** Input fields have 2px border on focus; other interactive elements need explicit focus ring styling.
- **Loading states / skeleton screens:** Not visible in extracted surfaces.
- **Dark mode:** Design system is light-first; dark mode not implemented.
- **Animation & motion:** Scroll behaviors, parallax effects, and transition curves extracted from design but not formally specified.
- **Sub-product variations:** Any product-specific (e.g., Tier-specific) typography or color overrides not captured.
- **Micro-copy stylization:** Tooltip styling, inline code blocks, and special text treatments not fully documented.

---

## Implementation Notes

### CSS Variables (Recommended)
Use CSS custom properties to implement this system:

```css
:root {
  /* Colors */
  --color-primary: #b8e034;
  --color-primary-active: #9ecc1c;
  --color-primary-disabled: #d4f284;
  --color-ink: #1a1a1a;
  --color-ink-inverted: #ffffff;
  --color-body: #4a4a4a;
  --color-body-light: #707070;
  --color-muted: #999999;
  --color-canvas: #ffffff;
  --color-dark-bg: #1a1a1a;
  --color-surface-soft: #f5f5f5;
  --color-hairline: #e0e0e0;

  /* Typography */
  --font-family-base: "Inter", "Segoe UI", -apple-system, system-ui, sans-serif;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-base: 24px;
  --spacing-lg: 32px;
  --spacing-section: 80px;

  /* Border Radius */
  --rounded-sm: 8px;
  --rounded-md: 12px;
  --rounded-full: 50%;

  /* Shadows */
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
}
```

### Typography Scale in Practice
All font sizes, weights, and line heights should be defined once and referenced consistently across components. Never hard-code typographic values—use tokens.

### Spacing Consistency
Always use the spacing scale (`--spacing-xs`, `--spacing-md`, etc.). Never use arbitrary pixel values for margin, padding, or gaps. This ensures visual coherence and makes responsive design adjustments predictable.
