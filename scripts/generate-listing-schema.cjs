/**
 * Generate static VacationRental JSON-LD for every property and inject into index.html
 * so Googlebot sees complete structured data in the raw HTML (no JS render required).
 *
 * Without this, listing JSON-LD is only injected client-side by app.js renderPropertyDetail,
 * which Google sometimes fails to pick up reliably (missing identifier/containsPlace/review
 * in GSC's VacationRental report).
 *
 * Usage: npm run generate-listing-schema (also runs in Deploy to GitHub Pages workflow).
 * Mirrors the field set produced by app.js generatePropertySchema.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const {
    PROPERTIES,
    REVIEWS,
    SITE_BASE_URL,
    SITE_CONTACT
} = require(path.join(ROOT, 'config.js'));

const SEO_CONFIG = { siteName: 'Serenity Rentals' };
const ORGANIZATION_SAME_AS = ['https://www.facebook.com/FloridaRental2020'];

const MARKER_START = '<!-- LISTINGS_SCHEMA_START -->';
const MARKER_END = '<!-- LISTINGS_SCHEMA_END -->';

function absoluteUrl(pathOrUrl) {
    if (pathOrUrl == null || pathOrUrl === '') return '';
    const s = String(pathOrUrl).trim();
    if (/^https?:\/\//i.test(s)) return s;
    const base = SITE_BASE_URL.replace(/\/$/, '');
    const p = s.startsWith('/') ? s : `/${s}`;
    return base ? `${base}${p}` : s;
}

function getListingCanonicalUrl(propertyId) {
    const base = SITE_BASE_URL.replace(/\/$/, '');
    return `${base}/?listing=${encodeURIComponent(propertyId)}`;
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
    let description = `${property.bedrooms} BR, sleeps ${property.maxGuests}. ${amenityText}. Owner-direct pricing—no OTA fees. ${areaPhrase}. Book direct with Serenity Rentals.`;
    if (description.length > 168) description = `${description.slice(0, 165).trim()}…`;
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
    const base = SITE_BASE_URL.replace(/\/$/, '');
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
        priceRange: `$${property.baseNightlyRate}-$${Math.round(property.baseNightlyRate * 1.5)}`,
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
    const base = SITE_BASE_URL.replace(/\/$/, '');
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
    const base = SITE_BASE_URL.replace(/\/$/, '');
    const contact = SITE_CONTACT || {};
    const org = {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: SEO_CONFIG.siteName,
        url: `${base}/`,
        logo: { '@type': 'ImageObject', url: `${base}/favicon.svg` },
        description: 'Owner-direct beach vacation rentals in Panama City Beach and Destin, Florida. Transparent pricing and no OTA service fees on Gulf-front condos.',
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
        description: 'Gulf-front PCB and Destin condos—book direct with Serenity Rentals, no OTA fees. Clear rates for Panama City Beach, Miramar Beach, and Emerald Coast stays.',
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
            url: `${base}/?listing=${p.id}`
        }))
    };
    return { '@context': 'https://schema.org', '@graph': [org, website, itemList] };
}

/** JSON.stringify replacer that drops keys whose value is undefined. */
function serialize(obj) {
    return JSON.stringify(obj, (_k, v) => (v === undefined ? undefined : v));
}

/** Prevent `</script>` inside JSON from terminating the host script tag. */
function safeJsonForScript(str) {
    return str.replace(/<\/script/gi, '<\\/script');
}

function main() {
    if (!Array.isArray(PROPERTIES) || PROPERTIES.length === 0) {
        throw new Error('PROPERTIES missing or empty in config.js');
    }

    const htmlPath = path.join(ROOT, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // 1. Populate the existing #site-schema-jsonld element with the homepage graph.
    //    We reuse the same element that app.js refreshHomepageJsonLd() overwrites at runtime
    //    so Googlebot sees the graph in raw HTML AND there is no duplicate ItemList on the page.
    const homeSchema = buildHomepageGraph();
    const homeJson = safeJsonForScript(serialize(homeSchema));
    const siteRe = /<script type="application\/ld\+json" id="site-schema-jsonld">[\s\S]*?<\/script>/;
    if (!siteRe.test(html)) {
        throw new Error('index.html is missing <script id="site-schema-jsonld"> — add it back so this script can populate it.');
    }
    html = html.replace(siteRe, `<script type="application/ld+json" id="site-schema-jsonld">${homeJson}</script>`);

    // 2. Inject per-listing VacationRental + BreadcrumbList blocks between the markers.
    const blocks = [];
    for (const p of PROPERTIES) {
        if (!p || typeof p.id === 'undefined') continue;
        const vr = buildVacationRentalSchema(p);
        const bc = buildBreadcrumbSchema(p);
        blocks.push(`<script type="application/ld+json" data-schema="listing-${p.id}">${safeJsonForScript(serialize(vr))}</script>`);
        blocks.push(`<script type="application/ld+json" data-schema="breadcrumb-${p.id}">${safeJsonForScript(serialize(bc))}</script>`);
    }

    const injected = `${MARKER_START}\n    ${blocks.join('\n    ')}\n    ${MARKER_END}`;

    if (!html.includes(MARKER_START) || !html.includes(MARKER_END)) {
        throw new Error(`index.html is missing ${MARKER_START} and/or ${MARKER_END} markers. Add them inside <head> so this script knows where to inject.`);
    }
    const re = new RegExp(`${MARKER_START}[\\s\\S]*?${MARKER_END}`);
    html = html.replace(re, injected);

    fs.writeFileSync(htmlPath, html, 'utf8');

    console.log(`Injected static JSON-LD: 1 homepage graph (in #site-schema-jsonld) + ${PROPERTIES.length} listings × 2 (VacationRental + BreadcrumbList).`);
}

main();
