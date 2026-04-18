// ==========================================
// State Management
// ==========================================
let currentProperty = null;
let currentGalleryIndex = 0;
let selectedStartDate = null;
let selectedEndDate = null;
let currentCalendarMonth = new Date();

/** Synced nights from data/availability-{id}.json (iCal); merged with config unavailableDates. */
const syncedUnavailableByListingId = {};

// ==========================================
// SEO Helper Functions
// ==========================================
const SEO_CONFIG = {
    siteName: 'Serenity Rentals',
    /** Browser tab + bookmark title (always; listing pages still use property titles for og/twitter). */
    defaultTitle: 'Majestic Sun 811 | Tidewater 2111 | Serenity Rentals',
    /** ~155 chars — Bing/Google tools expect roughly 25–160 for meta description. */
    defaultDescription: 'Gulf-front PCB and Destin condos—book direct with Serenity Rentals, no OTA fees. Clear rates for Panama City Beach, Miramar Beach, and Emerald Coast stays.',
    defaultOgImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80'
};

/** Absolute URL for an asset path or full URL (uses SITE_BASE_URL from config.js). */
function absoluteUrl(pathOrUrl) {
    if (pathOrUrl == null || pathOrUrl === '') return '';
    const s = String(pathOrUrl).trim();
    if (/^https?:\/\//i.test(s)) return s;
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    const path = s.startsWith('/') ? s : `/${s}`;
    return base ? `${base}${path}` : s;
}

function getSiteBaseHref() {
    return typeof SITE_BASE_URL === 'string' ? `${SITE_BASE_URL.replace(/\/$/, '')}/` : '/';
}

function getListingCanonicalUrl(propertyId) {
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    return base ? `${base}/?listing=${encodeURIComponent(propertyId)}` : `/?listing=${encodeURIComponent(propertyId)}`;
}

function getListingIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('listing');
    if (q != null && q !== '') {
        const id = parseInt(q, 10);
        if (!Number.isNaN(id)) return id;
    }
    const m = /^#property-(\d+)$/.exec(window.location.hash || '');
    if (m) return parseInt(m[1], 10);
    return null;
}

function pushListingHistoryState(propertyId) {
    const u = new URL(window.location.href);
    u.searchParams.set('listing', String(propertyId));
    u.hash = '';
    history.pushState({ listing: propertyId }, '', `${u.pathname}${u.search}${u.hash}`);
}

function pushHomeHistoryState() {
    const u = new URL(window.location.href);
    u.searchParams.delete('listing');
    u.hash = '';
    const search = u.searchParams.toString();
    history.pushState({ page: 'home' }, '', `${u.pathname}${search ? `?${search}` : ''}${u.hash}`);
}

function getSiteContact() {
    if (typeof SITE_CONTACT !== 'undefined' && SITE_CONTACT) {
        return SITE_CONTACT;
    }
    return {
        email: 'FloridaVacationRental2020@gmail.com',
        phoneTel: '',
        phoneDisplay: '',
        replyBlurb: 'We usually reply within 24 hours. For a quicker answer, feel free to text us.',
        cancellationNote: 'Exact cancellation terms are confirmed with the owner when you book.'
    };
}

/** Public profile URL(s) for Organization sameAs (footer / brand). */
const ORGANIZATION_SAME_AS = ['https://www.facebook.com/FloridaRental2020'];

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

const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';

/** Web3Forms access key from config.js (injected at deploy from Actions secret). Placeholder = not wired. */
function getWeb3FormsAccessKey() {
    if (typeof WEB3FORMS_ACCESS_KEY !== 'undefined' && typeof WEB3FORMS_ACCESS_KEY === 'string') {
        const k = WEB3FORMS_ACCESS_KEY.trim();
        if (!k || k === '__WEB3FORMS_ACCESS_KEY__') return '';
        return k;
    }
    return '';
}

// Helper function to get first image from either flat array or categorized object
function getFirstImage(images) {
    if (Array.isArray(images)) {
        return images[0] || '';
    }
    if (typeof images === 'object' && images !== null) {
        const firstCategory = Object.keys(images)[0];
        return firstCategory ? (images[firstCategory][0] || '') : '';
    }
    return '';
}

// Helper function to get all images as flat array
function getAllImages(images) {
    if (Array.isArray(images)) {
        return images;
    }
    if (typeof images === 'object' && images !== null) {
        return Object.values(images).flat();
    }
    return [];
}

function extractCity(location) {
    // Extract city name from location string (e.g., "Panama City Beach, Florida" -> "Panama City Beach")
    return location.split(',')[0].trim();
}

function extractState(location) {
    // Extract state from location string
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
    const headline = property.listingHeadline || property.title;
    const amenitySlice = property.amenities && property.amenities.length
        ? property.amenities.slice(0, 4).map(a => a.name)
        : ['WiFi', 'full kitchen', 'beach access'];
    const amenityText = amenitySlice.join(', ');
    const areaPhrase = isFlorida
        ? (city.toLowerCase().includes('panama')
            ? 'Panama City Beach, FL vacation rental'
            : (city.toLowerCase().includes('destin') || city.toLowerCase().includes('miramar'))
                ? 'Destin area & Miramar Beach, FL'
                : `${city}, Florida vacation rental`)
        : `${city} vacation rental`;

    let title;
    if (isFlorida) {
        title = `${headline} | ${city} | Book Direct | Serenity Rentals`;
    } else {
        title = `${headline} | ${city} Vacation Rental | Serenity Rentals`;
    }
    if (title.length > 70) {
        title = `${property.title} | ${city} | Serenity Rentals`;
    }

    let description = `${property.bedrooms} BR, sleeps ${property.maxGuests}. ${amenityText}. Owner-direct pricing—no OTA fees. ${areaPhrase}. Book direct with Serenity Rentals.`;
    if (description.length > 168) {
        description = `${description.slice(0, 165).trim()}…`;
    }

    return { title, description, city, state, isFlorida };
}

/** @param socialTitle Title for og/twitter/meta when sharing (listing-specific or site default). */
function updatePageMeta(socialTitle, description) {
    document.title = SEO_CONFIG.defaultTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', socialTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', socialTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
}

function resetPageMeta() {
    updatePageMeta(SEO_CONFIG.defaultTitle, SEO_CONFIG.defaultDescription);
}

/** Canonical, Open Graph URL/image, and Twitter card image for home vs listing. */
function setCanonicalAndSocial(property) {
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const twImage = document.querySelector('meta[name="twitter:image"]');

    if (property) {
        const url = getListingCanonicalUrl(property.id);
        if (canonical) canonical.setAttribute('href', url);
        if (ogUrl) ogUrl.setAttribute('content', url);
        const img = absoluteUrl(getFirstImage(property.images));
        if (ogImage && img) ogImage.setAttribute('content', img);
        if (twImage && img) twImage.setAttribute('content', img);
    } else {
        const url = base ? `${base}/` : window.location.origin + window.location.pathname;
        if (canonical) canonical.setAttribute('href', url);
        if (ogUrl) ogUrl.setAttribute('content', url);
        const def = SEO_CONFIG.defaultOgImage;
        if (ogImage) ogImage.setAttribute('content', def);
        if (twImage) twImage.setAttribute('content', def);
    }
}

function getSchemaImageList(property) {
    const flat = getAllImages(property.images);
    const seen = new Set();
    const out = [];
    for (let i = 0; i < flat.length; i++) {
        const u = absoluteUrl(flat[i]);
        if (u && !seen.has(u)) {
            seen.add(u);
            out.push(u);
            if (out.length >= 12) break;
        }
    }
    if (out.length === 0) {
        const one = absoluteUrl(getFirstImage(property.images));
        return one ? [one] : [];
    }
    return out;
}

/** Google recommends BedDetails under containsPlace; inferred from bedroom count + guest capacity. */
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
        beds.push({
            '@type': 'BedDetails',
            numberOfBeds: 1,
            typeOfBed: 'Queen'
        });
    }
    return beds;
}

function buildVacationRentalReviews(reviews) {
    if (!reviews || !reviews.length) return [];
    // Surface up to 20 reviews in JSON-LD so Google sees the full set (aggregateRating.reviewCount still reflects reviews.length).
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

function generatePropertySchema(property, reviews) {
    const seo = generatePropertySEO(property);
    const avgRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : null;
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    const listingUrl = getListingCanonicalUrl(property.id);
    const images = getSchemaImageList(property);
    const contact = getSiteContact();
    const amenityFeature = (property.amenities || []).map(a => ({
        "@type": "LocationFeatureSpecification",
        "name": a.name,
        "value": true
    }));
    const bedDetails = buildAccommodationBedDetails(property);
    const reviewItems = buildVacationRentalReviews(reviews);
    const { checkinTime, checkoutTime } = extractCheckInOutFromProperty(property);
    const logoUrl = base ? `${base}/favicon.svg` : undefined;

    const schema = {
        "@context": "https://schema.org",
        "@type": "VacationRental",
        "additionalType": "VacationRental",
        "identifier": listingUrl,
        "name": property.title,
        "description": seo.description,
        "url": listingUrl,
        "image": images.length ? images : undefined,
        "knowsLanguage": ["en-US"],
        "checkinTime": checkinTime,
        "checkoutTime": checkoutTime,
        "containsPlace": {
            "@type": "Accommodation",
            "additionalType": "EntirePlace",
            "occupancy": {
                "@type": "QuantitativeValue",
                "value": property.maxGuests
            },
            "numberOfBedrooms": property.bedrooms,
            "numberOfBathroomsTotal": property.bathrooms,
            "bed": bedDetails.length ? bedDetails : undefined,
            "amenityFeature": amenityFeature
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": seo.city,
            "addressRegion": seo.state,
            "addressCountry": "US"
        },
        "geo": property.coordinates ? {
            "@type": "GeoCoordinates",
            "latitude": property.coordinates.lat,
            "longitude": property.coordinates.lng
        } : undefined,
        "priceRange": `$${property.baseNightlyRate}-$${Math.round(property.baseNightlyRate * 1.5)}`,
        "parentOrganization": base ? {
            "@type": "Organization",
            "@id": `${base}/#organization`,
            "name": SEO_CONFIG.siteName,
            "url": `${base}/`,
            "logo": { "@type": "ImageObject", "url": logoUrl }
        } : {
            "@type": "Organization",
            "name": SEO_CONFIG.siteName
        }
    };

    if (contact.phoneTel) {
        schema.telephone = contact.phoneTel;
    }

    if (avgRating && reviews.length > 0) {
        schema.aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": avgRating,
            "reviewCount": reviews.length,
            "bestRating": "5",
            "worstRating": "1"
        };
    }

    if (reviewItems.length) {
        schema.review = reviewItems;
    }

    return schema;
}

function generateListingBreadcrumbSchema(property) {
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    const home = base ? `${base}/` : getSiteBaseHref();
    const city = extractCity(property.location);
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": home
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Florida vacation rentals",
                "item": `${home}#properties`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": property.title,
                "item": getListingCanonicalUrl(property.id)
            }
        ]
    };
}

function generateImageAlt(property, imageIndex) {
    const city = extractCity(property.location);
    const isFlorida = isFloridaProperty(property.location);
    
    const altTexts = [
        `${isFlorida ? 'Florida vacation rental' : 'Vacation rental'} in ${city} - ${property.title} exterior view`,
        `${property.bedrooms}-bedroom ${isFlorida ? 'beachfront condo' : 'vacation home'} living area in ${city}`,
        `${isFlorida ? 'Beach vacation rental' : 'Vacation rental'} kitchen and dining area`,
        `Master bedroom in ${city} ${isFlorida ? 'Florida short term rental' : 'vacation rental'}`,
        `${isFlorida ? 'Florida condo rental' : 'Vacation property'} bathroom amenities`,
        `Ocean view from ${isFlorida ? 'Florida beachfront vacation rental' : 'vacation rental'} balcony`,
        `${isFlorida ? 'Family-friendly vacation rental Florida' : 'Vacation home'} pool area`,
        `${city} ${isFlorida ? 'weekly rental' : 'vacation rental'} outdoor space`
    ];
    
    return altTexts[imageIndex % altTexts.length];
}

// ==========================================
// Utility Functions
// ==========================================
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

/** Refundable damage deposit (sidebar + copy); override per property in config. */
function getRefundableDamageDeposit(property) {
    if (!property || typeof property.refundableDamageDeposit !== 'number') return 300;
    return property.refundableDamageDeposit;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function parseDate(dateString) {
    const parts = dateString.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function dateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/** True if this calendar day is strictly before today (local timezone). */
function isPastCalendarDay(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return d < today;
}

function isDateUnavailable(date, property) {
    const dateStr = dateToString(date);
    return getMergedUnavailableDates(property).includes(dateStr);
}

function getMergedUnavailableDates(property) {
    if (!property) return [];
    const manual = property.unavailableDates || [];
    const synced = syncedUnavailableByListingId[property.id];
    const fromFile = Array.isArray(synced) ? synced : [];
    return [...new Set([...manual, ...fromFile])].sort();
}

/** True if any booked night falls strictly between check-in and check-out (nights are [checkIn, checkOut)). */
function stayRangeCrossesUnavailable(checkIn, checkOut, property) {
    if (!checkIn || !checkOut || checkOut <= checkIn) return false;
    const merged = getMergedUnavailableDates(property);
    const cur = new Date(checkIn);
    const end = new Date(checkOut);
    while (cur < end) {
        if (merged.includes(dateToString(cur))) return true;
        cur.setDate(cur.getDate() + 1);
    }
    return false;
}

async function fetchAvailabilityForListing(propertyId) {
    if (Object.prototype.hasOwnProperty.call(syncedUnavailableByListingId, propertyId)) {
        return;
    }
    const base = typeof SITE_BASE_URL === 'string' ? SITE_BASE_URL.replace(/\/$/, '') : '';
    const url = base ? `${base}/data/availability-${propertyId}.json` : `/data/availability-${propertyId}.json`;
    try {
        const r = await fetch(url, { cache: 'no-store' });
        if (!r.ok) {
            syncedUnavailableByListingId[propertyId] = [];
            return;
        }
        const data = await r.json();
        const arr = Array.isArray(data.unavailableDates) ? data.unavailableDates.filter(Boolean) : [];
        syncedUnavailableByListingId[propertyId] = arr;
    } catch {
        syncedUnavailableByListingId[propertyId] = [];
    }
}

function getAdjustedRate(date, property) {
    const dateStr = dateToString(date);
    let rate = property.baseNightlyRate;
    
    // Apply seasonal adjustments
    for (const adjustment of property.seasonalAdjustments) {
        if (dateStr >= adjustment.startDate && dateStr <= adjustment.endDate) {
            rate *= adjustment.adjustment;
            break;
        }
    }
    
    return Math.round(rate);
}

function getDaysBetweenDates(start, end) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((end - start) / oneDay));
}

/** When check-in/out are selected, returns pricing breakdown; otherwise null. */
function getSelectedStayPricing(property) {
    if (!property || !selectedStartDate || !selectedEndDate) return null;
    const nights = getDaysBetweenDates(selectedStartDate, selectedEndDate);
    if (nights < 1) return null;
    let nightlyTotal = 0;
    let currentDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);
    while (currentDate < endDate) {
        nightlyTotal += getAdjustedRate(currentDate, property);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    const cleaningFee = property.cleaningFee;
    const subtotal = nightlyTotal + cleaningFee;
    const tax = subtotal * property.taxRate;
    const total = subtotal + tax;
    const avgNightlyRate = Math.round(nightlyTotal / nights);
    const checkInStr = selectedStartDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const checkOutStr = selectedEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return { nights, total, avgNightlyRate, checkInStr, checkOutStr };
}

let listingDetailMapInstance = null;

/** Leaflet injects <img> for tiles and default markers without alt; crawlers flag them (e.g. 2 markers on home map). */
function patchLeafletTileAlts(map) {
    if (!map || typeof map.getContainer !== 'function') return;
    const mark = () => {
        const c = map.getContainer();
        c.querySelectorAll('img.leaflet-tile').forEach((img) => {
            if (!img.getAttribute('alt')) img.setAttribute('alt', 'OpenStreetMap map tile');
        });
        c.querySelectorAll('img.leaflet-marker-icon').forEach((img) => {
            if (!img.getAttribute('alt')) img.setAttribute('alt', 'Vacation rental location on map');
        });
        c.querySelectorAll('img.leaflet-marker-shadow').forEach((img) => {
            if (!img.getAttribute('alt')) img.setAttribute('alt', 'Map marker shadow');
        });
    };
    map.on('tileload', mark);
    map.on('layeradd', mark);
    map.whenReady(() => {
        mark();
        setTimeout(mark, 0);
        setTimeout(mark, 200);
    });
}

function destroyListingDetailMap() {
    if (listingDetailMapInstance) {
        listingDetailMapInstance.remove();
        listingDetailMapInstance = null;
    }
}

function initListingDetailMap(property) {
    destroyListingDetailMap();
    const el = document.getElementById('property-detail-map');
    if (!el || !property.coordinates || typeof property.coordinates.lat !== 'number' || typeof property.coordinates.lng !== 'number' || typeof L === 'undefined') {
        return;
    }
    const map = L.map(el, { scrollWheelZoom: false });
    listingDetailMapInstance = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);
    patchLeafletTileAlts(map);
    const ll = [property.coordinates.lat, property.coordinates.lng];
    L.marker(ll).addTo(map).bindPopup(`<strong>${escapeHtml(property.title)}</strong><br>${escapeHtml(property.location)}`);
    map.setView(ll, 14);
    setTimeout(() => map.invalidateSize(), 100);
}

// ==========================================
// Navigation Functions
// ==========================================
function navigateHome(event, options = {}) {
    if (event) event.preventDefault();

    document.getElementById('home-page').classList.add('active');
    document.getElementById('property-detail-page').classList.remove('active');

    resetPageMeta();
    setCanonicalAndSocial(null);
    if (!options.skipHistory) {
        pushHomeHistoryState();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentProperty = null;
    document.body.classList.remove('has-listing-sticky');
    destroyListingDetailMap();
    refreshHomeLocationsMapSize();
}

async function navigateToProperty(propertyId, options = {}) {
    const property = PROPERTIES.find(p => p.id === propertyId);
    if (!property) return;

    currentProperty = property;
    currentGalleryIndex = 0;
    selectedStartDate = null;
    selectedEndDate = null;

    await fetchAvailabilityForListing(property.id);

    const seo = generatePropertySEO(property);
    updatePageMeta(seo.title, seo.description);
    setCanonicalAndSocial(property);
    if (!options.skipHistory) {
        pushListingHistoryState(propertyId);
    }

    document.getElementById('home-page').classList.remove('active');
    document.getElementById('property-detail-page').classList.add('active');

    renderPropertyDetail(property);

    const scrollToCalendar = options.scrollToCalendar === true;
    if (scrollToCalendar) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                const calSection = document.getElementById('property-availability');
                if (calSection) {
                    calSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
        });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function scrollToSection(event, sectionId) {
    if (event) event.preventDefault();
    
    const section = document.getElementById(sectionId);
    const detailPage = document.getElementById('property-detail-page');
    const onPropertyListing = detailPage && detailPage.classList.contains('active');
    // #properties and #contact live inside #home-page, which is hidden on listing pages — go home first.
    const homeOnlyIds = ['properties', 'contact'];
    const needsHomeFirst = section && homeOnlyIds.includes(sectionId) && onPropertyListing;
    
    if (needsHomeFirst) {
        navigateHome(null);
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return;
    }
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleDescription(button) {
    const section = button.closest('.section-content');
    if (!section) return;
    const fullContent = section.querySelector('.description-full');
    const textSpan = button.querySelector('.read-more-text');
    if (!fullContent || !textSpan) return;
    const isExpanded = fullContent.style.display !== 'none';
    const labelMore = button.getAttribute('data-read-more');
    const labelLess = button.getAttribute('data-show-less');
    
    if (isExpanded) {
        fullContent.style.display = 'none';
        textSpan.textContent = labelMore != null ? labelMore : 'Read more';
        button.classList.remove('expanded');
    } else {
        fullContent.style.display = 'block';
        textSpan.textContent = labelLess != null ? labelLess : 'Show less';
        button.classList.add('expanded');
    }
}

function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function closeContactModalThenScrollToProperties() {
    closeContactModal();
    requestAnimationFrame(() => {
        const detail = document.getElementById('property-detail-page');
        if (detail && detail.classList.contains('active')) {
            navigateHome(null);
            setTimeout(() => {
                const el = document.getElementById('properties');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        } else {
            const el = document.getElementById('properties');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

function closeContactModalThenScrollToCalendar() {
    closeContactModal();
    requestAnimationFrame(() => {
        scrollToPropertyCalendar();
    });
}

function scrollToPropertyCalendar() {
    const el = document.getElementById('property-availability');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showContactModal() {
    // Get booking details if dates are selected
    let bookingDetails = '';
    let subjectLine = 'Booking Inquiry';
    
    if (selectedStartDate && selectedEndDate && currentProperty) {
        const checkIn = selectedStartDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const checkOut = selectedEndDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const nights = getDaysBetweenDates(selectedStartDate, selectedEndDate);
        
        // Calculate total
        let nightlyTotal = 0;
        let currentDate = new Date(selectedStartDate);
        const endDate = new Date(selectedEndDate);
        while (currentDate < endDate) {
            nightlyTotal += getAdjustedRate(currentDate, currentProperty);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        const cleaningFee = currentProperty.cleaningFee;
        const subtotal = nightlyTotal + cleaningFee;
        const tax = subtotal * currentProperty.taxRate;
        const total = subtotal + tax;
        const damageDeposit = getRefundableDamageDeposit(currentProperty);
        const depositRow = damageDeposit > 0
            ? `<div class="booking-summary-row booking-summary-deposit">
                    <span>Refundable Damage Deposit:</span>
                    <span>${formatCurrency(damageDeposit)}</span>
                </div>`
            : '';
        
        bookingDetails = `
            <div class="booking-summary">
                <h4>Booking Request</h4>
                <div class="booking-summary-row">
                    <span>Property:</span>
                    <span>${currentProperty.title}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Check-in:</span>
                    <span>${checkIn}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Check-out:</span>
                    <span>${checkOut}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Nights:</span>
                    <span>${nights}</span>
                </div>
                <div class="booking-summary-row total">
                    <span>Estimated Total:</span>
                    <span>${formatCurrency(total)}</span>
                </div>
                ${depositRow}
            </div>
        `;
        subjectLine = `Booking Inquiry: ${currentProperty.title} - ${checkIn} to ${checkOut}`;
    }
    
    const contact = getSiteContact();
    const formKey = getWeb3FormsAccessKey();
    const formConfigWarning = formKey
        ? ''
        : `<p class="form-config-warning" role="alert">Contact form is not connected yet. For the live site, add repository secret <code>WEB3FORMS_ACCESS_KEY</code> (see <code>SECURITY.md</code>). For local testing, put your key in <code>config.js</code> (free at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">web3forms.com</a>). Until then, submissions cannot be sent from this page.</p>`;
    const primaryCta = (selectedStartDate && selectedEndDate && currentProperty)
        ? 'Email to Reserve These Dates'
        : 'Email the Owner';

    const onListing = !!currentProperty;
    const hasDates = !!(selectedStartDate && selectedEndDate && currentProperty);
    let dateTipHtml = '';
    if (!onListing) {
        dateTipHtml = `
            <div class="contact-modal-tip" role="region" aria-label="Book with dates">
                <p class="contact-modal-tip-text">To see pricing for specific nights, open a rental below and choose your check-in and check-out on the calendar—then email us from there. You can still send a general question here.</p>
                <button type="button" class="btn btn-primary contact-modal-tip-btn" onclick="closeContactModalThenScrollToProperties()">Browse vacation rentals</button>
            </div>`;
    } else if (!hasDates) {
        dateTipHtml = `
            <div class="contact-modal-tip contact-modal-tip--listing" role="region" aria-label="Select stay dates">
                <p class="contact-modal-tip-text">Select your <strong>check-in</strong> and <strong>check-out</strong> on this page&rsquo;s calendar so your email can include your stay and estimated total.</p>
                <button type="button" class="btn btn-primary contact-modal-tip-btn" onclick="closeContactModalThenScrollToCalendar()">Select dates</button>
            </div>`;
    }

    lastFocusedBeforeModal = document.activeElement;
    const modal = document.createElement('div');
    modal.className = 'contact-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'contact-modal-title');
    modal.innerHTML = `
        <div class="contact-modal contact-form-modal">
            <button class="contact-modal-close" type="button" aria-label="Close contact form" onclick="closeContactModal()">&times;</button>
            <h3 id="contact-modal-title">Contact the Owner to Book</h3>
            ${dateTipHtml}
            ${formConfigWarning}
            ${bookingDetails}
            <form id="contact-form" onsubmit="submitContactForm(event)">
                <input type="hidden" id="form-subject" value="${escapeHtml(subjectLine)}">
                <div class="form-group">
                    <label for="user-email">Your Email <span class="required">*</span></label>
                    <input type="email" id="user-email" name="email" required placeholder="your@email.com">
                    <span class="error-message" id="email-error"></span>
                </div>
                <div class="form-group">
                    <label for="user-phone">Your Phone Number</label>
                    <input type="tel" id="user-phone" name="phone" placeholder="(555) 123-4567">
                </div>
                <div class="form-group">
                    <label for="user-message">Your Message</label>
                    <textarea id="user-message" name="message" rows="3" placeholder="Tell us about your trip, how many guests you're bringing, and any questions or special requests..."></textarea>
                </div>
                <p class="form-submit-status" id="form-submit-status" role="status" aria-live="polite"></p>
                <button type="submit" class="btn btn-primary btn-contact-submit" style="width: 100%;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; margin-right: 0.5rem;">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    ${primaryCta}
                </button>
            </form>
            <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 1rem; text-align: center;">${escapeHtml(contact.replyBlurb)}</p>
        </div>
    `;
    modal.onclick = function(e) {
        if (e.target === modal) closeContactModal();
    };
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Focus on email field
    setTimeout(() => document.getElementById('user-email').focus(), 100);
}

async function submitContactForm(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-phone');
    const messageInput = document.getElementById('user-message');
    const subjectInput = document.getElementById('form-subject');
    const emailError = document.getElementById('email-error');
    const statusEl = document.getElementById('form-submit-status');
    const submitBtn = event.target.querySelector('.btn-contact-submit');
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('invalid');
        emailInput.focus();
        return;
    }
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
    if (statusEl) statusEl.textContent = '';
    
    const accessKey = getWeb3FormsAccessKey();
    const ownerEmail = getSiteContact().email;
    if (!accessKey) {
        if (statusEl) {
            statusEl.className = 'form-submit-status';
            statusEl.textContent = `Configure WEB3FORMS_ACCESS_KEY (Actions secret for deploy, or config.js locally). For now, email ${ownerEmail} directly.`;
        }
        return;
    }
    
    // Build message body (plain text delivered to your inbox)
    let body = '';
    
    if (selectedStartDate && selectedEndDate && currentProperty) {
        const checkIn = selectedStartDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const checkOut = selectedEndDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const nights = getDaysBetweenDates(selectedStartDate, selectedEndDate);
        
        let nightlyTotal = 0;
        let currentDate = new Date(selectedStartDate);
        const endDate = new Date(selectedEndDate);
        while (currentDate < endDate) {
            nightlyTotal += getAdjustedRate(currentDate, currentProperty);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        const cleaningFee = currentProperty.cleaningFee;
        const subtotal = nightlyTotal + cleaningFee;
        const tax = subtotal * currentProperty.taxRate;
        const total = subtotal + tax;
        const damageDeposit = getRefundableDamageDeposit(currentProperty);
        
        body += `BOOKING REQUEST\n`;
        body += `================\n`;
        body += `Property: ${currentProperty.title}\n`;
        body += `Check-in: ${checkIn}\n`;
        body += `Check-out: ${checkOut}\n`;
        body += `Nights: ${nights}\n`;
        body += `Estimated Total: $${total.toFixed(2)}\n`;
        if (damageDeposit > 0) {
            body += `Refundable damage deposit: ${formatCurrency(damageDeposit)}\n`;
        }
        body += `\n`;
    }
    
    body += `CONTACT INFORMATION\n`;
    body += `================\n`;
    body += `Email: ${emailInput.value}\n`;
    if (phoneInput.value) {
        body += `Phone: ${phoneInput.value}\n`;
    }
    
    if (messageInput.value) {
        body += `\nMESSAGE\n`;
        body += `================\n`;
        body += messageInput.value;
    }
    
    const subject = subjectInput ? subjectInput.value : 'Booking Inquiry';
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    let submissionSucceeded = false;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';
    }
    
    try {
        const res = await fetch(WEB3FORMS_SUBMIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: subject,
                name: emailInput.value.split('@')[0] || 'Guest',
                email: emailInput.value,
                message: body,
                phone: phoneInput.value || ''
            })
        });
        let data = {};
        try {
            data = await res.json();
        } catch (e) {
            /* non-JSON response */
        }
        
        const ok = res.ok && data && (data.success === true || data.success === 'true');
        if (ok) {
            submissionSucceeded = true;
            const c = getSiteContact();
            if (statusEl) {
                statusEl.className = 'form-submit-status form-submit-status--success';
                statusEl.textContent = `Thanks! Your message was sent. ${c.replyBlurb}`;
                statusEl.setAttribute('tabindex', '-1');
                statusEl.focus();
            }
            if (emailInput) emailInput.disabled = true;
            if (phoneInput) phoneInput.disabled = true;
            if (messageInput) messageInput.disabled = true;
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.type = 'button';
                submitBtn.innerHTML = 'Close';
                submitBtn.style.width = '100%';
                submitBtn.onclick = function (e) {
                    e.preventDefault();
                    closeContactModal();
                };
            }
            return;
        }
        
        const errMsg = (data && (data.error || data.message)) ? String(data.error || data.message) : `Could not send (HTTP ${res.status}).`;
        if (statusEl) {
            statusEl.className = 'form-submit-status';
            statusEl.textContent = `${errMsg} You can also email ${ownerEmail}.`;
        }
    } catch (e) {
        if (statusEl) {
            statusEl.className = 'form-submit-status';
            statusEl.textContent = `Network error. Try again or email ${ownerEmail}.`;
        }
    } finally {
        if (!submissionSucceeded && submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
        }
    }
}

let lastFocusedBeforeModal = null;

function closeContactModal() {
    const modal = document.querySelector('.contact-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        try { lastFocusedBeforeModal.focus(); } catch (e) { /* element may be gone */ }
    }
    lastFocusedBeforeModal = null;
}

function toggleMobileMenu(btn) {
    const navLinks = document.getElementById('primary-nav') || document.querySelector('.nav-links');
    if (!navLinks) return;
    const isOpen = navLinks.classList.toggle('active');
    const button = btn || document.querySelector('.mobile-menu-btn');
    if (button) button.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileMenu() {
    const navLinks = document.getElementById('primary-nav') || document.querySelector('.nav-links');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const button = document.querySelector('.mobile-menu-btn');
        if (button) button.setAttribute('aria-expanded', 'false');
    }
}

/** Keeps Tab focus cycling inside the active modal/dialog for keyboard users. */
function trapFocusWithin(container, event) {
    if (!container) return;
    const focusable = container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
    }
}

// ==========================================
// Property Card Rendering
// ==========================================
function createPropertyCard(property, isFeatured = false) {
    const card = document.createElement('div');
    card.className = isFeatured ? 'property-card featured' : 'property-card';
    card.addEventListener('click', (e) => {
        const fromAvailButton = e.target.closest('button.property-card-cta');
        navigateToProperty(property.id, { scrollToCalendar: !!fromAvailButton });
    });
    
    const city = extractCity(property.location);
    const isFlorida = isFloridaProperty(property.location);
    const altText = isFlorida 
        ? `${property.bedrooms}-bedroom Florida vacation rental in ${city} - beachfront condo sleeps ${property.maxGuests}`
        : `${property.bedrooms}-bedroom vacation rental in ${city} - sleeps ${property.maxGuests} guests`;
    
    // Handle both categorized and flat image arrays
    const firstImage = getFirstImage(property.images);
    
    card.innerHTML = `
        <div class="property-card-image">
            <img src="${firstImage}" alt="${altText}" loading="lazy">
            ${property.featured ? '<div class="property-card-badge">Featured Florida Rental</div>' : ''}
        </div>
        <div class="property-card-content">
            <div class="property-card-header">
                <h3 class="property-card-title"><a class="property-card-title-link" href="?listing=${property.id}" onclick="event.preventDefault(); event.stopPropagation(); navigateToProperty(${property.id});">${property.title}</a></h3>
                <div class="property-card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${property.location}</span>
                </div>
                <p class="property-card-sleep-line">Sleeps ${property.maxGuests} · ${property.bedrooms} BR</p>
            </div>
            <div class="property-card-details">
                <div class="property-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>${property.maxGuests} guests</span>
                </div>
                <div class="property-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>${property.bedrooms} beds</span>
                </div>
                <div class="property-detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 6h6M12 3v3M8 8.01V8m4 .01V8m4 .01V8M4.5 22h15M4 13H2m20 0h-2M6 13v9m4-9v9m4-9v9m4-9v9M1 17h22M1 21h22"></path>
                        <path d="M4.5 22V13h15v9"></path>
                    </svg>
                    <span>${property.bathrooms} baths</span>
                </div>
            </div>
            <div class="property-card-footer">
                <button type="button" class="btn btn-primary property-card-cta">Check Availability</button>
            </div>
        </div>
    `;
    
    return card;
}

function renderPropertyListings() {
    const gridContainer = document.getElementById('property-grid');
    
    // Render all properties
    gridContainer.innerHTML = '';
    PROPERTIES.forEach(property => {
        gridContainer.appendChild(createPropertyCard(property));
    });
}

// ==========================================
// Hero Carousel
// ==========================================
let heroCarouselIndex = 0;
let heroCarouselInterval = null;

function renderHeroCarousel(property) {
    const hasCategories = property.images && typeof property.images === 'object' && !Array.isArray(property.images);
    
    let carouselImages = [];
    
    if (hasCategories) {
        // Get ALL images from all categories
        Object.keys(property.images).forEach(category => {
            property.images[category].forEach(url => {
                carouselImages.push({ url: url });
            });
        });
    } else if (Array.isArray(property.images)) {
        carouselImages = property.images.map(url => ({ url: url }));
    }
    
    if (carouselImages.length === 0) return '';
    
    // Shuffle images randomly
    for (let i = carouselImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [carouselImages[i], carouselImages[j]] = [carouselImages[j], carouselImages[i]];
    }
    
    // Store for global access
    window.heroCarouselImages = carouselImages;
    
    return `
        <div class="hero-carousel">
            <button class="hero-carousel-btn hero-prev" onclick="heroCarouselPrev()" aria-label="Previous slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <div class="hero-carousel-track-wrapper">
                <div class="hero-carousel-track" id="hero-carousel-track">
                    ${carouselImages.map((img, idx) => `
                        <div class="hero-slide" data-index="${idx}">
                            <img src="${img.url}" alt="${escapeHtml(property.title)} — photo ${idx + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="hero-carousel-btn hero-next" onclick="heroCarouselNext()" aria-label="Next slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;
}

function initHeroCarousel() {
    heroCarouselIndex = 0;
    updateCarouselPosition();
    if (heroCarouselInterval) clearInterval(heroCarouselInterval);
    heroCarouselInterval = setInterval(() => {
        heroCarouselNext();
    }, 3000); // Auto-advance every 3 seconds
}

function updateCarouselPosition() {
    const track = document.getElementById('hero-carousel-track');
    if (!track) return;
    
    const slideWidth = track.querySelector('.hero-slide')?.offsetWidth || 0;
    const gap = 10; // Gap between slides
    track.style.transform = `translateX(-${heroCarouselIndex * (slideWidth + gap)}px)`;
}

function heroCarouselNext() {
    const totalImages = window.heroCarouselImages?.length || 0;
    const maxIndex = Math.max(0, totalImages - 5); // Stop when last 5 images are visible
    
    heroCarouselIndex++;
    if (heroCarouselIndex > maxIndex) heroCarouselIndex = 0;
    
    updateCarouselPosition();
    
    // Reset auto-advance timer
    if (heroCarouselInterval) clearInterval(heroCarouselInterval);
    heroCarouselInterval = setInterval(() => heroCarouselNext(), 3000);
}

function heroCarouselPrev() {
    const totalImages = window.heroCarouselImages?.length || 0;
    const maxIndex = Math.max(0, totalImages - 5);
    
    heroCarouselIndex--;
    if (heroCarouselIndex < 0) heroCarouselIndex = maxIndex;
    
    updateCarouselPosition();
    
    // Reset auto-advance timer
    if (heroCarouselInterval) clearInterval(heroCarouselInterval);
    heroCarouselInterval = setInterval(() => heroCarouselNext(), 3000);
}

// ==========================================
// Listing page: sub-nav, trust sidebar
// ==========================================
function renderListingSubNav(hasReviews, hasLocation) {
    return `
        <nav class="listing-subnav container" aria-label="Listing sections">
            <a href="#property-photos">Photos</a>
            <a href="#property-stay-details">Stay Details</a>
            <a href="#property-availability">Availability</a>
            ${hasReviews ? '<a href="#property-reviews">Reviews</a>' : ''}
            ${hasLocation ? '<a href="#property-location">Location</a>' : ''}
        </nav>
    `;
}

function renderListingRibbon(property, avgRating, reviewCount) {
    const ratingHtml = reviewCount > 0 && avgRating > 0
        ? `<span class="listing-ribbon-rating" title="${reviewCount} reviews"><span class="listing-ribbon-star" aria-hidden="true">★</span> ${avgRating} <span class="listing-ribbon-review-count">(${reviewCount})</span></span>`
        : '';
    return `
        <div class="listing-ribbon container" aria-label="Listing summary">
            <ul class="listing-ribbon-stats">
                <li><span class="listing-ribbon-value">${property.maxGuests}</span> <span class="listing-ribbon-label">guests</span></li>
                <li><span class="listing-ribbon-value">${property.bedrooms}</span> <span class="listing-ribbon-label">bedrooms</span></li>
                <li><span class="listing-ribbon-value">${property.bathrooms}</span> <span class="listing-ribbon-label">baths</span></li>
            </ul>
            ${ratingHtml}
        </div>
    `;
}

function getAmenityGroupKey(amenity) {
    const icon = amenity.icon || '';
    const n = (amenity.name || '').toLowerCase();
    if (icon === 'kitchen' || /kitchen|dining|coffee|dish|wine|refrigerator|grill uten|barbecue/.test(n)) return 'Kitchen & dining';
    if (['beach', 'lagoon', 'indoor-pool', 'hottub', 'spa', 'movie', 'conference', 'gym', 'arcade', 'restaurant', 'grill', 'pool'].includes(icon)
        || /pool|beach|gulf|lagoon|hot tub|fitness|golf|arcade|theater|tiki|resort|sauna|steam|outdoor grill/.test(n)) {
        return 'Resort & outdoors';
    }
    return 'General';
}

function renderGroupedAmenities(property) {
    const groups = { General: [], 'Kitchen & dining': [], 'Resort & outdoors': [] };
    property.amenities.forEach(a => {
        const g = getAmenityGroupKey(a);
        if (!groups[g]) groups[g] = [];
        groups[g].push(a.name);
    });
    const order = ['General', 'Kitchen & dining', 'Resort & outdoors'];
    const blocks = order.filter(k => groups[k] && groups[k].length).map(k => `
        <div class="amenity-group">
            <h4 class="amenity-group-title">${k}</h4>
            <ul class="amenity-group-list">
                ${groups[k].map(name => `<li>${escapeHtml(name)}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    return `
        <div class="amenities-grouped" id="property-amenities">
            <h3 class="stay-details-subheading">Amenities</h3>
            <div class="amenities-grouped-grid">
                ${blocks}
            </div>
        </div>
    `;
}

function renderStayDetailsAtAGlance(property) {
    const picks = [];
    const want = ['wifi', 'beach', 'kitchen', 'parking', 'lagoon', 'pool'];
    const byIcon = {};
    property.amenities.forEach(a => { if (!byIcon[a.icon]) byIcon[a.icon] = a.name; });
    want.forEach(ic => {
        if (byIcon[ic]) picks.push(byIcon[ic]);
    });
    property.amenities.forEach(a => {
        if (picks.length >= 7) return;
        if (!picks.includes(a.name)) picks.push(a.name);
    });
    const bullets = picks.slice(0, 7);
    return `
        <div class="stay-at-a-glance">
            <h3 class="stay-details-subheading">At a Glance</h3>
            <ul class="stay-at-a-glance-list">
                <li>Sleeps up to <strong>${property.maxGuests}</strong> · ${property.bedrooms} bed · ${property.bathrooms} bath</li>
                ${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderPropertyLocationSection(property) {
    if (!property.coordinates || typeof property.coordinates.lat !== 'number') return '';
    const mapsUrl = property.googleMapsUrl || `https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}`;
    const query = property.mapQuery ? escapeHtml(property.mapQuery) : escapeHtml(property.location);
    return `
        <section class="property-location-section" id="property-location" aria-labelledby="property-location-heading">
            <div class="container">
                <h2 id="property-location-heading" class="section-title">Location</h2>
                <p class="property-location-lead">${escapeHtml(property.location)}</p>
                <div id="property-detail-map" class="property-detail-map" role="img" aria-label="Map showing property location"></div>
                <p class="property-location-actions">
                    <a class="btn btn-secondary btn-maps" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                </p>
            </div>
        </section>
    `;
}

function scrollToPropertyPhotos() {
    const el = document.getElementById('property-photos');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateListingStickyCta(property) {
    const bar = document.getElementById('listing-sticky-cta');
    const estimateEl = document.getElementById('listing-sticky-cta-estimate');
    if (!bar || !estimateEl || !property) return;
    const c = getSiteContact();
    const pricing = getSelectedStayPricing(property);
    if (pricing) {
        estimateEl.innerHTML = `
            <span class="listing-sticky-dates">${pricing.checkInStr} – ${pricing.checkOutStr}</span>
            <span class="listing-sticky-total"><span class="listing-sticky-total-label">Est. total</span> ${formatCurrency(pricing.total)}</span>
            <span class="listing-sticky-nights">${pricing.nights} ${pricing.nights === 1 ? 'night' : 'nights'}</span>
        `;
    } else {
        estimateEl.innerHTML = `
            <span class="listing-sticky-placeholder">Select dates for an estimated total</span>
        `;
    }
    const phoneBtn = bar.querySelector('[data-sticky-tel]');
    if (phoneBtn && c.phoneTel) {
        phoneBtn.href = `tel:${c.phoneTel}`;
        phoneBtn.style.display = '';
    } else if (phoneBtn) {
        phoneBtn.style.display = 'none';
    }
}

function renderKeyPolicyChips(property) {
    let labels = [];
    if (property.availabilityChips && property.availabilityChips.length) {
        labels = property.availabilityChips.slice(0, 6);
    } else {
        const rules = (property.houseRules || []).slice(0, 3);
        labels = rules.map(r => r.name);
    }
    if (!labels.length) return '';
    return `
        <div class="key-policy-chips" aria-label="Key property details">
            ${labels.map(text => `<span class="policy-chip">${text}</span>`).join('')}
        </div>
    `;
}

function renderListingTrustSidebar(property) {
    const c = getSiteContact();
    const phoneHtml = c.phoneTel && c.phoneDisplay
        ? `<p class="listing-trust-line"><span class="listing-trust-label">Call or text</span> <a class="listing-trust-phone" href="tel:${c.phoneTel}">${c.phoneDisplay}</a></p>`
        : '';
    const emailHtml = `<p class="listing-trust-line"><span class="listing-trust-label">Email</span> <a class="listing-trust-email" href="mailto:${c.email}">${c.email}</a></p>`;
    const reply = `<p class="listing-reply-note">${escapeHtml(c.replyBlurb)}</p>`;
    return `<div class="listing-sidebar-trust">${phoneHtml}${emailHtml}${reply}</div>`;
}

// ==========================================
// Property Detail Page Rendering
// ==========================================
function renderPropertyDetail(property) {
    const container = document.getElementById('property-detail-page');
    destroyListingDetailMap();
    const reviews = REVIEWS[property.id] || [];
    const avgRating = reviews.length > 0 
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0;
    
    const seo = generatePropertySEO(property);
    const city = seo.city;
    const isFlorida = seo.isFlorida;
    const hasLocation = !!(property.coordinates && typeof property.coordinates.lat === 'number');
    
    // Listing JSON-LD is pre-rendered into <head> at deploy by scripts/generate-listing-schema.cjs,
    // so we intentionally do NOT inject more ld+json here. Avoids "Multiple VacationRental"/"Multiple ItemList"
    // errors in Google Rich Results when navigating client-side.

    const displayTitle = property.listingHeadline || property.title;
    const displaySubtitle = property.listingTagline || (isFlorida
        ? `${city}, Florida`
        : `Vacation rental in ${city}`);
    const homeHref = escapeHtml(getSiteBaseHref());
    const propsHref = `${escapeHtml(getSiteBaseHref().replace(/\/$/, ''))}#properties`;

    container.innerHTML = `
        <div class="property-detail">
            <div class="container listing-breadcrumb-wrap">
                <nav class="listing-breadcrumb" aria-label="Breadcrumb">
                    <ol class="listing-breadcrumb-list">
                        <li><a href="${homeHref}">Home</a></li>
                        <li><a href="${propsHref}">Florida rentals</a></li>
                        <li aria-current="page">${escapeHtml(city)}</li>
                    </ol>
                </nav>
            </div>
            ${renderHeroCarousel(property)}
            
            <div class="container">
                <div class="property-detail-header">
                    <h1 class="property-detail-title">${escapeHtml(displayTitle)}</h1>
                    <p class="property-detail-subtitle">${escapeHtml(displaySubtitle)}</p>
                    <div class="property-detail-location">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${escapeHtml(property.location)}</span>
                    </div>
                </div>
            </div>
            
            ${renderListingRibbon(property, avgRating, reviews.length)}
            
            <div class="gallery-section" id="property-photos">
                <div class="container">
                    <div class="gallery-section-toolbar">
                        <button type="button" class="btn btn-gallery-view-all" onclick="scrollToPropertyPhotos(); openLightbox(0);">
                            View all photos
                        </button>
                    </div>
                    ${renderGallery(property)}
                </div>
            </div>
            
            ${renderListingSubNav(reviews.length > 0, hasLocation)}
            
            <div class="availability-pricing-section" id="property-availability">
                <div class="container">
                    <h2 class="section-title">Availability & Pricing</h2>
                    ${renderKeyPolicyChips(property)}
                    <div class="availability-pricing-grid">
                        <div class="calendar-container">
                            <h3>Select Your Dates</h3>
                            <div id="calendar-widget"></div>
                        </div>
                        <div class="pricing-container">
                            <h3>Price Calculator</h3>
                            <div class="pricing-disclaimer">
                                Prices shown reflect owner-configured rates. Availability may reflect external calendar sync. Final pricing is confirmed directly with the owner.
                            </div>
                            <p class="cancellation-snippet">${getSiteContact().cancellationNote}</p>
                            <div id="price-calculator"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="property-overview-section" id="property-overview">
                <div class="container">
                    <div class="property-overview-grid">
                        <div id="property-stay-details" class="property-stay-details-wrap">
                            <h2 class="section-title property-stay-details-heading">Stay Details</h2>
                            ${renderStayDetailsAtAGlance(property)}
                            ${renderGroupedAmenities(property)}
                            ${renderFormattedDescription(property, isFlorida, city)}
                            ${renderHouseRules(property)}
                        </div>
                        
                        <div>
                            <div style="position: sticky; top: 100px;">
                                <div class="pricing-container" id="quick-pricing">
                                    <h3>Quick Pricing</h3>
                                    <p class="quick-pricing-lead">Rates vary by season—select dates for an estimate.</p>
                                    <button type="button" class="quick-pricing-calendar-link" onclick="scrollToPropertyCalendar()">Select dates above to see total pricing</button>
                                    ${renderListingTrustSidebar(property)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${reviews.length > 0 ? renderReviews(reviews, avgRating) : ''}
            ${renderPropertyLocationSection(property)}
            ${renderExploreCards(property)}
            
            <div class="listing-sticky-cta" id="listing-sticky-cta" role="region" aria-label="Book this stay">
                <div class="listing-sticky-cta-inner container">
                    <div class="listing-sticky-cta-estimate" id="listing-sticky-cta-estimate"></div>
                    <div class="listing-sticky-cta-actions">
                        <a class="btn btn-primary btn-sticky" href="#" onclick="event.preventDefault(); showContactModal();">Email to Book</a>
                        ${getSiteContact().phoneTel ? `<a class="btn btn-secondary btn-sticky" href="#" data-sticky-tel>Call</a>` : ''}
                    </div>
                </div>
            </div>
        </div>
        
        <div id="lightbox" class="lightbox" onclick="closeLightbox()">
            <button type="button" class="lightbox-nav lightbox-nav-prev" aria-label="Previous photo" onclick="event.stopPropagation(); lightboxPrev();">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div class="lightbox-content" onclick="event.stopPropagation()">
                <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close">×</button>
                <img id="lightbox-image" class="lightbox-image" src="" alt="Enlarged property photo">
                <div id="lightbox-counter" class="lightbox-counter" aria-live="polite"></div>
            </div>
            <button type="button" class="lightbox-nav lightbox-nav-next" aria-label="Next photo" onclick="event.stopPropagation(); lightboxNext();">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
    `;
    
    renderCalendar(property);
    renderPriceCalculator(property);
    initHeroCarousel();
    setTimeout(() => initListingDetailMap(property), 0);
    document.body.classList.add('has-listing-sticky');
}

function renderGallery(property) {
    // Support both old format (array) and new format (categorized object)
    const hasCategories = property.images && typeof property.images === 'object' && !Array.isArray(property.images);
    
    if (!hasCategories) {
        window.categorizedImages = null;
        window.categoryMap = null;
    }
    
    if (hasCategories) {
        return renderCategorizedGallery(property);
    }
    
    // Legacy flat array format
    const mainAlt = generateImageAlt(property, 0);
    const galleryFallback = getFirstImage(property.images);
    
    return `
        <div class="gallery-container">
            <div class="gallery-main">
                <img id="gallery-main-image" src="${property.images[0]}" alt="${mainAlt}" onclick="openLightbox(${0})" data-fallback-src="${galleryFallback}" onerror="galleryImageOnError(this)">
                <div class="gallery-controls">
                    <button class="gallery-btn" onclick="previousImage()" aria-label="Previous image">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button class="gallery-btn" onclick="nextImage()" aria-label="Next image">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                <div class="gallery-indicator">
                    <span id="gallery-indicator-text">${currentGalleryIndex + 1} / ${property.images.length}</span>
                </div>
            </div>
            <div class="gallery-thumbnails">
                ${property.images.map((img, idx) => `
                    <div class="gallery-thumbnail ${idx === 0 ? 'active' : ''}" onclick="selectGalleryImage(${idx})">
                        <img src="${img}" alt="${generateImageAlt(property, idx)}" loading="lazy" data-fallback-src="${galleryFallback}" onerror="galleryImageOnError(this)">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCategorizedGallery(property) {
    const categories = Object.keys(property.images);
    const allImages = [];
    const categoryMap = {};
    
    // Build flat array and category map
    categories.forEach(category => {
        categoryMap[category] = { start: allImages.length, count: property.images[category].length };
        property.images[category].forEach(img => {
            allImages.push({ url: img, category: category });
        });
    });
    
    // Store for global access
    window.categorizedImages = allImages;
    window.categoryMap = categoryMap;
    
    const mainAlt = escapeHtml(`${property.title} — ${allImages[0]?.category || 'Photo'} (1 of ${allImages.length})`);
    const galleryFallback = allImages[0]?.url || '';
    
    return `
        <div class="gallery-container categorized">
            <div class="gallery-categories">
                <button type="button" class="category-btn active" data-category="all" onclick="filterGalleryCategory('all')">
                    All Photos
                    <span class="category-count">${allImages.length}</span>
                </button>
                ${categories.map(cat => `
                    <button type="button" class="category-btn" data-category="${escapeHtml(cat)}" onclick="filterGalleryCategory(${escapeHtml(JSON.stringify(cat))})">
                        ${escapeHtml(cat)}
                        <span class="category-count">${property.images[cat].length}</span>
                    </button>
                `).join('')}
            </div>
            <div class="gallery-main">
                <img id="gallery-main-image" src="${allImages[0]?.url || ''}" alt="${mainAlt}" onclick="openLightbox(0)" data-fallback-src="${galleryFallback}" onerror="galleryImageOnError(this)">
                <div class="gallery-controls">
                    <button class="gallery-btn" onclick="previousImage()" aria-label="Previous image">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button class="gallery-btn" onclick="nextImage()" aria-label="Next image">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                <div class="gallery-indicator">
                    <span id="gallery-current-category">${escapeHtml(allImages[0]?.category || '')}</span>
                    <span id="gallery-indicator-text">1 / ${allImages.length}</span>
                </div>
            </div>
            <div class="gallery-thumbnails" id="gallery-thumbnails">
                ${allImages.map((img, idx) => `
                    <div class="gallery-thumbnail ${idx === 0 ? 'active' : ''}" data-category="${escapeHtml(img.category)}" onclick="selectGalleryImage(${idx})">
                        <img src="${img.url}" alt="${escapeHtml(property.title)} — ${escapeHtml(img.category)} (${idx + 1})" loading="lazy" data-fallback-src="${galleryFallback}" onerror="galleryImageOnError(this)">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function filterGalleryCategory(category) {
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    let firstVisibleIndex = -1;
    thumbnails.forEach((thumb, idx) => {
        if (category === 'all' || thumb.dataset.category === category) {
            thumb.style.display = '';
            if (firstVisibleIndex === -1) firstVisibleIndex = idx;
        } else {
            thumb.style.display = 'none';
        }
    });

    window.activeGalleryFilter = category;

    if (firstVisibleIndex >= 0) {
        selectGalleryImage(firstVisibleIndex);
    }
}

// ==========================================
// Formatted Description Rendering
// ==========================================
function renderFormattedDescription(property, isFlorida, city) {
    const description = property.description;
    
    // Check if description has formatted sections (uses backticks template literal with **)
    if (description.includes('**')) {
        return renderRichDescription(property, description, isFlorida, city);
    }
    
    // Fallback for simple descriptions
    return `
        <h2>About ${property.title}</h2>
        <p class="property-description">${description}</p>
        ${property.webcam ? renderWebcam(property.webcam, property.title) : ''}
        ${isFlorida ? `<details class="seo-more"><summary>More About Booking Direct in ${escapeHtml(city)}</summary><p class="seo-text">Owner-direct stays: no OTA service fees. Final rates are confirmed with the host.</p></details>` : ''}
    `;
}

// Render webcam section - can be iframe or link depending on property config
function renderWebcam(webcamConfig, propertyTitle) {
    // If webcamConfig is a string (legacy), treat as iframe URL
    // If it's an object, use the linkUrl for external link approach
    const isLinkOnly = typeof webcamConfig === 'object' && webcamConfig.linkUrl;
    
    if (isLinkOnly) {
        return `
            <div class="webcam-section">
                <div class="webcam-header">
                    <div class="webcam-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M23 7l-7 5 7 5V7z"></path>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                    </div>
                    <h3>Live Beach Webcam</h3>
                </div>
                <a href="${webcamConfig.linkUrl}" target="_blank" rel="noopener noreferrer" class="webcam-link-card">
                    <div class="webcam-preview">
                        <img src="${webcamConfig.previewImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'}" alt="Beach webcam preview">
                        <div class="webcam-play-overlay">
                            <div class="play-button">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                            <span>Watch Live Beach Cam</span>
                        </div>
                    </div>
                </a>
                <p class="webcam-description">Click above to view live beach conditions in a new window. See the waves, weather, and beach activity before your visit!</p>
            </div>
        `;
    }
    
    // Fallback to iframe embed
    return `
        <div class="webcam-section">
            <div class="webcam-header">
                <div class="webcam-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M23 7l-7 5 7 5V7z"></path>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                </div>
                <h3>Live Beach Webcam</h3>
            </div>
            <div class="webcam-container">
                <iframe 
                    src="${webcamConfig}" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allowfullscreen
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    scrolling="no"
                    title="Live beach webcam at ${propertyTitle}"
                    style="width: 100%; height: 100%;"
                ></iframe>
            </div>
            <p class="webcam-description">Watch the live beach conditions before your visit! This webcam shows real-time views of the beach area.</p>
        </div>
    `;
}

function renderRichDescription(property, description, isFlorida, city) {
    // Section images - use specific URLs for each section
    const sectionImages = {
        'Location': null,
        'Kitchen': null,
        'Sleeping Arrangements': null,
        'Majestic Sun & Seascape Resort Amenities': 'https://media.scurto.net/cdn-cgi/image/width=1920/2060/media/5204-seascape-golf-beach-tennis-resort-in-destin.jpg',
        'Things to Do': 'https://media.scurto.net/cdn-cgi/image/width=1920/2060/media/5229-3.jpg'
    };
    
    // Section icons mapping
    const sectionIcons = {
        'Location': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        'Kitchen': '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        'Sleeping Arrangements': '<path d="M2 4v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4"></path><path d="M2 10h20"></path><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"></path><circle cx="17" cy="6" r="2"></circle>',
        'Majestic Sun & Seascape Resort Amenities': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        'Tidewater Beach Resort Amenities': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        'Things to Do': '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        'About Tidewater Resort': '<path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path><path d="M1 21h22"></path><path d="M9 7h1"></path><path d="M9 11h1"></path><path d="M9 15h1"></path><path d="M14 7h1"></path><path d="M14 11h1"></path><path d="M14 15h1"></path>',
        'Registration': '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path>'
    };
    
    // Split by sections marked with **
    const sections = description.split(/\*\*([^*]+)\*\*/g);
    
    let html = '<div class="rich-description">';
    
    // First section is the intro (About)
    if (sections[0].trim()) {
        const introParagraphs = sections[0].trim().split('\n\n');
        const previewParagraphs = introParagraphs.slice(0, 1); // Show first 1 paragraph
        const remainingParagraphs = introParagraphs.slice(1);
        const hasMore = remainingParagraphs.length > 0;
        
        html += `
            <div class="description-section description-intro">
                <div class="section-header">
                    <div class="section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </div>
                    <h2>About ${property.title}</h2>
                </div>
                <div class="section-content">
                    <div class="description-preview">
                        ${previewParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
                    </div>
                    ${hasMore ? `
                        <div class="description-full" style="display: none;">
                            ${remainingParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
                        </div>
                        <button class="read-more-btn" onclick="toggleDescription(this)">
                            <span class="read-more-text">Read more</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    // Sections that should be collapsible
    const collapsibleSections = ['Location'];
    
    // Process remaining sections
    for (let i = 1; i < sections.length; i += 2) {
        const title = sections[i];
        const content = sections[i + 1] || '';
        
        if (!title || !content.trim()) continue;
        
        const sectionImage = sectionImages[title];
        const sectionIcon = sectionIcons[title] || '<circle cx="12" cy="12" r="10"></circle>';
        const isCollapsible = collapsibleSections.includes(title);
        
        // Parse content into paragraphs for collapsible sections
        let sectionContentHtml = '';
        if (isCollapsible) {
            const paragraphs = content.trim().split('\n\n');
            const previewParagraphs = paragraphs.slice(0, 1); // Show first paragraph
            const remainingParagraphs = paragraphs.slice(1);
            const hasMore = remainingParagraphs.length > 0;
            
            sectionContentHtml = `
                <div class="description-preview">
                    ${formatSectionContent(previewParagraphs.join('\n\n'))}
                </div>
                ${hasMore ? `
                    <div class="description-full" style="display: none;">
                        ${formatSectionContent(remainingParagraphs.join('\n\n'))}
                    </div>
                    <button class="read-more-btn" onclick="toggleDescription(this)">
                        <span class="read-more-text">Read more</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                ` : ''}
            `;
        } else {
            sectionContentHtml = formatSectionContent(content);
        }
        
        let mediaContent = '';
        if (sectionImage) {
            mediaContent = `
                <div class="section-image">
                    <img src="${sectionImage}" alt="${title} at ${property.title}" loading="lazy">
                </div>
            `;
        }
        
        html += `
            <div class="description-section ${sectionImage ? 'has-media' : ''}">
                <div class="section-header">
                    <div class="section-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            ${sectionIcon}
                        </svg>
                    </div>
                    <h3>${title}</h3>
                </div>
                ${mediaContent}
                <div class="section-content">
                    ${sectionContentHtml}
                </div>
            </div>
        `;
    }
    
    // Add webcam after all sections
    if (property.webcam) {
        html += renderWebcam(property.webcam, property.title);
    }
    
    // Optional SEO blurb — collapsed so the page reads for guests first
    if (isFlorida) {
        html += `
            <details class="seo-more">
                <summary>More About Booking Direct in ${escapeHtml(city)}</summary>
                <p class="seo-text">Owner-direct stays: no OTA service fees. Rates and availability are confirmed with the host when you book.</p>
            </details>`;
    }
    
    html += '</div>';
    return html;
}

function formatSectionContent(content) {
    const lines = content.trim().split('\n');
    let html = '';
    let inList = false;
    let currentSubsection = '';
    
    // Link mapping for business names
    const businessLinks = {
        '2 Birds Coffee & Café': 'https://www.2birdscafe.com/our-menu',
        'Acme Oyster House': 'https://www.acmeoyster.com',
        'Mezcal Cantina Mexican Grill & Tiki Bar (delivery available)': 'https://www.mezcalmexicangrill.com',
        'Moo La-La Ice Cream & Fudge': 'https://www.facebook.com/Moo-La-La-421589887923136',
        'Thrills Laser Tag & Arcade': 'https://www.thrillslasertag.com',
        'Wine, spirits, and boutique shopping': 'https://seascape-spirits.com'
    };
    
    // Helper function to convert URLs to clickable links
    const linkifyUrls = (text) => {
        const urlRegex = /(https?:\/\/[^\s<]+)/g;
        return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>');
    };
    
    // Helper function to linkify business names
    const linkifyBusinesses = (text) => {
        let result = text;
        for (const [name, url] of Object.entries(businessLinks)) {
            if (result.includes(name)) {
                result = result.replace(name, `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`);
            }
        }
        return result;
    };
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        
        if (!trimmedLine) {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            continue;
        }
        
        // Check for subsection headers (italic style with *)
        if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && !trimmedLine.startsWith('• ')) {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            const subsectionTitle = trimmedLine.replace(/\*/g, '').replace(/ - .*$/, '');
            const subsectionSubtitle = trimmedLine.includes(' - ') ? trimmedLine.split(' - ')[1].replace(/\*$/, '') : '';
            html += `<div class="subsection-header"><h4>${subsectionTitle}</h4>${subsectionSubtitle ? `<span>${subsectionSubtitle}</span>` : ''}</div>`;
            continue;
        }
        
        // Check for bullet points
        if (trimmedLine.startsWith('•')) {
            if (!inList) {
                html += '<ul class="feature-list">';
                inList = true;
            }
            const itemText = trimmedLine.substring(1).trim();
            html += `<li>${linkifyBusinesses(linkifyUrls(itemText))}</li>`;
            continue;
        }
        
        // Regular paragraph
        if (inList) {
            html += '</ul>';
            inList = false;
        }
        // Check if this is a section intro (ends with ":")
        const isIntro = trimmedLine.endsWith(':') && trimmedLine.length > 30;
        const className = isIntro ? 'section-intro-text' : '';
        html += `<p class="${className}">${linkifyBusinesses(linkifyUrls(trimmedLine))}</p>`;
    }
    
    if (inList) {
        html += '</ul>';
    }
    
    return html;
}

function renderAmenities(property) {
    const iconMap = {
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        pool: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        kitchen: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        parking: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6h-4"></path>',
        ac: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        washer: '<circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>',
        beach: '<path d="M17 17L3 3"></path><path d="M3 17h18"></path>',
        hottub: '<circle cx="12" cy="12" r="10"></circle><path d="M8 12h8M12 8v8"></path>',
        fireplace: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 2 7.5a2.5 2.5 0 0 1-5 0z"></path>',
        heating: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        ski: '<path d="M2 22l20-8M5 12L2 22l3-10zM16 8l3-10"></path>',
        elevator: '<rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M9 6h6M9 10h6M9 14h6M9 18h6"></path>',
        gym: '<circle cx="12" cy="8" r="2"></circle><path d="M12 10v12M8 14h8M6 18h12"></path>',
        workspace: '<rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        conference: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        lagoon: '<path d="M2 12h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h2"></path><path d="M2 6h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h2"></path>',
        'indoor-pool': '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 12h12"></path><path d="M6 16c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0"></path>',
        spa: '<path d="M12 22c4.97 0 9-2.24 9-5s-4.03-5-9-5-9 2.24-9 5 4.03 5 9 5z"></path><path d="M12 12V2"></path><path d="M8 4c0 1.5.5 3 2 4"></path><path d="M16 4c0 1.5-.5 3-2 4"></path><path d="M12 6c-1 1-2 2-2 4"></path><path d="M12 6c1 1 2 2 2 4"></path>',
        movie: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        arcade: '<rect x="6" y="2" width="12" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line><path d="M9 8h6"></path><path d="M12 5v6"></path>',
        restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path>',
        grill: '<path d="M3 14h18"></path><path d="M4 9h16"></path><path d="M6 14v4"></path><path d="M18 14v4"></path><rect x="2" y="6" width="20" height="4" rx="1"></rect><path d="M8 2v2"></path><path d="M12 2v2"></path><path d="M16 2v2"></path>'
    };
    
    return `
        <div class="amenities-section">
            <h3>Amenities</h3>
            <div class="amenities-grid">
                ${property.amenities.map(amenity => `
                    <div class="amenity-item">
                        <div class="amenity-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${iconMap[amenity.icon] || '<circle cx="12" cy="12" r="10"></circle>'}
                            </svg>
                        </div>
                        <span>${amenity.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderHouseRules(property) {
    const iconMap = {
        'no-smoking': '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        'no-parties': '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        'pets': '<circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2a7 7 0 0 0-14 0v2"></path><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></path>',
        'no-pets': '<circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2a7 7 0 0 0-14 0v2"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        'checkin': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        'checkout': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 8 10"></polyline>',
        'quiet': '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>'
    };
    
    return `
        <div class="rules-section">
            <h3>House Rules</h3>
            <div class="rules-grid">
                ${property.houseRules.map(rule => `
                    <div class="rule-item">
                        <div class="rule-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${iconMap[rule.icon] || '<circle cx="12" cy="12" r="10"></circle>'}
                            </svg>
                        </div>
                        <span>${rule.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==========================================
// Calendar Functions
// ==========================================
function renderCalendar(property) {
    const container = document.getElementById('calendar-widget');
    const month = currentCalendarMonth.getMonth();
    const year = currentCalendarMonth.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    let calendarHTML = `
        <div class="calendar">
            <div class="calendar-header">
                <h4>${monthNames[month]} ${year}</h4>
                <div class="calendar-nav">
                    <button onclick="previousMonth()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button onclick="nextMonth()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="calendar-weekdays">
                <div class="calendar-weekday">Sun</div>
                <div class="calendar-weekday">Mon</div>
                <div class="calendar-weekday">Tue</div>
                <div class="calendar-weekday">Wed</div>
                <div class="calendar-weekday">Thu</div>
                <div class="calendar-weekday">Fri</div>
                <div class="calendar-weekday">Sat</div>
            </div>
            <div class="calendar-days">
    `;
    
    // Empty cells before first day
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarHTML += '<div class="calendar-day empty"></div>';
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = dateToString(date);
        const isPast = isPastCalendarDay(date);
        const isUnavailable = !isPast && getMergedUnavailableDates(property).includes(dateStr);
        
        let classes = 'calendar-day';
        if (isPast) {
            classes += ' past';
        } else if (isUnavailable) {
            classes += ' unavailable';
        }
        
        if (!isPast && selectedStartDate && dateStr === dateToString(selectedStartDate)) {
            classes += ' selected';
        }
        if (!isPast && selectedEndDate && dateStr === dateToString(selectedEndDate)) {
            classes += ' selected';
        }
        
        if (!isPast && !isUnavailable && selectedStartDate && selectedEndDate) {
            if (date > selectedStartDate && date < selectedEndDate) {
                classes += ' in-range';
            }
        }
        
        const dayTitle = isPast
            ? ' title="Past dates cannot be selected"'
            : isUnavailable
                ? ' title="Booked — not available for check-in"'
                : '';
        calendarHTML += `<div class="${classes}"${dayTitle} onclick="selectDate(new Date(${year}, ${month}, ${day}))">${day}</div>`;
    }
    
    calendarHTML += `
            </div>
            <div class="calendar-legend">
                <div class="legend-item">
                    <div class="legend-color selected"></div>
                    <span>Selected</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color unavailable"></div>
                    <span>Booked</span>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = calendarHTML;
}

function selectDate(date) {
    if (!currentProperty) return;
    
    if (isPastCalendarDay(date)) {
        return;
    }
    
    const dateStr = dateToString(date);
    if (getMergedUnavailableDates(currentProperty).includes(dateStr)) {
        return;
    }
    
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        // Starting new selection
        selectedStartDate = date;
        selectedEndDate = null;
    } else if (date < selectedStartDate) {
        // Selected date is before start date, make it the new start
        selectedEndDate = selectedStartDate;
        selectedStartDate = date;
    } else {
        // Completing the range
        selectedEndDate = date;
    }

    if (selectedStartDate && selectedEndDate) {
        const lo = selectedStartDate < selectedEndDate ? selectedStartDate : selectedEndDate;
        const hi = selectedStartDate < selectedEndDate ? selectedEndDate : selectedStartDate;
        if (stayRangeCrossesUnavailable(lo, hi, currentProperty)) {
            selectedStartDate = null;
            selectedEndDate = null;
        }
    }

    renderCalendar(currentProperty);
    renderPriceCalculator(currentProperty);
}

function previousMonth() {
    currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() - 1);
    renderCalendar(currentProperty);
}

function nextMonth() {
    currentCalendarMonth.setMonth(currentCalendarMonth.getMonth() + 1);
    renderCalendar(currentProperty);
}

// ==========================================
// Price Calculator Functions
// ==========================================
function renderPriceCalculator(property) {
    const container = document.getElementById('price-calculator');
    const quickPricing = document.getElementById('quick-pricing');
    const c = getSiteContact();
    const trustSidebar = renderListingTrustSidebar(property);
    
    if (!selectedStartDate || !selectedEndDate) {
        container.innerHTML = `
            <p style="text-align: center; padding: 2rem 0;">
                <button type="button" class="price-calculator-prompt-link" onclick="scrollToPropertyCalendar()">Select check-in and check-out dates on the calendar to calculate pricing.</button>
            </p>
            <p class="calculator-reply-hint">${escapeHtml(c.replyBlurb)}</p>
        `;
        // Reset quick pricing to default
        if (quickPricing) {
            quickPricing.innerHTML = `
                <h3>Quick Pricing</h3>
                <p class="quick-pricing-lead">Rates vary by season—select dates for an estimate.</p>
                <button type="button" class="quick-pricing-calendar-link" onclick="scrollToPropertyCalendar()">Select dates above to see total pricing</button>
                ${trustSidebar}
            `;
        }
        updateListingStickyCta(property);
        return;
    }
    
    const nights = getDaysBetweenDates(selectedStartDate, selectedEndDate);
    let nightlyTotal = 0;
    
    // Calculate total for each night with adjustments
    let currentDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);
    
    while (currentDate < endDate) {
        nightlyTotal += getAdjustedRate(currentDate, property);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    const cleaningFee = property.cleaningFee;
    const subtotal = nightlyTotal + cleaningFee;
    const tax = subtotal * property.taxRate;
    const total = subtotal + tax;
    
    const avgNightlyRate = Math.round(nightlyTotal / nights);
    
    container.innerHTML = `
        <div class="price-breakdown">
            <div class="price-line">
                <span class="price-label">Lodging (${nights} ${nights === 1 ? 'night' : 'nights'})</span>
                <span class="price-value">${formatCurrency(nightlyTotal)}</span>
            </div>
            <div class="price-line">
                <span class="price-label">Cleaning fee</span>
                <span class="price-value">${formatCurrency(cleaningFee)}</span>
            </div>
            <div class="price-line">
                <span class="price-label">Tax (${(property.taxRate * 100).toFixed(0)}%)</span>
                <span class="price-value">${formatCurrency(tax)}</span>
            </div>
            <div class="price-line total">
                <span class="price-label">Total</span>
                <span class="price-total">${formatCurrency(total)}</span>
            </div>
        </div>
        <p class="calculator-reply-hint">${escapeHtml(c.replyBlurb)} Final details are confirmed by email.</p>
        <button class="btn btn-primary" style="width: 100%;" onclick="showContactModal()">
            Email to Reserve These Dates
        </button>
    `;
    
    // Update Quick Pricing sidebar with calculated total
    if (quickPricing) {
        const checkInStr = selectedStartDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const checkOutStr = selectedEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const damageDeposit = getRefundableDamageDeposit(property);
        const depositLine = damageDeposit > 0
            ? `<p class="quick-pricing-deposit"><span class="quick-pricing-deposit-amount">${formatCurrency(damageDeposit)}</span> Refundable damage deposit</p>`
            : '';
        
        quickPricing.innerHTML = `
            <h3>Your Stay</h3>
            <div class="quick-pricing-dates" style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                ${checkInStr} – ${checkOutStr} (${nights} ${nights === 1 ? 'night' : 'nights'})
            </div>
            <div class="property-price" style="margin-bottom: 0.5rem;">
                ${formatCurrency(total)}
                <span style="font-size: 0.875rem; font-weight: normal;">total</span>
            </div>
            ${depositLine}
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="showContactModal()">
                Email to Reserve These Dates
            </button>
            ${trustSidebar}
        `;
    }
    updateListingStickyCta(property);
}

// ==========================================
// Gallery Functions
// ==========================================
/** If a VRBO/CDN thumbnail 404s, show the first gallery image once (avoids broken icon). */
function galleryImageOnError(img) {
    if (img.dataset.galleryFbDone) return;
    const fb = img.getAttribute('data-fallback-src');
    if (!fb || img.src === fb) return;
    img.dataset.galleryFbDone = '1';
    img.src = fb;
}

function selectGalleryImage(index) {
    if (!currentProperty) return;
    
    currentGalleryIndex = index;
    const mainImage = document.getElementById('gallery-main-image');
    
    // Handle categorized vs flat array
    const hasCategories = window.categorizedImages && window.categorizedImages.length > 0;
    
    if (hasCategories) {
        const img = window.categorizedImages[index];
        mainImage.removeAttribute('data-gallery-fb-done');
        mainImage.src = img.url;
        mainImage.alt = `${currentProperty.title} - ${img.category}`;
        
        // Update category indicator
        const categoryIndicator = document.getElementById('gallery-current-category');
        if (categoryIndicator) categoryIndicator.textContent = img.category;
        
        document.getElementById('gallery-indicator-text').textContent = 
            `${index + 1} / ${window.categorizedImages.length}`;
    } else {
        mainImage.removeAttribute('data-gallery-fb-done');
        mainImage.src = currentProperty.images[index];
        mainImage.alt = generateImageAlt(currentProperty, index);
        document.getElementById('gallery-indicator-text').textContent = 
            `${index + 1} / ${currentProperty.images.length}`;
    }
    
    // Update thumbnails
    document.querySelectorAll('.gallery-thumbnail').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });
}

function previousImage() {
    if (!currentProperty) return;
    
    const hasCategories = window.categorizedImages && window.categorizedImages.length > 0;
    const totalImages = hasCategories ? window.categorizedImages.length : currentProperty.images.length;
    
    currentGalleryIndex = (currentGalleryIndex - 1 + totalImages) % totalImages;
    selectGalleryImage(currentGalleryIndex);
}

function nextImage() {
    if (!currentProperty) return;
    
    const hasCategories = window.categorizedImages && window.categorizedImages.length > 0;
    const totalImages = hasCategories ? window.categorizedImages.length : currentProperty.images.length;
    
    currentGalleryIndex = (currentGalleryIndex + 1) % totalImages;
    selectGalleryImage(currentGalleryIndex);
}

let lastFocusedBeforeLightbox = null;

function getGalleryTotal() {
    if (!currentProperty) return 0;
    const hasCategories = window.categorizedImages && window.categorizedImages.length > 0;
    return hasCategories ? window.categorizedImages.length : currentProperty.images.length;
}

function updateLightboxImage(index) {
    if (!currentProperty) return;
    const lightboxImage = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    const hasCategories = window.categorizedImages && window.categorizedImages.length > 0;
    const total = getGalleryTotal();
    if (hasCategories) {
        const item = window.categorizedImages[index];
        lightboxImage.src = item.url;
        lightboxImage.alt = `${currentProperty.title} — ${item.category} photo (${index + 1})`;
        if (counter) counter.textContent = `${index + 1} / ${total} · ${item.category}`;
    } else {
        lightboxImage.src = currentProperty.images[index];
        lightboxImage.alt = generateImageAlt(currentProperty, index);
        if (counter) counter.textContent = `${index + 1} / ${total}`;
    }
}

function openLightbox(index) {
    if (!currentProperty) return;

    const lightbox = document.getElementById('lightbox');
    currentGalleryIndex = index;
    updateLightboxImage(index);

    lastFocusedBeforeLightbox = document.activeElement;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', `${currentProperty.title} photo gallery`);
    lightbox.classList.add('active');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function lightboxPrev() {
    const total = getGalleryTotal();
    if (!total) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + total) % total;
    updateLightboxImage(currentGalleryIndex);
    selectGalleryImage(currentGalleryIndex);
}

function lightboxNext() {
    const total = getGalleryTotal();
    if (!total) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % total;
    updateLightboxImage(currentGalleryIndex);
    selectGalleryImage(currentGalleryIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    if (lastFocusedBeforeLightbox && typeof lastFocusedBeforeLightbox.focus === 'function') {
        try { lastFocusedBeforeLightbox.focus(); } catch (e) { /* element may be gone */ }
    }
    lastFocusedBeforeLightbox = null;
}

// ==========================================
// Explore Cards Functions
// ==========================================
function renderExploreCards(property) {
    // Determine location-specific content
    const isDestin = property && (property.location.includes('Destin') || property.location.includes('Miramar'));
    
    const locationData = isDestin ? {
        name: "Miramar Beach",
        cards: [
            {
                title: "Restaurants",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
                link: "https://www.destinflorida.com/dining"
            },
            {
                title: "Events",
                image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80",
                link: "https://www.destinflorida.com/events"
            },
            {
                title: "Things To Do",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
                link: "https://www.destinflorida.com/things-to-do"
            }
        ]
    } : {
        name: "Panama City Beach",
        cards: [
            {
                title: "Restaurants",
                image: "https://assets.simpleviewinc.com/sv-panamacitybeach/image/upload/c_fill,f_avif,h_907,q_65,w_1920/v1/cms_resources/clients/panamacitybeach/DRINKS_PCB_232A7974_CC_3f6898c7-d679-4b44-803a-2430c7fd90d7.png",
                link: "https://www.visitpanamacitybeach.com/restaurants/"
            },
            {
                title: "Events",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
                link: "https://www.visitpanamacitybeach.com/events/#calendar"
            },
            {
                title: "Things To Do",
                image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
                link: "https://www.visitpanamacitybeach.com/things-to-do/"
            }
        ]
    };
    
    return `
        <div class="explore-section">
            <div class="container">
                <h2 class="section-title">Explore ${locationData.name}</h2>
                <div class="explore-cards-grid">
                    ${locationData.cards.map(card => `
                        <a href="${card.link}" target="_blank" rel="noopener noreferrer" class="explore-card">
                            <div class="explore-card-image">
                                <img src="${card.image}" alt="${card.title} in ${locationData.name}" loading="lazy">
                            </div>
                            <div class="explore-card-title">${card.title}</div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// Reviews Functions
// ==========================================
const REVIEWS_PREVIEW_COUNT = 3;

function renderReviewListItem(review, index) {
    return `
        <div class="review-list-item" id="review-item-${index}">
            <div class="review-list-item-head">
                <div class="review-list-item-meta">
                    <span class="review-item-author">${escapeHtml(review.author)}</span>
                    <span class="review-item-date">${formatDate(review.date)}</span>
                </div>
                <div class="review-rating" aria-label="${review.rating} out of 5 stars">
                    ${renderStars(review.rating)}
                </div>
            </div>
            <div class="review-item-text">${escapeHtml(review.comment)}</div>
        </div>
    `;
}

function renderReviews(reviews, avgRating) {
    const previewCount = Math.min(REVIEWS_PREVIEW_COUNT, reviews.length);
    const previewReviews = reviews.slice(0, previewCount);
    const restReviews = reviews.slice(previewCount);
    const hasMoreReviews = restReviews.length > 0;
    const moreCount = restReviews.length;
    const moreLabel = `Read ${moreCount} more ${moreCount === 1 ? 'review' : 'reviews'}`;
    const expandBlock = hasMoreReviews ? `
                <div class="description-full reviews-more-panel" style="display: none;">
                    <div class="review-list">
                        ${restReviews.map((r, i) => renderReviewListItem(r, previewCount + i)).join('')}
                    </div>
                </div>
                <button type="button" class="read-more-btn reviews-expand-btn" onclick="toggleDescription(this)"
                    data-read-more="${moreLabel.replace(/"/g, '&quot;')}"
                    data-show-less="Show fewer reviews">
                    <span class="read-more-text">${moreLabel}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            ` : '';
    
    return `
        <div class="reviews-section" id="property-reviews">
            <div class="container">
                <div class="description-section reviews-group-section">
                    <div class="section-header reviews-group-header">
                        <div class="reviews-group-header-main">
                            <div class="section-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <h2 class="reviews-group-title">Guest Reviews</h2>
                        </div>
                        <div class="reviews-summary reviews-summary--grouped">
                            <div class="reviews-rating">
                                <span class="rating-number">${avgRating}</span>
                                <div>
                                    <div class="rating-stars">
                                        ${renderStars(Math.round(avgRating))}
                                    </div>
                                    <div class="rating-count">${reviews.length} ${reviews.length === 1 ? 'review' : 'reviews'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-content reviews-group-content">
                        <div class="description-preview">
                            <div class="review-list">
                                ${previewReviews.map((r, i) => renderReviewListItem(r, i)).join('')}
                            </div>
                        </div>
                        ${expandBlock}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStars(rating) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starsHTML += `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        } else {
            starsHTML += `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        }
    }
    return starsHTML;
}

// ==========================================
// Home page — map with pins for all properties that have coordinates
// ==========================================
let homeLocationsMapInstance = null;

function initHomeLocationsMap() {
    const el = document.getElementById('home-locations-map');
    if (!el || typeof L === 'undefined') return;

    const points = PROPERTIES.filter(
        p => p.coordinates && typeof p.coordinates.lat === 'number' && typeof p.coordinates.lng === 'number'
    ).map(p => ({
        lat: p.coordinates.lat,
        lng: p.coordinates.lng,
        title: p.title,
        location: p.location
    }));

    if (points.length === 0) {
        el.removeAttribute('role');
        el.textContent = '';
        return;
    }

    const map = L.map(el, { scrollWheelZoom: true });
    homeLocationsMapInstance = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);
    patchLeafletTileAlts(map);

    const latLngs = [];
    points.forEach(pt => {
        const ll = [pt.lat, pt.lng];
        latLngs.push(ll);
        L.marker(ll).addTo(map).bindPopup(
            `<strong>${pt.title}</strong><br><span class="leaflet-popup-location">${pt.location}</span>`
        );
    });

    if (latLngs.length === 1) {
        map.setView(latLngs[0], 12);
    } else {
        map.fitBounds(L.latLngBounds(latLngs), { padding: [52, 52], maxZoom: 10 });
    }

    setTimeout(() => map.invalidateSize(), 100);
}

function refreshHomeLocationsMapSize() {
    if (homeLocationsMapInstance) {
        setTimeout(() => homeLocationsMapInstance.invalidateSize(), 150);
    }
}

// ==========================================
// Initialization
// ==========================================
/** Homepage Organization + WebSite + ItemList JSON-LD (listing URLs use ?listing=id). */
function buildHomepageSchema() {
    if (typeof SITE_BASE_URL !== 'string' || !SITE_BASE_URL.trim()) return null;
    const base = SITE_BASE_URL.replace(/\/$/, '');
    const contact = getSiteContact();
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
            url: `${base}/?listing=${p.id}`
        }))
    };
    return {
        '@context': 'https://schema.org',
        '@graph': [org, website, itemList]
    };
}

function refreshHomepageJsonLd() {
    const el = document.getElementById('site-schema-jsonld');
    if (!el) return;
    const data = buildHomepageSchema();
    if (data) {
        el.textContent = JSON.stringify(data, null, 4);
    }
}

/** Keep canonical, Open Graph URL, and homepage JSON-LD aligned with config.js SITE_BASE_URL. */
function syncSiteMetaFromBaseUrl() {
    if (typeof SITE_BASE_URL !== 'string' || !SITE_BASE_URL.trim()) return;
    const base = SITE_BASE_URL.replace(/\/$/, '');
    const lid = getListingIdFromUrl();
    const isListing = lid != null && typeof PROPERTIES !== 'undefined' && PROPERTIES.some(p => p.id === lid);
    if (!isListing) {
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `${base}/`);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `${base}/`);
    }
    refreshHomepageJsonLd();
}

document.addEventListener('DOMContentLoaded', () => {
    void (async () => {
        syncSiteMetaFromBaseUrl();
        const lid = getListingIdFromUrl();
        if (lid != null && PROPERTIES.some(p => p.id === lid)) {
            await navigateToProperty(lid, { skipHistory: true });
        } else {
            setCanonicalAndSocial(null);
        }
        renderPropertyListings();
        initHomeLocationsMap();
    })();
});

// Keyboard a11y: Esc closes topmost modal/menu; Tab traps focus inside open dialog.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const contactModal = document.querySelector('.contact-modal-overlay');
        if (contactModal) { closeContactModal(); return; }
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) { closeLightbox(); return; }
        const navLinks = document.getElementById('primary-nav') || document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('active')) { closeMobileMenu(); return; }
    }
    if (event.key === 'Tab') {
        const contactModal = document.querySelector('.contact-modal-overlay');
        if (contactModal) trapFocusWithin(contactModal, event);
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            event.preventDefault();
            if (event.key === 'ArrowLeft') lightboxPrev();
            else lightboxNext();
        }
    }
});

window.addEventListener('popstate', () => {
    const lid = getListingIdFromUrl();
    void (async () => {
        if (lid != null && PROPERTIES.some(p => p.id === lid)) {
            await navigateToProperty(lid, { skipHistory: true });
        } else {
            navigateHome(null, { skipHistory: true });
        }
    })();
});
