# Brand assets

Canonical logo assets for the **StayAtFlorida** brand. Three-tier system per owner direction 2026-07-08 evening (`let's use this for the logo`): icon-only, primary logo (icon + wordmark), and full marketing lockup (icon + wordmark + tagline).

## Files

| File | Dimensions | Format | Tier | Use case |
|---|---|---|---|---|
| `logo-primary-1024.png` | ~882×882 (trimmed from 1024×799) | PNG (white bg) | **PRIMARY** | **Default for most uses** — website navigation *(pending site header alignment, tracker #54)*, external platform uploads *(GBP, Booking.com host profile, Airbnb host profile, VRBO owner photo)*, email signatures, business cards. Owner-designated primary logo per 2026-07-08 evening decision. |
| `logo-lockup-1024.png` | ~1024×1024 | PNG (white bg) | **MARKETING LOCKUP** *(optional)* | Wider marketing contexts where the `BEACHFRONT STAYS • LASTING MEMORIES` tagline fits + adds value: website hero banners, promotional graphics, print collateral (business cards' back side, brochures, direct-mail postcards), social-media announcement graphics, welcome-guide covers. **Do NOT use for small profile-pic slots** (tagline becomes illegible). |
| `logo-icon-720.png` | 720×720 | PNG (white bg) | **ICON ONLY** | Small square profile-pic slots where the wordmark won't render legibly: GBP profile picture (rendered at ~64-96px in map pack + knowledge panel), Facebook/Instagram profile pictures at small sizes, favicon replacement candidate *(pending)*, watermark on photo galleries, app-icon-like uses. |
| `logo-icon-720-transparent.png` | 720×720 | PNG (transparent bg) | **ICON ONLY (transparent)** | Same use cases as `logo-icon-720.png` but for platforms that render backgrounds themselves (dark-mode headers, colored footer bars, layered graphics). Prefer the white-background version by default — transparent-bg variant is a fallback for specific platforms that turn transparent into black or white unpredictably. |

## The tagline is optional

`BEACHFRONT STAYS • LASTING MEMORIES` (with the yellow-dot separator) is treated as an **optional marketing lockup**, NOT part of the primary logo. Owner direction 2026-07-08 evening.

- The **primary logo** (`logo-primary-1024.png`) is icon + `StayAtFlorida` wordmark only. This is the default identity element for external use.
- The **marketing lockup** (`logo-lockup-1024.png`) adds the tagline. Use only when horizontal/vertical space allows the tagline to render legibly AND when the tagline adds contextual value (e.g., a landing page hero, a print flyer).
- The tagline is codified in [`../../docs/brand/BRAND_GUIDELINES.md § Logo system`](../../docs/brand/BRAND_GUIDELINES.md) so it can be used consistently in ad copy, email signature footers, welcome-guide covers, etc. — even without the visual lockup.

## Source

The canonical source is a 1024×1024 PNG generated via ChatGPT 2026-07-08 evening from owner-directed prompts. Original owner-supplied PNG was cropped programmatically into the three functional tiers via a Node/`sharp` script *(deleted post-generation — regen instructions below).*

**Design elements:**

- **Sun** — yellow-orange gradient (`#F4C430` / `#F5A623` range in the AI output)
- **Palm tree silhouette** — forest green (`#0F5D5A` / `#134E4A` range)
- **Ocean waves** — layered navy `#1E3A5F` + teal `#0EA5E9` + light-teal `#5EEAD4` for water depth
- **`StayAtFlorida` wordmark** — serif font, navy `#0F1E3D` (matches deepest wave layer)
- **`BEACHFRONT STAYS • LASTING MEMORIES` tagline** — teal `#0F766E` with yellow-orange middot separator

Colors are as-rendered; hex values are approximate readings from the source PNG, not brand-book-locked. If we ever need exact color specs (for print or precise vector rebuilds), a color-picking pass on the source PNG would formalize them.

## Regenerating the tiers from source

If the source design changes (revised wordmark font, different tagline, new color palette, etc.):

1. Save the new source PNG (must be square, at least 1024×1024) as `_tmp_logo_source.png` at the repo root
2. Run this Node script (assumes `sharp` is available via `npm install --no-save sharp` if not already installed):

```javascript
const sharp = require('sharp');

const SRC = '_tmp_logo_source.png';
const DIR = 'images/brand';

(async () => {
  const meta = await sharp(SRC).metadata();

  // Full lockup — trim white borders, pass through
  await sharp(SRC).trim({ threshold: 10 }).toFile(`${DIR}/logo-lockup-1024.png`);

  // Primary — top 78% (must include wordmark descenders — the "y" in "Stay" needs its tail)
  const primaryHeight = Math.round(meta.height * 0.78);
  const tmpP = '_tmp_primary.png';
  await sharp(SRC).extract({ top: 0, left: 0, width: meta.width, height: primaryHeight }).toFile(tmpP);
  await sharp(tmpP).trim({ threshold: 10 }).toFile(`${DIR}/logo-primary-1024.png`);
  require('fs').unlinkSync(tmpP);

  // Icon only — top ~540px starting at y=80, then trim + 720x720 square with padding
  const tmpI = '_tmp_icon.png';
  await sharp(SRC).extract({ top: 80, left: 0, width: meta.width, height: 540 }).toFile(tmpI);
  await sharp(tmpI).trim({ threshold: 10 })
    .resize(720, 720, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFile(`${DIR}/logo-icon-720.png`);
  await sharp(tmpI).trim({ threshold: 10 })
    .resize(720, 720, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(`${DIR}/logo-icon-720-transparent.png`);
  require('fs').unlinkSync(tmpI);
})();
```

3. Delete `_tmp_logo_source.png` after successful generation.
4. Update this README's changelog with the regeneration date and the reason.

## Crop coordinates — WHY these values

The crop percentages/pixel coordinates in the regen script are specific to the current source composition. Two things to check if you change the source and the outputs look wrong:

- **Primary crop at 78% (819 of 1024px):** cuts just above the tagline but includes the full wordmark, including descenders. Cropping at 74% (initial attempt 2026-07-08 evening) cut off the "y" descender in "StayAtFlorida" — reads as "StavAtFlorida" — which is a critical brand-breaking error. Any new source layout must verify the primary crop still captures descenders.
- **Icon crop at y=80 to y=620 (540px tall):** captures the sun/palm/waves illustration without any wordmark bleed. If the new source moves the wordmark higher, this window will need to shrink.

## Aspect ratio — vertical/stacked, not horizontal

The current source lockup is a **vertical stack** (icon on top, wordmark below, tagline at bottom). All three tiers preserve this stacked arrangement.

**Implication for site header:** typical website headers use a **horizontal** lockup (icon left, wordmark right) to save vertical space. The current stacked primary logo won't fit a standard site header without either (a) cropping to icon-only, or (b) commissioning a proper horizontal-layout version.

The site header update work is tracked as [initiative #54](../../docs/phase-3/revenue-impact-tracker.md#54) — that initiative includes the decision on whether to (a) commission a horizontal-layout version from ChatGPT or a designer, (b) use `logo-icon-720.png` alongside a CSS-styled text wordmark, or (c) keep the current hand-coded SVG header and just align its style to the new brand palette.

## Public URLs (once pushed to GitHub main)

- **Raw GitHub — primary logo (default):** `https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main/images/brand/logo-primary-1024.png`
- **Raw GitHub — full lockup:** `https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main/images/brand/logo-lockup-1024.png`
- **Raw GitHub — icon only (white bg):** `https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main/images/brand/logo-icon-720.png`
- **Raw GitHub — icon only (transparent bg):** `https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main/images/brand/logo-icon-720-transparent.png`

Live-site URLs will resolve at `https://stayatflorida.com/images/brand/{filename}` once the next deploy lands.

## Which file to use where — cheat sheet

| Platform / Use case | File | Notes |
|---|---|---|
| Google Business Profile logo upload | `logo-primary-1024.png` | If GBP crops harshly to circle and cuts wordmark, switch to `logo-icon-720.png`. |
| Booking.com host profile picture | `logo-primary-1024.png` (default) or `logo-icon-720.png` (if Booking rejects for size / renders too small) | Test with primary first — Booking typically accepts up to a few MB. |
| Airbnb host profile picture | `logo-icon-720.png` | Airbnb crops to small circle; icon-only survives the crop. |
| VRBO owner profile picture | `logo-primary-1024.png` | VRBO shows the owner card at moderate size; primary reads. |
| Facebook page profile picture | `logo-primary-1024.png` or `logo-icon-720.png` | Facebook crops to circle for the profile pic slot — icon-only is safer for the circle; primary works for the cover-photo slot. |
| Instagram profile picture | `logo-icon-720.png` | Instagram profile pic is tiny + circular; only the icon survives. |
| Instagram Reels / Stories overlay | `logo-icon-720-transparent.png` | Transparent bg composites over live video. |
| Email signature | `logo-primary-1024.png` scaled down to ~200-300px wide in email client | Primary conveys brand at reading size. |
| Business cards (front) | `logo-primary-1024.png` | Clean, no tagline. |
| Business cards (back) | `logo-lockup-1024.png` | Room for the marketing tagline. |
| Website hero banners / homepage promotional graphics | `logo-lockup-1024.png` | Full lockup, tagline adds context. |
| Website site header nav bar | *pending — see initiative #54* | Current site uses inline SVG hand-coded logo; alignment to new brand pending. |
| Favicon | `favicon.svg` (current) → to be replaced with icon-only PNG variant post-site-header update | Pending initiative #54. |

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-08 (afternoon) | **Initial creation.** `logo-720.png` (26 KB) generated as PNG rasterization of `favicon.svg` (site's simple hand-coded sun/palm/waves icon) via `npx sharp-cli`. Purpose: give owner a rasterized version of the current site logo for external-platform uploads. | Content Sync Agent + owner request |
| 2026-07-08 (evening) | **Brand identity refreshed — three-tier logo system.** Owner provided a new ChatGPT-generated 1024×1024 source PNG showing icon + `StayAtFlorida` wordmark + `BEACHFRONT STAYS • LASTING MEMORIES` tagline. Adopted as the canonical brand identity per owner direction (`let's use this for the logo` → three-tier system → tagline treated as optional marketing lockup). **Files created:** `logo-lockup-1024.png` (full lockup, marketing use), `logo-primary-1024.png` (icon + wordmark, primary logo, default for most external use), `logo-icon-720.png` (icon only, white bg, small profile pics), `logo-icon-720-transparent.png` (icon only, transparent bg, layered use). **Files deleted:** `logo-720.png` (obsolete — represented the old hand-coded site icon, now superseded by the new brand identity; `favicon.svg` in repo root remains as the current site-header source until initiative #54 aligns it). **Regeneration script** documented in this README so future source updates can be re-cropped consistently. Primary crop set to top 78% after initial 74% attempt cut off the "y" descender in `StayAtFlorida` — logged as a durable gotcha. | Content Sync Agent + owner |
