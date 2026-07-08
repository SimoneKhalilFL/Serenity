# Brand assets

Raster + vector brand assets for use in external platforms (Google Business Profile, social media, email signatures, business cards). The canonical **source of truth** for the icon design is [`../../favicon.svg`](../../favicon.svg) — everything in this folder is derived from that SVG at various rasterized sizes.

## Files

| File | Dimensions | Format | Use case | Source |
|---|---|---|---|---|
| `logo-720.png` | 720×720 px | PNG (transparent bg) | Google Business Profile logo upload, Facebook page profile, Instagram profile picture, email signature, business cards. **Canonical rasterized logo** at recommended-max for most external platforms. | Rasterized from [`../../favicon.svg`](../../favicon.svg) via `npx sharp-cli --input favicon.svg --output _tmp_logo_720.png resize 720 720 --format png` (2026-07-08). |

## Regenerating from source

If the icon design in [`../../favicon.svg`](../../favicon.svg) changes, regenerate the rasters:

```bash
# From repo root, on Windows PowerShell:
npx --yes sharp-cli --input favicon.svg --output images/brand/logo-720.png resize 720 720 --format png
```

For other target sizes (256, 512, 1024) — same command, swap the size numbers. Google Business Profile accepts up to 5120×5120 but 720 is the practical sweet spot.

## Design notes

The icon is intentionally minimal and composed of three brand elements:

- **Sun** (orange `#F59E0B` fill + yellow `#FBBF24` core) — evokes Florida coastal warmth
- **Palm tree silhouette** (forest green `#065F46`) — coastal, tropical, right-side placement
- **Three ocean wave layers** (sky blue `#0EA5E9`, staggered opacity) — Gulf-front positioning

Empty upper-left space is intentional in the SVG viewBox (`0 0 48 48`) — the composition reads correctly at small sizes (browser tab favicon, GBP profile card at ~64px). Cropping tighter would sacrifice the airy negative-space aesthetic that matches the brand's positioning against boxy competitor branding.

## Where the logo appears on the live site

- **Header (all pages)** — inline SVG in [`../../index.html`](../../index.html) line 96-110, alongside the `<span>StayAtFlorida</span>` wordmark
- **Favicon (browser tab, bookmarks)** — [`../../favicon.svg`](../../favicon.svg) referenced by `<link rel="icon">` and `<link rel="apple-touch-icon">`
- **Structured data** — Organization JSON-LD in [`../../index.html`](../../index.html) references `https://stayatflorida.com/favicon.svg` as the `logo.url`. Post-launch consideration: swap the JSON-LD reference to `logo-720.png` for better rich-result rendering across Google properties.

## Public URLs (once pushed to GitHub main)

- **Raw GitHub (works everywhere, direct download):** `https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main/images/brand/logo-720.png`
- **Live site (once next deploy lands):** `https://stayatflorida.com/images/brand/logo-720.png`

Use the live-site URL for schema.org / JSON-LD references. Use the raw GitHub URL for one-off uploads to platforms that need a downloadable PNG (like GBP).
