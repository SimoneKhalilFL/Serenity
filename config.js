// ==========================================
// Site-wide contact & URLs (edit for production)
// ==========================================
// Master brand: StayAtFlorida (rebranded from legacy "Serenity Rentals" 2026-07).
// Site tagline: Luxury Beachfront Vacation Homes.
// Live site URL (no trailing slash). Canonical / JSON-LD follow this via app.js.
// sitemap.xml is regenerated from PROPERTIES at deploy (scripts/generate-sitemap.cjs); no manual edit needed.
// Web3Forms: add this domain in their dashboard. Social/email: hello@ / stays@ on this domain when ready.
const SITE_BASE_URL = 'https://stayatflorida.com';

// Web3Forms access key. Restored from git history (`Switch contact form to Web3Forms` — a7a9664)
// after the placeholder pattern silently broke local development. Web3Forms keys are per-domain
// tokens: they're safe to expose in frontend code so long as you lock the allowed origins in the
// Web3Forms dashboard (Settings → Restrict Domains → stayatflorida.com + 127.0.0.1:8765 for local).
// The GitHub Actions deploy still injects `secrets.WEB3FORMS_ACCESS_KEY` on top of this value —
// see `.github/workflows/deploy-pages.yml`. If you rotate the key: (1) update the value below,
// (2) update the Actions secret, (3) restrict the new key in the Web3Forms dashboard.
const WEB3FORMS_ACCESS_KEY = 'd1ccaac2-d8a0-43d6-8615-5551586541d4';

const SITE_CONTACT = {
    email: 'FloridaVacationRental2020@gmail.com',
    phoneTel: '',
    phoneDisplay: '',
    replyBlurb: 'Simone typically replies to inquiries within 2 hours. Email is the fastest way to reach us.',
    cancellationNote: 'Full refund if you cancel 46 or more days before check-in. 50% refund 31–45 days out. Non-refundable within 30 days of check-in.'
};

// ==========================================
// Property Configuration
// ==========================================
const PROPERTIES = [
    /* COMMENTED OUT - Properties 1-3
    {
        id: 1,
        title: "Beachfront Paradise Villa",
        location: "Malibu, California",
        description: "Experience luxury beachfront living in this stunning 5-bedroom villa. Wake up to breathtaking ocean views, relax by the infinity pool, and enjoy direct beach access. This meticulously designed property features high-end finishes, a gourmet kitchen, spa-like bathrooms, and expansive outdoor living spaces perfect for entertaining. The master suite offers a private balcony overlooking the Pacific Ocean. Located in exclusive Malibu, you're minutes from world-class dining, shopping, and entertainment.",
        maxGuests: 10,
        bedrooms: 5,
        bathrooms: 4,
        baseNightlyRate: 850,
        cleaningFee: 250,
        taxRate: 0.12,
        featured: true,
        images: [
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
        ],
        amenities: [
            { icon: "wifi", name: "High-Speed WiFi" },
            { icon: "pool", name: "Infinity Pool" },
            { icon: "kitchen", name: "Gourmet Kitchen" },
            { icon: "parking", name: "Free Parking" },
            { icon: "ac", name: "Air Conditioning" },
            { icon: "tv", name: "Smart TV" },
            { icon: "washer", name: "Washer & Dryer" },
            { icon: "beach", name: "Beach Access" }
        ],
        houseRules: [
            { icon: "no-smoking", name: "No Smoking" },
            { icon: "no-parties", name: "No Parties/Events" },
            { icon: "pets", name: "Pets Allowed" },
            { icon: "checkin", name: "Check-in: 3:00 PM" },
            { icon: "checkout", name: "Check-out: 11:00 AM" },
            { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
        ],
        // Date-specific rate adjustments (hidden from user)
        seasonalAdjustments: [
            { startDate: "2024-12-20", endDate: "2025-01-05", adjustment: 1.5 }, // Holiday premium
            { startDate: "2025-06-15", endDate: "2025-08-31", adjustment: 1.3 }, // Summer peak
            { startDate: "2025-03-01", endDate: "2025-04-15", adjustment: 0.85 }, // Spring discount
            { startDate: "2025-09-01", endDate: "2025-10-31", adjustment: 0.9 } // Fall discount
        ],
        unavailableDates: [
            "2024-12-24", "2024-12-25", "2024-12-26",
            "2025-01-01", "2025-01-15", "2025-01-16",
            "2025-02-14", "2025-02-15", "2025-02-16"
        ]
    },
    {
        id: 2,
        title: "Mountain Retreat Chalet",
        location: "Aspen, Colorado",
        description: "Escape to this luxurious mountain chalet nestled in the heart of Aspen. This 4-bedroom retreat offers stunning mountain views, a cozy fireplace, and easy access to world-class skiing. The open-concept living area features vaulted ceilings and floor-to-ceiling windows. Enjoy aprÃ¨s-ski relaxation in the private hot tub or gather around the outdoor fire pit. The fully equipped kitchen is perfect for preparing hearty meals after a day on the slopes.",
        maxGuests: 8,
        bedrooms: 4,
        bathrooms: 3,
        baseNightlyRate: 650,
        cleaningFee: 200,
        taxRate: 0.10,
        featured: false,
        images: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
        ],
        amenities: [
            { icon: "wifi", name: "High-Speed WiFi" },
            { icon: "hottub", name: "Private Hot Tub" },
            { icon: "fireplace", name: "Wood Fireplace" },
            { icon: "parking", name: "Garage Parking" },
            { icon: "heating", name: "Central Heating" },
            { icon: "tv", name: "Smart TV" },
            { icon: "washer", name: "Washer & Dryer" },
            { icon: "ski", name: "Ski Storage" }
        ],
        houseRules: [
            { icon: "no-smoking", name: "No Smoking" },
            { icon: "no-parties", name: "No Parties/Events" },
            { icon: "no-pets", name: "No Pets" },
            { icon: "checkin", name: "Check-in: 4:00 PM" },
            { icon: "checkout", name: "Check-out: 10:00 AM" },
            { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
        ],
        seasonalAdjustments: [
            { startDate: "2024-12-15", endDate: "2025-03-20", adjustment: 1.6 }, // Ski season
            { startDate: "2025-06-01", endDate: "2025-08-31", adjustment: 1.2 }, // Summer hiking
            { startDate: "2025-04-01", endDate: "2025-05-31", adjustment: 0.8 }, // Off-season
            { startDate: "2025-09-01", endDate: "2025-11-30", adjustment: 0.85 } // Fall
        ],
        unavailableDates: [
            "2024-12-31", "2025-01-01",
            "2025-02-14", "2025-02-15",
            "2025-03-10", "2025-03-11", "2025-03-12"
        ]
    },
    {
        id: 3,
        title: "Downtown Urban Loft",
        location: "New York City, NY",
        description: "Modern luxury meets urban sophistication in this stunning 2-bedroom loft in the heart of Manhattan. Featuring exposed brick walls, 14-foot ceilings, and industrial-chic design, this space perfectly captures NYC's vibrant energy. The open floor plan is ideal for entertaining, with a chef's kitchen and a spacious living area. Floor-to-ceiling windows flood the space with natural light and offer stunning city views. Walking distance to Times Square, Broadway theaters, and world-class restaurants.",
        maxGuests: 4,
        bedrooms: 2,
        bathrooms: 2,
        baseNightlyRate: 450,
        cleaningFee: 150,
        taxRate: 0.15,
        featured: false,
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80"
        ],
        amenities: [
            { icon: "wifi", name: "High-Speed WiFi" },
            { icon: "ac", name: "Air Conditioning" },
            { icon: "kitchen", name: "Full Kitchen" },
            { icon: "elevator", name: "Elevator Access" },
            { icon: "tv", name: "Smart TV" },
            { icon: "washer", name: "In-Unit Laundry" },
            { icon: "gym", name: "Building Gym" },
            { icon: "workspace", name: "Dedicated Workspace" }
        ],
        houseRules: [
            { icon: "no-smoking", name: "No Smoking" },
            { icon: "no-parties", name: "No Parties/Events" },
            { icon: "no-pets", name: "No Pets" },
            { icon: "checkin", name: "Check-in: 3:00 PM" },
            { icon: "checkout", name: "Check-out: 11:00 AM" },
            { icon: "quiet", name: "Quiet Hours: 11 PM - 7 AM" }
        ],
        seasonalAdjustments: [
            { startDate: "2024-12-20", endDate: "2025-01-05", adjustment: 1.4 }, // Holiday season
            { startDate: "2025-09-01", endDate: "2025-11-30", adjustment: 1.25 }, // Fall fashion week
            { startDate: "2025-02-01", endDate: "2025-03-31", adjustment: 0.85 }, // Winter discount
            { startDate: "2025-07-01", endDate: "2025-08-31", adjustment: 0.9 } // Summer
        ],
        unavailableDates: [
            "2025-01-01", "2025-01-02",
            "2025-02-10", "2025-02-11", "2025-02-12",
            "2025-03-15", "2025-03-16"
        ]
    },
    END COMMENTED OUT */
    {
        id: 4,
        title: "Twenty First",
        // Owner directive 2026-07-06: suppress the aggregate rating chip on the TW2111
        // property page. Individual review markup still renders (25 real 5-star reviews from
        // VRBO + Airbnb + Booking.com); `AggregateRating` is intentionally omitted from
        // JSON-LD. Consumed by `renderReviews()` in `app.js` and by the JSON-LD generator
        // in `scripts/lib/listing-schema.cjs`. Do NOT flip to `false` without an owner
        // directive — the honest 5.0 aggregate is not the concern; the concern is the
        // brand-level operating-system rule to keep review presentation understated.
        hideReviewAggregate: true,
        listingHeadline: "Twenty First",
        listingBrandSubtitle: "A StayAtFlorida Signature Property",
        listingTagline: "Above the Gulf. Beyond Expectations.",
        listingHeroCopy: "Wake up above the emerald Gulf and spend the day on sugar-white sand. Twenty First is a three-bedroom, three-bath beachfront retreat designed for families who want to slow down, watch the water, and reconnect.",
        cardSubtitle: "A StayAtFlorida Signature Property",
        // Homepage property-card blurb. Source of truth: docs/listings/TW2111/MASTER.md §13a
        // "Homepage Card Copy". Kept short (one scannable sentence) — the long story lives on
        // the property detail page. Do not swap for a longer aspirational line here.
        cardShortDescription: "Panoramic Gulf views, sunset balcony, direct beach access, resort amenities, and room for up to 8 guests.",
        metaTitle: "Twenty First | Luxury Beachfront Condo in Panama City Beach",
        metaDescription: "Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.",
        coverImage: "images/lodging/tw-hero-view.png",
        location: "Panama City Beach, Florida",
        description: `Twenty First is a 3-bedroom, 3-bath luxury beachfront retreat designed for families who want to slow down, watch the water, and reconnect. Wake up above the emerald Gulf, spend the day on the sugar-white sand, and gather back at the condo for dinner on the balcony as the sun sets. There's room for up to 8 guests, direct beach access, resort amenities, and complimentary beach chairs and umbrella waiting in the condo when you arrive.

**Highlights**

• Panoramic unobstructed Gulf views
• Private beachfront balcony with sunset views
• Sleeps up to 8 guests
• 3 bedrooms / 3 bathrooms
• Direct beach access
• Complimentary beach chairs and umbrella available in the condo
• Resort pools, hot tubs, sauna, steam room, and fitness center
• 1 mile from Pier Park

**The Kitchen**

Gather around after a day on the sand to prepare breakfast, share family dinners, or open a bottle of wine on the balcony as the sun sets. The kitchen is stocked with what you actually reach for on vacation, so cooking never feels like a chore.

What's on hand:
• Full-size refrigerator, stove, oven, microwave, and dishwasher
• Cookware, dishes, glassware, and utensils
• Coffee maker, toaster, blender
• Dedicated dining area with seating for the whole group

**Where You'll Sleep**

Drift off after watching the sunset from the balcony and wake up refreshed for another day at the beach. Every bedroom is set up for real rest — cool sheets, quiet mornings, and plenty of space to unpack.

• Primary bedroom: king bed with en-suite bath and balcony access
• Guest bedroom: queen bed with adjacent bath
• Bunk room: one set of twin bunks with its own bath
• Living room: queen sleeper sofa
• Sleeps up to 8 guests across 3 bedrooms and 3 bathrooms

**Location**

Set directly on the sugar-white sand of Panama City Beach's west end, with unobstructed Gulf views and immediate beach access. Pier Park — shopping, dining, and entertainment — is about a mile away, and Russell-Fields City Pier is close by for fishing and sunsets. Quiet beachfront relaxation with everything you need within easy reach. Located inside the Tidewater Beach Resort community.

**Resort Amenities**

Step outside the condo and the resort side of the stay begins — pools for lazy afternoons, hot tubs after long beach days, and quiet spots to keep the vacation going.

• Two Gulf-front lagoon-style pools with hot tubs
• Heated indoor pool, Roman spa, steam room, and sauna
• Full fitness center
• Movie theater, arcade, restaurant, coffee shop, and tiki bar
• Seasonal kids' activities, gift shop, and outdoor grilling areas
• Direct beach access from the resort

**Things to Do**

You're a short drive — or an easy walk — from the best of Panama City Beach:
• Pier Park — shops, restaurants, and events
• Beach walks, Gulf swimming, and shelling
• Russell-Fields City Pier — fishing and views
• Charter fishing, dolphin cruises, and water sports nearby
• Family attractions and mini-golf along Front Beach Road`,
        coordinates: { lat: 30.2202494, lng: -85.8861587 },
        mapQuery: "Tidewater Beach Resort, Panama City Beach, FL",
        googleMapsUrl: "https://www.google.com/maps/place/Tidewater+Beach+Resort/@30.220254,-85.8887336,16z/data=!3m2!4b1!5s0x88938c59c1b38bf1:0xa60091c6745974d7!4m9!3m8!1s0x88938c59c6501e8f:0x28163e68311a261b!5m2!4m1!1i2!8m2!3d30.2202494!4d-85.8861587!16s%2Fg%2F11j006jdb1?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D",
        webcam: {
            linkUrl: "https://www.tidewaterhoa.com/tidecam/",
            previewImage: "images/lodging/tw-01-beach-view.jpg"
        },
        maxGuests: 8,
        bedrooms: 3,
        bathrooms: 3,
        baseNightlyRate: 225,
        // Cleaning fee reduced to $200 on 2026-07-06 (afternoon pass) per owner directive.
        // History: original value $250 · staged reduction to $200 in the same-day
        // Pricing/Logistics cleanup then reverted pre-publish · this pass ships the
        // reduction alongside an extended-stay uplift (see below). Business intent:
        // discount 1–2 night stays to fill gap nights AND capture a small revenue
        // increase on 3+ night stays. See MASTER.md §21 Fee Schedule + Changelog.
        cleaningFee: 200,
        // Extended-stay uplift: flat $100 added to the lodging total on bookings of 3+
        // nights. Sized at $100 (not $50) so that after the $50 cleaning-fee reduction
        // above, 3+ night stays net **+$50 pre-tax / +$56 post-tax revenue vs. the prior
        // $250-cleaning pricing** — the "add $50 to bookings > 2 days" owner directive
        // applies on top of the cleaning reduction, not as an offset for it. Baked into
        // the price calculator's "Nightly Rate" row (no separate line item) per the
        // same owner directive. All four pricing sites in `app.js` —
        // getSelectedStayPricing, contact-modal setup, email-body setup, and
        // renderPriceCalculator — call `applyExtendedStayUplift()` so the calculator,
        // the email preview, and the emailed request all agree. Impact table for
        // TW2111 stays: 1-night -$56 · 2-night -$56 · 3-night +$56 · 7-night +$56.
        extendedStayUplift: { thresholdNights: 3, amount: 100 },
        taxRate: 0.12,
        refundableDamageDeposit: 300,
        featured: false,
        images: {
            "Views & Beach": [
                "images/lodging/tw-hero-view.png",
                "images/lodging/tw-balcony-sunset.png",
                "images/lodging/tw-balcony-coffee.png",
                "images/lodging/tw-01-beach-view.jpg",
                "images/lodging/tw-02-beach-view.jpg"
            ],
            "Living Room": [
                "images/lodging/tw-living-01.png",
                "images/lodging/tw-living-02.png",
                "images/lodging/tw-living-03.png",
                "images/lodging/tw-living-04.png",
                "images/lodging/tw-living-05.png"
            ],
            "Kitchen & Dining": [
                "images/lodging/tw-dining-sunset.png",
                "images/lodging/tw-dining-01.png",
                "images/lodging/tw-01-kitchen.jpg",
                "images/lodging/tw-02-kitchen.jpg",
                "images/lodging/tw-03-kitchen.jpg",
                "images/lodging/tw-02-dining.jpg"
            ],
            "Master Bedroom": [
                "images/lodging/tw-master-01.png",
                "images/lodging/tw-master-02.png"
            ],
            "Bedroom 2": [
                "images/lodging/tw-guest-queen.png"
            ],
            "Bunk Room": [
                "images/lodging/tw-bunk-01.png",
                "images/lodging/tw-bunk-02.png"
            ],
            "Bathrooms": [
                "images/lodging/tw-bath-01.png",
                "images/lodging/tw-01-bath-two.jpg",
                "images/lodging/tw-01-bath-three.jpg",
                "images/lodging/tw-02-bath-three.jpg"
            ],
            "Balcony": [
                "images/lodging/tw-balcony-sunset.png",
                "images/lodging/tw-balcony-coffee.png",
                "images/lodging/tw-01-balcony.jpg",
                "images/lodging/tw-02-balcony.jpg"
            ],
            "Pool & Outdoors": [
                "images/lodging/tw-01-pool.jpg",
                "images/lodging/tw-02-pool.jpg",
                "images/lodging/tw-03-pool.jpg",
                "images/lodging/tw-04-pool.jpg",
                "images/lodging/tw-05-pool.jpg",
                "images/lodging/tw-01-outdoor.jpg",
                "images/lodging/tw-02-outdoor.jpg",
                "images/lodging/tw-03-outdoor.jpg",
                "images/lodging/tw-04-outdoor.jpg",
                "images/lodging/tw-05-outdoor.jpg"
            ],
            "Resort Amenities": [
                "images/lodging/tw-01-building.jpg",
                "images/lodging/tw-02-building.jpg",
                "images/lodging/tw-01-gym.jpg",
                "images/lodging/tw-02-gym.jpg",
                "images/lodging/tw-01-amenities.jpg",
                "images/lodging/tw-02-amenities.jpg",
                "images/lodging/tw-03-amenities.jpg",
                "images/lodging/tw-04-amenities.jpg"
            ]
        },
        // Hero carousel deterministic order (MASTER §18 priority).
        // renderHeroCarousel() uses this exact order when present — no random shuffle.
        heroPhotoOrder: [
            "images/lodging/tw-hero-view.png",
            "images/lodging/tw-balcony-sunset.png",
            "images/lodging/tw-dining-sunset.png",
            "images/lodging/tw-living-01.png",
            "images/lodging/tw-master-01.png",
            "images/lodging/tw-bunk-01.png"
        ],
        // Canonical bed inventory (MASTER §7). Consumed by the JSON-LD generator.
        // Total sleep capacity: king (2) + queen (2) + 2 twin bunks (2) + queen sleeper (2) = 8.
        bedInventory: [
            { numberOfBeds: 1, typeOfBed: "King" },
            { numberOfBeds: 1, typeOfBed: "Queen" },
            { numberOfBeds: 2, typeOfBed: "Twin" },
            { numberOfBeds: 1, typeOfBed: "Queen" }
        ],
        // Amenities grouped per MASTER §6 (docs/listings/TW2111/MASTER.md).
        // The `group` field maps each chip to one of four canonical categories, in this order:
        // Inside the Condo · Beach Convenience · Resort Amenities · Location & Access.
        // app.js#renderGroupedAmenities honors the `group` field when present; MS811 (no group)
        // keeps the legacy inferred grouping via getAmenityGroupKey().
        amenities: [
            { icon: "kitchen", name: "Full Kitchen (fully stocked)", group: "Inside the Condo" },
            { icon: "wifi", name: "High-Speed Wi-Fi", group: "Inside the Condo" },
            { icon: "tv", name: "Smart TV (every bedroom)", group: "Inside the Condo" },
            { icon: "washer", name: "Washer & Dryer (in-unit)", group: "Inside the Condo" },
            { icon: "ac", name: "Air Conditioning", group: "Inside the Condo" },
            { icon: "linen", name: "Bed & Bath Linens Provided", group: "Inside the Condo" },
            { icon: "beach", name: "Complimentary Beach Chairs & Umbrella (in condo)", group: "Beach Convenience" },
            { icon: "beach", name: "Beach Towels Provided", group: "Beach Convenience" },
            { icon: "beach", name: "On-Beach Vendor Rentals Available for Purchase", group: "Beach Convenience" },
            { icon: "lagoon", name: "Gulf-Front Lagoon Pools", group: "Resort Amenities" },
            { icon: "indoor-pool", name: "Indoor Heated Pool", group: "Resort Amenities" },
            { icon: "hottub", name: "Hot Tubs", group: "Resort Amenities" },
            { icon: "spa", name: "Roman Spa, Sauna & Steam Room", group: "Resort Amenities" },
            { icon: "gym", name: "Full Fitness Center", group: "Resort Amenities" },
            { icon: "restaurant", name: "Restaurant, Coffee Shop & Tiki Bar", group: "Resort Amenities" },
            { icon: "grill", name: "Outdoor Grilling Area & Gift Shop", group: "Resort Amenities" },
            { icon: "beach", name: "Direct Beach Access from Resort Deck", group: "Location & Access" },
            { icon: "elevator", name: "Elevator Access to Beach & Parking Levels", group: "Location & Access" },
            { icon: "parking", name: "On-Site Parking", group: "Location & Access" },
            { icon: "pin", name: "~1 Mile to Pier Park", group: "Location & Access" },
            { icon: "pin", name: "~35 min to ECP Airport", group: "Location & Access" }
        ],
        // Resort Registration Fee — paid directly to the Tidewater Beach Resort HOA before arrival.
        // Renamed from "Community registration fee" 2026-07-02 (Final Polish pass) per owner directive.
        //
        // **Placement change 2026-07-06 (Pricing/Logistics cleanup):** This fee is no longer shown
        // as a line item on the price calculator. It surfaces only in `Before You Arrive` (Card 1)
        // as a distinct bullet with a `Register with the Resort` button. See MASTER §21 Placement
        // rule for the canonical policy. The `communityRegistrationFee` object here is kept as a
        // documentation-only reference — `renderPriceCalculator` no longer reads it. The
        // Before-You-Arrive item below owns the guest-facing copy.
        communityRegistrationFee: {
            amount: 54.04,
            label: "Resort Registration Fee",
            sublabel: "A one-time fee paid directly to the resort before arrival. Includes up to 2 parking passes and 8 guest wristbands.",
            note: "$54.04 total. Save $10 by registering 24+ hours before arrival.",
            registrationUrl: "https://www.tidewaterhoa.com/registration/",
            includes: "Up to 2 parking passes + up to 8 wristbands",
            surfacedOn: ["beforeYouArrive"] // Never surface on the price calculator per MASTER §21.
        },
        // Owner-verified seasonal range. Reflects both the baseline low-season floor (~$125 Feb)
        // and the observed PriceLabs peak (~$660 Labor Day Sunday). See MASTER §21.
        priceRangeOverride: "$125-$660",
        // Before You Arrive — logistics Card 1 (of a two-card module). Source: MASTER §14a.
        // Card 2 = duringYourStay below. Renders side-by-side on desktop, stacked on mobile.
        // Never merge into the long description body — operational details stay out of §14.
        // Split from a single 5-item block into two paired 4-item cards on 2026-07-02 (Final Polish).
        beforeYouArrive: {
            heading: "Before You Arrive",
            items: [
                {
                    label: "Parking",
                    body: "Up to two on-site parking passes are included with the Resort Registration Fee. Passes are handed out at check-in with the wristbands."
                },
                {
                    label: "Wristbands",
                    body: "Up to 8 wristbands are included with the Resort Registration Fee. Wristbands are required for every occupant over age 12 to access the resort deck, pools, and beach."
                },
                {
                    // Resort Registration Fee — canonical Before-You-Arrive bullet.
                    // Copy source of truth: MASTER §14a + §21 (canonical supporting sentence).
                    // Rendered CTA: distinct button below the body (renderStayLogisticsCard reads
                    // `ctaLabel` + `ctaUrl` for this — separate from `linkLabel`/`linkUrl` which
                    // renders an inline text link). Button label is FROZEN — see MASTER §21 CTA rule.
                    label: "Resort Registration Fee",
                    body: "A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10.",
                    ctaLabel: "Register with the Resort",
                    ctaUrl: "https://www.tidewaterhoa.com/registration/"
                },
                {
                    label: "Check-in",
                    body: "From 4:00 PM. Precise arrival instructions and the lockbox code are emailed the morning of check-in."
                }
            ]
        },
        // During Your Stay — logistics Card 2 (of a two-card module). Source: MASTER §14c.
        // Introduced 2026-07-02 (Final Polish). Companion to beforeYouArrive above.
        duringYourStay: {
            heading: "During Your Stay",
            items: [
                {
                    label: "Complimentary beach chairs and umbrella (in the condo)",
                    body: "Complimentary beach chairs and umbrella available in the condo — bring them down each morning. If you'd prefer a full setup on the sand, beach chair and umbrella rental is available for purchase directly on the beach from local vendors."
                },
                {
                    label: "Beach access",
                    body: "Direct beach access from the resort — elevator down, cross the resort deck, and you're on the sand."
                },
                {
                    label: "Resort amenities",
                    body: "Gulf-front lagoon pools with hot tubs, indoor heated pool, Roman spa, sauna and steam room, full fitness center, restaurant, coffee shop, and tiki bar. Wristbands required at every checkpoint."
                },
                {
                    label: "Check-out reminders",
                    body: "Check-out by 10:00 AM. Run the dishwasher, take trash to the chute, leave used towels in the tub, and leave wristbands and the parking pass on the counter. The cleaning fee covers the standard turn — no other pre-departure work."
                }
            ]
        },
        // Why Book Direct with StayAtFlorida — property-page trust panel. Source: MASTER §14d.
        // Introduced 2026-07-02 (Final Polish). Placement: below Availability & Pricing, above Stay Details.
        // Distinct from the homepage "Why Book Direct?" 3-card block — do not collapse or duplicate.
        // Canonical wording; do not vary bullet copy without owner sign-off.
        whyBookDirect: {
            heading: "Why Book Direct with StayAtFlorida",
            lead: "Same property, better terms — and a real person on the other side of every email.",
            bullets: [
                "Same property",
                "Same great stay",
                "No OTA service fees",
                "Owner-hosted communication",
                "Personal support before your arrival",
                "Faster responses",
                "Secure direct booking"
            ]
        },
        // A Day at Twenty First — lifestyle sequence rendered below the hero trust chip strip.
        // Source of truth: MASTER §14b. Six elegant beats. No exclamation marks, no hype, no CTA.
        dayInTheLife: {
            heading: "A Day at Twenty First",
            intro: "An unhurried rhythm — sunrise coffee to a quiet evening inside.",
            beats: [
                { title: "Sunrise coffee", body: "Wake to soft light on the water. Coffee on the balcony while the beach is still empty." },
                { title: "Beach time", body: "Grab the complimentary chairs and umbrella from the condo — the sugar-white sand is right below." },
                { title: "Resort pool", body: "Trade the beach for the Gulf-front lagoon pool when the sun gets high. Kids splash; adults find a lounger." },
                { title: "Sunset balcony", body: "Return to the condo for the golden hour. Turquoise chairs on the balcony; the Gulf turns copper." },
                { title: "Dinner with Gulf views", body: "Cook in the full kitchen or open a bottle on the balcony — dinner as the last light goes." },
                { title: "A quiet evening inside", body: "Board game at the dining table, a film on the smart TV, or a book on the sleeper sofa. The Gulf keeps time all night." }
            ]
        },
        houseRules: [
            { icon: "no-smoking", name: "No Smoking" },
            { icon: "no-parties", name: "No Parties/Events" },
            { icon: "no-pets", name: "No Pets" },
            { icon: "checkin", name: "Check-in: 4:00 PM" },
            { icon: "checkout", name: "Check-out: 10:00 AM" },
            { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
        ],
        /** Shown under Availability & Pricing (overrides first house-rule chips) */
        availabilityChips: [
            "3 Bedrooms · 3 Baths",
            "Sleeps 8",
            "1 king · 1 queen · 1 bunk set · queen sleeper"
        ],
        // Rendered as an accordion on the property page and emitted as FAQPage JSON-LD.
        // Canonical order + content: docs/listings/TW2111/MASTER.md §22 Website FAQ.
        // Ordered by inquiry frequency (highest first). Never reorder without owner sign-off.
        // Edit MASTER first, regenerate WEBSITE, then copy here.
        faqs: [
            {
                q: "Is parking included?",
                a: "Yes — up to two on-site parking passes are included with the Resort Registration Fee, plus wristbands for all occupants over age 12. Registration details are in the pre-arrival email."
            },
            {
                q: "How do I get to the beach from the condo?",
                a: "Direct beach access from the resort — elevator down, cross the resort deck, and you're on the sand."
            },
            {
                q: "What's the cancellation policy?",
                a: "Full refund if you cancel 46 or more days before check-in. 50% refund for cancellations 31–45 days out. Non-refundable within 30 days of check-in."
            },
            {
                q: "Are beach chairs and an umbrella provided?",
                a: "Complimentary beach chairs and umbrella are available in the condo for you to use throughout your stay. If you'd prefer a full setup on the sand, beach chair and umbrella rental is also available for purchase directly on the beach from local vendors."
            },
            {
                q: "Are pets allowed?",
                a: "No pets."
            },
            {
                q: "What are the check-in and check-out times?",
                a: "Check-in from 4:00 PM. Check-out by 10:00 AM. Precise arrival instructions and the lockbox code are emailed the morning of check-in."
            },
            {
                q: "Is the Wi-Fi fast enough for streaming and remote work?",
                a: "High-speed Wi-Fi throughout the condo, suitable for streaming and video calls on multiple devices at once."
            },
            {
                q: "How far is Pier Park?",
                a: "About 1 mile — an easy short drive, and a walkable option in cooler months. Pier Park has shops, restaurants, and family entertainment."
            },
            {
                q: "What's the closest airport?",
                a: "ECP (Northwest Florida Beaches International) — about 35 minutes by car. Uber and Lyft are widely available at the airport."
            },
            {
                q: "When is the best time of year to visit?",
                a: "Weather is warmest May through October. Shoulder seasons (late April, September, and early October) have the best value with the least crowded beach. Ask Simone directly for date-specific advice."
            }
        ],
        seasonalAdjustments: [
            // Fallback only. Per-day PriceLabs prices in data/pricing-4.json take precedence
            // (Jul 12 2026 → Mar 31 2027). These ranges cover pre-PriceLabs dates and gaps.
            // 2026 Pricing based on Panhandle Getaways calendar (Jan–Jul 11)
            { startDate: "2026-01-01", endDate: "2026-01-31", adjustment: 1.0 },   // January: $225/night base
            { startDate: "2026-02-01", endDate: "2026-02-28", adjustment: 0.55 },  // February: $125/night
            { startDate: "2026-03-01", endDate: "2026-03-14", adjustment: 1.3 },   // Early March: ~$290/night
            { startDate: "2026-03-15", endDate: "2026-04-11", adjustment: 1.5 },   // Spring Break: ~$340/night
            { startDate: "2026-04-12", endDate: "2026-05-15", adjustment: 1.2 },   // Late Spring: ~$270/night
            { startDate: "2026-05-16", endDate: "2026-05-31", adjustment: 2.2 },   // Memorial Day: ~$495/night
            { startDate: "2026-06-01", endDate: "2026-06-27", adjustment: 2.1 },   // Early Summer: ~$475/night
            { startDate: "2026-06-28", endDate: "2026-07-11", adjustment: 2.7 },   // July 4th Peak: ~$610/night
            // Jul 12 2026 – Mar 31 2027: primarily served by data/pricing-4.json.
            // Below values are safety-net fallbacks calibrated to observed PriceLabs ranges.
            { startDate: "2026-07-12", endDate: "2026-07-31", adjustment: 1.9 },   // Mid Summer: ~$428/night (PriceLabs avg $430)
            { startDate: "2026-08-01", endDate: "2026-08-31", adjustment: 1.6 },   // August: ~$360/night (PriceLabs avg $358)
            { startDate: "2026-09-01", endDate: "2026-09-07", adjustment: 2.0 },   // Labor Day week: peaks ~$412-660
            { startDate: "2026-09-08", endDate: "2026-09-23", adjustment: 1.5 },   // Mid September: ~$340/night
            { startDate: "2026-09-24", endDate: "2026-09-27", adjustment: 2.4 },   // Ironman 70.3 weekend: $540-591
            { startDate: "2026-09-28", endDate: "2026-09-30", adjustment: 1.6 },   // Late September
            { startDate: "2026-10-01", endDate: "2026-10-03", adjustment: 3.5 },   // PCB BikeFest weekend (peak events)
            { startDate: "2026-10-04", endDate: "2026-10-08", adjustment: 1.6 },   // Post-event lull
            { startDate: "2026-10-09", endDate: "2026-10-17", adjustment: 2.2 },   // Columbus Day / second event weekend
            { startDate: "2026-10-18", endDate: "2026-10-31", adjustment: 1.5 },   // Late October: ~$335/night
            { startDate: "2026-11-01", endDate: "2026-11-21", adjustment: 1.4 },   // Early Nov: ~$315/night
            { startDate: "2026-11-22", endDate: "2026-11-28", adjustment: 1.9 },   // Thanksgiving: ~$428-484/night
            { startDate: "2026-11-29", endDate: "2026-12-23", adjustment: 1.3 },   // Dec off-peak: ~$280/night
            { startDate: "2026-12-24", endDate: "2026-12-27", adjustment: 1.4 },   // Christmas week: ~$285-330
            { startDate: "2026-12-28", endDate: "2026-12-31", adjustment: 1.7 },   // NYE run-up: ~$330-422
            // 2027 fallbacks (extend for advance bookings past PriceLabs coverage)
            { startDate: "2027-01-01", endDate: "2027-01-03", adjustment: 2.0 },   // NYE weekend: ~$422-465
            { startDate: "2027-01-04", endDate: "2027-01-31", adjustment: 1.5 },   // January: ~$340/night
            { startDate: "2027-02-01", endDate: "2027-02-28", adjustment: 1.6 },   // February: ~$361/night
            { startDate: "2027-03-01", endDate: "2027-03-31", adjustment: 2.1 },   // March Spring Break: ~$468/night
            { startDate: "2027-04-01", endDate: "2027-04-30", adjustment: 2.3 },   // April Bike Week / Spring peak: ~$520/night
            { startDate: "2027-05-01", endDate: "2027-05-15", adjustment: 2.0 },   // Early May: ~$450/night
            { startDate: "2027-05-16", endDate: "2027-05-31", adjustment: 2.4 }    // Memorial Day: ~$540/night
        ],
        // Booked/blocked nights: data/availability-4.json (iCal from VRBO/Airbnb/Booking). Block on the OTA calendar—no need to list dates here unless a rare edge case is not on any feed.
        unavailableDates: [],
        // iCal sync URLs for future reference:
        // VRBO: http://www.vrbo.com/icalendar/2024eca45f854672b712124668878a90.ics?nonTentative
        // Airbnb: https://www.airbnb.com/calendar/ical/1102297481087079379.ics?s=90116a99e75615dcf80171ddb4905286
        // Booking: https://ical.booking.com/v1/export?t=35b688fc-4684-44a0-8867-82a2e361b18e
    },
    {
        id: 5,
        title: "Majestic Sun 811",
        listingHeadline: "8th-Floor Gulf Views at Majestic Sun",
        listingTagline: "Boardwalk to the beach—Seascape pools, golf, and dining nearby.",
        // Homepage property-card subtitle + blurb. Source of truth:
        // docs/listings/MS811/MASTER.md §13a. Lighter twin of TW2111's Signature Property tag —
        // MS811 is NOT elevated to Signature yet (gated on the full brand + photo re-shoot).
        cardSubtitle: "A StayAtFlorida Property",
        cardShortDescription: "Miramar Beach comfort with Gulf views, resort amenities, beach access, and a relaxing coastal setting.",
        location: "Destin, Florida",
        description: `Experience the best of Destin at Majestic Sun, where Gulf-front living meets comfort and convenience. This beautifully appointed 8th-floor beachfront condo offers breathtaking panoramic views of the emerald waters and sugar-white sands of the Gulf of Mexico. Step onto your private balcony to enjoy morning coffee, afternoon sea breezes, or unforgettable sunsets over the water.

Inside, the condo features a spacious, light-filled living area, coastal-inspired dÃ©cor, and a kitchen made for real vacations — from quick breakfasts before the beach to slower family dinners with the sliding doors open. Thoughtful updates and comfortable furnishings make this a genuine home base for couples, families, and friends who want to relax without leaving anything behind.

**The Kitchen**

Start the morning with coffee on the balcony, come back for lunch between beach visits, and take your time over dinner with the Gulf still glowing outside. The kitchen is stocked so you can cook what you actually want to cook on vacation.

What's on hand:
• Refrigerator, stove, oven, microwave, dishwasher
• Cookware, dishes, glassware, and utensils
• Coffee maker, toaster, blender, ice maker, freezer
• Slow cooker, air fryer, food processor, toaster oven
• Countertop grills (large and small), popcorn maker, veggie chopper
• Kitchen island, dining table, wine glasses, baking sheets, pizza pan, spices

**Where You'll Sleep**

Drift off with the sound of the Gulf outside and wake up refreshed for another day at the beach.

• 2 bedrooms — sleeps up to 6 guests
• Primary bedroom: king bed
• Second bedroom: queen bed
• Living room: queen sleeper sofa

**Location**

Located directly on the beach in Miramar Beach, Destin, Majestic Sun offers one of the most convenient and walkable locations on the Emerald Coast. Guests enjoy direct beach access via a palm-lined boardwalk, along with elevator access and on-site parking for easy arrivals and departures.

You're just steps away from dining, coffee, ice cream, shopping, and entertainment at Seascape Destin Town Center, while still being only minutes from Destin's most popular attractions. The iconic Whale's Tale Beach Bar & Grill is a short walk down the beach, making sunset dinners and beachfront cocktails effortless.

**Majestic Sun & Seascape Resort Amenities**

Guests have access to a full suite of resort-style amenities designed for both relaxation and recreation:
• Gulf-front outdoor pool with sundeck
• Heated indoor pool with cathedral ceilings and Gulf views
• Multiple hot tubs
• State-of-the-art fitness center
• Direct beach access via boardwalk
• Elevator access and convenient parking
• Over 50 resort grills throughout the property

Beyond Majestic Sun, Seascape Resort offers world-class amenities including:
• Championship golf course
• Tennis and pickleball courts
• Bicycle and paddleboard rentals
• Seasonal water sports
• On-site fishing at Stewart Lake
• Scenic walking paths and lush resort grounds

**Things to Do**

Majestic Sun places you in the heart of Destin's best activities and attractions:

*Walkable Dining & Entertainment* - Located within Seascape Destin Town Center:
• 2 Birds Coffee & CafÃ©
• Acme Oyster House
• Mezcal Cantina Mexican Grill & Tiki Bar (delivery available)
• Moo La-La Ice Cream & Fudge
• Village Door Restaurant (live music nightly)
• Thrills Laser Tag & Arcade
• Wine, spirits, and boutique shopping

*Nearby Attractions* - Just minutes away:
• Silver Sands Premium Outlets
• Grand Boulevard shopping, dining, and entertainment
• The Village of Baytowne Wharf
• Additional beachfront restaurants, golf courses, and family-friendly attractions

Whether you're seeking lazy beach days, outdoor adventure, shopping, or vibrant nightlife, Majestic Sun at Seascape Resort offers something for everyone — all just steps or minutes from your front door.`,
        maxGuests: 6,
        bedrooms: 2,
        bathrooms: 2,
        baseNightlyRate: 300,
        cleaningFee: 250,
        // Flat extended-stay uplift added to the lodging total when a booking meets or
        // exceeds `thresholdNights`. Baked into the price calculator's "Nightly Rate" row
        // (no separate line item) per owner directive 2026-07-06 (afternoon pass). Same
        // policy as TW2111 — see the TW2111 property record for the full comment.
        extendedStayUplift: { thresholdNights: 3, amount: 50 },
        taxRate: 0.12,
        refundableDamageDeposit: 300,
        featured: false,
        coverImage: "images/lodging/ms-01-gulf-balcony.jpg",
        coordinates: { lat: 30.3759919, lng: -86.3686236 },
        googleMapsUrl: "https://www.google.com/maps/place/Majestic+Sun/@30.3797734,-86.388212,15z/data=!4m10!1m2!2m1!1smajestic+sun+miramar+beach!3m6!1s0x88915b85c1712a1b:0x52984811f11ae7cb!8m2!3d30.3759919!4d-86.3686236",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=30.3759919,-86.3686236&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C30.3759919,-86.3686236",
        webcam: "https://www.youtube.com/embed/TyX02EtQcYI",
        images: {
            "Living Room": [
                "images/lodging/ms-01-living-room.jpg",
                "images/lodging/ms-02-living-room.jpg",
                "images/lodging/ms-03-living-room.jpg",
                "images/lodging/ms-04-living-room.jpg",
                "images/lodging/ms-05-living-room.jpg",
                "images/lodging/ms-06-living-room.jpg",
                "images/lodging/ms-07-living-room.jpg",
                "images/lodging/ms-08-living-room.jpg",
                "images/lodging/ms-09-living-room.jpg",
                "images/lodging/ms-10-living-room.jpg",
                "images/lodging/ms-11-living-room.jpg",
                "images/lodging/ms-12-living-room.jpg"
            ],
            "Master Bedroom": [
                "images/lodging/ms-02-master-bedroom.jpg",
                "images/lodging/ms-03-master-bedroom.jpg",
                "images/lodging/ms-04-master-bedroom.jpg",
                "images/lodging/ms-05-master-bedroom.jpg"
            ],
            "Guest Bedroom": [
                "images/lodging/ms-01-guest-bedroom.jpg",
                "images/lodging/ms-02-guest-bedroom.jpg",
                "images/lodging/ms-05-guest-bedroom.jpg"
            ],
            "Master Bath": [
                "images/lodging/ms-01-master-bath.jpg"
            ],
            "Guest Bath": [
                "images/lodging/ms-01-guest-bath.jpg",
                "images/lodging/ms-02-guest-bath.jpg"
            ],
            "Kitchen": [
                "images/lodging/ms-01-kitchen.jpg",
                "images/lodging/ms-02-kitchen.jpg",
                "images/lodging/ms-03-kitchen.jpg",
                "images/lodging/ms-04-kitchen.jpg",
                "images/lodging/ms-05-kitchen.jpg",
                "images/lodging/ms-06-kitchen.jpg",
                "images/lodging/ms-07-kitchen.jpg",
                "images/lodging/ms-08-kitchen.jpg"
            ],
            "Dining": [
                "images/lodging/ms-02-dining-room.jpg",
                "images/lodging/ms-03-dining-room.jpg",
                "images/lodging/ms-04-dining-room.jpg",
                "images/lodging/ms-05-dining-room.jpg"
            ],
            "Balcony": [
                "images/lodging/ms-01-gulf-balcony.jpg",
                "images/lodging/ms-02-gulf-balcony.jpg",
                "images/lodging/ms-03-gulf-balcony.jpg",
                "images/lodging/ms-04-gulf-balcony.jpg",
                "images/lodging/ms-05-gulf-balcony.jpg",
                "images/lodging/ms-06-gulf-balcony.jpg",
                "images/lodging/ms-07-gulf-balcony.jpg",
                "images/lodging/ms-08-gulf-balcony.jpg"
            ],
            "Beach View": [
                "images/lodging/ms-beach-view.jpg",
                "images/lodging/ms-10-sunset-view.jpg"
            ],
            "Pool": [
                "images/lodging/ms-01-pool.jpg",
                "images/lodging/ms-01-pool-outdoor.jpg",
                "images/lodging/ms-08-pool-indoor.jpg",
                "images/lodging/ms-01-outdoor-lake.jpg"
            ],
            "Building": [
                "images/lodging/ms-01-building-view.jpg",
                "images/lodging/ms-02-building-view.jpg",
                "images/lodging/ms-02-condo-view.jpg"
            ],
            "Amenities": [
                "images/lodging/ms-02-gym.jpg",
                "images/lodging/ms-02-pickleball.jpg",
                "images/lodging/ms-02-hottub.jpg"
            ],
            "More": [
                "images/lodging/ms-01-beachy-decor.jpg",
                "images/lodging/ms-01-hallway.jpg",
                "images/lodging/ms-01-laundry.jpg"
            ]
        },
        amenities: [
            { icon: "wifi", name: "High-Speed WiFi" },
            { icon: "kitchen", name: "Full Kitchen" },
            { icon: "ac", name: "Air Conditioning" },
            { icon: "heating", name: "Central Heating" },
            { icon: "washer", name: "Washer & Dryer" },
            { icon: "tv", name: "Smart TV" },
            { icon: "movie", name: "DVD & Entertainment" },
            { icon: "workspace", name: "Laptop-Friendly Workspace" },
            { icon: "pool", name: "Gulf-Front & Outdoor Pools" },
            { icon: "indoor-pool", name: "Indoor Heated Pool" },
            { icon: "hottub", name: "Hot Tubs" },
            { icon: "gym", name: "Fitness Center" },
            { icon: "beach", name: "Direct Beach Access" },
            { icon: "elevator", name: "Elevator Access" },
            { icon: "parking", name: "Covered Parking (On-Site)" },
            { icon: "grill", name: "Outdoor Grilling (Resort)" }
        ],
        houseRules: [
            { icon: "no-smoking", name: "No Smoking" },
            { icon: "no-parties", name: "No Parties/Events" },
            { icon: "no-pets", name: "No Pets" },
            { icon: "checkin", name: "Check-in: 4:00 PM" },
            { icon: "checkout", name: "Check-out: 10:00 AM" },
            { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
        ],
        /** Shown under Availability & Pricing (overrides first house-rule chips) */
        availabilityChips: [
            "2 Bedrooms 2 Bath",
            "Wheelchair accessible",
            "Occupancy: 6"
        ],
        seasonalAdjustments: [
            // Mirrors PriceLabs daily prices, averaged into seasonal buckets (base $300).
            // Until the PriceLabs Customer API sync is enabled (scripts/sync-pricelabs.cjs),
            // these are hand-maintained. When data/pricing-5.json arrives, those daily
            // prices will override these per-day via app.js getAdjustedRate().
            { startDate: "2026-06-01", endDate: "2026-06-30", adjustment: 1.43 },   // June: ~$429/night
            { startDate: "2026-07-01", endDate: "2026-07-07", adjustment: 2.07 },   // July 4th week: ~$621/night
            { startDate: "2026-07-08", endDate: "2026-07-31", adjustment: 1.82 },   // Mid-Late July: ~$546/night
            { startDate: "2026-08-01", endDate: "2026-08-31", adjustment: 1.30 },   // August: ~$390/night
            { startDate: "2026-09-01", endDate: "2026-09-30", adjustment: 1.23 },   // September: ~$369/night
            { startDate: "2026-10-01", endDate: "2026-10-31", adjustment: 1.40 },   // October: ~$420/night
            { startDate: "2026-11-01", endDate: "2026-11-30", adjustment: 1.13 },   // November: ~$339/night
            { startDate: "2026-12-01", endDate: "2026-12-25", adjustment: 1.08 },   // Early-Mid Dec: ~$324/night
            { startDate: "2026-12-26", endDate: "2026-12-31", adjustment: 1.57 },   // NYE week: ~$471/night
            { startDate: "2027-01-01", endDate: "2027-01-31", adjustment: 1.13 },   // January: ~$339/night
            { startDate: "2027-02-01", endDate: "2027-02-28", adjustment: 1.20 },   // February: ~$360/night
            { startDate: "2027-03-01", endDate: "2027-03-31", adjustment: 1.57 },   // March / Spring Break: ~$471/night
            { startDate: "2027-04-01", endDate: "2027-04-09", adjustment: 1.57 },   // Early April: ~$471/night
            { startDate: "2027-04-10", endDate: "2027-04-18", adjustment: 2.27 },   // Easter peak: ~$681/night
            { startDate: "2027-04-19", endDate: "2027-04-30", adjustment: 1.40 },   // Late April: ~$420/night
            { startDate: "2027-05-01", endDate: "2027-05-31", adjustment: 1.25 }    // May: ~$375/night
        ],
        // Booked/blocked nights: data/availability-5.json (iCal from VRBO/Airbnb/Booking). Block on the OTA calendar—no need to list dates here unless a rare edge case is not on any feed.
        unavailableDates: [],
        // iCal sync URLs:
        // VRBO: http://www.vrbo.com/icalendar/26c67d2c183648a9acc205117158b231.ics?nonTentative
        // Airbnb: https://www.airbnb.com/calendar/ical/42299567.ics?s=1ae773f2ff4da71a9023b1e6b5583af9
        // Booking: https://ical.booking.com/v1/export?t=729c6e15-03da-4978-8674-e357f2fd5897
    }
];

// ==========================================
// Reviews Configuration
// ==========================================
const REVIEWS = {
    /* COMMENTED OUT - Reviews for Properties 1-3
    1: [
        {
            id: 1,
            author: "Sarah Mitchell",
            date: "2024-01-15",
            rating: 5,
            comment: "This villa exceeded all our expectations! The ocean views were absolutely breathtaking, and having direct beach access made our mornings magical. The infinity pool was perfect for afternoon relaxation, and the outdoor kitchen was ideal for family gatherings. The property manager was incredibly responsive and made sure we had everything we needed. Our family of 8 was very comfortable, and we're already planning our next visit!"
        },
        {
            id: 2,
            author: "Michael Torres",
            date: "2024-01-08",
            rating: 5,
            comment: "Stunning property in the perfect location. Every detail was thoughtfully designed. The master suite's private balcony became our favorite morning coffee spot. Highly recommend!"
        },
        {
            id: 3,
            author: "Jennifer Park",
            date: "2023-12-28",
            rating: 5,
            comment: "We celebrated the holidays here and it was absolutely perfect. The kitchen was a dream to cook in, and the living spaces were ideal for our extended family. The sunset views from the pool area were unforgettable. Communication with the host was excellent throughout our stay."
        },
        {
            id: 4,
            author: "Robert Chen",
            date: "2023-12-10",
            rating: 5,
            comment: "Beautiful property with amazing amenities. The beach access was fantastic and the house had everything we needed. Only minor issue was the hot tub needed maintenance, but the host addressed it immediately. Would definitely stay again!"
        }
    ],
    2: [
        {
            id: 1,
            author: "Emily Rodriguez",
            date: "2024-01-20",
            rating: 5,
            comment: "Our ski vacation was made perfect by this beautiful chalet! The location couldn't be better - just minutes from the slopes. Coming back to the hot tub after a long day of skiing was pure bliss. The fireplace created such a cozy atmosphere in the evenings. The kitchen was fully stocked with everything we needed to prepare meals. The beds were incredibly comfortable, and the views from every window were stunning. Our group of 6 had plenty of space and never felt cramped. This is now our go-to place for Aspen trips!"
        },
        {
            id: 2,
            author: "David Kim",
            date: "2024-01-05",
            rating: 5,
            comment: "Incredible mountain retreat! The hot tub with mountain views was heavenly after skiing. Very clean, well-maintained, and the host provided excellent recommendations for local restaurants."
        },
        {
            id: 3,
            author: "Amanda Foster",
            date: "2023-12-29",
            rating: 5,
            comment: "Perfect holiday getaway! The chalet was beautifully decorated for the season. We enjoyed cozy nights by the fireplace and the kids loved playing in the snow right outside. Great memories were made here."
        }
    ],
    3: [
        {
            id: 1,
            author: "Lisa Johnson",
            date: "2024-01-18",
            rating: 5,
            comment: "This loft is a gem in the heart of Manhattan! The location is unbeatable - we walked to Broadway shows, amazing restaurants, and all the major attractions. The loft itself is gorgeous with those high ceilings and huge windows that flood the space with light. The industrial design is both stylish and comfortable. The kitchen had everything we needed, and the in-unit laundry was so convenient. The building is secure and the elevator made coming and going easy. Perfect for experiencing NYC like a local. We'll definitely be back!"
        },
        {
            id: 2,
            author: "Marcus Williams",
            date: "2024-01-12",
            rating: 5,
            comment: "Great location and beautiful space. The exposed brick and modern finishes create a perfect NYC vibe. Very clean and the beds were comfortable. Street noise was noticeable but expected for the location. Overall excellent experience!"
        },
        {
            id: 3,
            author: "Nicole Brown",
            date: "2024-01-03",
            rating: 5,
            comment: "Absolutely loved this loft! The workspace was perfect for remote work during the day, and the location made it easy to explore the city in the evenings. Host was very communicative and helpful with restaurant recommendations."
        }
    ],
    END COMMENTED OUT */
    // TW2111 reviews — 2026-07-06 refresh: 25 real max-rating OTA reviews sourced from
    // VRBO (13) + Airbnb (10) + Booking.com (2). Curated in
    // `docs/listings/TW2111/reviews/CURATION_SHORTLIST.md` per owner-approved Option A
    // (publish only real max-rating reviews; no rating manipulation; no aggregate rendered).
    //
    // Naming policy (MASTER §23, hybrid): first name only (no last initial).
    //   - `author` field = first name as it appears publicly on the source OTA.
    //   - Attribution string rendered by `app.js` is unified as `Verified guest`
    //     regardless of source platform — the `platform` field is for internal audit only
    //     and drives no user-visible copy.
    //
    // Rating policy (BRAND_GUIDELINES.md `No rating manipulation`): every `rating` here
    // is the real value from the source OTA (all 25 are max-rating on their platform).
    // DO NOT edit ratings for aesthetic reasons — publish or exclude, never alter.
    //
    // Aggregate policy (owner directive 2026-07-06): TW2111 property record carries
    // `hideReviewAggregate: true`. `renderReviews()` in `app.js` suppresses the
    // `.reviews-summary` chip. Individual `Review` markup still ships in JSON-LD;
    // `AggregateRating` is intentionally omitted from `listing-4.html`.
    //
    // Body policy: verbatim from the OTA source with editorial trims documented
    // per-review in `docs/listings/TW2111/reviews/CURATION_SHORTLIST.md`. Elevator
    // commentary (resort-wide HOA issue) and floor-height references (violates
    // MASTER §14) are the only categories trimmed. No content additions, no
    // sentiment changes, no synthesized language.
    //
    // Audit trail: `sourceName` field on each entry preserves the full OTA-captured
    // name (first name + last initial where applicable) for the audit trail.
    // NEVER rendered by the site — internal only. If MASTER §23 is later reversed
    // to full first-name+initial, no re-lookup is required.
    4: [
        {
            id: 1,
            platform: "vrbo",
            author: "Michelle",
            sourceName: "Michelle B.",
            date: "2026-06-15",
            rating: 5,
            comment: "This place was extremely clean and well maintained! It was very roomy and cozy! The front door was right in front of the elevator, which was convenient. Kitchen was fully with everything you need to if you want to stay in and cook. The host is amazing! Easy to reach and responds very quickly. We will definitely be back!!!"
        },
        {
            id: 2,
            platform: "vrbo",
            author: "Daphne",
            sourceName: "Daphne H.",
            date: "2026-05-15",
            rating: 5,
            comment: "Simone was awesome — she was so thorough and gave us everything we needed for easy parking instructions and check in! We were also able to extend a day and she was great to work with us on that! Great view — easy beach access, beautiful pool! Definitely recommend this host and property!"
        },
        {
            id: 3,
            platform: "booking",
            author: "Candice",
            sourceName: "Candice",
            date: "2026-04-22",
            rating: 5,
            comment: "Absolutely loved the room. It exceeded my expectations. I was very impressed with the layout and decor. The kitchen had everything needed for anything thought of. I've stayed at other condos that I had to go buy kitchen appliances just to cook the meals I wanted either due to not even having it or what was there was missing something or damaged. Loved that there was a coffee shop and souvenir shop there. Loved how close it was to the ocean and the umbrellas and chairs that were set up wasn't so many no one else who didn't rent one could have a view or sit close to the water."
        },
        {
            id: 4,
            platform: "airbnb",
            author: "Shirley",
            sourceName: "Shirley",
            date: "2025-05-15",
            rating: 5,
            comment: "This 3 bedroom condo is great! Very clean. Plenty of seating. Great view. Well stocked kitchen. Check in and out processes were easy. Host is very friendly and responds quickly!! Would stay here again!!!"
        },
        {
            id: 5,
            platform: "vrbo",
            author: "Joan",
            sourceName: "Joan W H.",
            date: "2026-04-15",
            rating: 5,
            comment: "My husband and I went with two friends to see the airshow on Panama City Beach. The condo was perfect with the planes flying right in front of us. The condo was extra clean and never have I been in a condo that was so well equipped in the kitchen. Simone, the host, was wonderful with helping us — every time I text her with a question, she answered me immediately. We certainly will consider this unit for the next airshow."
        },
        {
            id: 6,
            platform: "airbnb",
            author: "Jenny",
            sourceName: "Jenny",
            date: "2024-06-15",
            rating: 5,
            comment: "Simone was always available for questions or concerns. Responded quickly to messages. Condo was clean and comfortable with an amazing view of the beach. Check in and check out was easy and convenient. We would definitely stay at her properties again."
        },
        {
            id: 7,
            platform: "airbnb",
            author: "Rebecca & Eric",
            sourceName: "Rebecca & Eric",
            date: "2025-04-15",
            rating: 5,
            comment: "Simone's place was very nice. Beautiful view of the beach. Simone was a great host. Anything we need she was available and helped when needed. We would definitely stay with her again in the future."
        },
        {
            id: 8,
            platform: "vrbo",
            author: "Jesika",
            sourceName: "Jesika W.",
            date: "2026-06-15",
            rating: 5,
            comment: "Very clean room with an awesome beach view. Was a perfect stay for family of 6. The host was very welcoming and helpful with any questions we had. Would definitely stay again."
        },
        {
            id: 9,
            platform: "airbnb",
            author: "Robbilyn",
            sourceName: "Robbilyn",
            date: "2025-10-15",
            rating: 5,
            comment: "We loved everything about the condo. The view was beautiful and quiet. Simone was great to work with and always responded! We will definitely come back!"
        },
        {
            id: 10,
            platform: "vrbo",
            author: "Debbie",
            sourceName: "Debbie F.",
            date: "2025-06-15",
            rating: 5,
            comment: "Over all this was a great place to stay. Host is friendly and very helpful through the whole process. (If I read thru everything that was sent I would not have needed to contact her.)"
        },
        {
            id: 11,
            platform: "airbnb",
            author: "Samantha",
            sourceName: "Samantha",
            date: "2024-04-15",
            rating: 5,
            comment: "Simone was lovely to work with! The view was definitely worth it. We walked to Pier Park and it was a fun place to be right in the middle of everything!"
        },
        {
            id: 12,
            platform: "vrbo",
            author: "Ashley",
            sourceName: "Ashley F.",
            date: "2026-04-15",
            rating: 5,
            comment: "Loved this condo! Beautiful view and the host was exceptional."
        },
        {
            id: 13,
            platform: "vrbo",
            author: "Anita",
            sourceName: "Anita P.",
            date: "2025-03-15",
            rating: 5,
            comment: "Perfect getaway for my husband, mom, daughter and her friend. Will definitely come back. Host was super responsive!"
        },
        {
            id: 14,
            platform: "vrbo",
            author: "Todd",
            sourceName: "Todd T.",
            date: "2024-05-15",
            rating: 5,
            comment: "Clean condo, fully equipped, with quick access to the beach."
        },
        {
            id: 15,
            platform: "airbnb",
            author: "Tara",
            sourceName: "Tara",
            date: "2024-07-15",
            rating: 5,
            comment: "The Airbnb was great in all ways."
        },
        {
            id: 16,
            platform: "vrbo",
            author: "Danielle",
            sourceName: "Danielle B.",
            date: "2025-05-15",
            rating: 5,
            comment: "We had a great time and the host was excellent to work with. The condo was in perfect condition with plenty of room."
        },
        {
            id: 17,
            platform: "vrbo",
            author: "Megan",
            sourceName: "Megan O.",
            date: "2026-06-15",
            rating: 5,
            comment: "We had a blast. A few things were messed up in the room but the host jumped right on having someone come check it and fix it! It was a good choice for my family!"
        },
        {
            id: 18,
            platform: "booking",
            author: "Stephanie",
            sourceName: "Stephanie",
            date: "2026-02-23",
            rating: 5,
            comment: "Right on the water! So easy for a family to enjoy the beach. All the other guests were exceptionally kind. We stopped on a road trip during the off season, so the indoor pool was a bonus."
        },
        {
            id: 19,
            platform: "vrbo",
            author: "Darlene",
            sourceName: "Darlene T.",
            date: "2026-03-15",
            rating: 5,
            comment: "Beach view was absolutely beautiful from our balcony."
        },
        {
            id: 20,
            platform: "airbnb",
            author: "Estefania",
            sourceName: "Estefania",
            date: "2025-04-15",
            rating: 5,
            comment: "Great place and great view toward the beach! Place was clean. Enough space for our group of 7!"
        },
        {
            id: 21,
            platform: "airbnb",
            author: "John",
            sourceName: "John",
            date: "2025-05-15",
            rating: 5,
            comment: "Great place with a great host! Would recommend to all."
        },
        {
            id: 22,
            platform: "airbnb",
            author: "Brandon",
            sourceName: "Brandon",
            date: "2025-06-15",
            rating: 5,
            comment: "It was a great stay and we're looking forward to coming back again."
        },
        {
            id: 23,
            platform: "vrbo",
            author: "Jessica",
            sourceName: "JESSICA R.",
            date: "2026-05-15",
            rating: 5,
            comment: "Very nice condo. Directly on the beach. Easy check in."
        },
        {
            id: 24,
            platform: "airbnb",
            author: "Diana",
            sourceName: "Diana",
            date: "2024-07-15",
            rating: 5,
            comment: "Very good host, very attentive."
        },
        {
            id: 25,
            platform: "vrbo",
            author: "Carrie",
            sourceName: "carrie g.",
            date: "2025-07-15",
            rating: 5,
            comment: "Everything went great."
        }
    ],
    5: [
        { id: 1, author: "Christy Anderson", date: "2024-03-01", rating: 5, comment: "Beautiful, clean, great area. Great view of the ocean. Parking is easy. Will stay again." },
        { id: 2, author: "Aiza Thompson", date: "2024-06-01", rating: 5, comment: "Great view. The condo was very clean and had a great view, we really enjoyed for a short stay and plenty of restaurants to eat nearby." },
        { id: 3, author: "Sophia Williams", date: "2023-07-01", rating: 5, comment: "Family vacation. Nice facility." },
        { id: 4, author: "Dominique Martinez", date: "2023-10-01", rating: 5, comment: "Great view. This property was great! The view of the beach was beautiful. The condo was nice and big. We would stay here again." },
        { id: 5, author: "Andrew Robinson", date: "2024-07-01", rating: 5, comment: "Best location in Destin. Perfect place, on water and a good pool. Room very clean and has everything you may need. Will be going back soon." },
        { id: 6, author: "Juliah Johnson", date: "2023-07-01", rating: 5, comment: "Awesome View!!! Amazing view and awesome location! The condo was clean, comfy, and had everything we needed." },
        { id: 7, author: "Brittany Miller", date: "2023-05-01", rating: 5, comment: "Great Host and wonderful condo! This was a very nice condo! Had everything we needed! Simone was the best host ever! Always got a quick response!" },
        { id: 8, author: "James Davis", date: "2023-05-01", rating: 5, comment: "Majestic Sun. 8th floor, great views. Room was close to elevators. This was our 3rd stay at Majestic Sun." },
        { id: 9, author: "Gina Garcia", date: "2024-05-01", rating: 5, comment: "Nice unit, comfy beds. Enjoyed my week at Destin. Simone was very prompt to address my issue with AC and was fixed right away!" },
        { id: 10, author: "David Rodriguez", date: "2023-03-01", rating: 5, comment: "Great location and great view. My family of 4 and my mother in law came down for a week and had a blast. There was plenty of room with the pull out couch. The view is great. There are restaurants within walking distance. The fish at Whale's Tale was great. I would go back tomorrow if I could." },
        { id: 11, author: "Gail Wilson", date: "2023-06-01", rating: 5, comment: "Had a great time! Beautiful view of the beach, convenient, everything we needed in condo. Appreciated the brightness of bathroom lighting. Host quickly responded to questions. Building A just needs to repair an elevator that is down." },
        { id: 12, author: "Ashay Moore", date: "2023-12-01", rating: 5, comment: "EXCELLENT LOCATION AND SUPER HOST. We love this area. Perfect location right in front of the beach. The amenities are totally family oriented. Heated pool. Hot tubs and nice fitness facility. The parking is super convenient. The host is very responsive and the apartment is very clean and tidy. The only improvement I would suggest is to upgrade the pots and pans. Other than that...no issues!!" },
        { id: 13, author: "Oliver Taylor", date: "2025-07-01", rating: 5, comment: "Perfect! Everything was perfect from check in to check out. Property was clean and organized. Location was perfect!" },
        { id: 14, author: "Brice Thomas", date: "2022-10-01", rating: 5, comment: "Great time. We had a great time on our trip and the host was very responsive to questions and helped us get in when VRBO's site was down. Location is great right across from the beach." },
        { id: 15, author: "Shannon Jackson", date: "2022-09-01", rating: 5, comment: "Loved it. It had been a long time since we had been to Destin and I loved the location of this property and the view! It had everything we needed!" },
        { id: 16, author: "Brandi White", date: "2022-07-01", rating: 5, comment: "Great place to stay. The property was great." },
        { id: 17, author: "Matt Harris", date: "2022-07-01", rating: 5, comment: "Great Vacation Rental! We thoroughly enjoyed spending our vacation at this rental! The place had everything we needed on top of an incredible location. Would definitely stay here again!" },
        { id: 18, author: "Douglas Martin", date: "2022-06-01", rating: 5, comment: "Great vacation. Enjoyed staying here. The condo was well stocked and comfortable. The only real issue we had was the busy street between the condo and the beach. It was noisy at night and it's hard to hear the waves. Super nice place but we got several dirty letters left under our door from the association. So make sure you read up on the rules and follow them." },
        { id: 19, author: "Jillian Brown", date: "2022-07-01", rating: 5, comment: "Beach Life. Should have time restrictions on golf carts or at least horn restrictions." },
        { id: 20, author: "Jeremy Lee", date: "2022-07-01", rating: 5, comment: "Great Place To Stay! I was very pleased with this property! It has THE BEST view of the beach and ocean. The host was great. Had all of the things needed to cook meals in house rather than having to leave for dinner every night. We brought our own sheets blankets etc but the ones provided looked just fine. I would just say that there was hairs on the bathroom floors and walls. Other than that GREAT GREAT PLACE. I would recommend 100%!!! Can't wait to come back to Destin." },
        { id: 21, author: "Michael Walker", date: "2022-07-01", rating: 5, comment: "Wonderful Experience. Everything was perfect. Homeowners were delightful to work with. We will rent from them again!" },
        { id: 22, author: "Robert Hall", date: "2022-06-01", rating: 5, comment: "Great location! Enjoyed renting this property, overall easy transaction and just a little confusion checking in as far as parking but overall satisfied. The condo was clean, the view was amazing!" },
        { id: 23, author: "Tami Allen", date: "2022-05-01", rating: 5, comment: "Beautiful stay. Everything was perfect. Responds quick to any questions. Will definitely be making another stay." },
        { id: 24, author: "Phyllis Young", date: "2022-05-01", rating: 5, comment: "Great property and wonderful stay." },
        { id: 25, author: "Vanessa King", date: "2022-05-01", rating: 5, comment: "Perfect place to stay!!! This was a perfect place to stay!!! Owner was so nice and helpful!!! Everything was cleaned and the beds were comfortable!!! Will definitely stay here again!!!" },
        { id: 26, author: "Tori Wright", date: "2022-04-01", rating: 5, comment: "The place was absolutely beautiful. This location is perfect for beach trip, easy access to beach with a little beach bar right there! The whole road has lots of restaurants etc. I recommend going to pompano joes at least once right down the road. It was amazing, not over crowded, no crazies just nice relaxing and beautiful!!!! The condo was excellent! Very clean." },
        { id: 27, author: "Matthew Lopez", date: "2022-04-01", rating: 5, comment: "Miramar condo. This stay was great. The location was amazing with 3 access points to the beach directly across the street. We also were able to enjoy the indoor pool during some rainy weather. The condo was perfect for our needs and we will certainly stay here again." },
        { id: 28, author: "Daniel Hill", date: "2022-03-01", rating: 5, comment: "Very accommodating facilities and condo. We enjoyed our stay no surprises." },
        { id: 29, author: "Katie Scott", date: "2022-03-01", rating: 5, comment: "Easy and fun. We had a great time, location is perfect!!" },
        { id: 30, author: "Florida Green", date: "2022-03-01", rating: 5, comment: "Immaculate and great view. Planned this trip with my husband and boys 14 and 21. Our first time going to the Panhandle. We had so many plan but they were interrupted by rain, cold and fog the entire trip. We absolutely made the best of it. What made it easy was this place. Truly a wonderful stay in a convenient location with a view of the ocean. It is spacious and when I say immaculate!! I'm such a stickler for clean accommodations and this was great. The host was awesome and so responsive. We will be coming back. Five stars is not sufficient." },
        { id: 31, author: "Vuth Adams", date: "2021-11-01", rating: 5, comment: "This is an awesome place!! We love this place! It was clean and nice view of the beach. Especially, the view of the sunset!! The manager was so nice and very helpful. I would stay again next year and would recommended friend and family." },
        { id: 32, author: "Jennifer Baker", date: "2021-10-01", rating: 5, comment: "Great location. Great location and easy access to beach." },
        { id: 33, author: "Eric Nelson", date: "2021-10-01", rating: 5, comment: "Miramar Beach. Great condo Great location Simone was great whenever I had a question Very quick response Very enjoyable stay at the beach." },
        { id: 34, author: "James Carter", date: "2021-09-01", rating: 5, comment: "Nice beach stay. Overall a nice unit with good views for sunset and beach, comfortable bedding. The unit was very clean on arrival. Minor items: master closet was full of owner items like old furniture and not usable, owner did not provide new parking passes (asked us to modify expired pass when we asked) and was missing one pool band. One pool band broke just putting it on and owner charged full lost band fee... So glad nothing else broke given that it's not a new unit and would be nervous to stay again for that reason." },
        { id: 35, author: "Erin Perez", date: "2021-09-01", rating: 5, comment: "Beautiful condo, great location! We loved it here! Fantastic view, great location, very clean, and the owner was so nice and very responsive. We were able to walk to many restaurants for dinner each night. Would absolutely stay here again." },
        { id: 36, author: "Worth Roberts", date: "2021-07-01", rating: 5, comment: "Amazing view. The condo was perfect for our family and had the best view!!!" },
        { id: 37, author: "Brandon Turner", date: "2021-07-01", rating: 5, comment: "Awesome property/awesome manager. Simone was great to work with...always answered the phone or text and was very communicative and helpful. The property was fantastic beautiful views and well appointed. I would definitely stay again!" },
        { id: 38, author: "Ryan Phillips", date: "2021-06-01", rating: 5, comment: "Beautiful place. The condo is in an excellent location and management is extremely helpful. Kitchen is well stocked, everything worked well." },
        { id: 39, author: "Ivon Campbell", date: "2021-05-01", rating: 5, comment: "Fun in the sun. Great condo enjoyed the stay." },
        { id: 40, author: "Anthony Parker", date: "2021-05-01", rating: 5, comment: "Amazing and Beautiful. Simone was an amazing host and the condo was everything that me and my family of 6 could have wanted. Simone did an amazing job with communication and was very response when ever I sent her a message. Me and my family will be definitely staying there." },
        { id: 41, author: "Teena Evans", date: "2021-05-01", rating: 5, comment: "Wonderful time. WE had a great time!!!! beach was great!!! food was close!!!" },
        { id: 42, author: "Shaquitta Edwards", date: "2021-05-01", rating: 5, comment: "Perfect for my family! My family and I really enjoyed our short stay! The property was clean, comfortable and we had the perfect view plus everything we needed!! Customer service was superb!! We will be returning soon!!" },
        { id: 43, author: "Lisa Collins", date: "2021-04-01", rating: 5, comment: "Excellent location. Our stay was perfect. Amazing location, gorgeous view. Excellent and fast communication with the owner. Highly recommend." },
        { id: 44, author: "Julie Stewart", date: "2021-04-01", rating: 5, comment: "Perfect getaway! Had a great time & perfect location!" },
        { id: 45, author: "Linda Sanchez", date: "2021-04-01", rating: 5, comment: "Condo. Beautiful condo with a fabulous view!" },
        { id: 46, author: "Anthony Morris", date: "2021-03-01", rating: 5, comment: "Perfect Family Spring Break. The property was everything in the description and more. Very clean, an unforgettable view and prime location. It was colder than expected but the indoor pool allowed us time to let it warm up outside. Will definitely stay here again." },
        { id: 47, author: "Dylan Rogers", date: "2021-03-01", rating: 5, comment: "Fantastic. Great place. We've stayed at Majestic Sun two years ago & now this year. Will definitely stay here again. Highly recommend. Beautiful ocean view. Closest condo to the beach and affordable." },
        { id: 48, author: "Eric Reed", date: "2021-03-01", rating: 5, comment: "Breathtaking sunsets. We stayed 3/20-3/28 and let me tell you, it exceeded our expectations! We've vacationed in Destin and Miramar Beach many times over the years and this condo by far has one of the best views we've ever experienced here!! Simone is wonderful to work with and very responsive to any questions we had. We will definitely be back again and again!!!" },
        { id: 49, author: "Marisela Morgan", date: "2021-03-01", rating: 5, comment: "Great getaway! Simone was so great! The property exceeded my expectations, the pictures don't do any justice! So much prettier in person! Beds were comfy and she had everything we needed. I would definitely stay again." },
        { id: 50, author: "Dexter Bell", date: "2021-02-01", rating: 5, comment: "Refreshing getaway. The property was beautiful, wonderful view of the Gulf from our balcony. The beach was just a very short walk. Simone was readily available if we had any questions. She was great! We even exchanged pictures at the end of our stay. We were really looking forward to a short vacation, and this delivered. We would definitely rent here again!" },
        { id: 51, author: "Jim Murphy", date: "2020-10-01", rating: 5, comment: "Great condo. The location is great and the condo itself was spacious and clean. It also had an incredible view from the large balcony and master bedroom. I highly recommend." },
        { id: 52, author: "Amelia Bailey", date: "2020-10-01", rating: 5, comment: "Great location & views. Location is great on scenic 98 with amazing views! Communication with owner was great & fixed issues that we had. Good size for family of 4 plus grandparent." },
        { id: 53, author: "Wisconsin Rivera", date: "2020-10-01", rating: 5, comment: "Beautiful View. Enjoyed the full on view of the beach and ocean. Amenities were nice. Very easy beach access. Condo is beautiful. Three stars for cleanliness because master bed shower curtain was very moldy and smelled. Needs replacing. Dishwasher was full and not emptied by cleaning staff. No fault of condo owner, but cleaning staff could do a better job." },
        { id: 54, author: "Robert Cooper", date: "2020-09-01", rating: 5, comment: "Excellent location.. perfect for families! We booked this condo on short notice but were so pleased with the entire experience. The owner communicated quickly and thoroughly and was very helpful throughout our stay. We had everything we needed for a comfortable stay and were able to focus on family time. The location is great for shopping, dining, and the beach!" },
        { id: 55, author: "Ann Richardson", date: "2020-09-01", rating: 5, comment: "Love majestic sun. We have stayed at seascape several times and now twice at majestic sun and have always enjoyed it!" },
        { id: 56, author: "Bonnie Cox", date: "2020-06-01", rating: 5, comment: "Miramar - Home Away From Home. We've been to Miramar/Destin several times and find Majestic Sun to be one of our favorites in regard to location and amenities. Per usual, our stay didn't disappoint. There was a slight mixup and we didn't receive all check in instructions with codes, but when we reached out to the owner, she got back quickly with what we needed. The view is wonderful and you are just an elevator ride down and quick walk across the street to the beach. I definitely recommend!" },
        { id: 57, author: "Milton Howard", date: "2020-02-01", rating: 5, comment: "Great unit on a great property! Clean and well kept, it was very comfortable. Access to the heated pool was a big plus." },
        { id: 58, author: "Kristy Ward", date: "2020-03-01", rating: 5, comment: "Relaxing vacation. We had a wonderful time. Majestic sun is always our preferred location." },
        { id: 59, author: "Elijah Bennett", date: "2025-06-01", rating: 5, comment: "Great property and wonderful stay." }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROPERTIES, REVIEWS, SITE_BASE_URL, SITE_CONTACT, WEB3FORMS_ACCESS_KEY };
}