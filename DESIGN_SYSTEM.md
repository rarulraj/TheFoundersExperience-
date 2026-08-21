# Design System — The Founders Experience

Context for AI agents and developers working on this site. Grounded in the
current codebase (`src/app/globals.css`, `src/components/*`, `src/data/content.ts`).
Next.js 16 (App Router) + Tailwind CSS v4 + shadcn-style tokens + framer-motion.

## 1. Design direction

The site is a polished, Circle.so-inspired product with a **light default**
and a first-class **navy dark mode**. Light surfaces are cool pearl
(`--background: #f6f8fb`) with white cards and deep navy ink (`#0c1524`) for
text and primary pills. Dark mode inverts the page to a navy field
(`#0a101c`) with lifted cards (`#121a2b`) and inverted light pills. The brand
cyan is used two ways: `--brand` for text/icons (deepened on light, brightened
on dark so contrast holds), and `--brand-bright` (`#00c6fc`) for glows,
gradients, and accents on `dark-panel` sections. Deep navy (`--navy`) is still
reserved for footer and CTA panels — those stay dark in both themes.

Theme is class-based (`html.dark`), toggled from the header (`ThemeToggle`),
and persisted in `localStorage` (`tfe-theme`). A blocking script in the root
layout applies the stored or system preference before first paint.

## 2. Design tokens

All tokens are CSS custom properties in `:root` / `.dark` (globals.css),
mapped into Tailwind via `@theme inline` (so `bg-surface`, `text-ink`,
`text-brand`, `bg-navy`, `py-section`, `text-h2`, etc. all work as utilities).
Use tokens — not hardcoded hex — so both themes stay in sync.

### Colors (light → dark)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#f6f8fb` | `#0a101c` | Page background. |
| `--foreground` / `--ink` | `#0c1524` | `#e7eef7` | Body/heading text. |
| `--surface` | `#eef3f8` | `#0e1626` | Alternating section background (`bg-surface/70`). |
| `--card` | `#ffffff` | `#121a2b` | Card/panel fill. |
| `--muted-foreground` | `#5a6c80` | `#8fa0b5` | Secondary/body copy. |
| `--border` | `#dde5ee` | `#243044` | Hairline borders everywhere. |
| `--brand` | `#007dad` | `#3ec6ea` | Cyan for text/icons/links on page surfaces. |
| `--brand-bright` | `#00c6fc` | `#00c6fc` | Vivid cyan: glows, gradients, dark-panel accents. |
| `--accent` | `#dff4fc` | `#0c3040` | Tint for chips, icon tiles, soft highlights. |
| `--navy` | `#07101f` | `#060d1c` | Footer + CTA dark panels. |
| `--primary` | `#0c1524` | `#e7eef7` | Primary action pills (ink on light, inverted on dark). |
| `--ring` | `#00a8d8` | `#00c6fc` | Focus rings. |

### Shape & layout

| Token | Value | Use |
|---|---|---|
| `--radius` | `1rem` | Base radius; scale runs `--radius-sm` … `--radius-4xl`. Cards use `rounded-3xl`. |
| `--header-h` | `4.25rem` | Sticky header height; drives `scroll-padding-top` for anchor links. |
| `--hero-min-h` | `min(92svh, 880px)` | Hero floor height (svh on supporting browsers). |

### Fluid type scale (clamp between 360px and 1152px viewports, then locks)

| Token | Range | Use |
|---|---|---|
| `--text-display` | 2.5rem → 4.75rem | Home hero H1 only. |
| `--text-h1` | 2rem → 3.9rem | Page heroes (`/events`, `/about`, …). |
| `--text-h2` | 1.8rem → 2.85rem | Section headings. |
| `--text-h3` | 1.5rem → 1.875rem | Sub-section / panel headings. |
| `--text-h4` | 1.25rem → 1.5rem | Card titles. |
| `--text-lead` | 1.05rem → 1.25rem | Intro paragraphs under headings. |

### Fluid spacing

| Token | Range | Use |
|---|---|---|
| `--spacing-section` | 3.5rem → 8rem | `py-section` on page heroes / large sections. |
| `--spacing-section-sm` | 2.75rem → 5.5rem | `py-section-sm` on standard sections. |
| `--spacing-gutter` | 1.25rem → 3rem | Horizontal page padding (via `container-site`). |

## 3. Utility classes (globals.css `@layer utilities`)

| Class | What it does | When to use |
|---|---|---|
| `container-site` | Centers content, `max-width: 75rem`, fluid gutter padding. Owns max-width — put any narrower `max-w-*` on a child, not alongside it. | Every section's inner wrapper. |
| `font-display` | Inter with `letter-spacing: -0.035em`, weight 650. | All headings (`h1`–`h4` styled text). |
| `eyebrow` | Small uppercase brand-cyan label with a gradient hairline lead-in. | Left-aligned section intros (page heroes, FAQ). |
| `eyebrow-center` | Pill variant: bordered chip with glowing cyan dot. | Centered, Circle-style section intros. On dark panels override with `border-white/15 bg-white/5 text-brand-bright shadow-none`. |
| `surface-panel` | White panel: hairline border + soft ambient shadow. Static. | Non-interactive containers (FAQ accordion, form panels, privacy box). |
| `surface-card` | Same shell plus hover: cyan-tinted border, `translateY(-3px)`, deeper shadow. | Interactive/feature cards, always with `rounded-3xl`. |
| `section-divider` | Hairline at section top that fades out at both edges. | Boundary between alternating white / `bg-surface/70` sections. |
| `rule-fade` | Standalone 1px horizontal rule fading at both edges. | Inline separators inside a section. |
| `glow-brand` | Soft cyan ambient shadow. | Lifting hero visuals / featured panels on light backgrounds. |
| `btn-glow` | Lift shadow for dark primary pills; hover shifts the glow toward cyan. | Every `bg-primary` pill button. |
| `icon-tile` | Light cyan gradient tile, cyan border, `--brand` icon color. | Icon containers inside cards (pair with `rounded-xl`/`rounded-2xl` and a fixed `size-*`). |
| `mesh-light` | Pastel cyan-forward radial mesh with a whisper of violet (navy glows in dark mode). | Behind page heroes and feature sections (`absolute inset-0` under content). |
| `dark-panel` | `--navy` base with cyan radial auras. | Footer and CTA panels only. Pair with `text-white`, `grain`, and `rounded-[2rem]`. Stays navy in both themes. |
| `media-frame` | Deep ambient shadow for a photo shell. | Optional; featured media if a high-res asset is framed. |
| `shadow-lift` | Hairline lift shadow. | Secondary buttons on page surfaces. |
| `grain` | SVG noise overlay (6% opacity). | Texture on `dark-panel` (absolute inset-0, `opacity-40`, `pointer-events-none`). |
| `brand-flare` | 2px × 4rem cyan gradient bar. | Small accent above a left-aligned heading (About page). |

Also available: `text-balance` for headings, `animate-marquee` /
`animate-marquee-reverse` keyframes for logo strips.

## 4. Component patterns

- **Primary buttons** are theme-aware pills: `rounded-full bg-primary
  text-primary-foreground btn-glow h-12 px-7 font-semibold`, hover
  `-translate-y-0.5` + `bg-primary/90`. Ink on light, inverted on dark.
  Built on `Button` from `@/components/ui/button` with `render={<Link … />}`.
- **Cyan pill CTAs** (`bg-brand-bright text-navy` + cyan glow shadow) appear
  **only on dark panels** (CTASection, footer, featured partnership tier).
  Never on ordinary page surfaces.
- **Secondary buttons** on page surfaces: `rounded-full border border-border
  bg-card text-ink`, hover `border-brand/40 text-brand`. On dark panels:
  `border-white/20 bg-white/5 text-white/90 backdrop-blur-sm`.
- **Theme toggle** lives in the header (`ThemeToggle`). Icons switch via the
  `.dark` class so the correct glyph shows before React hydrates.
- **Cards**: `surface-card rounded-3xl p-7 sm:p-8`, title in `font-display
  text-h4 text-ink`, body in `text-muted-foreground`, icons in `icon-tile`.
- **Section intros**: centered sections use `eyebrow-center` + `mx-auto
  max-w-2xl text-center`; left-aligned sections use `eyebrow`. Headings are
  `font-display text-h2 text-ink text-balance`.
- **Section rhythm**: alternate white and `bg-surface/70` sections, separated
  by `section-divider` hairlines; standard sections use `py-section-sm`,
  page heroes use `py-section` over `mesh-light`.
- **Scroll reveals**: wrap blocks in `<FadeIn>` (`src/components/FadeIn.tsx`),
  stagger with `delay={index * 0.08}`. Hero uses framer-motion directly with
  `useReducedMotion()`.
- **Wordmark strips**: `LogoMarquee` (`src/components/LogoMarquee.tsx`) renders
  company-name marquees using the marquee keyframes.
- **Logo**: `src/components/Logo.tsx` is an inline SVG wordmark. The mark is
  the same three-bar tile as the favicon (`src/app/icon.svg`) — dark tile,
  white/cyan/white bars — so browser tab, nav, and footer all match. The type
  uses `currentColor`, so the parent sets the color (`text-ink` on light,
  `text-white` on dark); a faint `currentColor` stroke keeps the tile defined
  on dark panels. Never use the old `/public/logo.png` (dark-background-only).
- **Feature showcases**: `FeatureShowcase` renders alternating text/visual
  rows from `showcaseFeatures` in content.ts. Visuals are stylized mock-UI
  cards (directory, event, intro) built from divs — illustrative only, never
  real member data.

## 5. Page composition

Home (`src/app/page.tsx`) section order:

1. `Hero` — mesh-light, centered eyebrow + display H1 with gradient span, ink
   pill CTA, proof strip. No hero photograph — the community photo lives on
   the featured event card instead (source is ~1024px, too soft as a title
   billboard).
2. `CommunityBenefits` (`#community`)
3. `FeatureShowcase` — 3 alternating rows (Community / Events /
   Introductions) with mock-UI visuals.
4. `HowItWorks` — 3-step `surface-card`s on `bg-surface/70`, connector line.
5. `MemberBenefits`
6. `WhoShouldJoin` — personas.
7. `Sponsors` — founding sponsor + `LogoMarquee`.
8. `Events compact` — upcoming events teaser.
9. `Manifesto` — big gradient statement + `manifestoStats` band on mesh-light.
10. `FAQ` — left intro + accordion in a `surface-panel`.
11. `CTASection` — `dark-panel` + `grain`, cyan pill CTA.

Other pages:

- `/events` — mesh-light page hero (`eyebrow` + `text-h1`), `Events
  showAllLink={false}` (featured card includes the community gathering
  photo as a short banner), `Speakers`, then `EventUpdatesForm` beside an
  "Interested in speaking?" `surface-panel` on `bg-surface/70`.
- `/about` — mesh-light hero, three value `surface-card`s, brand-flare
  manifesto block with ink pill CTA, `Founders`, privacy `surface-panel`
  (`#privacy`), `CTASection`.
- `/partners` — mesh-light hero, `Partners` (benefits), `PartnershipTiers`,
  `PartnerApplicationForm` (`#partner-form`).
- `/apply` — mesh-light hero with partner cross-link, `FounderApplicationForm`.

All pages sit under the sticky header (`--header-h`) and the dark navy
`Footer` in `src/app/layout.tsx`.

## 6. Content model

All copy lives in `src/data/content.ts` — edit text there, not in components.
Key exports: `siteConfig`, `navLinks`, `whyCards`, `memberBenefits`,
`socialProofPoints`, `howItWorks` (3 steps: Apply / Get accepted / Plug in),
`showcaseFeatures` (3 showcase rows with `visual: directory | event | intro`),
`manifestoStats` (4 stats), `faqs` (6 Q&As), `featuredEvent`, `upcomingEvents`, `speakers`,
`partnerBenefits`, `founders`, `foundingSponsor`, `companiesWorkedWith`,
`partnershipTiers`, `personas`, plus form option lists (`companyStages`,
`partnershipInterests`, `budgetRanges`) and `memberLogos`.

## 7. Rules for future changes

1. **Page chrome is theme-aware.** Use `bg-background`, `bg-surface`,
   `bg-card`, `text-ink`, and `text-muted-foreground` — never hardcoded
   `#fff` / `#0d1526` on page surfaces. Dark mode is a first-class theme,
   not a page-wide `dark-panel`.
2. **Don't use `bg-brand` with white text on light surfaces.** Primary actions
   are `bg-primary` pills; cyan pills (`bg-brand-bright text-navy`) are
   for dark panels only.
3. **Keep `#00c6fc` (`brand-bright`) off small text on light surfaces** — it
   fails contrast. Use `text-brand` for cyan text, links, and icons on page
   backgrounds. `brand-bright` is for glows, gradients, dots, and accents
   on dark panels.
4. **Dark panels** follow the CTASection recipe in both themes: `dark-panel`
   + `grain` overlay + `text-white` / `text-white/70` copy +
   `text-brand-bright` accents + cyan pill primary CTA. They stay navy even
   when the rest of the page is dark.
5. **Logo**: always use the SVG `Logo` component and set color via the
   parent's text color (`text-ink` on page chrome, `text-white` on dark
   panels). `/public/logo.png` is dark-background-only — do not use it on
   light surfaces.
6. **Motion**: respect `prefers-reduced-motion`. Use the existing `FadeIn`
   wrapper or the `useReducedMotion()` pattern from `Hero.tsx`; globals.css
   already zeroes CSS animation/transition durations under reduced motion.
7. **New sections** should follow the rhythm: `container-site`, `py-section-sm`,
   `section-divider` when adjacent to a same-tone section, `eyebrow` /
   `eyebrow-center` intro, fluid type tokens (`text-h2`, `text-lead`) — no
   hardcoded `text-4xl`-style sizes for headings.
8. **Copy changes** go in `src/data/content.ts`; components should stay
   presentational.
