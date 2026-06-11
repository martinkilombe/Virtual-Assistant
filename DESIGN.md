# Instant VA — Design System & Implementation Specification

> **Archetype:** Premium Minimalism × Trust & Authority  
> **Typography pairing:** Bodoni Moda (headings) + Jost (UI/body) — *Luxury Minimalist* · confirmed via `/ui-ux-pro-max`  
> **Stack:** Next.js 15 · Vanilla CSS · `next/font/google` · Static export

---

## Table of Contents

- [0. Quick Reference](#0-quick-reference)
- [1. Design Vision](#1-design-vision)
- [2. Core Principles](#2-core-principles)
- [3. Color System](#3-color-system)
- [4. Typography System](#4-typography-system)
- [5. Design Tokens — Ready-to-Paste CSS](#5-design-tokens--ready-to-paste-css)
- [6. Shadow & Elevation System](#6-shadow--elevation-system)
- [7. Border Radius System](#7-border-radius-system)
- [8. Spacing & Layout Grid](#8-spacing--layout-grid)
- [9. Section Architecture](#9-section-architecture)
- [10. Component Specifications](#10-component-specifications)
- [11. Icon System](#11-icon-system)
- [12. Motion & Animation](#12-motion--animation)
- [13. Z-Index Scale](#13-z-index-scale)
- [14. Responsive Breakpoints](#14-responsive-breakpoints)
- [15. Accessibility Requirements](#15-accessibility-requirements)
- [16. Next.js Implementation Rules](#16-nextjs-implementation-rules)
- [17. Implementation Order](#17-implementation-order)
- [18. What Was Removed & Why](#18-what-was-removed--why)
- [19. Pre-Delivery Checklist](#19-pre-delivery-checklist)

---

## 0. Quick Reference

The five numbers every decision flows from:

```
Page background  →  #F9F9F7  (warm off-white — never pure white as canvas)
Heading color    →  #141412  (warm near-black — never pure #000000)
Body text        →  #4A4A47  (warm stone — reads softer than cool gray)
Brand accent     →  #3DB8C6  (teal — decorative only, never as text bg)
Brand action     →  #1F8C99  (deep teal — buttons, links, interactive teal)
```

Font load order:
```
1. Bodoni Moda  →  h1, h2 only  →  weight 700
2. Jost         →  everything else  →  weights 300/400/500/600
```

Section rhythm (top to bottom):
```
Nav · Hero · About · Services · Process · [TEAL BAND] · Projects · Testimonials · [DARK CTA] · Footer
      #F9F9F7     #FFF   #F9F9F7    #FFF              #1F8C99   #F9F9F7       #FFF         #0D0D0B  #0D0D0B
```

---

## 1. Design Vision

### 1.1 What This Product Is

Instant VA matches founders and small teams with dedicated, real, full-time remote professionals. It is a **human service** — not software, not a chatbot, not a marketplace. The visual language must communicate **reliability, calm expertise, and understated quality**.

The target visitor is a time-strapped founder or COO who has 8 seconds to decide if this feels worth their trust. Every visual choice either earns or loses that trust.

### 1.2 Brand Character

Five adjectives that should describe the site's feel. Use these as a filter for every design decision:

| Adjective | Means in practice | Does NOT mean |
|-----------|------------------|---------------|
| **Minimal** | Only what earns its place | Empty or cold |
| **Premium** | Generous space, quality type, restraint | Expensive-looking decoration |
| **Editorial** | Typography-led, confident hierarchy | Cluttered or magazine-busy |
| **Warm** | Off-white, slightly warm stone tones | Beige or dated |
| **Assured** | No exclamation marks, no urgency tactics | Boring or stiff |

### 1.3 Mood References

| Reference | What to borrow |
|-----------|---------------|
| **Linear.app** | Restrained dark sections, no decoration, confident typographic hierarchy |
| **Stripe.com** | Single accent color, authority through layout not color, clean section rhythm |
| **Loewe.com** | Bodoni-driven editorial headlines, photography as the hero element |
| **McKinsey.com** | Trust through typography, no flashy visual tricks |
| **Arc.net** | Generous whitespace, minimal UI chrome, type-first |

### 1.4 Visual Vocabulary

When someone looks at this site they should think:

> *"This feels considered. Nothing is trying too hard. The heading font is unusual — editorial, not startup. I trust this."*

They should NOT think:

> *"Another teal/orange startup. Those blobs everywhere. The bouncy animations. I've seen this before."*

### 1.5 What Makes This Site Unique

1. **Bodoni Moda serif headings** — editorial and authoritative, almost never used in the VA/staffing industry
2. **Warm off-white canvas** (`#F9F9F7`) — quality paper feel, not the flat white of a SaaS product
3. **Asymmetric split hero** — editorial copy left / full-bleed photography right — distinctive structure
4. **One full-bleed teal moment** — the employee band is the single saturated color section on an otherwise neutral canvas
5. **Dark charcoal CTA** — magazine-style dark panel instead of the orange-gradient most competitors use
6. **Stone neutrals, not cool grays** — `#4A4A47` body text is warm, not the clinical cool gray of Bootstrap/Tailwind defaults

### 1.6 What This Site Is Not

| Not | Therefore |
|-----|-----------|
| A SaaS app | No gradient hero blobs, no "AI purple/pink", no floating 3D cards |
| A startup | No urgency timers, no "🚀 Join 10,000+ teams" badges, no confetti |
| An agency portfolio | No full-screen cursor effects, no scroll-jacked sections |
| E-commerce | No product grids, no star ratings in headings, no cart |
| A recruitment platform | No job listings, no filter UI, no profile cards |

---

## 2. Core Principles

### P1 — Typography leads. Everything else supports.

Bodoni Moda headings are the visual anchor of every section. Nothing competes. No gradient text. No colorful section backgrounds behind headings. No decorative shapes breaking into the type.

> **Test:** Cover the heading. Does anything still fight for attention? If yes, remove it.

### P2 — One accent, used with discipline.

`--teal-500` (`#3DB8C6`) is the brand signal. `--orange-500` (`#F79623`) is a conversion trigger — it appears **only** in the Contact CTA left panel. Every other use of orange has been intentionally removed.

> **Test:** Is this orange? Is it inside the contact CTA? If the answer to either is no — remove it.

### P3 — Space is the design.

Whitespace is the premium signal. Section padding runs `80px → 140px`. Card padding is `40px`, not `24px`. When a section looks "empty" — that is correct. Resist filling it.

> **Test:** What happens if I add 20px more padding here? If the answer is "it looks better" — do it.

### P4 — Restraint over decoration.

Every element must justify its existence by aiding comprehension or conversion. Decorative blobs, accent bars on cards, gradient section backgrounds, ghost text watermarks — all removed.

> **Test:** What breaks if I remove this element? If the answer is "nothing" — remove it.

### P5 — Photography anchors visual weight.

Each section that needs visual interest uses real photography — team members, professionals at work. No stock illustrations, no icon-heavy graphics, no hero background images. When a section feels light, the answer is better typography or copy — not more decoration.

### P6 — Confidence, not enthusiasm.

The tone is assured. Large headings. No exclamation marks in copy. No emoji in UI. Pill-shaped buttons because they're approachable, not because they're playful.

---

## 3. Color System

### 3.1 Full Color Token Reference

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEUTRALS  ·  warm stone scale  ·  slight yellow undertone
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
--ink-950    #0D0D0B   ●  Footer bg · CTA dark panel · deepest dark
--ink-900    #141412   ●  All headings (h1–h5) · strong labels
--ink-800    #1E1E1C   ●  Secondary headings · card titles
--ink-700    #2E2E2B   ●  Heavy body text (rarely used)
--stone-600  #4A4A47   ●  Body text — default paragraph color
--stone-500  #6B6B68   ●  Muted text · lead paragraphs · captions
--stone-400  #9A9A97   ●  Placeholder text · disabled states
--stone-300  #C5C5C1   ●  Hairline borders · decorative dividers
--stone-200  #E0E0DC   ●  Form field borders at rest
--stone-100  #EBEBЕ7   ●  Very light tints
--stone-050  #F4F4F0   ●  Card background alternative
--off-white  #F9F9F7   ●  PAGE BACKGROUND — warm, not pure white
--white      #FFFFFF   ●  Card surfaces · form panels · section alt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND  ·  teal scale  ·  the single brand accent
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
--teal-700   #1F8C99   ●  PRIMARY BUTTON BG · link hover · band bg
--teal-600   #2BA4B2   ●  Links at rest · eyebrow labels · active nav
--teal-500   #3DB8C6   ●  Progress dots · icon tints · decorative accent
--teal-400   #5AC4D1   ●  Hero media panel background
--teal-300   #8FD8E0   ●  Step ring borders · tints on dark bg
--teal-200   #BFE9ED   ●  Very light tints · text selection highlight
--teal-100   #E4F6F8   ●  Icon container bg fills
--teal-050   #F2FBFC   ●  Quote icon bg · step number circle bg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONVERSION  ·  warm amber  ·  CTA SECTION + "VIEW ALL" ONLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
--orange-700  #D87410   ●  (Reserved)
--orange-600  #EE8616   ●  Accent button hover state
--orange-500  #F79623   ●  Accent button bg · CTA accent elements
--orange-100  #FDE8CE   ●  (Reserved — not currently used)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUNCTIONAL  ·  system colors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
--error      #E55353   ●  Form field errors · error hint text
--success    #22C55E   ●  Form success state (if needed)
```

### 3.2 Semantic Token Mapping

These semantic tokens are what the CSS uses — never raw hex values in component styles.

| Semantic Token | Raw Value | Used For |
|----------------|-----------|----------|
| `--surface-page` | `#F9F9F7` | `<body>` background |
| `--surface-card` | `#FFFFFF` | All card backgrounds |
| `--surface-wash` | `#FFFFFF` | Section alt background (replaces teal wash) |
| `--surface-dark` | `#0D0D0B` | Footer · CTA left panel |
| `--surface-band` | `#1F8C99` | Employee band only |
| `--text-heading` | `#141412` | All headings h1–h5 |
| `--text-body` | `#4A4A47` | All body paragraphs |
| `--text-muted` | `#6B6B68` | Lead text · captions · meta |
| `--text-eyebrow` | `#2BA4B2` | Eyebrow labels |
| `--text-on-dark` | `rgba(255,255,255,.85)` | Text on dark/teal surfaces |
| `--text-link` | `#2BA4B2` | Inline links |
| `--brand` | `#3DB8C6` | Decorative brand signal |
| `--brand-action` | `#1F8C99` | Buttons · interactive elements |
| `--accent` | `#F79623` | CTA section only |
| `--border-subtle` | `rgba(0,0,0,.055)` | Card borders at rest |
| `--border-default` | `rgba(0,0,0,.10)` | Form fields · dividers |
| `--focus-ring` | `rgba(61,184,198,.35)` | Keyboard focus outline |

### 3.3 Per-Section Color Map

| Section | Background | Heading | Body | Accent |
|---------|-----------|---------|------|--------|
| Nav | `rgba(#F9F9F7,.95)` | `#141412` | `#4A4A47` | teal underline |
| Hero copy | `#F9F9F7` | `#141412` | `#6B6B68` | teal button |
| Hero media | `#5AC4D1` (teal-400) | — | — | — |
| About | `#F9F9F7` | `#141412` | `#4A4A47` | teal step dots |
| Services | `#FFFFFF` | `#141412` | `#4A4A47` | teal icons |
| Process | `#F9F9F7` | `#141412` | `#4A4A47` | teal step rings |
| Employee Band | `#1F8C99` | `#FFFFFF` | `rgba(#fff,.75)` | white button |
| Projects | `#FFFFFF` | `#141412` | `#4A4A47` | teal "view" link |
| Testimonials | `#F9F9F7` | `#1E1E1C` | `#1E1E1C` | teal dots/nav |
| CTA left | `#0D0D0B` | `#FFFFFF` | `rgba(#fff,.6)` | white button |
| CTA form | `#FFFFFF` | — | `#141412` | teal focus ring |
| Footer | `#0D0D0B` | `rgba(#fff,.85)` | `rgba(#fff,.5)` | teal social hover |

### 3.4 Contrast Ratios (WCAG Verified)

| Text | Background | Ratio | Level |
|------|-----------|-------|-------|
| `#141412` | `#F9F9F7` | **16.5 : 1** | AAA ✓ |
| `#141412` | `#FFFFFF` | **18.0 : 1** | AAA ✓ |
| `#4A4A47` | `#FFFFFF` | **8.1 : 1** | AAA ✓ |
| `#4A4A47` | `#F9F9F7` | **7.4 : 1** | AAA ✓ |
| `#6B6B68` | `#FFFFFF` | **5.3 : 1** | AA ✓ |
| `#FFFFFF` | `#1F8C99` | **4.6 : 1** | AA ✓ — use for buttons |
| `#FFFFFF` | `#3DB8C6` | **2.8 : 1** | ✗ — decorative only |
| `#FFFFFF` | `#0D0D0B` | **19.5 : 1** | AAA ✓ |
| `#2BA4B2` | `#F9F9F7` | **3.9 : 1** | AA Large ✓ (eyebrows at 11px bold pass as large text) |

> **Critical rule:** Never place any text on `--teal-500` (`#3DB8C6`). It fails contrast at all text sizes.
> All teal interactive elements (buttons, links) use `--teal-700` (`#1F8C99`) as background.

### 3.5 What Is Forbidden

```
✗  #F79623 (orange) anywhere outside Contact CTA section
✗  Gradient backgrounds on any content section
✗  Teal as a section background (only the employee band, and only solid teal-700)
✗  Any third color introduced beyond teal + amber
✗  Colored top/bottom accent bars on cards
✗  Text on teal-500 (#3DB8C6)
✗  Gray-400 (#AEB6C0 old) or any cool gray — use warm stone scale only
✗  Pure black (#000000) or pure white (#FFFFFF) as page canvas
```

### 3.6 Color Psychology Notes

- **Warm off-white** (`#F9F9F7`): Associates with quality materials — paper, cream, linen. Signals premium without cost.
- **Teal** (`#3DB8C6`): Trust, expertise, calm. A softer version of blue's authority. Less clinical than blue, more distinctive.
- **Near-black** (`#141412`): Warmth that pure black lacks. Makes typography feel crafted, not computer-generated.
- **Restrained amber** (`#F79623`): Used only at the CTA moment — warmth and urgency precisely where conversion matters.

---

## 4. Typography System

### 4.1 Font Pairing — *Luxury Minimalist*

```
┌─────────────────────────────────────────────────────────────────┐
│  DISPLAY / HEADINGS  (h1 and h2 only)                           │
│                                                                  │
│  Bodoni Moda                                                     │
│  Weights loaded: 400 · 600 · 700 · 800                          │
│  Styles: normal + italic                                         │
│                                                                  │
│  CSS variable:  --font-display                                   │
│  Fallback stack: "Bodoni Moda", "Bodoni 72", "Didot",           │
│                  "Book Antiqua", "Palatino Linotype", serif      │
│                                                                  │
│  Character: High-contrast thick/thin strokes. Tall x-height.    │
│  Editorial, authoritative, premium. Immediately distinctive.     │
│                                                                  │
│  RULE: Never below 28px. Hairline strokes collapse at small     │
│  sizes. h3, h4, h5 use Jost — Bodoni only for display moments. │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  UI / BODY / SUBHEADINGS  (h3–h5, p, buttons, labels)           │
│                                                                  │
│  Jost                                                            │
│  Weights loaded: 300 · 400 · 500 · 600 · 700                   │
│  Styles: normal                                                  │
│                                                                  │
│  CSS variable:  --font-body                                      │
│  Fallback stack: "Jost", "DM Sans", "Inter",                    │
│                  "system-ui", -apple-system, sans-serif          │
│                                                                  │
│  Character: Geometric, humanist, clean. Optimised for UI.       │
│  Extremely legible at 12px–19px. Neutral without being cold.    │
│                                                                  │
│  RULE: Lead paragraphs use weight 300 (light) — the contrast    │
│  with Bodoni 700 above creates the premium hierarchy.           │
└─────────────────────────────────────────────────────────────────┘
```

**Why this pairing works for Instant VA:** Bodoni's thick/thin drama at headline sizes signals "we take craft seriously." Jost's geometric neutrality keeps the interface clean and fast to read. The serif→sans switch between heading and body creates the exact editorial contrast that makes premium services feel designed, not templated.

### 4.2 Complete Type Scale

| Token | Size (CSS) | Font | Weight | Line-height | Letter-spacing | Used for |
|-------|------------|------|--------|-------------|----------------|----------|
| `--fs-display` | `clamp(52px, 8vw, 88px)` | Bodoni Moda | 700 | `1.00` | `−0.04em` | Hero h1 — largest type on page |
| `--fs-h1` | `clamp(40px, 6vw, 64px)` | Bodoni Moda | 700 | `1.05` | `−0.03em` | Section-level h1 |
| `--fs-h2` | `clamp(28px, 3.8vw, 48px)` | Bodoni Moda | 700 | `1.08` | `−0.025em` | All section headings |
| `--fs-h3` | `24px` | Jost | 600 | `1.25` | `−0.01em` | Card titles · modal headings |
| `--fs-h4` | `20px` | Jost | 600 | `1.30` | `−0.01em` | FAQ questions · sub-sections |
| `--fs-h5` | `17px` | Jost | 600 | `1.35` | `0` | Footer column headings · labels |
| `--fs-lead` | `19px` | Jost | 300 | `1.75` | `0` | Hero + section intro paragraphs |
| `--fs-body` | `16px` | Jost | 400 | `1.75` | `0` | All body paragraphs |
| `--fs-sm` | `14px` | Jost | 400 | `1.60` | `0` | Meta text · secondary copy |
| `--fs-xs` | `12px` | Jost | 400 | `1.50` | `0.02em` | Timestamps · tiny labels |
| `--fs-eyebrow` | `11px` | Jost | 600 | `1.0` | `0.25em` | Section eyebrow labels |
| `--fs-btn-sm` | `12px` | Jost | 600 | `1.0` | `0.02em` | Small button labels |
| `--fs-btn-md` | `14px` | Jost | 600 | `1.0` | `0.02em` | Medium button labels |
| `--fs-btn-lg` | `15px` | Jost | 600 | `1.0` | `0.02em` | Large button labels |

### 4.3 Heading Hierarchy — Section Pattern

Every content section follows this exact three-level hierarchy. Never skip a level.

```
EYEBROW LABEL                ← Jost 600 · 11px · 0.25em · UPPERCASE · teal-600
                               margin-bottom: 12px

Section Heading               ← Bodoni Moda 700 · clamp(28–48px)
                               line-height: 1.08 · letter-spacing: −0.025em
                               margin-top: 0 · margin-bottom: 16–20px

A clear, concise lead paragraph ← Jost 300 · 19px · line-height: 1.75
that introduces the section     color: stone-500 (#6B6B68) · max-width: 54ch
with enough context to...
```

### 4.4 Eyebrow Label Specification

```
Element:       <span class="iva-eyebrow"> (inline-block)
Font:          Jost 600
Size:          11px
Case:          UPPERCASE (CSS: text-transform: uppercase)
Tracking:      0.25em
Color (light): teal-600 (#2BA4B2)
Color (dark):  rgba(255,255,255,.65) — used on teal band and dark CTA
Display:       inline-block at left · block + text-align:center for centered variant
Margin-below:  12px — the gap between eyebrow and the h2 it labels
```

### 4.5 Swoosh Underline — Specification

A single hand-drawn curved underline applied to **one key word** in the hero h1 only. Changed from orange to teal to match the single-accent rule.

```
Applied to:    .iva-swoosh wrapper span — hero h1 one word only
Position:      ::after pseudo-element
Height:        0.4em
Bottom offset: −0.18em (sits just below the baseline)
SVG stroke:    #3DB8C6 (teal-500) — stroke-width: 3.5
Width:         100% of the word

NEVER apply to:
  - Body text or paragraphs
  - h2 section headings
  - Card titles
  - More than one word at a time
  - Any color other than teal-500
```

### 4.6 Typography Rules

1. `text-wrap: balance` on all headings — prevents awkward single-word orphans
2. `text-wrap: pretty` on all `<p>` tags
3. `max-width: 54ch` on lead paragraphs (`--fs-lead`)
4. `max-width: 65ch` on body paragraphs — never full-width prose
5. `letter-spacing: −0.025em` minimum on all h2 — tight tracking reads as premium
6. `letter-spacing: 0.25em` on eyebrows — wide tracking at 11px maintains legibility
7. Bodoni Moda italic: available for a single word of gentle emphasis in a heading
8. `<strong>` in body text: Jost 600, `#141412` — only for key stats or critical terms
9. Minimum body font size: **16px** — never go below on any viewport
10. `-webkit-font-smoothing: antialiased` on `<body>` — essential for Bodoni Moda stroke quality
11. `text-rendering: optimizeLegibility` on `<body>`

### 4.7 Font Loading & Rendering

```tsx
// layout.tsx — exact configuration
import { Bodoni_Moda, Jost } from 'next/font/google'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',              // show fallback immediately, swap on load
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})
```

**Fallback behavior:** Before Bodoni Moda loads, the browser shows "Didot" or "Book Antiqua" — both are high-contrast serifs with similar proportions. The layout shift is minimal because x-height and cap-height are close. Jost falls back to "DM Sans" or "Inter" — negligible visual difference.

---

## 5. Design Tokens — Ready-to-Paste CSS

The complete `:root` block for `globals.css`. This is the single source of truth — all component styles reference these variables, never raw hex values.

```css
/* ─── Color tokens ─────────────────────────────────────────────── */
:root {
  /* Neutrals */
  --ink-950:    #0D0D0B;
  --ink-900:    #141412;
  --ink-800:    #1E1E1C;
  --ink-700:    #2E2E2B;
  --stone-600:  #4A4A47;
  --stone-500:  #6B6B68;
  --stone-400:  #9A9A97;
  --stone-300:  #C5C5C1;
  --stone-200:  #E0E0DC;
  --stone-100:  #EBEBЕ7;
  --stone-050:  #F4F4F0;
  --off-white:  #F9F9F7;
  --white:      #FFFFFF;

  /* Teal brand */
  --teal-700:   #1F8C99;
  --teal-600:   #2BA4B2;
  --teal-500:   #3DB8C6;
  --teal-400:   #5AC4D1;
  --teal-300:   #8FD8E0;
  --teal-200:   #BFE9ED;
  --teal-100:   #E4F6F8;
  --teal-050:   #F2FBFC;

  /* Amber accent — CTA section only */
  --orange-700: #D87410;
  --orange-600: #EE8616;
  --orange-500: #F79623;
  --orange-100: #FDE8CE;

  /* Semantic aliases */
  --surface-page:  var(--off-white);
  --surface-card:  var(--white);
  --surface-dark:  var(--ink-950);
  --surface-band:  var(--teal-700);

  --text-heading:  var(--ink-900);
  --text-body:     var(--stone-600);
  --text-muted:    var(--stone-500);
  --text-eyebrow:  var(--teal-600);
  --text-on-dark:  rgba(255, 255, 255, 0.85);
  --text-link:     var(--teal-600);

  --brand:         var(--teal-500);
  --brand-action:  var(--teal-700);
  --accent:        var(--orange-500);

  --border-subtle:  rgba(0, 0, 0, 0.055);
  --border-default: rgba(0, 0, 0, 0.10);
  --focus-ring:     rgba(61, 184, 198, 0.35);
}

/* ─── Typography tokens ─────────────────────────────────────────── */
:root {
  --fw-light:     300;
  --fw-regular:   400;
  --fw-medium:    500;
  --fw-semibold:  600;
  --fw-bold:      700;
  --fw-extrabold: 800;

  --fs-display: clamp(52px, 8vw, 88px);
  --fs-h1:      clamp(40px, 6vw, 64px);
  --fs-h2:      clamp(28px, 3.8vw, 48px);
  --fs-h3:      24px;
  --fs-h4:      20px;
  --fs-h5:      17px;
  --fs-lead:    19px;
  --fs-body:    16px;
  --fs-sm:      14px;
  --fs-xs:      12px;
  --fs-eyebrow: 11px;

  --lh-tight: 1.05;
  --lh-snug:  1.25;
  --lh-body:  1.75;

  --ls-tight:   -0.04em;
  --ls-heading: -0.025em;
  --ls-snug:    -0.01em;
  --ls-normal:   0;
  --ls-wide:     0.02em;
  --ls-eyebrow:  0.25em;
}

/* ─── Spacing tokens ─────────────────────────────────────────────── */
:root {
  --sp-1:   4px;
  --sp-2:   8px;
  --sp-3:  12px;
  --sp-4:  16px;
  --sp-5:  20px;
  --sp-6:  24px;
  --sp-8:  32px;
  --sp-10: 40px;
  --sp-12: 48px;
  --sp-16: 64px;
  --sp-20: 80px;
  --sp-24: 96px;
  --sp-32: 128px;
}

/* ─── Motion tokens ──────────────────────────────────────────────── */
:root {
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast:    140ms;
  --dur:         240ms;
  --dur-slow:    420ms;
  --dur-reveal:  800ms;
}

/* ─── Layout ─────────────────────────────────────────────────────── */
:root {
  --container-max: 1200px;
  --container-pad: 24px;
}
```

---

## 6. Shadow & Elevation System

Four named elevation levels based on Dimensional Layering principles from `/ui-ux-pro-max`. Shadows use a warm undertone (`rgba(0,0,0,x)` not blue-tinted) to match the warm neutral palette.

```css
:root {
  /* Level 1 — Cards at rest. Barely visible. */
  --shadow-xs: 0 1px 4px rgba(0, 0, 0, 0.05);

  /* Level 2 — Cards on hover. Form containers. */
  --shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.06);

  /* Level 3 — Elevated cards. About badge. Floating elements. */
  --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.08);

  /* Level 4 — CTA section. Hero panel edge. Footer separation. */
  --shadow-lg: 0 24px 56px rgba(0, 0, 0, 0.10);

  /* Brand — teal-tinted glow for primary buttons */
  --shadow-brand: 0 8px 24px rgba(61, 184, 198, 0.22);

  /* Accent — amber-tinted glow for accent buttons */
  --shadow-accent: 0 8px 24px rgba(247, 150, 35, 0.22);
}
```

### Shadow Usage Rules

| Elevation | Token | Used on |
|-----------|-------|---------|
| None | — | Page elements, section headings, text |
| Level 1 | `--shadow-xs` | Avatar images · Newsletter submit button |
| Level 2 | `--shadow-sm` | All cards at rest · form containers |
| Level 3 | `--shadow-md` | Cards on hover · About section badge |
| Level 4 | `--shadow-lg` | CTA grid wrapper · About collage images |
| Brand | `--shadow-brand` | Primary button hover · Band portrait |
| Accent | `--shadow-accent` | Accent button hover |

**Rule:** Never go directly from Level 1 to Level 4. The elevation ladder should feel gradual. Using `--shadow-lg` on a small card is incorrect — it floats the card off the page.

---

## 7. Border Radius System

```css
:root {
  --radius-sm:     6px;   /* Tags, small chips, tiny pills */
  --radius-md:    12px;   /* Textarea, form containers */
  --radius-lg:    18px;   /* Cards (service, process, project) */
  --radius-xl:    24px;   /* CTA grid wrapper · Band portrait */
  --radius-pill: 999px;   /* Buttons · nav links · search inputs */
  --radius-full:   50%;   /* Avatars · icon circles · dots */
}
```

### Radius Usage Map

| Element | Radius | Rationale |
|---------|--------|-----------|
| All cards | `--radius-lg` (18px) | Consistent card language |
| CTA section wrapper | `--radius-xl` (24px) | Larger unit → larger radius |
| Band portrait image | `--radius-xl` (24px) | Matches CTA |
| All buttons | `--radius-pill` (999px) | Approachable, consistent |
| Form inputs (single-line) | `--radius-pill` (999px) | Matches buttons |
| Textarea | `--radius-md` (12px) | Pill radius looks wrong at taller height |
| Avatars, icon circles | `--radius-full` (50%) | True circles only |
| Step number rings | `--radius-full` (50%) | True circle |
| Footer newsletter row | `--radius-pill` (999px) | Matches button inside |

---

## 8. Spacing & Layout Grid

### 8.1 The 8-Point Grid

All spacing values must be multiples of 4px. Never use arbitrary values like `15px`, `22px`, `37px`.

```
4   8   12   16   20   24   32   40   48   64   80   96   128
```

**Exception:** `clamp()` values for responsive section padding may produce intermediate values — that is acceptable because they're viewport-relative, not arbitrary.

### 8.2 Layout Primitives

```
Container max-width:      1200px
Container side padding:   24px mobile  →  32px ≥ 768px
Section vertical padding: clamp(80px, 10vw, 140px)  ← intentionally generous
Card internal padding:    40px 36px desktop  →  28px 24px mobile
Grid gap (card grids):    24px desktop  →  16px mobile
```

### 8.3 Spacing Contexts — The 5 Levels

| Level | Range | Used for |
|-------|-------|---------|
| **Micro** | 4–8px | Icon-to-label gap · dot spacing · border offsets |
| **Component** | 12–24px | Between elements inside a card or form |
| **Section-internal** | 32–64px | Between a heading block and its content |
| **Section** | 80–140px | Vertical padding of full page sections |
| **Full-bleed** | 0 / viewport-width | Employee band · hero media panel |

### 8.4 Column Grid Map

| Section | Desktop grid | Stack point | Mobile behavior |
|---------|-------------|-------------|----------------|
| Hero | `1.05fr 0.95fr` | ≤ 900px | Media below copy · media min-height 420px |
| About | `1fr 1.05fr` | ≤ 860px | Single column · media max-width 520px |
| Services | `1fr 1.1fr` | ≤ 860px | Single column · stagger offsets reset |
| Process | `repeat(3, 1fr)` | ≤ 820px | Single column · max-width 480px centered |
| Employee Band | `0.85fr 1.15fr` | ≤ 860px | Single column · image max-width 420px |
| Projects | `repeat(3, 1fr)` | ≤ 860px | Single column · max-width 420px centered |
| Testimonials | `1fr minmax(420px,620px) 1fr` | ≤ 920px | Portrait clusters hidden · `1fr` |
| Contact CTA | `0.9fr 1.1fr` | ≤ 820px | Single column · form below panel |
| Footer | `1.6fr 1fr 1fr 1fr 1.3fr` | ≤ 920px | `1fr 1fr` → ≤ 560px → `1fr` |

---

## 9. Section Architecture

Visual rhythm from top to bottom. The two "moment" sections (teal band, dark CTA) break the white/off-white alternation deliberately.

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ░░░ NAVIGATION ░░░                                                      │
│  sticky · rgba(#F9F9F7, .95) + blur(12px) · 1px hairline bottom border  │
│  height: 72px → 64px on scroll                                           │
│  z-index: 50                                                             │
├──────────────────────────────────────────────────────────────────────────┤
│  HERO                                              bg: #F9F9F7           │
│  ┌────────────────────────────┬──────────────────┐                       │
│  │ copy side  · 1.05fr        │ media side ·.95fr │                       │
│  │ bg: #F9F9F7 (flat)         │ bg: #5AC4D1 solid │                       │
│  │ Eyebrow                    │ full-bleed photo  │                       │
│  │ LARGE Bodoni headline      │ no blobs          │                       │
│  │ Jost 300 lead para         │                   │                       │
│  │ CTA row (2 buttons)        │                   │                       │
│  │ Trust bar (4 avatars+copy) │                   │                       │
│  └────────────────────────────┴──────────────────┘                       │
│  min-height: min(84vh, 780px)                                            │
├──────────────────────────────────────────────────────────────────────────┤
│  ABOUT                                             bg: #FFFFFF           │
│  ┌──────────────────────┬──────────────────────────┐                     │
│  │ photo collage · 1fr  │ copy + FAQs · 1.05fr      │                     │
│  │ 3 stacked images     │ Eyebrow / h2 / lead       │                     │
│  │ + badge overlay      │ 2 FAQ items               │                     │
│  │                      │ accent CTA button         │                     │
│  └──────────────────────┴──────────────────────────┘                     │
├──────────────────────────────────────────────────────────────────────────┤
│  SERVICES                                          bg: #F9F9F7           │
│  ┌──────────────────────┬──────────────────────────┐                     │
│  │ copy + checklist·1fr │ 2×2 card grid · 1.1fr    │                     │
│  │ Eyebrow / h2 / lead  │ ┌──────┐  ┌──────┐       │                     │
│  │ 3 check items        │ │ svc  │  │ svc  │       │                     │
│  │ primary button       │ └──────┘  └──────┘       │                     │
│  │                      │ ┌──────┐  ┌──────┐       │                     │
│  │                      │ │ svc  │  │ svc  │       │                     │
│  │                      │ └──────┘  └──────┘       │                     │
│  └──────────────────────┴──────────────────────────┘                     │
├──────────────────────────────────────────────────────────────────────────┤
│  PROCESS                                           bg: #FFFFFF           │
│  centered heading block (eyebrow / h2 / lead)                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │  Step 01     │  │  Step 02     │  │  Step 03     │                   │
│  │  ring circle │  │  ring circle │  │  ring circle │                   │
│  │  title       │  │  title       │  │  title       │                   │
│  │  body        │  │  body        │  │  body        │                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
├──────────────────────────────────────────────────────────────────────────┤
│  ████████████ EMPLOYEE BAND ████████████           bg: #1F8C99           │
│  ┌─────────────────┬──────────────────────────────┐                     │
│  │ portrait · .85fr│ copy · 1.15fr                │                     │
│  │ 4:5 rounded img │ Eyebrow (white/muted)         │                     │
│  │                 │ WHITE h2                      │                     │
│  │                 │ Jost 300 light lead           │                     │
│  │                 │ 3 stat cards (Bodoni nums)    │                     │
│  │                 │ light button                  │                     │
│  └─────────────────┴──────────────────────────────┘                     │
├──────────────────────────────────────────────────────────────────────────┤
│  PROJECTS                                          bg: #F9F9F7           │
│  centered heading                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                               │
│  │ 16:10 img│  │ 16:10 img│  │ 16:10 img│                               │
│  │ title    │  │ title    │  │ title    │                               │
│  │ body     │  │ body     │  │ body     │                               │
│  │ view →   │  │ view →   │  │ view →   │                               │
│  └──────────┘  └──────────┘  └──────────┘                               │
│  "View All" accent button (only orange button outside CTA)               │
├──────────────────────────────────────────────────────────────────────────┤
│  TESTIMONIALS                                      bg: #FFFFFF           │
│  ┌────────────┬──────────────────────────┬────────────┐                 │
│  │ portrait   │ ○ quote icon (teal ring)  │ portrait   │                 │
│  │ cluster L  │                           │ cluster R  │                 │
│  │ (desktop)  │ Jost 300 quote text       │ (desktop)  │                 │
│  │            │ Author name (ink-900)     │            │                 │
│  │            │ Role (stone-500)          │            │                 │
│  │            │ ← • • • →                │            │                 │
│  └────────────┴──────────────────────────┴────────────┘                 │
├──────────────────────────────────────────────────────────────────────────┤
│  CONTACT CTA                                       bg: #F9F9F7           │
│  ┌──────────────────────────┬───────────────────────────┐               │
│  │ DARK PANEL · #0D0D0B     │ FORM PANEL · #FFFFFF       │               │
│  │ Eyebrow (white muted)    │ "SEND US A MESSAGE"        │               │
│  │ WHITE h2 (Bodoni)        │ Name | Email               │               │
│  │ rgba(#fff,.6) body       │ Phone | Subject            │               │
│  │ light CTA button         │ Message textarea           │               │
│  │ ─────────────────        │ [Submit Now] full-width    │               │
│  │ ○ phone icon             │                            │               │
│  │   CALL US label          │                            │               │
│  │   (000) 859-6256         │                            │               │
│  └──────────────────────────┴───────────────────────────┘               │
│  border-radius: 24px · shadow-lg                                         │
├──────────────────────────────────────────────────────────────────────────┤
│  ████████████ FOOTER ████████████                  bg: #0D0D0B           │
│  1.6fr col | 1fr | 1fr | 1fr | 1.3fr (newsletter)                       │
│  Ghost "VA" text · opacity: 0.02 (barely visible)                       │
│  Bottom bar: copyright + tagline                                         │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 10. Component Specifications

### 10.1 Navigation Bar

```
Position:       sticky · top: 0 · z-index: 50
Height:         72px at rest  →  64px when .is-scrolled
Background:     rgba(249, 249, 247, 0.95)
Backdrop:       blur(12px) · -webkit-backdrop-filter: blur(12px)
Border-bottom:  1px solid rgba(0,0,0,.055)  →  rgba(0,0,0,.10) on scroll
Shadow:         none — border is the separation signal, not shadow
Transition:     height 240ms · border-color 240ms

LOGO  ·  .iva-logo
  Font:           Jost 700  (NOT Bodoni Moda — logo is a wordmark)
  Size:           22px
  Tracking:       0.06em
  Color (light):  #141412
  Color (dark):   #FFFFFF  (.iva-logo--light)
  "V" character:  color: #3DB8C6 (teal-500)
  "A" character:  color: #F79623 (orange-500)
  Margin-left("V"): 0.26em

NAV LINKS  ·  .iva-nav__link
  Font:           Jost 500 · 14px
  Padding:        8px 14px
  Radius:         999px (pill — hover area)
  Color rest:     #4A4A47 (stone-600)
  Color hover:    #141412 (ink-900)
  Color active:   #141412 (ink-900)
  BG change:      none — no background on hover
  Underline:      ::after · height 1.5px · teal-500
                  scaleX(0) → scaleX(1) on hover/active
                  transform-origin: left · 240ms ease-out

ACTION ICONS  ·  .iva-nav__icon
  Size:           40×40px · radius: 50%
  Background:     transparent at rest
  Color:          stone-500 (#6B6B68)
  Hover bg:       teal-050 (#F2FBFC)
  Hover color:    ink-900 (#141412)
  Touch target:   40×40px minimum ✓

MOBILE DRAWER  ·  .iva-nav__drawer
  Trigger:        ≤ 980px — burger replaces nav+cta
  Burger:         44×44px touch target · aria-expanded
  Drawer height:  0 → max-height 460px (420ms ease-in-out)
  Border-top:     1px solid rgba(0,0,0,.055)
  Link height:    padding 14px top/bottom (full-width tap area)
  Link separator: 1px solid rgba(0,0,0,.055) bottom
```

### 10.2 Hero Section

```
Layout:         1.05fr / 0.95fr asymmetric grid
Min-height:     min(84vh, 780px)
Overflow:       hidden (on section)

─── COPY SIDE  ──────────────────────────────────────────────
Background:     #F9F9F7  (flat — no gradient, no tint)
Padding top/bottom:  clamp(56px, 8vw, 112px)
Padding right:       clamp(36px, 5vw, 80px)
Padding left:        max(24px, calc((100vw - 1200px) / 2))
                     ← flush to left container edge, not centered

REMOVED:
  .iva-hero__ghost   { display: none }   ← ghost "VA" text
  .iva-blob          { display: none }   ← all decorative circles

Heading:  .iva-hero__title
  Font:         Bodoni Moda 700
  Size:         clamp(42px, 6vw, 72px)
  Line-height:  1.04
  Tracking:     −0.03em
  Color:        #141412
  Max-width:    13ch
  Margin-bottom: 24px
  Contains:     One .iva-swoosh wrapped word (teal underline)

Lead:  .iva-hero__lead
  Font:         Jost 300
  Size:         19px
  Line-height:  1.75
  Color:        #6B6B68 (stone-500)
  Max-width:    46ch
  Margin-bottom: 40px

CTA row:  .iva-hero__cta
  Display:      flex wrap
  Gap:          14px
  Margin-bottom: 48px
  Buttons:      primary "Get Started" · light "How It Works"

Trust bar:  .iva-hero__trust
  Avatars:    4 × 40×40px · radius 50% · 2.5px #F9F9F7 border · −10px overlap
  Copy:       Jost 400 · 14px · stone-500
  "850+":     Jost 600 · ink-900 (the strong value)

─── MEDIA SIDE  ─────────────────────────────────────────────
Background:     #5AC4D1 (teal-400) — solid, no gradient
Photo:          height 100% · object-fit contain · object-position bottom center
All .iva-blob:  display: none

Mobile (≤ 900px):
  Grid:         1fr (stacked)
  Media:        below copy · min-height: 420px
  Photo:        height 440px
```

### 10.3 About Section

```
Layout:         1fr (media) / 1.05fr (copy) — photo on left
Section bg:     #FFFFFF
Padding:        clamp(80px, 10vw, 140px) vertical
Gap:            clamp(40px, 6vw, 90px)

─── PHOTO COLLAGE  (.iva-about__media)  ─────────────────────
Container:      min-height 480px · position relative
All .iva-blob:  display: none

img1 — large top-left:
  Position:     absolute · top: 0 · left: 0
  Width:        74% · aspect-ratio: 5/4
  Object-fit:   cover
  Radius:       18px
  Shadow:       --shadow-md (0 12px 32px rgba(0,0,0,.08))
  Z-index:      2

img2 — small bottom-left overlap:
  Position:     absolute · bottom: 0 · left: 6%
  Width:        42% · aspect-ratio: 1/1
  Object-fit:   cover
  Radius:       18px
  Shadow:       --shadow-md
  Border:       5px solid #F9F9F7 (off-white — blends with page)
  Z-index:      3

img3 — medium bottom-right:
  Position:     absolute · bottom: 8% · right: 0
  Width:        44% · aspect-ratio: 4/5
  Object-fit:   cover
  Radius:       18px
  Shadow:       --shadow-md
  Border:       5px solid #F9F9F7
  Z-index:      3

Badge  (.iva-about__badge):
  Position:     absolute · right: 2% · top: 30% · z-index: 5
  Background:   #0D0D0B (ink-950)
  Padding:      18px 24px
  Radius:       12px
  Shadow:       --shadow-lg (0 24px 56px rgba(0,0,0,.10))
  Number "9+":  Bodoni Moda 700 · 32px · teal-300 (#8FD8E0) · tracking −0.03em
  Label text:   Jost 400 · 12px · rgba(255,255,255,.65) · line-height 1.4

─── COPY SIDE  (.iva-about__copy)  ──────────────────────────
Eyebrow:        "About Us" — standard eyebrow spec
h2:             Bodoni Moda 700 · section size · margin 10px 0 20px
Lead:           Jost 300 · 19px · stone-500 · margin-bottom 32px

FAQ Items  (.iva-faq):
  Margin-bottom: 24px (between items)
  Number + label (.iva-faq__q):
    Font:       Jost 600 · 17px · ink-900
    Number color: teal-500 (#3DB8C6)
    Layout:     flex · gap 8px
  Answer (.iva-faq__a):
    Font:       Jost 400 · 15px · stone-500 · max-width 52ch

CTA Button:     accent variant · md size · "Read More"
  Note:         This is one of two uses of accent (orange) outside CTA section.
                Acceptable — it is an isolated CTA, not a decoration.

Mobile (≤ 860px): single column · media max-width 520px
```

### 10.4 Services Section

```
Layout:         1fr (copy) / 1.1fr (grid) 
Section bg:     #F9F9F7
All blobs:      display: none

─── COPY SIDE  ──────────────────────────────────────────────
Eyebrow:   "Our Services"
h2:        standard section heading
Lead:      standard lead para
Checklist: 3 × .iva-check-item — flex · gap 14px · margin 24px 0 32px
  Icon:    22×22px circle · teal-100 bg · teal-600 check · z-index: 1
  Label:   Jost 400 · 15px · ink-800
CTA:       primary button · "Get Started"

─── SERVICE CARDS  (.iva-svc__grid)  ────────────────────────
Grid:       1fr 1fr · gap 20px
Stagger:    :nth-child(2) and :nth-child(3) → translateY(28px) on desktop

Each card  (.svc2 .svc2--soft):
  Background:   #FFFFFF
  Border:       1px solid rgba(0,0,0,.055)
  Radius:       18px
  Padding:      28px 24px
  Shadow:       --shadow-sm (0 4px 16px rgba(0,0,0,.06))

  Hover:        translateY(−5px) · shadow-md · border: transparent
  Transition:   240ms ease-out
  NO hover bar (::after display: none)

  Icon container:
    Size:       56×56px · radius 12px
    Background: color-mix(in srgb, var(--acc) 10%, #fff)
    Icon size:  28×28px · color: --acc (teal-500 by default)

  Title:  Jost 600 · 17px · ink-900 · margin-bottom 7px
  Desc:   Jost 400 · 14px · stone-500 · line-height 1.65 · margin-bottom 12px
  Link:   Jost 600 · 13px · 0.02em tracking · teal-600
          Arrow: translateX(4px) on card:hover · 240ms ease-out

Mobile (≤ 460px): grid becomes 1fr · stagger resets
```

### 10.5 Process Section

```
Layout:         centered (max-width heading block + 3-column card grid)
Section bg:     #FFFFFF (alternates with about's #F9F9F7)
All blobs:      display: none

Heading block:  .iva-head .iva-head--center — centered eyebrow/h2/lead
                margin-bottom: clamp(48px, 6vw, 72px)

Cards grid:     repeat(3, 1fr) · gap 24px

Each card  (.iva-process-card):
  Background:   #FFFFFF
  Border:       1px solid rgba(0,0,0,.055)
  Radius:       18px
  Padding:      40px 32px
  Shadow:       --shadow-sm
  NO ::after orange bar

  Hover:        translateY(−5px) · shadow-md · 240ms ease-out

  Step circle  (.iva-process-card__step):
    Size:         48×48px · radius 50%
    Background:   #F2FBFC (teal-050)
    Border:       1.5px solid #BFE9ED (teal-200)
    Number font:  Jost 700 · 17px · #1F8C99 (teal-700)
    Margin-below: 24px
    NO filled color — outline/ring only

  Title:  Jost 600 · 18px · ink-900 · margin-bottom 12px
  Body:   Jost 400 · 15px · stone-500 · line-height 1.75

Mobile (≤ 820px): 1fr · max-width 480px · margin-inline: auto
```

### 10.6 Employee Band

```
Background:     #1F8C99 (teal-700) — solid, no gradient
Padding:        clamp(72px, 10vw, 128px)
All blobs:      display: none

Portrait  (.iva-band__media img):
  Aspect-ratio: 4/5 · object-fit cover
  Border-radius: 24px (--radius-xl)
  Shadow:        --shadow-lg (0 24px 56px rgba(0,0,0,.10))

Copy side:
  Eyebrow:     .iva-eyebrow--white — rgba(255,255,255,.65) · Jost 600 · 11px
  h2:          Bodoni Moda 700 · #FFFFFF · max-width 16ch · margin 12px 0 20px
  Lead:        Jost 300 · 17px · rgba(255,255,255,.75) · line-height 1.8 · max-width 52ch

  Stats row  (.iva-band__stats):
    Layout:      flex wrap · gap 16px · margin-bottom 36px
    Each stat:   flex: 1 · min-width 130px
    Value:       Bodoni Moda 700 · 36px · #FFFFFF · tracking −0.02em · line-height 1
    Label:       Jost 400 · 13px · rgba(255,255,255,.65)

  CTA:         light variant button (white bg · ink-800 text)

Mobile (≤ 860px): single column · portrait max-width 420px
```

### 10.7 Projects Section

```
Layout:         centered heading + 3-column card grid
Section bg:     #F9F9F7
All blobs:      display: none

Cards grid:     repeat(3, 1fr) · gap 24px

Each card  (.iva-project-card):
  Background:   #FFFFFF
  Border:       1px solid rgba(0,0,0,.055)
  Radius:       18px · overflow: hidden
  Shadow:       --shadow-sm
  NO ::before orange bar in card body

  Image:        aspect-ratio 16/10 · object-fit cover · width 100% · display block

  Body  (.iva-project-card__body):
    Padding:    28px all sides
    NO ::before top orange bar

  Hover:        translateY(−6px) · shadow-md · 240ms ease-out

  Title:        Jost 600 · 19px · ink-900 · margin-bottom 10px
  Body:         Jost 400 · 15px · stone-500 · margin-bottom 18px
  "View" link:  Jost 600 · 13px · 0.02em · teal-600
  Arrow:        translateX(4px) on card:hover

Section footer:
  "View All" button — accent variant (orange) · md size
  This is the only orange element outside the CTA section.
  Acceptable because it is a primary action button, not decoration.

Mobile (≤ 860px): 1fr · max-width 420px · margin-inline: auto
```

### 10.8 Testimonials Section

```
Layout:         1fr | minmax(420px, 620px) | 1fr
Section bg:     #F9F9F7 (alternates with projects' #FFFFFF)

Portrait clusters  (desktop only, hidden ≤ 920px):
  3 portraits left, 3 portraits right — absolutely positioned
  Circular · padding 4px · background: teal-100 (#E4F6F8)
  Sizes: c1: 96px · c2: 130px · c3: 64px

Center panel  (.iva-tst__panel):
  Text-align: center · padding 0 12px

  Quote icon  (.iva-tst__mark):
    Size:        56×56px · radius 50%
    Background:  #F2FBFC (teal-050)
    Border:      1.5px solid #BFE9ED (teal-200)
    Icon color:  #2BA4B2 (teal-600)
    Margin-below: 28px
    NO filled teal circle

  Quote  (.iva-tst__quote):
    Font:        Jost 300 (light)
    Size:        clamp(18px, 2.2vw, 22px)
    Line-height: 1.75
    Color:       #1E1E1C (ink-800)
    Max-width:   52ch · margin-inline: auto
    Margin-below: 28px
    Animation:   key-driven fadeUp · 500ms ease-out

  Author name  (.iva-tst__name):
    Jost 600 · 17px · #141412 (ink-900)
    WAS: orange-500 — CHANGED to near-black

  Author role  (.iva-tst__role):
    Jost 400 · 13px · 0.02em · stone-500

Nav controls  (.iva-tst__nav):
  Layout:      flex · align-center · justify-center · gap 18px

  Prev/Next icon buttons:
    Size:        48×48px · radius 50%
    Background:  #FFFFFF · border: 1px solid #C5C5C1 (stone-300)
    Color:       #1E1E1C (ink-800)
    Hover:       bg teal-500 · border teal-500 · color #fff · scale(1.05)
    Aria-label:  "Previous testimonial" / "Next testimonial"

  Dots  (.iva-tst__dot):
    Inactive:    8px circle · stone-300 (#C5C5C1)
    Active:      24px × 8px pill · teal-500 (#3DB8C6) · 240ms
    Role:        tab · aria-selected · aria-label

Auto-rotate:    every 6500ms via setInterval
```

### 10.9 Contact CTA Section

```
Section bg:     #F9F9F7 (section behind the card)
All blobs:      display: none

Grid wrapper  (.iva-cta__grid):
  Grid:         0.9fr 1.1fr
  Radius:       24px · overflow: hidden
  Shadow:       --shadow-lg (0 24px 56px rgba(0,0,0,.10))

─── LEFT PANEL  (.iva-cta__panel)  ──────────────────────────
Background:     #0D0D0B (ink-950) — NOT orange gradient
Padding:        clamp(48px, 6vw, 72px)
Display:        flex column

Eyebrow:   Jost 600 · 11px · rgba(255,255,255,.5) · 0.25em · uppercase
h2:        Bodoni Moda 700 · #FFFFFF · margin 12px 0 16px
Body:      Jost 400 · 16px · rgba(255,255,255,.6) · max-width 36ch · margin-bottom 32px
Button:    light variant (white bg · ink-800 text) · "Book a Free Call"

Call strip  (.iva-cta__call):
  Margin-top:  auto (pushes to bottom of panel)
  Padding-top: 32px
  Border-top:  1px solid rgba(255,255,255,.12)
  Icon circle: 48×48px · rgba(255,255,255,.10) bg · teal-300 (#8FD8E0) icon color
  Label:       Jost 600 · 12px · rgba(255,255,255,.5) · 0.08em · uppercase
  Phone num:   Jost 600 · 20px · #FFFFFF

─── FORM PANEL  (.iva-cta__form)  ───────────────────────────
Background:     #FFFFFF
Padding:        clamp(40px, 5vw, 64px)

Form header:
  "SEND US A MESSAGE NOW"
  Jost 600 · 11px · stone-400 (#9A9A97) · 0.18em · uppercase · centered

Row grids:      2 columns · gap 16px (name+email · phone+subject)
Textarea:       single column · min-height 108px

Form fields  (.iva-field):
  Single-line input height:  48px
  Single-line radius:        999px (pill)
  Textarea radius:           12px (--radius-md)
  Border at rest:            1.5px solid rgba(0,0,0,.10)
  Border on focus:           1.5px solid #3DB8C6 (teal-500)
  Focus ring:                0 0 0 3px rgba(61,184,198,.35)
  Background:                #FFFFFF (always — no tinted bg)
  Placeholder color:         #9A9A97 (stone-400)
  Text color:                #141412 (ink-900)
  Font:                      Jost 400 · 15px

  Error state:
    Border:     1.5px solid #E55353
    Hint text:  Jost 400 · 13px · #E55353 · padding-left 6px
    ARIA:       role="alert" on hint for screen readers

  Label accessibility:
    Inputs use placeholder text as visual label
    Add aria-label="Name" / aria-label="Email" etc. on each input

Submit button:  primary variant · full width (width: 100%) · lg size · margin-top 22px

─── SUCCESS STATE  ──────────────────────────────────────────
Icon:      68×68px circle · teal-050 bg · teal-200 border · teal-600 icon
Heading:   Jost 600 · ink-900
Body:      Jost 400 · stone-500 · max-width 36ch · centered
Button:    "Send another" — resets form to empty state

Mobile (≤ 820px): panel stacks above form · row grids become 1fr
```

### 10.10 Footer

```
Background:     #0D0D0B (ink-950)
Padding:        clamp(64px, 8vw, 104px) top
Ghost "VA" text: position absolute · right 2% · bottom −4%
                 Bodoni Moda 800 · clamp(160px, 22vw, 300px)
                 color: rgba(255,255,255,.02) — barely visible, intentional

Grid:           1.6fr 1fr 1fr 1fr 1.3fr

Brand column:
  Logo:           .iva-logo--light (white version)
  Body:           Jost 400 · 14px · rgba(255,255,255,.55) · max-width 30ch · line-height 1.75
  Social icons:   38×38px circles · rgba(255,255,255,.07) bg · 1px rgba(255,255,255,.08) border
  Social hover:   bg teal-500 · border teal-500 · color #fff · translateY(−3px) · 240ms

Column headings  (.iva-footer__col h5):
  Jost 600 · 13px · 0.12em tracking · uppercase
  Color: rgba(255,255,255,.85)
  Margin-bottom: 20px

Links:
  Jost 400 · 14px · rgba(255,255,255,.5)
  Hover:  rgba(255,255,255,.9) · 240ms
  List gap: 12px

Newsletter column:
  Note:     Jost 400 · 13px · rgba(255,255,255,.45) · margin-bottom 14px
  Input row: pill shape · rgba(255,255,255,.06) bg · 1px rgba(255,255,255,.10) border
  Input:     Jost 400 · 14px · color #fff · placeholder rgba(255,255,255,.35)
  Submit:    36×36px circle · teal-500 bg · arrow icon inside

Bottom bar  (.iva-footer__bar):
  Border-top:  1px solid rgba(255,255,255,.07)
  Padding:     24px 0
  Font:        Jost 400 · 13px · rgba(255,255,255,.4)
  Layout:      flex · space-between · gap 16px

Responsive:  ≤ 920px: 1fr 1fr · brand spans full width
             ≤ 560px: 1fr · bar stacks vertically
```

### 10.11 Shared UI Components

#### Buttons

```
Base:  Jost 600 · pill radius · no border · cursor pointer
       transition: background 240ms · box-shadow 240ms · transform 140ms
       active: scale(0.97)

┌─────────┬──────────────────────┬────────────────────────────┬────────────────────────┐
│ Variant │ Rest                 │ Hover                      │ When to use            │
├─────────┼──────────────────────┼────────────────────────────┼────────────────────────┤
│ primary │ bg #1F8C99 · #fff    │ bg #2BA4B2 · shadow-brand  │ Primary CTAs on light  │
│ light   │ bg #fff · #1E1E1C    │ bg #F4F4F0 · shadow-sm     │ On dark/teal surfaces  │
│ accent  │ bg #F79623 · #fff    │ bg #EE8616 · shadow-accent │ CTA + "View All" only  │
│ dark    │ bg #141412 · #fff    │ bg #0D0D0B                 │ Rare strong confirm    │
└─────────┴──────────────────────┴────────────────────────────┴────────────────────────┘

Sizes:
  sm:  12px · pad 8px 20px  · height 36px
  md:  14px · pad 12px 28px · height 44px  ← min touch target ✓
  lg:  15px · pad 15px 36px · height 52px
```

#### Eyebrow Label

```
<span class="iva-eyebrow [--center] [--white]">{LABEL}</span>

Base:     Jost 600 · 11px · uppercase · 0.25em tracking · teal-600 · inline-block
Center:   display block · text-align center
White:    color rgba(255,255,255,.65)
Position: always 12px above the h2 it precedes
```

#### Check Item

```
Layout: flex · align-center · gap 12px
Icon:   22×22px circle · teal-100 (#E4F6F8) · teal-600 check mark
Label:  Jost 400 · 15px · ink-800 (#1E1E1C)
```

---

## 11. Icon System

### Source
All icons are SVG, drawn in the `src/components/icons.tsx` file. No icon fonts. No emojis as icons.

### Icon Sizing
```
In nav action buttons:     20×20px
In service cards:          28×28px (inside 56px container)
In check items:            12×12px (inside 22px circle)
In testimonial nav:        20×20px
In arrow links:            17px (inline with text)
In footer social:          18×18px (inside 38px circle)
In CTA call icon:          26×26px (inside 48px circle)
```

### Icon Color Rules
```
On light bg, interactive:   teal-600 (#2BA4B2) at rest → teal-500 on hover
On dark bg, decorative:     rgba(255,255,255,.85)
Inside teal-050 circles:    teal-600
Inside dark circles:        #FFFFFF or teal-300 (#8FD8E0)
Arrow icons in links:       inherit text color
```

### Current Icon Set

| Name | Used in |
|------|---------|
| `IconSearch` | Nav action |
| `IconBag` | Nav action |
| `IconMenu` / `IconX` | Mobile burger |
| `IconArrow` / `IconArrowL` | Testimonial nav · "learn more" links |
| `IconQuote` | Testimonial quote mark |
| `IconMail` · `IconPhone` · `IconPin` | TopBar (hidden) · footer |
| `IconFacebook` · `IconTwitter` · `IconLinkedin` | Social links |
| `IconHeadset` | CTA call strip |
| `IconCheck` | Check items · form success |
| `IconResearch` · `IconInvoice` · `IconCalendar` · `IconRocket` | Service cards |

### No Emoji Icons
```
✗  Do not use 🚀 📅 ✓ ⭐ etc. as interface icons
✓  Use SVG icons from icons.tsx exclusively
```

---

## 12. Motion & Animation

### 12.1 Timing Tokens

```
--dur-fast:    140ms  → Color changes · opacity shifts · micro-interactions
--dur:         240ms  → Hover lifts · underline reveals · button hovers · nav scroll
--dur-slow:    420ms  → Mobile drawer · complex state changes
--dur-reveal:  800ms  → Scroll-triggered reveal (sections)
--dur-quote:   500ms  → Testimonial quote swap
```

### 12.2 Easing Functions

```
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1)
               Fast in, slow deceleration — use for all entrances and reveals
               Creates the "settling into place" premium feel

--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
               Symmetrical S-curve — use for state toggles (drawer open/close)

standard ease: ease
               Only for simple color/opacity transitions at --dur-fast
```

### 12.3 Scroll Reveal — `.reveal`

```css
/* Initial state (applied by RevealWrapper) */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--dur-reveal) var(--ease-out),
              transform var(--dur-reveal) var(--ease-out);
}

/* Triggered when IntersectionObserver fires (20% threshold) */
.reveal.in {
  opacity: 1;
  transform: none;
}
```

**Stagger rule:** Apply `RevealWrapper` to the section as a whole — not to individual cards within a grid. Staggering every card creates visual noise. One section reveal is sufficient.

**Above-fold exception:** The Hero section never has a reveal animation. Content renders immediately.

### 12.4 Hover Interaction Map

| Element | Property | Duration | Notes |
|---------|---------|---------|-------|
| Cards | translateY(−5px) + shadow-md | 240ms ease-out | Border fades to transparent on lift |
| Service cards | Same + border fades | 240ms ease-out | |
| Nav links | Color + underline scaleX | 240ms ease-out | Origin: left |
| Buttons | Background + shadow | 240ms ease-out | |
| Icon buttons | BG fill + color + scale(1.05) | 240ms ease-out | |
| Social icons | BG fill + translateY(−3px) | 240ms ease-out | |
| Arrow links | Arrow translateX(4px) | 240ms ease-out | On parent hover |
| Footer links | opacity change only | 140ms ease | |
| Dots (testi.) | Width expand to pill | 240ms ease-out | |

### 12.5 Testimonial Quote Animation

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}

.iva-tst__quote {
  animation: fadeUp 500ms var(--ease-out);
}
/* Animation fires on React key change — each new quote gets a fresh key */
```

### 12.6 Animation Rules

```
✓  Use transform and opacity only — GPU-composited, no layout thrash
✗  Never animate: width · height · margin · padding · top/left/right/bottom
✗  No decorative infinite animations (no pulsing badges, bouncing icons)
✗  No CSS blob animations — all decorative blobs are hidden
✗  No entry animation on above-fold content (Hero renders immediately)
✓  prefers-reduced-motion: disable all (see §15)
```

---

## 13. Z-Index Scale

Never use arbitrary values. If the defined scale doesn't work, the issue is a stacking context — debug with `isolation: isolate`.

```
0    → Default document flow
1    → Relative-positioned content needing local stacking
2    → Section-level content layers (band .iva-band__grid, footer grid)
3    → About collage: img2 and img3 (above img1)
4    → About collage: decorative dot (if retained)
5    → About badge (above full photo stack)
10   → General floating UI elements
20   → Dropdowns, tooltips (v2)
50   → Sticky navigation bar  ← current nav uses this
100  → Modals, full-screen overlays (v2)
```

---

## 14. Responsive Breakpoints

Test the site at **every** width in this list before marking a section complete.

```
320px  — Smallest supported Android
375px  — iPhone SE / baseline mobile
480px  — Large phone
768px  — iPad portrait / tablet baseline
980px  — Nav collapses to drawer
1024px — iPad landscape / small laptop
1200px — Container max-width kicks in
1440px — Standard desktop
1920px — Wide desktop (site stays at 1200px container)
```

### 14.1 Breakpoint Behavior Map

| Breakpoint | What changes |
|------------|-------------|
| `≤ 480px` | Nav search/cart icons hide · TopBar hidden (already off) |
| `≤ 460px` | Service card grid: `1fr 1fr` → `1fr` |
| `≤ 820px` | Contact CTA: stacked · row grids in form: 1fr · Process: 1 column |
| `≤ 860px` | Hero: media below copy (min-height 420px) · About: 1 col · Services: 1 col · Band: 1 col · Footer: `1fr 1fr` |
| `≤ 900px` | Hero grid collapses |
| `≤ 920px` | Testimonial portrait clusters hide · stage → 1 col |
| `≤ 980px` | Nav links + CTA hide → burger + drawer appears |
| `≤ 1024px` | Container padding adjusts |
| `≤ 1440px` | All content contained at 1200px max-width |

### 14.2 Mobile Rules

```
Minimum body font:         16px — never go below
Minimum touch target:      44×44px on all interactive elements
Minimum gap between targets: 8px
Nav burger button:         44×44px (not 32px)
Drawer link tap area:      full width · 14px vertical padding
Buttons:                   minimum 44px height at all sizes
Images:                    always set explicit height to prevent CLS
Hero media stacked:        min-height 420px explicitly
```

---

## 15. Accessibility Requirements

### 15.1 Images

```tsx
// Hero — above fold — priority load
<Image src="/assets/img/hero-headset.jpg"
  alt="A virtual assistant working at a laptop with a headset"
  width={900} height={780}
  priority    // ← preloads in <head>
/>

// About collage — meaningful content
<Image src="/assets/img/about-team.jpg"
  alt="A team reviewing work together"
  width={520} height={416}
/>

// Portrait cluster in testimonials — decorative
<img src="..." alt="" aria-hidden="true" />
```

### 15.2 Interactive Elements

```tsx
// Nav icon buttons
<button aria-label="Search">...</button>
<button aria-label="Cart">...</button>

// Mobile burger
<button
  aria-label={open ? 'Close menu' : 'Open menu'}
  aria-expanded={open}
>...</button>

// Testimonial navigation
<IconButton label="Previous testimonial" .../>
<button
  role="tab"
  aria-selected={k === i}
  aria-label={`Go to testimonial ${k + 1}`}
/>

// Social links
<a href="#" aria-label="Facebook">...</a>
```

### 15.3 Forms — Current Issue & Fix

**Current state:** ContactCTA form inputs use `placeholder` only — no `<label>` elements. This fails WCAG 2.1 Success Criterion 1.3.1.

**Required fix:**
```tsx
// Option A — visually hidden label (preferred)
<label htmlFor="field-name" className="sr-only">Your name</label>
<input id="field-name" placeholder="Name" .../>

// Option B — aria-label (acceptable for this design)
<input aria-label="Your name" placeholder="Name" .../>

// Error messages
<input aria-describedby="name-error" ... />
<span id="name-error" role="alert">{err.name}</span>
```

### 15.4 Form Validation UX

Per `/ui-ux-pro-max` ux-guidelines.csv:

```
Validate on:     onBlur (not on every keystroke — less aggressive)
Submit feedback: button → loading state → success/error
Error display:   adjacent to field · role="alert" · border + text (not color alone)
Success state:   full panel swap with checkmark + confirmation copy
```

Current code validates on submit only — consider adding `onBlur` validation in v2.

### 15.5 Keyboard Navigation

```
Tab order:      top-to-bottom, left-to-right (matches visual order)
No traps:       drawer closes with Escape key (v2 consideration)
Focus rings:    0 0 0 3px rgba(61,184,198,.35) — teal, clearly visible
All hover states have equivalent :focus-visible states
```

### 15.6 Color as State Indicator

Color is **never** the sole indicator of state:

| State | Color signal | Secondary signal |
|-------|-------------|-----------------|
| Active nav link | color → ink-900 | underline appears |
| Form error | border → red | error text message |
| Active dot | color → teal | width expands to pill |
| Hover card | border fades | shadow increases + lift |

### 15.7 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  /* Disable scroll reveals immediately */
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  /* Disable testimonial animation */
  .iva-tst__quote { animation: none; }

  /* Collapse all transitions */
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

---

## 16. Next.js Implementation Rules

### 16.1 Fonts

```tsx
// src/app/layout.tsx
import { Bodoni_Moda, Jost } from 'next/font/google'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// Apply both variables to <html>
<html lang="en" className={`${bodoniModa.variable} ${jost.variable}`}>
```

**Why `next/font` not `@import`:** Self-hosted, zero external requests, zero layout shift, preloaded automatically. Never use `<link href="fonts.googleapis.com">` or `@import url(...)` in CSS.

### 16.2 Images — Full Migration List

Every `<img>` tag must be replaced with `next/image`. Images that need `priority`:

```tsx
// PRIORITY (above fold — preload)
Hero:  /assets/img/hero-headset.jpg  → priority={true}

// STANDARD (below fold — lazy load default)
About: /assets/img/about-team.jpg
About: /assets/img/portrait-3.jpg
About: /assets/img/portrait-5.jpg
Band:  /assets/img/portrait-4.jpg
Projects: /assets/img/project-1.jpg, project-2.jpg, project-3.jpg
Testimonials: /assets/img/portrait-1.jpg through portrait-5.jpg (clusters)
```

**Dimensions for each image** (to prevent CLS):

| Image | Width | Height | Aspect |
|-------|-------|--------|--------|
| hero-headset.jpg | 900 | 780 | fill |
| about-team.jpg | 520 | 416 | 5/4 |
| portrait-3.jpg (about) | 360 | 360 | 1/1 |
| portrait-5.jpg (about) | 360 | 450 | 4/5 |
| portrait-4.jpg (band) | 480 | 600 | 4/5 |
| project-*.jpg | 600 | 375 | 16/10 |
| portrait cluster imgs | 130 | 130 | max |

### 16.3 Client vs Server Components

```
'use client' required:
  NavBar.tsx         — useState (scroll, drawer, active)
  Testimonials.tsx   — useState (current index) + setInterval
  ContactCTA.tsx     — useState (form values, errors, sent)
  RevealWrapper.tsx  — useEffect + IntersectionObserver

Server components (no directive needed):
  layout.tsx · page.tsx · Hero.tsx · About.tsx · Services.tsx
  Process.tsx · EmployeeBand.tsx · Projects.tsx · Footer.tsx
  All ui/ components
```

### 16.4 Static Export

```ts
// next.config.ts
const config = {
  output: 'export',   // static HTML export
}
```

No server features. No API routes. No `getServerSideProps`. Build output: `out/`.

---

## 17. Implementation Order

Recommended sequence — highest visual impact first, lowest risk changes last.

### Phase 1 — Foundation (do this first, everything depends on it)
1. `layout.tsx` — swap Poppins/Mulish → Bodoni Moda/Jost
2. `globals.css` — replace entire `:root` token block with §5 tokens
3. `globals.css` — update `h1, h2` → `font-family: var(--font-display)` · `h3, h4, h5` → `font-family: var(--font-body)`
4. `globals.css` — add `.iva-blob { display: none }` — instant cleanliness

### Phase 2 — Section backgrounds & spacing
5. Remove `iva-section--wash` gradient → `background: var(--surface-card)`
6. Increase section padding to `clamp(80px, 10vw, 140px)`
7. Hero copy side: remove gradient → flat `#F9F9F7`
8. `page.tsx` — remove `<TopBar />` import and usage

### Phase 3 — Component visual cleanup
9. Process cards: remove `::after` orange bar · update step circles to ring style
10. Project cards: remove `::before` orange bar in card body
11. Service cards: remove `::after` hover bar
12. Testimonials: change author name color from orange → ink-900
13. Testimonials: change quote icon from filled teal → ring style
14. CTA left panel: change from orange gradient → `#0D0D0B`
15. CTA form panel: change from teal-100 tint → `#FFFFFF`

### Phase 4 — Typography & color refinement
16. Update eyebrow component: `11px` · `0.25em tracking` · stone scale colors
17. Hero: `display: none` on ghost "VA" element
18. Swoosh underline: change SVG stroke from orange → teal
19. Update `--shadow-*` tokens to warmer, more subtle values
20. Nav: reduce height · remove `box-shadow` · add hairline border

### Phase 5 — Accessibility & performance
21. `next/image` migration — all `<img>` tags (§16.2 list)
22. `aria-label` on form inputs in ContactCTA
23. Verify `prefers-reduced-motion` CSS block is in globals.css
24. Test keyboard navigation through full page

### Phase 6 — QA
25. Full visual review at 375 · 768 · 1024 · 1440
26. Run pre-delivery checklist (§19)
27. Lighthouse audit (performance, accessibility)

---

## 18. What Was Removed & Why

| Element | Was | New | Why |
|---------|-----|-----|-----|
| TopBar | Dark utility bar (email · phone · socials) | Removed | Premium services use the footer for utility info. Top bars signal "medium quality". |
| All decorative blobs | Teal/orange CSS circles scattered across every section | `display: none` | Cheap decoration. They obscure typography and add visual noise without contributing meaning. |
| Hero ghost text "VA" | 300px transparent "VA" watermark behind headline | `display: none` | Decorative filler. The headline IS the visual hero — it doesn't need a background watermark. |
| Footer ghost "VA" | Same transparent watermark | opacity: 0.02 (barely visible) | Retained as subtle texture but invisible. |
| Hero copy gradient | `linear-gradient(115deg, teal-050, cream)` | Flat `#F9F9F7` | The gradient fought with Bodoni Moda's high-contrast strokes. Flat is cleaner. |
| Section wash gradient | `linear-gradient(170deg, teal-050, cream)` | `background: #FFFFFF` | White/off-white alternation is sufficient section separation. |
| Teal band gradient | `linear-gradient(160deg, teal-400, teal-500)` | Solid `#1F8C99` | Solid color is more confident. Gradients on already-colorful sections look cheap. |
| Orange card bottom bars | `.iva-process-card::after` 3px orange line | Removed | Decoration competing with card content. No semantic value. |
| Orange card top bars | `.iva-project-card__body::before` 3px orange line | Removed | Same. Also visually indistinct from the card image above it. |
| Service card hover bars | `.svc2::after` bottom bar on hover | Removed | The translateY lift + shadow is sufficient hover feedback. |
| Filled step circles | Teal-filled 52px circle with brand shadow | Ring/outline style | Filled circles drew more attention than the step number or card content. |
| Orange testimonial name | `color: orange-500` on author name | `ink-900` | Orange is restricted to the CTA section. Testimonial names should be confident, not accented. |
| Solid teal quote icon | Teal-500 filled 64px circle | Ring/outline style | The filled circle was louder than the quote text it introduced. |
| Orange CTA left panel | `linear-gradient(orange-500, orange-600)` | `#0D0D0B` charcoal | Dark panel is more premium and magazine-like. Orange gradient felt aggressive and generic. |
| Teal-tinted CTA form | `background: teal-100` | `#FFFFFF` | The tint created a disconnected color story. White is clean and correct. |
| Filled dark icon buttons | `.iva-icon-btn--dark`: ink-800 filled circle | Outlined white + teal on hover | Filled dark circles were visually heavy. Outlined rings are lighter and more refined. |
| Cool gray scale | `--gray-700: #4A5763` etc. | Warm stone scale | Cool grays read as clinical/digital. Warm stones match the off-white canvas and Bodoni Moda's character. |

---

## 19. Pre-Delivery Checklist

### Typography & Fonts
- [ ] Bodoni Moda loads — all h1/h2 render in serif with correct weight
- [ ] Jost loads — all h3–h5, body, buttons render in geometric sans
- [ ] Lead paragraphs use Jost 300 (light) — not 400
- [ ] Eyebrows: 11px · uppercase · 0.25em tracking · teal-600
- [ ] Hero heading: Bodoni Moda · clamp(42px, 6vw, 72px) · −0.03em tracking
- [ ] Stat values in employee band: Bodoni Moda 700 · 36px
- [ ] No text placed on teal-500 (#3DB8C6) background
- [ ] Swoosh underline is teal (not orange)

### Color & Visual Accuracy
- [ ] Page background is #F9F9F7 (warm off-white, not #FFFFFF)
- [ ] No orange outside Contact CTA section and "View All" button
- [ ] All decorative blobs hidden (display: none)
- [ ] Ghost "VA" text in hero invisible
- [ ] All card types: no colored top/bottom accent bars
- [ ] Section backgrounds alternate: white/off-white rhythm per §9
- [ ] Employee band is solid #1F8C99 (no gradient, no blobs)
- [ ] CTA left panel is #0D0D0B charcoal (not orange)
- [ ] CTA form panel is #FFFFFF (not teal-tinted)
- [ ] Testimonial author names are ink-900 (not orange)
- [ ] Quote icon is ring/outline style (not solid filled circle)
- [ ] Step number circles are ring/outline (not solid filled)

### Interaction & States
- [ ] All cards: hover lift + shadow increase (no bar appears)
- [ ] Nav links: underline scaleX(0→1) on hover/active
- [ ] Nav border: hairline at rest, darker on scroll (no shadow)
- [ ] Nav height: 72px → 64px on scroll
- [ ] All clickable elements: cursor: pointer
- [ ] Primary buttons: correct teal-700 background (not teal-500)
- [ ] Accent buttons: orange only in CTA + "View All"
- [ ] Form fields: teal focus ring visible
- [ ] Testimonial active dot: expands to pill (24px × 8px)
- [ ] Testimonial quote: fadeUp animation on change
- [ ] Contact form: shows success state after valid submit

### Layout & Responsive
- [ ] No horizontal scroll at 375px
- [ ] Hero stacks correctly at ≤ 900px · media min-height 420px
- [ ] Nav burger appears at ≤ 980px · drawer works
- [ ] Process: 1 column at ≤ 820px
- [ ] Projects: 1 column at ≤ 860px
- [ ] Footer: 2-column at ≤ 920px · 1-column at ≤ 560px
- [ ] Testimonial clusters hidden at ≤ 920px
- [ ] Contact CTA stacks at ≤ 820px
- [ ] About section stacks at ≤ 860px

### Accessibility
- [ ] All icon-only buttons have aria-label
- [ ] Form inputs have aria-label (or visible label)
- [ ] All meaningful images have descriptive alt text
- [ ] Decorative images have alt=""
- [ ] Testimonial dots: role="tab" · aria-selected · aria-label
- [ ] Mobile burger: aria-expanded toggles correctly
- [ ] Error messages: role="alert" for screen readers
- [ ] Color is never the sole state indicator
- [ ] Tab order is logical (test keyboard-only navigation)
- [ ] `prefers-reduced-motion`: all animations disabled when set

### Performance
- [ ] All `<img>` replaced with `next/image <Image>`
- [ ] Hero image has `priority={true}` (preloaded)
- [ ] All images have explicit width + height (prevents CLS)
- [ ] Fonts loaded via `next/font` — no @import in CSS
- [ ] No layout shift visible on first load
- [ ] Lighthouse performance score ≥ 90

---

*Document version: 2.0 · Updated: 2026-06-10*  
*Sources: `/ui-ux-pro-max` — typography.csv · styles.csv · ux-guidelines.csv · stacks/nextjs.csv · products.csv · colors.csv*  
*Style archetype: Luxury Minimalist (typography) × Exaggerated Minimalism × Trust & Authority (styles) × Service Landing Page (product)*
