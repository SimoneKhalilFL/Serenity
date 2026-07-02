# Gear page images

Product images shown on `/gear.html` live in this folder.

## Amazon compliance in one sentence

You cannot copy-and-paste Amazon product images from a browser and reuse them
on your own site. Per the Amazon Associates Operating Agreement, the only
allowed ways to display Amazon product images are through the **Product
Advertising API (PA-API)** or the **SiteStripe** tool inside your
Amazon Associates dashboard.

## Recommended workflow (easiest)

For each product listed in `../../products.js`:

1. Log in to https://affiliate-program.amazon.com and open the product's
   detail page on Amazon while signed in with the same account. The
   SiteStripe bar appears at the top of the page.
2. In the SiteStripe bar click **Image** &rarr; choose the medium size.
3. Amazon opens a preview that includes an `<img src="...">` snippet.
   Right-click the image and pick **Save image as...**. Save it into this
   folder using the product's `id` from `products.js`.
   Example: for `id: 'schlage-encode'` save the file as `schlage-encode.jpg`.
4. In `../../products.js`, set the product's `image` field to the relative
   path, e.g. `image: 'images/gear/schlage-encode.jpg'`. Leave `image` as
   an empty string to fall back to a lettered placeholder card.

## Image guidelines

- **Format**: `.jpg` (photos) or `.png` (packaging shots with transparency).
- **Size**: 480&times;360 px is plenty; the cards render at ~260&times;195 css px.
  Larger images just waste bandwidth.
- **Aspect ratio**: The card slot is `4:3`; anything close is fine and will
  be `object-fit: cover`-cropped.
- **File names**: Lowercase, hyphenated, matches the `id` in `products.js`
  (e.g. `blink-battery-doorbell-2k.jpg`, `nicetown-blackout-curtains.jpg`).
  This is not required by code &mdash; the `image` field is free-form &mdash; but
  it keeps this folder searchable.

## What NOT to do

- Do not screenshot an Amazon product page and use the screenshot.
- Do not hotlink to `m.media-amazon.com/...` URLs; those URLs can change
  and Amazon can block hotlinking. If a hot link breaks, the affected
  product card falls back to the letter placeholder &mdash; not the end of the
  world, but not great either.
- Do not display any price you scraped from Amazon anywhere on the site.
  The Operating Agreement forbids showing cached prices; the gear page
  simply says "View on Amazon" instead.

## Own photos are fine (and often better)

If you have a photo you took yourself of the item installed at the condo,
that is actually better than an Amazon stock photo &mdash; more authentic and
zero compliance risk. Just drop your `.jpg` into this folder and point the
`image` field at it.
