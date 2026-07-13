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
    cancellationNote: 'Full refund if you cancel 46 or more days before check-in. 50% refund 31–45 days out. Non-refundable within 30 days of check-in.',
    // ------------------------------------------------------------------
    // Host trust badges (Phase 3 initiative #40 — surface Superhost on Website)
    // ------------------------------------------------------------------
    // These attest to Simone's host performance across OTAs, not the individual
    // property, so they live on SITE_CONTACT rather than on the property record —
    // both TW2111 and MS811 inherit them automatically. See:
    //   - `docs/brand/BRAND_GUIDELINES.md` § "Host trust badges" for the rules
    //     (honesty, attribution, verified-on cadence).
    //   - `docs/phase-3/revenue-impact-tracker.md` #40 for the ship rationale.
    //
    // Publish ONLY badges we can prove. Verification sources on file:
    //   - Airbnb Superhost — visible on the Airbnb host card ("Superhost, 6 years
    //     hosting"), captured 2026-07-06 in
    //     `docs/listings/TW2111/reviews/2026-07-06-airbnb.md` line 12.
    //   - VRBO Premier Host — visible on Simone's owner-response byline across
    //     multiple 2024–2025 VRBO reviews ("VrboOwner, Premier Host"), captured
    //     2026-07-06 in `docs/listings/TW2111/reviews/2026-07-06-vrbo.md` line 195.
    //
    // Airbnb reviews Superhost status quarterly; VRBO Premier Host is annual. If
    // either badge lapses, flip `active: false` — DO NOT delete the entry. The
    // audit trail (with the `verifiedOn` date) is what protects us against a
    // future "why did we ever claim this?" question.
    hostTrustBadges: [
        {
            id: 'airbnb-superhost',
            label: 'Airbnb Superhost',
            secondary: '6+ years hosting',
            platform: 'airbnb',
            verifiedOn: '2026-07-06',
            active: true
        },
        {
            id: 'vrbo-premier-host',
            label: 'VRBO Premier Host',
            secondary: null,
            platform: 'vrbo',
            verifiedOn: '2026-07-06',
            active: true
        }
    ]
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
        // Owner directive 2026-07-06 (evening pass): aggregate rating chip is now
        // SHOWN on the TW2111 property page using the "featured reviews" format
        // ("5.0 Average Rating · 25 Featured Reviews · Verified Guests"). The
        // earlier same-day `hideReviewAggregate: true` decision was reversed as part
        // of the Phase 3 Sprint 1 review-section improvement pass. The JSON-LD
        // `AggregateRating` is also re-emitted with `ratingValue: 5.0, reviewCount: 25`
        // (aggregate scoped to the published set — honest against the 25 real
        // max-rating reviews; the broader 33-review archive averages 4.74 and
        // is NOT claimed as an aggregate here). See MASTER §23 and BRAND_GUIDELINES
        // "Baked-in pricing adjustments"-adjacent "Aggregate rating display" rule.
        // A short scannable "Loved For" chip strip renders below the aggregate.
        // Chips are curated from the Airbnb `Loved for` category-signal capture
        // (Hospitality 7 · View 6 · Cleanliness 3 · Beach 2 · Access 2) plus
        // review-body themes (kitchen, family-friendly). Do not add chips that
        // aren't supported by the review archive.
        lovedFor: [
            "Beachfront Views",
            "Spotlessly Clean",
            "Family Friendly",
            "Exceptional Host",
            "Fully Equipped Kitchen",
            "Easy Beach Access"
        ],
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
                "images/lodging/tw-balcony-dinner.png",
                "images/lodging/tw-dining-01.png",
                "images/lodging/tw-01-kitchen.jpg",
                "images/lodging/tw-02-kitchen.jpg",
                "images/lodging/tw-03-kitchen.jpg",
                "images/lodging/tw-02-dining.jpg",
                "images/lodging/tw-01-dining.jpg"
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
        title: "Westlight",
        // Signature Property brand pass shipped 2026-07-09. Property renamed from
        // the working label `Majestic Sun 811` to the Signature Property name
        // `Westlight`. `Majestic Sun` is retained only in operational context
        // (resort/building name, address, driving directions, HOA/legal surfaces)
        // and appears in the description body's resort-amenity paragraph only,
        // never as the guest-facing brand. Source of truth for the rebrand:
        // docs/listings/MS811/MASTER.md §1 Brand + §24 Changelog 2026-07-09.
        //
        // Loved-for chips curated from the 86-review OTA archive captured 2026-07-10
        // (64 VRBO + 22 Airbnb, see docs/listings/MS811/reviews/). Chip themes ranked
        // by mention frequency across the archive:
        //   - View / balcony / Gulf     — 55+ mentions
        //   - Location / walk-to-beach  — 40+ mentions
        //   - Simone / owner responsive — 30+ mentions
        //   - Cleanliness               — 25+ mentions
        //   - Return / rebook           — 20+ mentions
        //   - Fully-stocked kitchen     — 10 mentions (Airbnb "Kitchen" chip 2 + VRBO AI summary highlights 8)
        // Do not add chips unsupported by the review archive.
        lovedFor: [
            "Panoramic Gulf Views",
            "Steps to the Beach",
            "Attentive Host",
            "Spotlessly Clean",
            "Fully Stocked Kitchen",
            "Sunset Balcony"
        ],
        listingHeadline: "Westlight",
        listingBrandSubtitle: "A StayAtFlorida Signature Property",
        listingTagline: "Where Every Evening Ends in Gold",
        listingHeroCopy: "Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat sits directly overlooking the Gulf of Mexico — panoramic Gulf views from the balcony, direct beach access via a palm-lined boardwalk, and full Seascape resort amenities steps from the front door.",
        cardSubtitle: "A StayAtFlorida Signature Property",
        // Homepage property-card blurb. Source of truth: docs/listings/MS811/MASTER.md §13a
        // "Homepage Card Copy". Kept short (one scannable sentence) — the long story lives on
        // the property detail page. Do not swap for a longer aspirational line here.
        cardShortDescription: "Panoramic Gulf views, direct beach access, and resort amenities on Florida's quieter Emerald Coast.",
        metaTitle: "Westlight | Gulf-Front 2BR in Miramar Beach | StayAtFlorida",
        metaDescription: "Book Westlight by StayAtFlorida, a Gulf-front 2BR condo in Miramar Beach with panoramic Gulf views, resort amenities, and room for 6. Owner-hosted.",
        coverImage: "images/lodging/ms-09-living-room.png",
        location: "Miramar Beach, Florida",
        description: `Welcome to Westlight, where every evening ends in gold. This 2-bedroom, 2-bath Gulf-front retreat sits directly overlooking the Gulf of Mexico, where the emerald water meets sugar-white sand and the last light of the day pours across the balcony. It's a slower, quieter stretch of Florida's Emerald Coast — a place designed to be lived in barefoot, coffee in hand, sunset ahead.

Westlight was created for guests who want the comforts of home paired with a true beachfront experience on the Emerald Coast. A full kitchen, real bedrooms, in-unit laundry, and a private Gulf-front balcony — the everyday rhythm of home, only with the Gulf a boardwalk away.

**Highlights**

• Panoramic Gulf views from a west-facing private balcony
• Direct beach access via a palm-lined boardwalk — no busy road to cross
• Sleeps up to 6 across a king primary suite, queen guest bedroom, and queen sleeper sofa
• 2 bedrooms / 2 bathrooms
• Complimentary beach chairs and umbrella available in the condo
• Full Seascape resort amenities — Gulf-front pool, indoor heated pool, hot tubs, fitness, tennis, pickleball, Seascape Golf Club
• Walkable to Seascape Town Center and Whale's Tale Beach Bar & Grill
• ~40 minutes / 24 miles to VPS airport · ~1 hour / 38 miles to ECP airport

**The Home**

Westlight is a 2-bedroom, 2-bath condominium that comfortably sleeps up to 6. A king-bed primary suite opens toward the Gulf, a queen guest bedroom offers a quieter tucked-away room, and a queen sleeper sofa in the living room accommodates two additional guests. The kitchen is fully stocked for six — coffee maker, cookware, and dinnerware for real cooking, not just reheating — and the in-unit washer and dryer make longer stays effortless. Smart TVs with popular streaming apps available in every bedroom and the living room; high-speed Wi-Fi reaches every corner of the condo.

**Where You'll Sleep**

• Primary bedroom: king bed with Gulf-facing windows
• Guest bedroom: queen bed with adjacent bath
• Living room: queen sleeper sofa for 1–2 additional guests
• Sleeps up to 6 guests across 2 bedrooms and 2 bathrooms

**The Kitchen**

Start the morning with coffee on the balcony, come back for lunch between beach visits, and take your time over dinner with the Gulf still glowing outside. The kitchen is stocked so you can cook what you actually want to cook on vacation.

What's on hand:
• Refrigerator, stove, oven, microwave, dishwasher
• Cookware, dishes, glassware, and utensils
• Coffee maker, toaster, blender, ice maker, freezer
• Slow cooker, air fryer, food processor, toaster oven
• Countertop grills (large and small), popcorn maker, veggie chopper
• Kitchen island, dining table for six, wine glasses, baking sheets, pizza pan, spices

**The View & Beach**

The private Gulf-front balcony is the heart of Westlight. Morning coffee overlooking the Gulf. Afternoons listening to the waves. Evenings watching unforgettable sunsets that inspired the name Westlight. Direct beach access is a palm-lined boardwalk downstairs; no crossing a busy road, no waiting for a shuttle. Complimentary beach chairs and umbrella available in the condo.

**Location**

Westlight is in Miramar Beach on Florida's Emerald Coast — a quieter, greener stretch of coast than the boardwalk destinations of Panama City Beach, closer than the boutique communities further east. Direct beach access via a palm-lined boardwalk from the resort. Seascape Town Center (coffee, casual dining, shopping) is a short walk from the front door. Whale's Tale Beach Bar & Grill is walkable along the beach. Publix at Grand Boulevard (725 Grand Blvd) is the nearest grocery — about 5 minutes by car; Winn-Dixie on Poinciana Blvd is closer (~1 mile) for a quick run. Silver Sands Premium Outlets is ~1 mile east; the Village of Baytowne Wharf and Henderson Beach State Park are a short drive further. Destin–Fort Walton Beach Airport (VPS) is approximately 40 minutes (24 miles) by car; Northwest Florida Beaches International Airport (ECP) is approximately 1 hour (38 miles).

**Resort Amenities**

Westlight lives inside the Majestic Sun building at Seascape Resort, a full-service beachfront community that layers a full suite of resort-style amenities onto a quieter, greener stretch of coast:

• Gulf-front outdoor pool with sundeck
• Heated indoor pool with cathedral ceilings
• Multiple hot tubs
• Full fitness center
• Tennis and pickleball courts
• Seascape Golf Club (9-hole, par 35 — Emerald Bay Golf Club ~3 miles away for an 18-hole round)
• Bicycle and paddleboard rentals
• Multiple resort grills
• Scenic walking paths
• Elevator access and complimentary covered parking for registered guests

Seascape offers the amenities of a full-service beachfront resort while maintaining a quieter, more relaxed atmosphere than many of the busier Panama City Beach or Destin harbor properties.

**Things to Do**

Westlight places you in the heart of the Emerald Coast's best activities and attractions:

*Walkable Dining & Entertainment* — Seascape Town Center:
• 2 Birds Coffee & Café
• Mezcal Cantina Mexican Grill & Tiki Bar
• Moo La-La Ice Cream & Fudge
• Village Door Restaurant (live music nightly)
• Wine, spirits, and boutique shopping

*Nearby Attractions* — Just minutes away:
• Silver Sands Premium Outlets
• Grand Boulevard shopping, dining, and entertainment
• The Village of Baytowne Wharf (seasonal fireworks)
• Big Kahuna's Water & Adventure Park
• Henderson Beach State Park
• Topsail Hill Preserve State Park
• Destin Harbor / HarborWalk Village

**About Your Host**

Westlight is personally hosted by Simone. For more than six years, I've been welcoming guests to Florida's Emerald Coast. I personally handle every booking, every guest message, and every arrival detail — never a third-party management company. I typically reply within two hours and send detailed arrival instructions about a week before check-in. If you have a question during your stay, I'm a text away.

Whether you're planning a family beach vacation, a relaxing couples' getaway, or a trip with friends, we'd love to welcome you to Westlight and help make your Emerald Coast stay one to remember.`,
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
        coverImage: "images/lodging/ms-09-living-room.png",
        coordinates: { lat: 30.3759919, lng: -86.3686236 },
        googleMapsUrl: "https://www.google.com/maps/place/Majestic+Sun/@30.3797734,-86.388212,15z/data=!4m10!1m2!2m1!1smajestic+sun+miramar+beach!3m6!1s0x88915b85c1712a1b:0x52984811f11ae7cb!8m2!3d30.3759919!4d-86.3686236",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=30.3759919,-86.3686236&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C30.3759919,-86.3686236",
        webcam: "https://www.youtube-nocookie.com/embed/TyX02EtQcYI",
        // Photo library — locked 2026-07-10 (owner-final Westlight curation · post-owner-fills pass).
        // Flat carousel-ordered array. Source of truth: MASTER.md §18 Photo Caption Library.
        // 40 published slots (46 planned; 6 owner-removed: #19, #21, #23, #32, #36, #40).
        // Captions in `photoCaptions` (below) match `MASTER.md §18` verbatim — do NOT edit either in isolation.
        // Slot #34 was owner-removed 2026-07-10 evening as a duplicate of slot #20 — see MASTER §18.
        images: [
            "images/lodging/MS-FullView-1.png",             // slot #1 — Cover
            "images/lodging/MS-Balcony-1.png",              // slot #2
            "images/lodging/MS_Balcony_Dinner_Setup.png",   // slot #3
            "images/lodging/MS_Balcony_Coffee_person.png",  // slot #4
            "images/lodging/MS-MasterBedroomFuture-2.png",  // slot #5
            "images/lodging/MS-MasterBath-1.png",            // slot #6
            "images/lodging/ms-01-building-view.jpg",       // slot #7
            "images/lodging/MS-GuestBedroom-1.png",     // slot #8
            "images/lodging/MS_Guest_Bath.png",             // slot #9
            "images/lodging/MS-Kitchen-1.png",              // slot #10
            "images/lodging/MS_dinner_setup.png",           // slot #11
            "images/lodging/MS_Dinner_sunset.png",          // slot #12
            "images/lodging/ms-09-living-room.png",         // slot #13
            "images/lodging/ms-08-pool-indoor.jpg",         // slot #14
            "images/lodging/MS-DiningRoom-3.png",          // slot #15
            "images/lodging/ms-02-kitchen.jpg",             // slot #16
            "images/lodging/MS-LivingRoom-5.png",           // slot #17
            "images/lodging/ms-01-kitchen.jpg",             // slot #18
            "images/lodging/ms-01-pool.jpg",                // slot #20 (⚠ same as #34)
            "images/lodging/ms-02-pickleball.jpg",          // slot #22
            "images/lodging/ms-01-laundry.jpg",             // slot #24
            "images/lodging/ms-beach-view.jpg",             // slot #25
            "images/lodging/MS-Balcony-Future-5.png",       // slot #26
            "images/lodging/ms-10-sunset-view.jpg",         // slot #27
            "images/lodging/MS-MasterBedroomFuture-1.png",  // slot #28
            "images/lodging/MS-GuestBedroom-2.png",         // slot #29
            "images/lodging/MS-GuestBedroom-3.png",         // slot #30
            "images/lodging/ms-01-outdoor-lake.jpg",        // slot #31
            "images/lodging/ms-01-pool-outdoor.jpg",        // slot #33
            // slot #34 owner-removed 2026-07-10 evening — was `ms-01-pool.jpg` (dup of slot #20)
            "images/lodging/ms-02-hottub.jpg",              // slot #35
            "images/lodging/ms-02-gym.jpg",                 // slot #37
            "images/lodging/MS_Coffee_cup.png",             // slot #38
            "images/lodging/ms-06-kitchen.jpg",             // slot #39 (⚠ verify — toaster crop)
            "images/lodging/MS-LivingRoom-7.png",           // slot #41
            "images/lodging/ms-01-beachy-decor.jpg",        // slot #42
            "images/lodging/ms-07-kitchen.jpg",             // slot #43 (⚠ verify — air fryer crop)
            "images/lodging/ms-08-kitchen.jpg",             // slot #44 (⚠ verify — crockpot crop)
            "images/lodging/ms-11-living-room.png",         // slot #45
            "images/lodging/MS-FullView-2.png",             // slot #46
            // --- Bonus slots #47–#58 (2026-07-10 owner-fills pass, second wave) ---
            // Owner directive: "make sure all photos that are not marked skip are used".
            // These files exist on disk but weren't part of the initial owner-curated
            // 46-slot library. Appended here as gallery extras so no photo is wasted.
            "images/lodging/MS-DiningRoom-2.png",            // slot #47
            "images/lodging/MS-DiningRoom-4.png",           // slot #48
            "images/lodging/MS-DiningRoom-5.png",           // slot #49
            "images/lodging/MS-LivingRoom-4.png",             // slot #50
            "images/lodging/MS-MasterBedroomFuture-3.png",    // slot #51
            "images/lodging/MS-MasterBedroomFuture-4.png",    // slot #52
            "images/lodging/MS_Balcony_coffee.png",           // slot #53
            "images/lodging/ms-06-gulf-balcony.png",          // slot #54
            "images/lodging/ms-08-living-room.png",           // slot #55
            "images/lodging/ms-10-living-room.png",           // slot #56
            "images/lodging/ms-02-building-view.jpg",         // slot #57
            "images/lodging/ms-05-kitchen.jpg",               // slot #58
            "images/lodging/ms-01-living-room.jpg"            // slot #59
        ],
        // Guest-facing captions displayed under each photo in the site gallery + lightbox.
        // Keyed by image URL exactly. Rendered by app.js when property.photoCaptions is present.
        // Source of truth: MASTER.md §18 (must match verbatim).
        photoCaptions: {
            "images/lodging/MS-FullView-1.png": "Floor-to-ceiling Gulf views welcome you the moment you walk in.",
            "images/lodging/MS-Balcony-1.png": "Start every morning with coffee overlooking the Emerald Coast.",
            "images/lodging/MS_Balcony_Dinner_Setup.png": "Enjoy dinner on your private balcony while the sun sets over the Gulf.",
            "images/lodging/MS_Balcony_Coffee_person.png": "A peaceful spot for sunrise coffee or an afternoon drink with an endless view.",
            "images/lodging/MS-MasterBedroomFuture-2.png": "Wake up just steps from the Gulf in the comfortable king primary suite.",
            "images/lodging/MS-MasterBath-1.png": "Spacious primary bathroom with plenty of room to get ready for the beach.",
            "images/lodging/ms-01-building-view.jpg": "Majestic Sun at Seascape Resort sits directly across from one of the Emerald Coast's most beautiful beaches.",
            "images/lodging/MS-GuestBedroom-1.png": "Cozy queen guest bedroom designed for a restful night's sleep.",
            "images/lodging/MS_Guest_Bath.png": "Second full bathroom conveniently located next to the guest bedroom.",
            "images/lodging/MS-Kitchen-1.png": "Fully equipped kitchen with everything you need for family meals or quick breakfasts.",
            "images/lodging/MS_dinner_setup.png": "Open-concept living space designed for gathering after a day at the beach.",
            "images/lodging/MS_Dinner_sunset.png": "Golden hour fills the living room with unforgettable Gulf sunsets.",
            "images/lodging/ms-09-living-room.png": "Comfortable seating with breathtaking Gulf views from almost every seat.",
            "images/lodging/ms-08-pool-indoor.jpg": "Enjoy the indoor heated pool year-round, rain or shine.",
            "images/lodging/MS-DiningRoom-3.png": "Plenty of space for everyone to relax, dine, and enjoy the view together.",
            "images/lodging/ms-02-kitchen.jpg": "The open kitchen keeps everyone connected while meals are prepared.",
            "images/lodging/MS-LivingRoom-5.png": "Relax with smart TV streaming after a day on the beach.",
            "images/lodging/ms-01-kitchen.jpg": "Breakfast bar seating makes casual meals easy.",
            "images/lodging/ms-01-pool.jpg": "Beautiful Gulf-front resort pool just steps from the beach.",
            "images/lodging/ms-02-pickleball.jpg": "Enjoy complimentary tennis and pickleball courts within the resort.",
            "images/lodging/ms-01-laundry.jpg": "Full-size washer and dryer inside the condo for your convenience.",
            "images/lodging/ms-beach-view.jpg": "Sugar-white sand and emerald water are just an elevator ride away.",
            "images/lodging/MS-Balcony-Future-5.png": "Relax on your private balcony with panoramic Gulf views.",
            "images/lodging/ms-10-sunset-view.jpg": "End every day with spectacular sunsets over the Gulf of Mexico.",
            "images/lodging/MS-MasterBedroomFuture-1.png": "Comfortable king bedroom with a relaxing coastal design.",
            "images/lodging/MS-GuestBedroom-2.png": "Bright and inviting guest bedroom with plenty of storage.",
            "images/lodging/MS-GuestBedroom-3.png": "Clean, modern bathroom stocked and ready for your stay.",
            "images/lodging/ms-01-outdoor-lake.jpg": "Views of the resort and surrounding lagoon from the property.",
            "images/lodging/ms-01-pool-outdoor.jpg": "Multiple pools and resort amenities for every season.",
            "images/lodging/ms-02-hottub.jpg": "Relax in the hot tub after a day in the sun.",
            "images/lodging/ms-02-gym.jpg": "Stay active with the resort's well-equipped fitness center.",
            "images/lodging/MS_Coffee_cup.png": "Fresh coffee is always within reach.",
            "images/lodging/ms-06-kitchen.jpg": "Kitchen includes everyday essentials for easy breakfasts.",
            "images/lodging/MS-LivingRoom-7.png": "Relax in comfort while enjoying the Gulf views.",
            "images/lodging/ms-01-beachy-decor.jpg": "Coastal-inspired décor throughout the condo.",
            "images/lodging/ms-07-kitchen.jpg": "Kitchen includes an air fryer for quick and easy meals.",
            "images/lodging/ms-08-kitchen.jpg": "Perfect for preparing dinner while enjoying a day at the beach.",
            "images/lodging/ms-11-living-room.png": "The perfect place to unwind after sunset.",
            "images/lodging/MS-FullView-2.png": "Open, bright, and designed around the stunning Gulf view.",
            // Bonus slots #47–#58 — captions match MASTER §18.
            "images/lodging/MS-DiningRoom-2.png": "Family-style dining with a view of the Gulf.",
            "images/lodging/MS-DiningRoom-4.png": "Coastal-inspired dining space set for meals with family.",
            "images/lodging/MS-DiningRoom-5.png": "Bright dining area ready to gather everyone together.",
            "images/lodging/MS-LivingRoom-4.png": "Additional living-room angle showcasing the coastal flow.",
            "images/lodging/MS-MasterBedroomFuture-3.png": "Peaceful primary bedroom detail with a coastal touch.",
            "images/lodging/MS-MasterBedroomFuture-4.png": "King primary bedroom with warm, restful styling.",
            "images/lodging/MS_Balcony_coffee.png": "The balcony coffee setup ready for a slow morning.",
            "images/lodging/ms-06-gulf-balcony.png": "Another angle of the private Gulf-front balcony.",
            "images/lodging/ms-08-living-room.png": "Living room bathed in warm sunset light.",
            "images/lodging/ms-10-living-room.png": "Living-room detail from another comfortable seating angle.",
            "images/lodging/ms-02-building-view.jpg": "The resort setting on Scenic Gulf Drive.",
            "images/lodging/ms-05-kitchen.jpg": "Kitchen prep area with everyday essentials.",
            "images/lodging/ms-01-living-room.jpg": "Living room with Gulf-facing sightlines — the everyday gathering space."
        },
        // MASTER §6 canonical groups: "Inside the Condo", "Beach Convenience",
        // "Resort Amenities", "Location & Access". Same 4-group structure as
        // TW2111 (property #4). Rendered by app.js#renderGroupedAmenities using
        // the AMENITY_GROUP_ORDER canonical ordering.
        amenities: [
            { icon: "kitchen", name: "Full Kitchen", group: "Inside the Condo" },
            { icon: "wifi", name: "High-Speed WiFi", group: "Inside the Condo" },
            { icon: "tv", name: "Smart TV", group: "Inside the Condo" },
            { icon: "washer", name: "Washer & Dryer", group: "Inside the Condo" },
            { icon: "ac", name: "Air Conditioning", group: "Inside the Condo" },
            { icon: "heating", name: "Central Heating", group: "Inside the Condo" },
            { icon: "workspace", name: "Laptop-Friendly Workspace", group: "Inside the Condo" },
            { icon: "movie", name: "DVD & Entertainment", group: "Inside the Condo" },
            { icon: "beach", name: "Complimentary Beach Chairs & Umbrella (in condo)", group: "Beach Convenience" },
            { icon: "beach", name: "On-Beach Vendor Rentals Available for Purchase", group: "Beach Convenience" },
            { icon: "pool", name: "Gulf-Front & Outdoor Pools", group: "Resort Amenities" },
            { icon: "indoor-pool", name: "Indoor Heated Pool", group: "Resort Amenities" },
            { icon: "hottub", name: "Hot Tubs", group: "Resort Amenities" },
            { icon: "gym", name: "Fitness Center", group: "Resort Amenities" },
            { icon: "grill", name: "Outdoor Grilling (Resort)", group: "Resort Amenities" },
            { icon: "beach", name: "Direct Beach Access", group: "Location & Access" },
            { icon: "elevator", name: "Elevator Access", group: "Location & Access" },
            { icon: "parking", name: "Covered Parking (On-Site)", group: "Location & Access" }
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
        // Property-page FAQ. Renders in-page (see app.js#renderPropertyFAQ) and
        // emits FAQPage JSON-LD (see scripts/lib/listing-schema.cjs#buildFaqPageSchema).
        // Canonical order + content: docs/listings/MS811/MASTER.md §22 Website FAQ.
        // Ordered by inquiry frequency (highest first). Never reorder without owner sign-off.
        // Edit MASTER first, regenerate listing-5.html, then this array.
        faqs: [
            {
                q: "How many guests can Westlight accommodate?",
                a: "Up to 6 guests. Two bedrooms (king + queen) plus a queen sleeper sofa in the living room."
            },
            {
                q: "Is Westlight really Gulf-front?",
                a: "Yes — the balcony faces the Gulf, and direct beach access is a palm-lined boardwalk downstairs. No busy road to cross."
            },
            {
                q: "Are beach chairs and umbrella included?",
                a: "Yes — complimentary beach chairs and umbrella are available in the condo. Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors."
            },
            {
                q: "What's included in the kitchen?",
                a: "Full kitchen with coffee maker, dishwasher, oven, stove, microwave, and refrigerator, plus a slow cooker, air fryer, food processor, toaster oven, George Foreman countertop grills (large and small), popcorn maker, blender, and veggie chopper. Cookware and dishes for six, plus glassware for 12 or more. Set up for real cooking, not just reheating."
            },
            {
                q: "What resort amenities can we use?",
                a: "Gulf-front outdoor pool, indoor heated pool, hot tubs, fitness center, tennis and pickleball courts, Seascape golf course, and walking paths — all part of the Majestic Sun / Seascape Resort community that Westlight is inside of."
            },
            {
                q: "How do we get to the beach?",
                a: "Direct beach access via a palm-lined boardwalk downstairs. No shuttle, no crossing a road."
            },
            {
                q: "What's the check-in and check-out?",
                a: "Check-in is 4:00 PM. Check-out is 10:00 AM."
            },
            {
                q: "Is parking included?",
                a: "Yes — covered on-site parking is included for registered guests."
            },
            {
                q: "Are pets allowed?",
                a: "No — Westlight is pet-free."
            },
            {
                q: "How far is the airport?",
                a: "Destin–Fort Walton Beach Airport (VPS) is the closest — approximately 40 minutes (24 miles) by car. Northwest Florida Beaches International Airport (ECP) is an alternative — approximately 1 hour (38 miles) by car."
            }
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
            guestFavorite: true,
            comment: "This place was extremely clean and well maintained! It was very roomy and cozy! The front door was right in front of the elevator, which was convenient. Kitchen was fully with everything you need to if you want to stay in and cook. The host is amazing! Easy to reach and responds very quickly. We will definitely be back!!!",
            highlights: ["extremely clean", "host is amazing"]
        },
        {
            id: 2,
            platform: "vrbo",
            author: "Daphne",
            sourceName: "Daphne H.",
            date: "2026-05-15",
            rating: 5,
            comment: "Simone was awesome — she was so thorough and gave us everything we needed for easy parking instructions and check in! We were also able to extend a day and she was great to work with us on that! Great view — easy beach access, beautiful pool! Definitely recommend this host and property!",
            highlights: ["easy beach access", "Definitely recommend"]
        },
        {
            id: 3,
            platform: "booking",
            author: "Candice",
            sourceName: "Candice",
            date: "2026-04-22",
            rating: 5,
            comment: "Absolutely loved the room. It exceeded my expectations. I was very impressed with the layout and decor. The kitchen had everything needed for anything thought of. I've stayed at other condos that I had to go buy kitchen appliances just to cook the meals I wanted either due to not even having it or what was there was missing something or damaged. Loved that there was a coffee shop and souvenir shop there. Loved how close it was to the ocean and the umbrellas and chairs that were set up wasn't so many no one else who didn't rent one could have a view or sit close to the water.",
            highlights: ["exceeded my expectations", "kitchen had everything"]
        },
        {
            id: 4,
            platform: "airbnb",
            author: "Shirley",
            sourceName: "Shirley",
            date: "2025-05-15",
            rating: 5,
            comment: "This 3 bedroom condo is great! Very clean. Plenty of seating. Great view. Well stocked kitchen. Check in and out processes were easy. Host is very friendly and responds quickly!! Would stay here again!!!",
            highlights: ["Very clean", "Well stocked kitchen"]
        },
        {
            id: 5,
            platform: "vrbo",
            author: "Joan",
            sourceName: "Joan W H.",
            date: "2026-04-15",
            rating: 5,
            comment: "My husband and I went with two friends to see the airshow on Panama City Beach. The condo was perfect with the planes flying right in front of us. The condo was extra clean and never have I been in a condo that was so well equipped in the kitchen. Simone, the host, was wonderful with helping us — every time I text her with a question, she answered me immediately. We certainly will consider this unit for the next airshow.",
            highlights: ["extra clean", "so well equipped in the kitchen"]
        },
        {
            id: 6,
            platform: "airbnb",
            author: "Jenny",
            sourceName: "Jenny",
            date: "2024-06-15",
            rating: 5,
            comment: "Simone was always available for questions or concerns. Responded quickly to messages. Condo was clean and comfortable with an amazing view of the beach. Check in and check out was easy and convenient. We would definitely stay at her properties again.",
            highlights: ["always available", "amazing view of the beach"]
        },
        {
            id: 7,
            platform: "airbnb",
            author: "Rebecca & Eric",
            sourceName: "Rebecca & Eric",
            date: "2025-04-15",
            rating: 5,
            comment: "Simone's place was very nice. Beautiful view of the beach. Simone was a great host. Anything we need she was available and helped when needed. We would definitely stay with her again in the future.",
            highlights: ["Beautiful view of the beach", "great host"]
        },
        {
            id: 8,
            platform: "vrbo",
            author: "Jesika",
            sourceName: "Jesika W.",
            date: "2026-06-15",
            rating: 5,
            comment: "Very clean room with an awesome beach view. Was a perfect stay for family of 6. The host was very welcoming and helpful with any questions we had. Would definitely stay again.",
            highlights: ["Very clean", "awesome beach view"]
        },
        {
            id: 9,
            platform: "airbnb",
            author: "Robbilyn",
            sourceName: "Robbilyn",
            date: "2025-10-15",
            rating: 5,
            comment: "We loved everything about the condo. The view was beautiful and quiet. Simone was great to work with and always responded! We will definitely come back!",
            highlights: ["loved everything", "definitely come back"]
        },
        {
            id: 10,
            platform: "vrbo",
            author: "Debbie",
            sourceName: "Debbie F.",
            date: "2025-06-15",
            rating: 5,
            comment: "Over all this was a great place to stay. Host is friendly and very helpful through the whole process. (If I read thru everything that was sent I would not have needed to contact her.)",
            highlights: ["great place to stay", "Host is friendly and very helpful"]
        },
        {
            id: 11,
            platform: "airbnb",
            author: "Samantha",
            sourceName: "Samantha",
            date: "2024-04-15",
            rating: 5,
            comment: "Simone was lovely to work with! The view was definitely worth it. We walked to Pier Park and it was a fun place to be right in the middle of everything!",
            highlights: ["view was definitely worth it", "walked to Pier Park"]
        },
        {
            id: 12,
            platform: "vrbo",
            author: "Ashley",
            sourceName: "Ashley F.",
            date: "2026-04-15",
            rating: 5,
            comment: "Loved this condo! Beautiful view and the host was exceptional.",
            highlights: ["Beautiful view", "host was exceptional"]
        },
        {
            id: 13,
            platform: "vrbo",
            author: "Anita",
            sourceName: "Anita P.",
            date: "2025-03-15",
            rating: 5,
            comment: "Perfect getaway for my husband, mom, daughter and her friend. Will definitely come back. Host was super responsive!",
            highlights: ["Perfect getaway", "super responsive"]
        },
        {
            id: 14,
            platform: "vrbo",
            author: "Todd",
            sourceName: "Todd T.",
            date: "2024-05-15",
            rating: 5,
            comment: "Clean condo, fully equipped, with quick access to the beach.",
            highlights: ["fully equipped", "quick access to the beach"]
        },
        {
            id: 15,
            platform: "airbnb",
            author: "Tara",
            sourceName: "Tara",
            date: "2024-07-15",
            rating: 5,
            comment: "The Airbnb was great in all ways.",
            highlights: ["great in all ways"]
        },
        {
            id: 16,
            platform: "vrbo",
            author: "Danielle",
            sourceName: "Danielle B.",
            date: "2025-05-15",
            rating: 5,
            comment: "We had a great time and the host was excellent to work with. The condo was in perfect condition with plenty of room.",
            highlights: ["host was excellent", "perfect condition"]
        },
        {
            id: 17,
            platform: "vrbo",
            author: "Megan",
            sourceName: "Megan O.",
            date: "2026-06-15",
            rating: 5,
            comment: "We had a blast. A few things were messed up in the room but the host jumped right on having someone come check it and fix it! It was a good choice for my family!",
            highlights: ["had a blast", "good choice for my family"]
        },
        {
            id: 18,
            platform: "booking",
            author: "Stephanie",
            sourceName: "Stephanie",
            date: "2026-02-23",
            rating: 5,
            comment: "Right on the water! So easy for a family to enjoy the beach. All the other guests were exceptionally kind. We stopped on a road trip during the off season, so the indoor pool was a bonus.",
            highlights: ["Right on the water", "easy for a family"]
        },
        {
            id: 19,
            platform: "vrbo",
            author: "Darlene",
            sourceName: "Darlene T.",
            date: "2026-03-15",
            rating: 5,
            comment: "Beach view was absolutely beautiful from our balcony.",
            highlights: ["Beach view was absolutely beautiful"]
        },
        {
            id: 20,
            platform: "airbnb",
            author: "Estefania",
            sourceName: "Estefania",
            date: "2025-04-15",
            rating: 5,
            comment: "Great place and great view toward the beach! Place was clean. Enough space for our group of 7!",
            highlights: ["great view", "Enough space for our group of 7"]
        },
        {
            id: 21,
            platform: "airbnb",
            author: "John",
            sourceName: "John",
            date: "2025-05-15",
            rating: 5,
            comment: "Great place with a great host! Would recommend to all.",
            highlights: ["great host", "recommend"]
        },
        {
            id: 22,
            platform: "airbnb",
            author: "Brandon",
            sourceName: "Brandon",
            date: "2025-06-15",
            rating: 5,
            comment: "It was a great stay and we're looking forward to coming back again.",
            highlights: ["great stay", "coming back again"]
        },
        {
            id: 23,
            platform: "vrbo",
            author: "Jessica",
            sourceName: "JESSICA R.",
            date: "2026-05-15",
            rating: 5,
            comment: "Very nice condo. Directly on the beach. Easy check in.",
            highlights: ["Directly on the beach", "Easy check in"]
        },
        {
            id: 24,
            platform: "airbnb",
            author: "Diana",
            sourceName: "Diana",
            date: "2024-07-15",
            rating: 5,
            comment: "Very good host, very attentive.",
            highlights: ["Very good host", "very attentive"]
        },
        {
            id: 25,
            platform: "vrbo",
            author: "Carrie",
            sourceName: "carrie g.",
            date: "2025-07-15",
            rating: 5,
            comment: "Everything went great.",
            highlights: ["Everything went great"]
        }
    ],
    // Westlight (MS811) reviews — 2026-07-10 refresh: 28 real max-rating OTA reviews
    // sourced from VRBO (17) + Airbnb (11). Curated in
    // `docs/listings/MS811/reviews/CURATION_SHORTLIST.md` per portfolio parity with
    // TW2111 (Option A: publish only real max-rating reviews; no rating manipulation).
    //
    // Naming policy (owner directive 2026-07-10, overrides MASTER §23 legacy full-name
    // policy specifically for MS811): first name only.
    //   - `author` field = first name as it appears publicly on the source OTA
    //     (title-cased where source used lowercase, e.g., "maria b." → "Maria").
    //   - `sourceName` preserves the full OTA-captured name (first + last initial)
    //     for the audit trail. NEVER rendered by the site.
    //   - `platform` field is for internal audit only; `renderReviews()` renders
    //     the source badge based on this value.
    //
    // Rating policy: every `rating: 5` here is real max-rating on the source OTA
    // (VRBO 10/10 → 5; Airbnb 5★ → 5). No aesthetic manipulation. Publish or
    // exclude, never alter — see BRAND_GUIDELINES.md `No rating manipulation`.
    //
    // Aggregate policy: TW2111 parity — property #5 renders the aggregate rating chip
    // ("5.0 · 28 Featured Reviews · Verified Guests") above the review section, and
    // JSON-LD `AggregateRating` is emitted with `ratingValue: 5.0, reviewCount: 28`.
    // Scoped to the published set (honest against the 28 real max-rating reviews).
    // The broader 86-review archive (VRBO 9.8/10 + Airbnb 4.86/5) is NOT claimed
    // as an aggregate here — see docs/listings/MS811/reviews/README.md for the
    // separate archive that supports this scoping decision.
    //
    // Body policy: verbatim from the source OTA with editorial trims documented
    // per-review in CURATION_SHORTLIST.md. Trims applied here cover only two
    // categories: (1) forbidden-language removal per portfolio §21 (no floor/unit
    // numbers; no "Gulf of America"; no competitor property references); and
    // (2) minor punctuation cleanup for readability. No sentiment changes, no
    // rewording, no synthesized language.
    5: [
        {
            id: 1,
            platform: "vrbo",
            author: "Jeannie",
            sourceName: "Jeannie M.",
            date: "2026-04-15",
            rating: 5,
            guestFavorite: true,
            comment: "This stay was fantastic and we will definitely be back. It has an amazing ocean view with a very large balcony. The kitchen was one of the most stocked I've ever seen with plenty of dishes, crock pot, air fryer, etc. The water pressure was great and getting in and out of the door was easy. We loved it and plan to make it an annual tradition.",
            highlights: ["amazing ocean view", "kitchen was one of the most stocked"]
        },
        {
            id: 2,
            platform: "airbnb",
            author: "Ibrahim",
            sourceName: "Ibrahim",
            date: "2026-07-01",
            rating: 5,
            comment: "Exceptional experience, spectacular location and views. Apartment had all the necessary amenities. It was very peaceful. Easy check in and easy access. Again location was a true highlight — doesn't get better than that on Miramar beach front.",
            highlights: ["spectacular location and views", "location was a true highlight"]
        },
        {
            id: 3,
            platform: "airbnb",
            author: "Lacey",
            sourceName: "Lacey",
            date: "2026-04-15",
            rating: 5,
            comment: "We enjoyed our family stay at this place! It was exactly as described and on the beach!! The condo was fresh, clean, and roomy. Simone was an excellent host by communicating quickly! We will definitely stay again!!",
            highlights: ["fresh, clean, and roomy", "excellent host"]
        },
        {
            id: 4,
            platform: "vrbo",
            author: "Jacqueline",
            sourceName: "Jacqueline R.",
            date: "2026-04-15",
            rating: 5,
            comment: "Beautiful Views! Conveniently located. Condo had all the amenities we needed! Would definitely book again. Easy check in process. Thank you Simone for a wonderful stay!",
            highlights: ["Beautiful Views", "would definitely book again"]
        },
        {
            id: 5,
            platform: "airbnb",
            author: "Roeland",
            sourceName: "Roeland",
            date: "2026-05-15",
            rating: 5,
            comment: "Sometimes you find something beautiful, but this location and apartment are amazing. If you are planning to book, don't hesitate — you won't be disappointed. And the best part is the view — amazing!",
            highlights: ["location and apartment are amazing", "the view — amazing"]
        },
        {
            id: 6,
            platform: "vrbo",
            author: "Steve",
            sourceName: "Steve L.",
            date: "2026-02-15",
            rating: 5,
            comment: "Great view. You get good sun from noon on and plenty of porch furniture. Everything worked as it should and my host was awesome. Already booking my next trip there.",
            highlights: ["Great view", "host was awesome"]
        },
        {
            id: 7,
            platform: "vrbo",
            author: "Kenneth",
            sourceName: "Kenneth S.",
            date: "2025-10-15",
            rating: 5,
            comment: "The condo was beautifully furnished and had a killer view from the balcony with access from the master bedroom. Nice furnishings and very generous complement of dishes and cooking utensils. Looking forward to returning. Everything as advertised or better.",
            highlights: ["killer view", "everything as advertised or better"]
        },
        {
            id: 8,
            platform: "airbnb",
            author: "Sara",
            sourceName: "Sara",
            date: "2026-07-05",
            rating: 5,
            comment: "Nice condo with a great view. Within walking distance of a lot of stuff.",
            highlights: ["great view", "walking distance of a lot of stuff"]
        },
        {
            id: 9,
            platform: "airbnb",
            author: "Sayeed",
            sourceName: "Sayeed",
            date: "2025-09-15",
            rating: 5,
            comment: "Great spot right by the beach, nice balcony, easy parking. Host was super communicative. House had everything you would need — overall perfect spot.",
            highlights: ["Great spot right by the beach", "Host was super communicative"]
        },
        {
            id: 10,
            platform: "vrbo",
            author: "Andrew",
            sourceName: "Andrew Y.",
            date: "2024-07-15",
            rating: 5,
            comment: "Best location in Destin. Perfect place, on water and a good pool. Room very clean and has everything you may need. Will be going back soon.",
            highlights: ["Best location in Destin", "very clean"]
        },
        {
            id: 11,
            platform: "vrbo",
            author: "Duane",
            sourceName: "duane r.",
            date: "2026-02-15",
            rating: 5,
            comment: "Our host communicated very well and always in a timely fashion and met all of our needs promptly! This condo was very well stocked, more than any other VRBO we have stayed at. The amount of dishware was amazing!! He also had a crockpot and an air fryer for our use — usually we have to bring our own! The Gulf view is always amazing. We had some company this year stay with us and they were amazed with our view!!!!",
            highlights: ["dishware was amazing", "host communicated very well"]
        },
        {
            id: 12,
            platform: "airbnb",
            author: "John",
            sourceName: "John",
            date: "2025-05-15",
            rating: 5,
            comment: "This location gets you right in the heart of Miramar Beach. Close to restaurants and shopping. Spent a week here with my wife and granddaughter. Met a lot of nice people from all over. Super family friendly — looking forward to returning!",
            highlights: ["heart of Miramar Beach", "Super family friendly"]
        },
        {
            id: 13,
            platform: "airbnb",
            author: "Steph",
            sourceName: "Steph",
            date: "2025-05-15",
            rating: 5,
            comment: "Amazing location with incredible views without all the tourists. The unit was exactly as described, check-in couldn't be smoother, communication was excellent, and overall it was a great value. We'd absolutely stay here again and recommend it without hesitation.",
            highlights: ["Amazing location with incredible views", "great value"]
        },
        {
            id: 14,
            platform: "vrbo",
            author: "Aiza",
            sourceName: "Aiza D.",
            date: "2024-06-15",
            rating: 5,
            comment: "The condo was very clean and had a great view. We really enjoyed for a short stay and plenty of restaurants to eat nearby.",
            highlights: ["very clean", "Great view"]
        },
        {
            id: 15,
            platform: "airbnb",
            author: "Dina",
            sourceName: "Dina",
            date: "2025-04-15",
            rating: 5,
            comment: "Beautiful view, great location, and the host was friendly and communicative too. We would stay here again. Loved walking on the beautiful beach and to dinner every night. Very nice place!",
            highlights: ["Beautiful view", "great location"]
        },
        {
            id: 16,
            platform: "vrbo",
            author: "Maria",
            sourceName: "maria b.",
            date: "2025-07-15",
            rating: 5,
            comment: "Everything was perfect from check in to check out. Property was clean and organized. Location was perfect!",
            highlights: ["Everything was perfect", "Location was perfect"]
        },
        {
            id: 17,
            platform: "airbnb",
            author: "Stacy",
            sourceName: "Stacy",
            date: "2025-05-15",
            rating: 5,
            comment: "Highly recommend! The views were spectacular and we loved the easy access to the beach. The condo was very clean and had everything you needed for your stay. We will definitely be back!",
            highlights: ["views were spectacular", "everything you needed"]
        },
        {
            id: 18,
            platform: "vrbo",
            author: "Christy",
            sourceName: "Christy M.",
            date: "2024-03-15",
            rating: 5,
            comment: "Beautiful, clean, great area. Great view of the ocean. Parking is easy. Will stay again.",
            highlights: ["Beautiful, clean", "Will stay again"]
        },
        {
            id: 19,
            platform: "vrbo",
            author: "Dominique",
            sourceName: "Dominique D.",
            date: "2023-10-15",
            rating: 5,
            comment: "This property was great! The view of the beach was beautiful. The condo was nice and big. We would stay here again.",
            highlights: ["view of the beach was beautiful", "we would stay here again"]
        },
        {
            id: 20,
            platform: "airbnb",
            author: "Emily",
            sourceName: "Emily (Hamilton, OH)",
            date: "2024-06-15",
            rating: 5,
            comment: "Perfect location. Easy to get to the beach every day. We loved having the ice cream shop and souvenir store located right in the same complex.",
            highlights: ["Perfect location", "easy to get to the beach every day"]
        },
        {
            id: 21,
            platform: "vrbo",
            author: "Gina",
            sourceName: "Gina H.",
            date: "2024-05-15",
            rating: 5,
            comment: "Nice unit, comfy beds. Enjoyed my week at Destin. Simone was very prompt to address my issue with AC and was fixed right away!",
            highlights: ["comfy beds", "Simone was very prompt"]
        },
        {
            id: 22,
            platform: "vrbo",
            author: "Ashay",
            sourceName: "Ashay D.",
            date: "2023-12-15",
            rating: 5,
            comment: "We love this area. Perfect location right in front of the beach. The amenities are totally family oriented. Heated pool. Hot tubs and nice fitness facility. The parking is super convenient. The host is very responsive and the apartment is very clean and tidy.",
            highlights: ["Perfect location right in front of the beach", "very clean and tidy"]
        },
        {
            id: 23,
            platform: "vrbo",
            author: "Gail",
            sourceName: "Gail W.",
            date: "2023-06-15",
            rating: 5,
            comment: "Beautiful view of the beach, convenient, everything we needed in condo. Appreciated the brightness of bathroom lighting. Host quickly responded to questions.",
            highlights: ["Beautiful view of the beach", "everything we needed"]
        },
        {
            id: 24,
            platform: "vrbo",
            author: "David",
            sourceName: "David P.",
            date: "2023-03-15",
            rating: 5,
            comment: "My family of 4 and my mother in law came down for a week and had a blast. There was plenty of room with the pull out couch. The view is great. There are restaurants within walking distance. The fish at Whale's Tale was great. I would go back tomorrow if I could.",
            highlights: ["Great location", "would go back tomorrow"]
        },
        {
            id: 25,
            platform: "airbnb",
            author: "Christopher",
            sourceName: "Christopher",
            date: "2021-06-15",
            rating: 5,
            comment: "Perfect location!! The view is awesome and the setup is perfect — can't wait to go back! The bed is comfortable!!! Highly recommend.",
            highlights: ["Perfect location", "Highly recommend"]
        },
        {
            id: 26,
            platform: "vrbo",
            author: "Eileen",
            sourceName: "Eileen P.",
            date: "2022-03-15",
            rating: 5,
            comment: "Planned this trip with my husband and family. Our first time going to the Panhandle. We had so many plans but they were interrupted by rain, cold, and fog the entire trip. We absolutely made the best of it. What made it easy was this place. Truly a wonderful stay in a convenient location with a view of the ocean. It is spacious and when I say immaculate!! I'm such a stickler for clean accommodations and this was great. The host was awesome and so responsive. We will be coming back. Five stars is not sufficient.",
            highlights: ["Immaculate", "Five stars is not sufficient"]
        },
        {
            id: 27,
            platform: "vrbo",
            author: "Erin",
            sourceName: "Erin D.",
            date: "2021-09-15",
            rating: 5,
            comment: "We loved it here! Fantastic view, great location, very clean, and the owner was so nice and very responsive. We were able to walk to many restaurants for dinner each night. Would absolutely stay here again.",
            highlights: ["Fantastic view", "would absolutely stay here again"]
        },
        {
            id: 28,
            platform: "vrbo",
            author: "Dexter",
            sourceName: "Dexter H.",
            date: "2021-02-15",
            rating: 5,
            comment: "The property was beautiful, wonderful view of the Gulf from our balcony. The beach was just a very short walk. Simone was readily available if we had any questions. She was great! We even exchanged pictures at the end of our stay. We were really looking forward to a short vacation, and this delivered. We would definitely rent here again!",
            highlights: ["wonderful view of the Gulf", "would definitely rent here again"]
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROPERTIES, REVIEWS, SITE_BASE_URL, SITE_CONTACT, WEB3FORMS_ACCESS_KEY };
}