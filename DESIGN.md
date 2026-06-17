---
version: 1.0
name: Instant VA — Design System
description: Editorial enterprise aesthetic — stark white canvas, near-black ink, a single coral accent used sparingly, and one deep-green feature band. Display type leans architectural (Space Grotesk), body type stays neutral and quiet (Inter), labels go monospace (Space Mono).
source: src/app/globals.css, src/components/**
---

## 1. Concept

Instant VA borrows the restraint of Cohere's enterprise marketing site: long white sections, hairline rules instead of boxes/shadows, one loud color used in tiny doses (a coral underline, an italic word, a numeral), and a single dark "product band" for contrast. Nothing competes with the headline. Cards are rare; rows and lists carry most of the content.

**Keep:** generous whitespace, one accent color, mono labels for eyebrows/numerals, italic-coral emphasis inside headlines.
**Avoid:** drop shadows on flat surfaces, more than one bright color on screen at once, filled icon badges, gradients.

---

## 2. Color

### Tokens (`globals.css :root`)

| Token | Value | Role |
|---|---|---|
| `--ink` | `#17171c` | Headings, primary button bg, footer/CTA panel bg |
| `--ink-2` | `#0e0e11` | Unused reserve — darkest ink |
| `--ink-soft` | `#212121` | Body text color |
| `--muted` | `#636370` | Secondary text — leads, descriptions, labels |
| `--paper` | `#ffffff` | Page background |
| `--paper-2` | `#eeece7` | Alternate section background (warm off-white) |
| `--paper-3` | `#d9d9dd` | Avatar/placeholder fill |
| `--line` / `--line-soft` | `#d9d9dd` / `#e5e7eb` | Hairline rules, borders |
| `--deep-green` | `#003c33` | "People" feature band background |
| `--clay` | `#ff7759` | The one accent — decorative only: underlines, dots, hover backgrounds, the logo mark, the marquee ornament |
| `--clay-text` | `#c2410c` | Same accent, darkened for use as actual readable text on light surfaces (headline/quote emphasis, numerals, hover-text states) |
| `--clay-soft` | `#ffad9b` | Accent on dark surfaces (already high-contrast on `--ink` / `--deep-green`) |
| `--on-dark` / `--on-dark-soft` / `--on-dark-faint` | `#fff` / `70%` / `40%` white | Text on ink/green surfaces |
| `--on-dark-line` | `10%` white | Borders on dark surfaces |
| `--error` | `#b30000` | Form validation only |

**Usage rule:** the page is white. Two surfaces break that — `--ink` (footer, CTA panel, primary buttons) and `--deep-green` (the People band). `--clay` never fills a background for text-bearing content; it accents (underline, italic word, dot, numeral, hover). When the accent colors actual readable text on a light surface, use `--clay-text` instead of `--clay` — see below.

### ✅ Contrast issues — fixed

- **`--muted` was `#93939f` on white (~3.0:1), now `#636370` (~5.9:1 on white, ~5.0:1 on `--paper-2`).** Passes WCAG AA (4.5:1) on both light backgrounds the token appears on. Same hue character (slightly cool/violet-leaning gray), just darker.
- **`--clay` as text color was ~2.6:1 on white, failing even the 3:1 large-text minimum.** Introduced `--clay-text` (`#c2410c`, ~5.2:1 on white) and swapped it in everywhere `--clay` was coloring actual readable text on a light surface: `.iva-hero__title em`, `.iva-serif em` (About/Services/Process/Projects heading emphasis), `.iva-tst__quote em`, `.svc-row__num`, `.iva-faq__n`, `.svc-row__title:hover`, `.iva-btn--secondary:hover`, `.iva-project-card__more:hover`. `--clay` itself is untouched and still used for everything decorative/non-text: the eyebrow tick, focus outline, hover backgrounds, dots, the marquee ornament, and the italic "V" in the logotype (brand marks are conventionally exempt from text-contrast rules). `--clay-soft` on dark surfaces (`--ink`, `--deep-green`) was already well above 4.5:1 and is unchanged.
- **Dead token:** `--action-blue` (#1863dc) is still declared but unused — left as-is since this is a "dead code" cleanup, not a contrast issue; flagging again in case it's worth removing separately.

---

## 3. Typography

| Token | Family | Use |
|---|---|---|
| `--font-display` | Space Grotesk (next/font, weights 400–700) | All headings, large numerals, stat values, logo |
| `--font-body` | Inter (300–600) | Paragraphs, nav links, buttons, form fields |
| `--font-mono` | Space Mono (400) | Eyebrows, micro-labels, step numbers, uppercase tags |

### Scale

| Token | Size | Used on |
|---|---|---|
| `--fs-hero` | clamp(52, 8.5vw, 128px) | `.iva-hero__title` |
| `--fs-display` | clamp(36, 5.2vw, 72px) | CTA panel `h2` |
| `--fs-h2` | clamp(30, 4vw, 56px) | Section heads |
| `--fs-h3` | clamp(20, 2.2vw, 28px) | Thank-you/sub heads |
| `--fs-quote` | clamp(20, 3vw, 40px) | Testimonial pull-quote |
| `--fs-lead` | clamp(16, 1.4vw, 18px) | Section intros |
| `--fs-body` | 16px | Paragraphs, inputs |
| `--fs-sm` | 14px | Buttons, nav links, card meta |
| `--fs-label` | 12px | Eyebrows, form head |
| `--fs-micro` | 11px | Stat labels, footer headings, badges |

**Line height:** display/headings near `1.0–1.1` (tight, architectural); body `1.5`; relaxed copy blocks `1.6`.
**Letter spacing:** headings slightly tightened (`-0.018em` to `-0.025em`); mono labels widened and uppercased (`0.06–0.12em`).
**Pattern:** one italic word per headline, colored `--clay` (`<em>` inside `.iva-serif`, `.iva-hero__title`, `.iva-band__copy h2`, `.iva-cta__panel h2`) — this is the system's signature move. Use exactly one per heading; more dilutes it.

---

## 4. Spacing, Radius, Motion

```
Container max-width   1240px, 28px side padding
Section padding       clamp(84px, 11vw, 160px) vertical
Radius scale           4 / 8 / 16 / 22 / 30 / full(pill)
Ease                   cubic-bezier(0.22,1,0.36,1) out · cubic-bezier(0.65,0,0.35,1) in-out
Duration               150ms fast · 260ms default · 480ms slow · 800ms scroll-reveal
```

- Buttons and badges are **always pills** (`--r-full`) or use the small/medium radii for cards and panels — never sharp corners on interactive surfaces.
- Sections stack with a `1px solid var(--line-soft)` top border between them instead of background blocks, except the two dark bands (`--ink`, `--deep-green`) which are full-bleed.
- Scroll-reveal: every section (except Hero) is wrapped in `RevealWrapper` → `.reveal` fades/slides up 24px over 800ms. Respects `prefers-reduced-motion` (disabled globally via media query).

---

## 5. Layout patterns

| Pattern | Where | Shape |
|---|---|---|
| Asymmetric media/copy split | About, People band | `1.05fr/1fr` or `0.9fr/1.1fr` grid, single image frame, no card |
| Sticky copy + scrolling row list | Services | copy column sticks at `top: 108px`, rows have hover-indent + arrow reveal |
| Numbered editorial rows | Process | `100px / 1fr / 1.4fr` grid, ghost-gray step numerals that color on hover |
| Centered stage | Testimonials | single big serif quote, glyph mark behind it, dot pager + two icon-button arrows |
| Two-pane panel | Contact CTA | dark ink panel (pitch + phone) next to white form panel, both inside one rounded bordered shell |
| Five-column footer | Footer | brand + 3 link columns + newsletter, collapses to 2 → 1 column |

**Grid discipline:** every multi-column section collapses to a single column under ~880px (`--about`, `--svc`, `--band`) or earlier for tighter ones (`--cta` at 820px). Card grids (`--work__grid`) go to 1 column under 880px rather than 2 — avoid an awkward 2-up tablet state.

---

## 6. Components

- **Button** (`Button.tsx`) — variants `primary` (ink pill, hovers to deep-green), `light` (white pill, hovers to clay-soft, for dark surfaces), `outline` (transparent, fills ink on hover), `secondary` (text link with animated underline, hovers clay). Sizes `sm/md/lg`. One primary CTA per section, never two competing pills side by side.
- **Eyebrow** — mono, uppercase, small dash-tick before the label (`var(--clay)` on light, `var(--clay-soft)` on dark). Numbered (`01 · About`, `02 · Services`…) — keep the sequence consistent if sections are reordered.
- **IconButton** — circular, 48px, outlined; fills `--ink` on hover. Always needs `label` prop → `aria-label` (already enforced by the component's required prop).
- **CheckItem** — outlined circular check in `--clay`, transparent fill. Used for short feature bullets only (3 items max observed).
- **StatCard** — display-font numeral + mono micro-label, for use only on dark/`--deep-green` surfaces.
- **Field** — underline-only input (no boxes), border flips to `--clay` on focus, error state flips border to `--error` with a hint line below.
- **ProjectCard** — flat image placeholder + body, lifts 4px with a soft shadow on hover (the *only* place a shadow appears in the system — reserve drop shadows for hoverable cards, not static surfaces).

---

## 7. Accessibility checklist — current state

- ✅ `:focus-visible` outlines in `--clay` globally; form fields use border-color focus instead (intentional, consistent within `.iva-field`).
- ✅ Icon-only buttons (`IconButton`, nav burger, footer social, newsletter submit) all carry `aria-label`.
- ✅ Decorative images/placeholders use `aria-hidden="true"`; avatar `<img>` alt left empty intentionally since the wrapping trust line already states the count in text.
- ✅ `prefers-reduced-motion` disables marquee, pulse, reveal, and quote fade globally.
- ✅ `--muted` and `--clay`-as-text contrast fixed — see §2.
- ⚠ Touch targets: footer social icons (40px) and the newsletter submit button (36px) sit below the 44px minimum recommended for touch. Low-severity since both have ample surrounding tap padding, but worth a bump if mobile conversion on the footer subscribe matters.
- ⚠ Testimonial dot pager buttons are 6px (24px when active) — fine as a *secondary* control since the prev/next `IconButton`s (48px) are the primary way to navigate, but don't rely on the dots alone for touch users.

---

## 8. Voice (for content placed into this system)

Short, declarative, lowercase-feeling even when capitalized — "Quiet work, loud results," "From hello to handled, in days." One clause of stakes, one clause of payoff. Numerals over words (`850+`, `24h`, `9 years`). No exclamation points, no emoji.
