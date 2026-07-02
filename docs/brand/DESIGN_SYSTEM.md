# Design System

> **Purpose:** The canonical reference for colors, type, spacing, components, and accessibility used on `stayatflorida.com`. AI agents and contributors should consult this before adding new UI, styling components, or introducing new colors/fonts.
>
> **Ground truth for tokens:** `:root` in [`styles.css`](../../styles.css). If a token here disagrees with `styles.css`, update `styles.css` first, then this doc.
>
> **Owned by:** [UX Director](AGENTS.md#3-ux-director). **Reviewers on changes:** Brand Director, Software Architect, QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Design philosophy

**Luxury through simplicity.** Every element on the page should feel intentional, calm, and confident. If a decoration doesn't earn its space, remove it.

- Warmth over glare.
- Whitespace over decoration.
- Real photography over stock illustration.
- Two accent colors — no more.
- Serif for personality, sans for legibility.

---

## Color palette

The brand vocabulary maps to the CSS tokens defined in `styles.css`:

| Brand name | CSS variable | Value | Usage |
|---|---|---|---|
| Deep Navy | `--primary-color` | `#2D7DD2` | Primary brand color, links, CTAs |
| Navy Dark | `--primary-dark` | `#1E5BA8` | Hover states, accents |
| Sea Glass | `--accent-cta` | `#0f766e` | Secondary CTAs, direct-book emphasis |
| Warm Sun | `--secondary-color` | `#F59E0B` | Sun/sparkle accents in logo, badges (used sparingly) |
| Text Primary | `--text-primary` | `#1F2937` | Headings and body text on light backgrounds |
| Text Secondary | `--text-secondary` | `#6B7280` | Subtitles, captions, meta |
| Warm White | `--bg-white` | `#FFFFFF` | Card and page backgrounds |
| Soft Sand | `--bg-light` | `#F9FAFB` | Section backgrounds, subtle separation |
| Driftwood | `--border-color` | `#E5E7EB` | Borders, dividers |
| Success | `--success-color` | `#10B981` | Availability confirmed, success toasts |
| Error | `--error-color` | `#EF4444` | Booked/blocked days, validation errors |

**Rules:**

- Never introduce a new brand hue without adding a token in `:root`.
- Never use pure black (`#000`) or pure white (`#FFF`) for text — use `--text-primary` and `--bg-white`.
- Never combine `--secondary-color` (`#F59E0B`) with `--error-color` (`#EF4444`) in the same component; both are attention colors and will fight.
- The **fake blue water** anti-pattern from the brand standards applies to photos, not the palette. `#2D7DD2` is fine as a brand accent.

---

## Typography

The site loads two typefaces from Google Fonts (see `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap">` in every HTML page):

| Role | Font | Fallback | Weights |
|---|---|---|---|
| Body, UI, buttons | **Inter** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | 300, 400, 500, 600, 700 |
| Display headings, taglines | **Playfair Display** | `Georgia, serif` | 600, 700 |

**Rules:**

- H1, H2, section titles → Playfair Display.
- Body copy, buttons, form inputs, meta → Inter.
- Property taglines (`Above the Gulf. Beyond Expectations.`) use Playfair Display italic — see `.property-detail-tagline` in `styles.css`.
- Never introduce a third typeface. Never load a decorative script font.
- No text under 14px (0.875rem) except legal footnotes.

### Type scale (approximate — see `styles.css` for exact values)

| Element | Desktop | Mobile |
|---|---|---|
| Hero H1 | 4rem | 2rem |
| Section title (H2) | 2.5rem | 2rem |
| Property detail title (H1) | 3rem | 2rem |
| Card title (H3) | 1.5rem | 1.25rem |
| Body | 1rem | 1rem |
| Small / meta | 0.875rem | 0.875rem |

---

## Spacing

Follow the Tailwind-adjacent scale already in use across `styles.css`:

`0.25rem · 0.5rem · 0.75rem · 1rem · 1.5rem · 2rem · 3rem · 4rem · 6rem`

Sections use 4–6rem vertical padding on desktop, 2–3rem on mobile. Cards use 1.5–2rem interior padding. Nav items use 0.5–0.75rem.

Radii use the `--radius-*` tokens; buttons and cards use `--radius-md` (0.5rem) by default.

---

## Components

The critical components rendered by `app.js` and styled by `styles.css`:

### Navigation

- Fixed top nav (`.navbar`), sticky at scroll, subtle bottom border.
- Left: logo + brand text (`StayAtFlorida`) — must stay on one line (see `.logo span { white-space: nowrap; }`).
- Right: Home / Properties / Gear / Contact. Mobile collapses to a hamburger.
- Active-state underline uses `--primary-color`.

### Hero (homepage)

- Full-viewport video with dark overlay.
- Order of elements: **Eyebrow** (`Luxury Beachfront Vacation Homes`) → **H1** (`Book Direct. Stay Better.`) → supporting paragraph → primary CTA (`Book Direct & Save`) → trust badges.
- Trust badges are inline pills with an icon on the left.
- Eyebrow uses uppercase, tracked letter-spacing, and white text.

### Property card (homepage grid)

- Image, badge (if featured), title, **card subtitle** (`A StayAtFlorida Signature Property` — uppercase, tracked, primary-color), location with pin icon, sleeps line, **card blurb** (short description), stats row, primary CTA.
- Card blurb is grey (`--text-secondary`) and one-paragraph. Never longer than three lines on desktop.

### Property detail hero

Order of elements inside `.property-detail-header`:

1. **H1** — property name (`Twenty First`)
2. **Subtitle** — brand affiliation line (`A StayAtFlorida Signature Property`)
3. **Tagline** — italic Playfair Display in `--primary-color` (`Above the Gulf. Beyond Expectations.`)
4. **Location** — city, state with pin icon
5. **Hero copy** — one paragraph, 60ch max width
6. **Primary + secondary CTA** — `Book Direct & Save` and `View Photos`

### CTAs

- `.btn.btn-primary` — filled primary color, white text.
- `.btn.btn-secondary` — outlined or muted background, primary color text.
- `.btn.btn-sticky` — appears in the sticky bottom bar on listing pages once dates are selected.

**Rules:**

- Never more than two CTAs visible at once above the fold.
- Primary CTA always uses one of the approved phrases: `Book Direct & Save`, `Email to Book`, `See Our Properties`, `Book Direct. Stay Better.`
- Never use `Buy Now`, `Reserve Now with 20% Off`, or discount hype.

### Footer

- Three-column layout on desktop, stacked on mobile.
- Left column: brand name (H3), one-sentence brand statement, social links.
- Center: destination links.
- Right: policy links, legal disclaimer.
- Bottom bar: copyright (`© 2026 StayAtFlorida — Luxury Beachfront Vacation Homes on Florida's Gulf Coast. All rights reserved.`).

---

## Iconography

Feather Icons via inline SVG. No icon fonts, no external SVG sprite files.

**Rules:**

- All decorative icons must have `aria-hidden="true"`.
- All meaningful icons must have an adjacent visible label (never rely on tooltip-only meaning).
- Icons use `stroke-width="2"` and `stroke="currentColor"` so they inherit brand color.

---

## Imagery

See [`PROPERTY_PORTFOLIO.md`](PROPERTY_PORTFOLIO.md), the individual property `MASTER.md` files (e.g. [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md)), and the Photography section of [`StayAtFlorida-Brand-Standards-v1.0.md`](../../StayAtFlorida-Brand-Standards-v1.0.md) for the photo priority list.

**Technical rules:**

- All property photos live under `images/lodging/` with the `tw-*` (Twenty First) or `ms-*` (Majestic Sun) prefix.
- All `<img>` tags must have descriptive `alt` text — see [`SEO.md`](SEO.md#image-alt-text-patterns).
- Gallery images: 1200px wide minimum, JPEG or WebP, ~75–85% quality.
- Hero video: MP4, ≤10 MB, muted, poster image required.

---

## Accessibility contract

Non-negotiable for any UI change:

- **Contrast:** Text meets WCAG AA (4.5:1 body, 3:1 large text). Verify with browser devtools before shipping any new color pair.
- **Keyboard:** Every interactive element is reachable via `Tab` and operable via `Enter` / `Space`. Focus state is always visible (never suppress the outline without providing an equivalent).
- **Screen readers:** Every image has meaningful `alt`, every icon-only button has `aria-label`, every landmark has a role or semantic element.
- **Motion:** Any auto-advancing carousel or video honors `prefers-reduced-motion: reduce`.
- **Forms:** All inputs have programmatic `<label>` associations; error messages are announced.

If a change fails any of the above, it does not ship.

---

## Do not do

- Do not introduce Tailwind, Bootstrap, or any UI framework. The codebase is intentionally vanilla HTML/CSS/JS.
- Do not add a build step (esbuild, webpack, etc.) without approval from the [Software Architect](AGENTS.md#7-software-architect) role.
- Do not add analytics beyond the existing Cloudflare Web Analytics + Microsoft Clarity setup.
- Do not add cookies. Both existing analytics run cookieless.
- Do not inline more than ~20 lines of style in HTML — put it in `styles.css`.

---

## Button anatomy

Every button must match one of these three variants. Never introduce a fourth without adding a token and updating this doc.

| Variant | CSS class | Background | Text | Border | Usage |
|---|---|---|---|---|---|
| Primary | `.btn.btn-primary` | `--primary-color` | `--bg-white` | none | Main conversion CTA. One per section maximum. |
| Secondary | `.btn.btn-secondary` | transparent | `--primary-color` | 1px `--primary-color` | Alternative action (View Photos, Learn More). |
| Sticky | `.btn.btn-sticky` | `--accent-cta` | `--bg-white` | none | Sticky booking bar CTA on the property page. |

**Sizing:**

- Height: 48px desktop, 52px mobile (meets the 44px tap-target minimum).
- Horizontal padding: 1.5rem (24px).
- Vertical padding: 0.75rem (12px).
- Border radius: `--radius-md` (0.5rem).
- Font: Inter 500, 1rem (16px).

**States (must all be defined):**

| State | Behavior |
|---|---|
| Default | As above. |
| Hover | Darken bg 8% (primary → `--primary-dark`); cursor pointer. |
| Focus | Visible 2px outline in `--primary-color` at 2px offset. Never suppress. |
| Active | Slightly compressed (transform: translateY(1px)). |
| Disabled | 60% opacity, no cursor pointer, no hover state, `aria-disabled="true"`. |

**Approved button copy:** see [`BRAND_GUIDELINES.md#primary-cta`](BRAND_GUIDELINES.md#primary-cta). Never use hype phrases, never use icons alone without an accessible label.

---

## Form patterns

Applies to the contact / inquiry form and any future form on the site.

**Structure:**

```
<label for="{id}">{Field label}</label>
<input id="{id}" name="{name}" type="{type}" ... />
<span class="form-help" id="{id}-help">{Optional help text}</span>
```

- Every input **must** have a programmatic `<label>` — never rely on placeholder text as a label.
- Placeholder text is optional and never replaces the label.
- Required fields: mark with `required` attribute *and* a visible `*` next to the label.

**Validation:**

- Client-side validation before submit (HTML5 attributes: `required`, `type="email"`, `pattern`, `min/max`).
- Error messages appear **below the field**, in `--error-color`, with `aria-describedby` linking the input to the error message.
- Never rely on `alert()` for errors. Never suppress the native error announcement without providing an accessible replacement.

**Spacing:**

- Label to input: 0.5rem margin-bottom on the label.
- Input to next field: 1.5rem margin-bottom on the input group.
- Submit button: 2rem margin-top from the last field.

**Submit button:** always `.btn.btn-primary`. Label reflects the specific action — `Email to Book`, `Send Inquiry`, `Ask a Question` — never bare `Submit`.

---

## Motion and interaction

Motion must never distract from booking or content.

**Rules:**

- Transitions use `--transition` (0.3s ease) for hover / focus state changes.
- No auto-advancing carousels. If a carousel exists, guest must control it.
- Any animation that plays on load must complete in under 500ms.
- Everything above respects `prefers-reduced-motion: reduce`. Wrap in:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

- No parallax scrolling.
- No cursor-following effects.
- No confetti, no burst animations on button click.

**Approved animation vocabulary:**

- Opacity fade (0.3s ease).
- Vertical slide-in for section reveals (`translateY(20px)` → `translateY(0)`, 0.4s ease).
- Modal / lightbox open-close (0.2s ease).

Anything more elaborate needs UX Director + Software Architect approval.

---

## Do / Don't quick reference

Fast pattern lookup for common visual decisions.

| Do | Don't |
|---|---|
| One primary CTA above the fold | Two competing CTAs above the fold |
| Whitespace between sections (min 4rem desktop) | Cramming sections edge-to-edge |
| Descriptive image `alt` text | `alt=""` on content images |
| Sentence case for section titles | ALL CAPS section titles |
| Playfair Display for H1 / H2 / taglines | Playfair Display for body text |
| Inter for buttons, forms, body | Inter for property taglines (use Playfair italic) |
| `--primary-color` for links and primary CTAs | New hex codes without a token |
| Feather Icons via inline SVG | Icon fonts, sprite files, third-party icon CDNs |
| `loading="lazy"` on below-fold images | Loading full-resolution above-fold images without a `poster` |
| One `<h1>` per page | Multiple `<h1>` or a section-styled div acting as one |
