// ==========================================
// Amazon Affiliate Products (Gear page)
// ==========================================
// Products showcased on /gear.html. Loaded as a plain <script> in the browser
// and required from Node in scripts (e.g. sitemap/cache-bust) via the
// CommonJS export at the bottom.
//
// Adding a new product:
//   1. In your Amazon Associates account, open the product page and use
//      SiteStripe to grab either a "Short Link" (amzn.to/...) or a full URL
//      with the ?tag=stayatflorida-20 parameter. Put that in `amazonUrl`.
//   2. Alternatively, if you only have the ASIN, set `asin` and leave
//      `amazonUrl` empty — buildAffiliateUrl() below will construct
//      https://www.amazon.com/dp/<ASIN>?tag=stayatflorida-20 automatically.
//   3. Add a product image (`image` field). Three options, best to worst:
//        a. A local photo you took at the condo: 'images/gear/your-photo.jpg'
//        b. A SiteStripe-provided image URL saved locally: 'images/gear/asin.jpg'
//        c. The product's Amazon CDN image URL (already baked in for the
//           starter set; new products can lift the URL from the product page's
//           "hiRes" field or use SiteStripe > Image).
//      Leave `image` blank to fall back to a lettered placeholder card.
//   4. Keep `blurb` to 1-2 sentences in your own voice ("why we use it").
//
// FTC / Amazon compliance is enforced by gear.html at render time:
//   - Every affiliate link is opened with rel="sponsored nofollow noopener".
//   - Prices are never displayed (Amazon Associates Operating Agreement).
//   - The disclosure banner is always shown at the top of the page.
//
// A note on hot-linked Amazon images: Amazon's `m.media-amazon.com/images/I/`
// URLs are stable and served by Amazon's public CDN. For maximum OA
// compliance you can replace any `image` value below with a locally-hosted
// copy obtained via SiteStripe > Image — see images/gear/README.md.

const AMAZON_TAG = 'stayatflorida-20';

const PRODUCT_CATEGORIES = [
    { id: 'smart-home', label: 'Smart Home & Security' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'entryway', label: 'Entryway & Outdoor' },
    { id: 'guest-extras', label: 'Guest Extras' }
];

const PRODUCTS = [
    // ---------- Smart Home & Security ----------
    {
        id: 'schlage-encode',
        category: 'smart-home',
        name: 'Schlage Encode Smart Wi-Fi Deadbolt',
        asin: 'B07HXFKMYR',
        amazonUrl: 'https://amzn.to/4oYR79S',
        image: 'https://m.media-amazon.com/images/I/61QW3pknhSL._AC_SL1500_.jpg',
        blurb: 'Wi-Fi deadbolt with keypad and app control. We generate a unique code for every guest that expires on checkout day — no key handoff, no lockbox.',
        featured: true
    },
    {
        id: 'blink-battery-doorbell-2k',
        category: 'smart-home',
        name: 'Blink Battery Doorbell 2K+ (with Sync Module Core)',
        asin: 'B0G62JQK57',
        image: 'https://m.media-amazon.com/images/I/61qKocC9X5L._SL1500_.jpg',
        blurb: 'Battery-powered 2K doorbell with head-to-toe view, two-way audio, and night vision. Lets us welcome guests remotely and keep an eye on packages.'
    },

    // ---------- Bedroom ----------
    {
        id: 'nicetown-blackout-curtains',
        category: 'bedroom',
        name: 'NICETOWN 100% Blackout Curtain Panels (2-Pack)',
        asin: 'B077RPXSF3',
        amazonUrl: 'https://amzn.to/4gQUyNY',
        image: 'https://m.media-amazon.com/images/I/51o9GXVUYCL._AC_SL1024_.jpg',
        blurb: 'True blackout curtains so guests can sleep in past sunrise. They also block coastal light pollution and add a layer of insulation against Florida heat.',
        featured: true
    },
    {
        id: 'utopia-mattress-protector',
        category: 'bedroom',
        name: 'Utopia Bedding Waterproof Mattress Protector (Zippered Queen Encasement)',
        asin: 'B00U6HREPQ',
        amazonUrl: 'https://amzn.to/4xYFunJ',
        image: 'https://m.media-amazon.com/images/I/81r-IYzXbhL._AC_SL1500_.jpg',
        blurb: 'Fully zippered, six-sided waterproof encasement. Non-negotiable for a rental — protects the mattress from spills and dust mites, and it stays quiet under the sheet.'
    },
    {
        id: 'utopia-pillow-protectors',
        category: 'bedroom',
        name: 'Utopia Bedding Pillow Protectors (4-Pack, Waterproof, Zippered)',
        asin: 'B088WX8WPX',
        amazonUrl: 'https://amzn.to/4eTcxRs',
        image: 'https://m.media-amazon.com/images/I/61KxGVt4c5L._AC_SL1500_.jpg',
        blurb: 'Waterproof, zippered pillow encasements. Slide under the pillowcase — guests never see them, but they keep pillows fresh between stays.'
    },

    // ---------- Kitchen ----------
    {
        id: 'automatic-salt-pepper-grinders',
        category: 'kitchen',
        name: 'Automatic Salt & Pepper Grinder Set (Battery, LED)',
        asin: 'B0DJSSCY77',
        amazonUrl: 'https://amzn.to/4v6BZZw',
        image: 'https://m.media-amazon.com/images/I/71mCvTH+lzL._AC_SL1500_.jpg',
        blurb: 'One-handed automatic grinders with a built-in LED. Guests love the wow factor and they refill easily between turnovers.'
    },
    {
        id: 'palmolive-travel-dish-soap',
        category: 'kitchen',
        name: 'Palmolive Dishwashing Liquid — Travel Size (3 oz, Case of 72)',
        asin: 'B00E5O4792',
        image: 'https://m.media-amazon.com/images/I/81AD2zSp2SL._AC_SL1500_.jpg',
        blurb: 'Case of 72 mini bottles. We leave a fresh one in every unit — sized right for a short stay, no half-empty bottles from previous guests.'
    },

    // ---------- Entryway & Outdoor ----------
    {
        id: 'outdoor-door-mat',
        category: 'entryway',
        name: 'Non-Slip Outdoor Door Mat (24x36, Low-Profile Rubber)',
        asin: 'B09874HVBV',
        amazonUrl: 'https://amzn.to/4vedw4J',
        image: 'https://m.media-amazon.com/images/I/81Uq7DFOKBL._AC_SL1500_.jpg',
        blurb: 'Low-profile rubber mat that scrapes sand off flip-flops without sliding around. Holds up to Gulf-coast weather.'
    },
    {
        id: 'heleman-magnetic-door-stoppers',
        category: 'entryway',
        name: 'HELEMAN Magnetic Door Stoppers (2-Pack, Stainless Steel)',
        asin: 'B0CHDVHTFD',
        image: 'https://m.media-amazon.com/images/I/7168EWHR4oL._AC_SL1500_.jpg',
        blurb: 'Stainless-steel magnetic catches that hold the door open against sea breezes. Installs with adhesive or screws — great for the balcony slider or the bathroom door.'
    },

    // ---------- Guest Extras ----------
    {
        id: 'compression-packing-cubes',
        category: 'guest-extras',
        name: 'Compression Packing Cubes (3-Size Set)',
        asin: 'B07SFG7MXR',
        amazonUrl: 'https://amzn.to/4viBfAY',
        image: 'https://m.media-amazon.com/images/I/612AHofFJJL._AC_SL1500_.jpg',
        blurb: 'Compression cubes that fit up to 50% more into a carry-on. What we pack for every trip to the condo.'
    }
];

/**
 * Build an Amazon affiliate URL for a product, preferring an explicit
 * amazonUrl (typically an amzn.to short link from SiteStripe, which already
 * carries the tag) over the ASIN-based fallback. Returns '' if neither is set.
 */
function buildAffiliateUrl(product) {
    if (!product) return '';
    if (typeof product.amazonUrl === 'string' && product.amazonUrl.trim() !== '') {
        return product.amazonUrl.trim();
    }
    if (typeof product.asin === 'string' && product.asin.trim() !== '') {
        return 'https://www.amazon.com/dp/' + encodeURIComponent(product.asin.trim()) + '?tag=' + encodeURIComponent(AMAZON_TAG);
    }
    return '';
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS, PRODUCT_CATEGORIES, AMAZON_TAG, buildAffiliateUrl };
}
