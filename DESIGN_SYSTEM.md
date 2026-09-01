# Design System — The Founders Experience

Context for AI agents and developers working on this site. Grounded in the
current codebase (`src/app/globals.css`, `src/components/*`, `src/data/content.ts`).
Next.js 16 (App Router) + Tailwind CSS v4 + shadcn-style tokens + framer-motion.

TFE is visually aligned with **The Search Experience (TSE)** brand: deep navy
chrome, light-blue CTAs, and TSE’s type stack. Structure, copy, and journey
stay as built — this is a branding pass, not a redesign.

## 1. Design direction

Light default with navy **page chrome** (nav, heroes, footer) so TFE reads as
backed by TSE. Page interiors stay white with cool-gray surfaces and white
cards. Dark mode uses the same navy field (`#031f32`) with lifted cards.

Color roles come from TSE Marketing:

| Role | Hex | Use on this site |
|---|---|---|
| Deep Navy | `#031F32` | Nav, heroes, footer, dark panels, body ink |
| Light Blue | `#28AEC3` | CTAs, highlights, glows, the three-bar E |
| White | `#FFFFFF` | Page background, copy on navy |
| Cool Gray | `#A9A9A9` | Borders/hairlines (not body text — contrast) |

`--brand` is a deepened teal (`#1b7d8c` on light) so links and icons meet WCAG
on white. `--brand-bright` stays the official `#28AEC3` for buttons and navy
accents. Pink / orange / yellow / green from the TSE deck are not used here.

Type: **Montserrat** headings (`font-display`), **Arimo** body (`font-sans`),
**Open Sans** italic notes (`.caption`). Headings stay sentence case so the
site voice does not become all-caps.

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
| `--background` | `#ffffff` | `#031f32` | Page background. |
| `--foreground` / `--ink` | `#031f32` | `#f4f8fa` | Body/heading text. |
| `--surface` | `#f3f6f8` | `#072536` | Alternating section background (`bg-surface/70`). |
| `--card` | `#ffffff` | `#0a2c40` | Card/panel fill. |
| `--muted-foreground` | `#5a6a75` | `#9aadb8` | Secondary/body copy. |
| `--border` | `#d5dce1` | `#1a4258` | Hairline borders everywhere. |
| `--brand` | `#1b7d8c` | `#4ec3d4` | Teal for text/icons/links on page surfaces. |
| `--brand-bright` | `#28aec3` | `#28aec3` | Official TSE blue: CTAs, glows, navy accents. |
| `--accent` | `#e4f5f8` | `#0c3a4c` | Tint for chips, icon tiles, soft highlights. |
| `--navy` | `#031f32` | `#031f32` | Nav, heroes, footer, CTA dark panels. |
| `--primary` | `#28aec3` | `#28aec3` | Primary action pills (navy label on blue). |
| `--ring` | `#28aec3` | `#28aec3` | Focus rings. |

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
| `font-display` | Montserrat, `letter-spacing: -0.03em`, weight 700. | All headings (`h1`–`h4` styled text). |
| `caption` | Open Sans italic, 12px. | Notes, legal, helper copy. |
| `eyebrow` | Small uppercase Montserrat label with a gradient hairline lead-in. On `.hero-navy` it turns TSE blue. | Left-aligned section intros (page heroes, FAQ). |
| `eyebrow-center` | Pill variant: bordered chip with glowing blue dot. On `.hero-navy` it becomes a glass chip automatically. | Centered section intros. |
| `hero-navy` | `--navy` base with TSE-blue radial auras. | Home hero and inner page heroes (`PageHero`). White copy. |
| `mesh-light` | Soft TSE-blue radial wash, no violet. | Behind light feature sections such as Manifesto. |
| `dark-panel` | Same navy treatment as `hero-navy`. | Footer and CTA panels. Pair with `text-white`, `grain`. |
| `btn-glow` | Blue ambient lift for primary pills. | Every `bg-primary` pill button. |
| `surface-panel` | White panel: hairline border + soft ambient shadow. Static. | Non-interactive containers (FAQ accordion, form panels, privacy box). |
| `surface-card` | Same shell plus hover: cyan-tinted border, `translateY(-3px)`, deeper shadow. | Interactive/feature cards, always with `rounded-3xl`. |
| `section-divider` | Hairline at section top that fades out at both edges. | Boundary between alternating white / `bg-surface/70` sections. |
| `rule-fade` | Standalone 1px horizontal rule fading at both edges. | Inline separators inside a section. |
| `glow-brand` | Soft cyan ambient shadow. | Lifting featured panels on light backgrounds. |
| `icon-tile` | Light cyan gradient tile, cyan border, `--brand` icon color. | Icon containers inside cards (pair with `rounded-xl`/`rounded-2xl` and a fixed `size-*`). |
| `media-frame` | Deep ambient shadow for a photo shell. | Optional; featured media if a high-res asset is framed. |
| `shadow-lift` | Hairline lift shadow. | Secondary buttons on page surfaces. |
| `grain` | SVG noise overlay (6% opacity). | Texture on `dark-panel` (absolute inset-0, `opacity-40`, `pointer-events-none`). |
| `brand-flare` | 2px × 4rem cyan gradient bar. | Small accent above a left-aligned heading (About page). |

Also available: `text-balance` for headings, `animate-marquee` /
`animate-marquee-reverse` keyframes for logo strips.

## 4. Component patterns

- **Primary buttons** are TSE blue pills: `rounded-full bg-primary
  text-primary-foreground btn-glow h-12 px-7 font-semibold`, hover
  `-translate-y-0.5` + `bg-primary/90`. Navy label on `#28AEC3` in both
  themes. Built on `Button` from `@/components/ui/button` with
  `render={<Link … />}`.
- **Secondary buttons** on page surfaces: `rounded-full border border-border
  bg-card text-ink`, hover `border-brand/40 text-brand`. On navy chrome:
  `border-white/20 bg-white/5 text-white/90 backdrop-blur-sm`.
- **Theme toggle** lives in the navy header (`ThemeToggle`) as a glass chip.
  Icons switch via the `.dark` class so the correct glyph shows before React
  hydrates.
- **Cards**: `surface-card rounded-3xl p-7 sm:p-8`, title in `font-display
  text-h4 text-ink`, body in `text-muted-foreground`, icons in `icon-tile`.
- **Section intros**: centered sections use `eyebrow-center` + `mx-auto
  max-w-2xl text-center`; left-aligned sections use `eyebrow`. Headings are
  `font-display text-h2 text-ink text-balance`.
- **Section rhythm**: alternate white and `bg-surface/70` sections, separated
  by `section-divider` hairlines; standard sections use `py-section-sm`.
  Page heroes use `PageHero` (`hero-navy` + white type).
- **Scroll reveals**: wrap blocks in `<FadeIn>` (`src/components/FadeIn.tsx`),
  stagger with `delay={index * 0.08}`. Hero uses framer-motion directly with
  `useReducedMotion()`.
- **Wordmark strips**: `LogoMarquee` (`src/components/LogoMarquee.tsx`) renders
  company-name marquees using the marquee keyframes.
- **TFE logo**: `src/components/Logo.tsx` is an inline SVG lockup in TSE’s
  language — tracked “THE FOUNDERS” over the three-bar E + “XPERIENCE”. Outer
  bars and “XPERIENCE” use `currentColor` (white on navy chrome). Favicon
  (`src/app/icon.svg`) is the three-bar tile on navy. Draft raster lives at
  `/public/brand/tfe-wordmark-draft.png` for a later swap.
- **TSE logo**: TSE is a separate company. Always use the official
  guideline files via `TseLogo` — never redraw them in TFE’s lockup.
  `wordmark` (navy on white) on the `FoundingSponsor` card; `markOnNavy`
  on navy chrome. The site supplies white/navy clear space around the
  artwork; it does not restyle the mark.
- **Feature showcases**: `FeatureShowcase` renders alternating text/visual
  rows from `showcaseFeatures` in content.ts. Visuals are stylized mock-UI
  cards (directory, event, intro) built from divs — illustrative only, never
  real member data.

## 5. Page composition

Home (`src/app/page.tsx`) section order:

1. `Hero` — `hero-navy`, centered eyebrow + display H1 with TSE-blue
   gradient span, blue CTA, “Backed by” TSE mark, proof strip. No hero
   photograph — the community photo lives on the featured event card instead
   (source is ~1024px, too soft as a title billboard).
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
11. `CTASection` — `dark-panel` + `grain`, blue pill CTA.

Other pages:

- `/events` — `PageHero` navy band, `Events showAllLink={false}` (featured
  card includes the community gathering photo as a short banner), `Speakers`,
  then `EventUpdatesForm` beside an "Interested in speaking?" `surface-panel`
  on `bg-surface/70`.
- `/about` — `PageHero`, three value `surface-card`s, brand-flare manifesto
  block with blue pill CTA, `Founders`, privacy `surface-panel` (`#privacy`),
  `CTASection`.
- `/partners` — `PageHero` with meeting/inquiry CTAs, `Partners` (benefits +
  TSE founding sponsor lockup), `PartnershipTiers`,
  `PartnerApplicationForm` (`#partner-form`).
- `/apply` — `PageHero` with partner cross-link, `FounderApplicationForm`.

All pages sit under the sticky navy header (`--header-h`) and the navy
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

1. **Page interiors are theme-aware.** Use `bg-background`, `bg-surface`,
   `bg-card`, `text-ink`, and `text-muted-foreground` on page surfaces. Nav,
   heroes, and footer stay navy (`hero-navy` / `bg-navy` / `dark-panel`) with
   white copy in both themes.
2. **Primary actions are TSE blue** (`bg-primary text-primary-foreground`,
   navy on `#28AEC3`). Do not put white text on `#28AEC3` — contrast fails.
3. **Keep `#28AEC3` (`brand-bright`) off small text on light surfaces** — it
   fails contrast. Use `text-brand` for teal text, links, and icons on page
   backgrounds. `brand-bright` is for CTAs, glows, dots, and accents on navy.
4. **Navy chrome** follows the hero/footer recipe: `hero-navy` or
   `dark-panel` + white / `text-white/70` copy + `text-brand-bright` accents
   + blue pill primary CTA.
5. **TFE logo**: always use the SVG `Logo` component on navy chrome
   (`text-white`). TSE artwork stays official: frame it, don’t redraw it.
6. **Motion**: respect `prefers-reduced-motion`. Use the existing `FadeIn`
   wrapper or the `useReducedMotion()` pattern from `Hero.tsx`; globals.css
   already zeroes CSS animation/transition durations under reduced motion.
7. **New sections** should follow the rhythm: `container-site`, `py-section-sm`,
   `section-divider` when adjacent to a same-tone section, `eyebrow` /
   `eyebrow-center` intro, fluid type tokens (`text-h2`, `text-lead`) — no
   hardcoded `text-4xl`-style sizes for headings.
8. **Copy changes** go in `src/data/content.ts`; components should stay
   presentational.
