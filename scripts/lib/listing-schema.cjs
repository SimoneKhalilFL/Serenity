/**
 * Shared helpers for generating listing canonical URLs, SEO copy, and JSON-LD
 * (VacationRental, BreadcrumbList, homepage Organization/WebSite/ItemList).
 *
 * Consumed by:
 *   - scripts/generate-listing-schema.cjs  (injects JSON-LD into index.html)
 *   - scripts/generate-listing-pages.cjs   (emits listing-<id>.html share pages)
 *
 * Keeping the logic in one place means canonical URL, meta description, and
 * structured-data shape stay identical across both generators and stay aligned
 * with app.js at runtime.
 */

const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const {
    PROPERTIES,
    REVIEWS,
    SITE_BASE_URL,
    SITE_CONTACT
} = require(path.join(ROOT, 'config.js'));

const SEO_CONFIG = {
    siteName: 'StayAtFlorida',
    siteTagline: 'Luxury Beachfront Vacation Homes',
    defaultTitle: 'StayAtFlorida | Luxury Beachfront Vacation Homes',
    // Homepage meta description — trimmed 2026-07-02 from 197 → 152 chars for
    // Google SERP density. Includes both destination keywords + direct-booking hook.
    defaultDescription: 'Owner-hosted luxury beachfront homes in Panama City Beach & Destin, Florida. Book direct with StayAtFlorida — Gulf views, resort amenities, no OTA fees.',
    defaultOgImage: 'images/og/default.jpg?v=postcard-v1'
};

const ORGANIZATION_SAME_AS = ['https://www.facebook.com/FloridaRental2020'];

function baseUrl() {
    return SITE_BASE_URL.replace(/\/$/, '');
}

function absoluteUrl(pathOrUrl) {
    if (pathOrUrl == null || pathOrUrl === '') return '';
    const s = String(pathOrUrl).trim();
    if (/^https?:\/\//i.test(s)) return s;
    const p = s.startsWith('/') ? s : `/${s}`;
    const b = baseUrl();
    return b ? `${b}${p}` : s;
}

/**
 * Canonical URL for a listing.
 *
 * Returns the absolute `listing-<id>.html` path rather than `?listing=<id>`
 * so FB/WhatsApp/Messenger/LinkedIn/Twitter crawlers (no JS) fetch a static
 * page that has the right meta tags for social previews. Humans hitting the
 * same URL are redirected into the SPA by generate-listing-pages.cjs output.
 */
function getListingCanonicalUrl(propertyId) {
    return `${baseUrl()}/listing-${encodeURIComponent(propertyId)}.html`;
}

/** Relative path used inside SPA (history.replaceState and in-app links). */
function getListingRelativePath(propertyId) {
    return `/listing-${encodeURIComponent(propertyId)}.html`;
}

function getAllImages(images) {
    if (Array.isArray(images)) return images;
    if (typeof images === 'object' && images !== null) return Object.values(images).flat();
    return [];
}

function getSchemaImageList(property) {
    const flat = getAllImages(property.images);
    const seen = new Set();
    const out = [];
    for (const item of flat) {
        const u = absoluteUrl(item);
        if (u && !seen.has(u)) {
            seen.add(u);
            out.push(u);
            if (out.length >= 12) break;
        }
    }
    return out;
}

function extractCity(location) {
    return location.split(',')[0].trim();
}

function extractState(location) {
    const parts = location.split(',');
    return parts.length > 1 ? parts[1].trim() : 'Florida';
}

function isFloridaProperty(location) {
    const state = extractState(location).toLowerCase();
    return state.includes('florida') || state.includes('fl');
}

function generatePropertySEO(property) {
    const city = extractCity(property.location);
    const state = extractState(property.location);
    const isFlorida = isFloridaProperty(property.location);
    const amenitySlice = property.amenities && property.amenities.length
        ? property.amenities.slice(0, 4).map((a) => a.name)
        : ['WiFi', 'full kitchen', 'beach access'];
    const amenityText = amenitySlice.join(', ');
    const areaPhrase = isFlorida
        ? (city.toLowerCase().includes('panama')
            ? 'Panama City Beach, FL vacation rental'
            : (city.toLowerCase().includes('destin') || city.toLowerCase().includes('miramar'))
                ? 'Destin area & Miramar Beach, FL'
                : `${city}, Florida vacation rental`)
        : `${city} vacation rental`;
    let description;
    if (property.metaDescription) {
        description = property.metaDescription;
    } else {
        description = `${property.bedrooms} BR, sleeps ${property.maxGuests}. ${amenityText}. Owner-direct pricing—no OTA fees. ${areaPhrase}. Book direct with ${SEO_CONFIG.siteName}.`;
        if (description.length > 168) description = `${description.slice(0, 165).trim()}…`;
    }
    return { description, city, state, isFlorida };
}

function amPmToIsoTime(hourStr, minuteStr, ampm) {
    let h = parseInt(hourStr, 10);
    const mm = String(parseInt(minuteStr, 10)).padStart(2, '0');
    const ap = ampm.toUpperCase();
    if (ap === 'PM' && h < 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
    return `${String(h).padStart(2, '0')}:${mm}:00`;
}

function extractCheckInOutFromProperty(property) {
    let checkinTime = '16:00:00';
    let checkoutTime = '10:00:00';
    for (const r of property.houseRules || []) {
        const n = (r.name || '').trim();
        const mi = /Check-in:\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i.exec(n);
        const mo = /Check-out:\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i.exec(n);
        if (mi) checkinTime = amPmToIsoTime(mi[1], mi[2], mi[3]);
        if (mo) checkoutTime = amPmToIsoTime(mo[1], mo[2], mo[3]);
    }
    return { checkinTime, checkoutTime };
}

function buildAccommodationBedDetails(property) {
    // Prefer an explicit inventory when the property provides one (canonical source
    // of truth is MASTER §7 → mirrored on the property record as `bedInventory`).
    // Each entry is a raw BedDetails object. Falls back to a heuristic if absent,
    // but new properties should always ship an explicit inventory.
    if (Array.isArray(property.bedInventory) && property.bedInventory.length > 0) {
        return property.bedInventory.map((b) => ({
            '@type': 'BedDetails',
            numberOfBeds: b.numberOfBeds || 1,
            typeOfBed: b.typeOfBed || 'Queen'
        }));
    }
    const n = Math.min(Math.max(0, property.bedrooms || 0), 6);
    const types = ['King', 'Queen', 'Full', 'Queen', 'Single', 'Full'];
    const beds = [];
    for (let i = 0; i < n; i++) {
        beds.push({
            '@type': 'BedDetails',
            numberOfBeds: 1,
            typeOfBed: types[Math.min(i, types.length - 1)]
        });
    }
    const cap = property.maxGuests || 0;
    if (n > 0 && cap > n * 2) {
        beds.push({ '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Queen' });
    }
    return beds;
}

/**
 * FAQPage schema. Emitted when the property record includes a `faqs` array.
 * The Q/A text here MUST match the visible HTML rendered by
 * app.js#renderPropertyFAQ() — Google penalizes ghost FAQ schema.
 */
function buildFaqPageSchema(property) {
    if (!property || !Array.isArray(property.faqs) || property.faqs.length === 0) return null;
    const mainEntity = property.faqs
        .map((f) => {
            const q = String((f && f.q) || '').trim();
            const a = String((f && f.a) || '').trim();
            if (!q || !a) return null;
            return {
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a }
            };
        })
        .filter(Boolean);
    if (mainEntity.length === 0) return null;
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity
    };
}

function buildVacationRentalReviews(reviews) {
    if (!reviews || !reviews.length) return [];
    return reviews.slice(0, 20).map((r) => ({
        '@type': 'Review',
        datePublished: r.date,
        reviewBody: r.comment,
        author: { '@type': 'Person', name: r.author },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
            bestRating: 5,
            worstRating: 1
        }
    }));
}

function buildVacationRentalSchema(property) {
    const reviews = (REVIEWS && REVIEWS[property.id]) || [];
    const seo = generatePropertySEO(property);
    const base = baseUrl();
    const listingUrl = getListingCanonicalUrl(property.id);
    const images = getSchemaImageList(property);
    const contact = SITE_CONTACT || {};
    const amenityFeature = (property.amenities || []).map((a) => ({
        '@type': 'LocationFeatureSpecification',
        name: a.name,
        value: true
    }));
    const bedDetails = buildAccommodationBedDetails(property);
    const reviewItems = buildVacationRentalReviews(reviews);
    const { checkinTime, checkoutTime } = extractCheckInOutFromProperty(property);
    const logoUrl = `${base}/favicon.svg`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VacationRental',
        additionalType: 'VacationRental',
        identifier: listingUrl,
        name: property.title,
        description: seo.description,
        url: listingUrl,
        image: images.length ? images : undefined,
        knowsLanguage: ['en-US'],
        checkinTime,
        checkoutTime,
        containsPlace: {
            '@type': 'Accommodation',
            additionalType: 'EntirePlace',
            occupancy: { '@type': 'QuantitativeValue', value: property.maxGuests },
            numberOfBedrooms: property.bedrooms,
            numberOfBathroomsTotal: property.bathrooms,
            bed: bedDetails.length ? bedDetails : undefined,
            amenityFeature
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: seo.city,
            addressRegion: seo.state,
            addressCountry: 'US'
        },
        geo: property.coordinates ? {
            '@type': 'GeoCoordinates',
            latitude: property.coordinates.lat,
            longitude: property.coordinates.lng
        } : undefined,
        // priceRange in VacationRental JSON-LD. Auto-derived from baseNightlyRate × 1.5 for
        // properties that don't set an explicit override. TW2111 sets `priceRangeOverride`
        // because the auto-derived range ($225-$338) understates the peak-season ceiling
        // (July 4 peak = 2.7× base = $610). See docs/brand/SEO.md and the TW2111 MASTER §21
        // Fee Schedule for the transparency rule.
        priceRange: property.priceRangeOverride
            || `$${property.baseNightlyRate}-$${Math.round(property.baseNightlyRate * 1.5)}`,
        parentOrganization: {
            '@type': 'Organization',
            '@id': `${base}/#organization`,
            name: SEO_CONFIG.siteName,
            url: `${base}/`,
            logo: { '@type': 'ImageObject', url: logoUrl }
        }
    };

    if (contact.phoneTel) schema.telephone = contact.phoneTel;

    if (reviews.length > 0) {
        const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
        schema.aggregateRating = {
            '@type': 'AggregateRating',
            ratingValue: avg,
            reviewCount: reviews.length,
            bestRating: '5',
            worstRating: '1'
        };
    }

    if (reviewItems.length) schema.review = reviewItems;

    return schema;
}

function buildBreadcrumbSchema(property) {
    const base = baseUrl();
    const city = extractCity(property.location);
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
            { '@type': 'ListItem', position: 2, name: 'Florida rentals', item: `${base}/#properties` },
            { '@type': 'ListItem', position: 3, name: city, item: getListingCanonicalUrl(property.id) }
        ]
    };
}

function buildHomepageGraph() {
    const base = baseUrl();
    const contact = SITE_CONTACT || {};
    const org = {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: SEO_CONFIG.siteName,
        url: `${base}/`,
        logo: { '@type': 'ImageObject', url: `${base}/favicon.svg` },
        description: 'Owner-hosted luxury beachfront vacation homes on Florida\u2019s Gulf Coast \u2014 Panama City Beach and Destin. Direct beach access, Gulf views, resort amenities, and direct-booking savings.',
        sameAs: ORGANIZATION_SAME_AS,
        areaServed: [
            { '@type': 'City', name: 'Panama City Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
            { '@type': 'City', name: 'Miramar Beach', containedInPlace: { '@type': 'State', name: 'Florida' } }
        ]
    };
    if (contact.email) org.email = contact.email;
    if (contact.phoneTel) org.telephone = contact.phoneTel;
    const website = {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        name: SEO_CONFIG.siteName,
        url: `${base}/`,
        description: SEO_CONFIG.defaultDescription,
        inLanguage: 'en-US',
        publisher: { '@id': `${base}/#organization` }
    };
    const itemList = {
        '@type': 'ItemList',
        name: 'Florida Gulf Coast vacation rentals',
        numberOfItems: PROPERTIES.length,
        itemListElement: PROPERTIES.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            url: getListingCanonicalUrl(p.id)
        }))
    };
    return { '@context': 'https://schema.org', '@graph': [org, website, itemList] };
}

function serialize(obj) {
    return JSON.stringify(obj, (_k, v) => (v === undefined ? undefined : v));
}

function safeJsonForScript(str) {
    return str.replace(/<\/script/gi, '<\\/script');
}

module.exports = {
    PROPERTIES,
    SITE_BASE_URL,
    SEO_CONFIG,
    baseUrl,
    absoluteUrl,
    getListingCanonicalUrl,
    getListingRelativePath,
    getAllImages,
    getSchemaImageList,
    extractCity,
    extractState,
    isFloridaProperty,
    generatePropertySEO,
    buildVacationRentalSchema,
    buildBreadcrumbSchema,
    buildFaqPageSchema,
    buildHomepageGraph,
    serialize,
    safeJsonForScript
};
