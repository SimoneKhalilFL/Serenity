// ==========================================
// Site-wide contact & URLs (edit for production)
// ==========================================
const SITE_BASE_URL = 'https://serenityrentals.com';
const SITE_CONTACT = {
    email: 'FloridaVacationRental2020@gmail.com',
    phoneTel: '+18505550142',
    phoneDisplay: '(850) 555-0142',
    replyWithinHours: 24,
    cancellationNote: 'Exact cancellation terms are confirmed with the owner when you book. Ask about flexibility if your plans change.'
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
        description: "Escape to this luxurious mountain chalet nestled in the heart of Aspen. This 4-bedroom retreat offers stunning mountain views, a cozy fireplace, and easy access to world-class skiing. The open-concept living area features vaulted ceilings and floor-to-ceiling windows. Enjoy après-ski relaxation in the private hot tub or gather around the outdoor fire pit. The fully equipped kitchen is perfect for preparing hearty meals after a day on the slopes.",
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
        title: "Tidewater Beach Resort - 3BR Beachfront Condo",
        listingHeadline: "Gulf-front Tidewater condo — space for the whole crew",
        listingTagline: "Resort pools, beach access, and Pier Park within easy reach.",
        location: "Panama City Beach, Florida",
        description: `Experience Panama City Beach from Tidewater Beach Resort—Gulf-front living with space for families and groups. This beachfront condo features cool tile throughout, a bright living area with comfortable seating and a smart TV, and a balcony with sweeping Gulf views.

Thoughtful décor, granite counters, and stainless appliances make it easy to settle in whether you're here for a long weekend or a full week.

**Kitchen**

Full kitchen for cooking and dining:
• Granite countertops, stainless appliances, refrigerator, stove, oven, microwave, dishwasher
• Cookware, dishes, and utensils
• Coffee maker, toaster, blender; dining area for family meals
• Enjoy meals inside or on the balcony overlooking the Gulf

**Sleeping Arrangements**

• 3 bedrooms, 3 bathrooms — sleeps up to 8 guests
• Master bedroom: king bed
• Bedroom 2: queen bed
• Bunk room: two bunk beds
• Living room: queen sleeper sofa

**Location**

Tidewater sits on the west end of Panama City Beach with direct Gulf access and sugar-white sand steps from your door. Pier Park—shopping, dining, and entertainment—is a short walk away. Russell-Fields City Pier is nearby for fishing and sunsets. You get quiet beachfront relaxation with conveniences close at hand.

**Tidewater Beach Resort Amenities**

Guests enjoy resort-style extras across the property:
• Two large lagoon-style Gulf-front pools with hot tubs
• Heated indoor pool, Roman spa, steam room, and sauna
• 4,300 sq. ft. fitness center
• Movie theater, arcade, restaurant, coffee shop, and tiki bar
• Seasonal kids' activities, gift shop, and outdoor grilling areas
• Direct beach access from the resort

**Registration**

The Tidewater Registration fee is $48 + tax + credit card fee (Total: $54.04). Guests who register 24 hours or more in advance will save $10.

The registration fee includes up to 2 parking passes and up to 8 wristbands. Wristbands are required for all occupants over age 12.

Registration can be done at https://www.tidewaterhoa.com/registration/

**Things to Do**

From Tidewater you're minutes from the best of PCB:
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
            previewImage: "images/lodging/0327edd4.jpg"
        },
        maxGuests: 8,
        bedrooms: 3,
        bathrooms: 3,
        baseNightlyRate: 225,
        cleaningFee: 250,
        taxRate: 0.12,
        refundableDamageDeposit: 300,
        featured: false,
        images: {
            "Views & Beach": [
                "images/lodging/0327edd4.jpg",
                "images/lodging/w1200h768x0y32-35a299f6.jpg",
                "images/lodging/1c8d5689.jpg",
                "images/lodging/76c26b3e.jpg",
                "images/lodging/840c2634.jpg",
                "images/lodging/ab71f25e.jpg",
                "images/lodging/e6dd08b2.jpg",
                "images/lodging/e96e1cdc.jpg"
            ],
            "Living Room": [
                "images/lodging/1a745244.jpg",
                "images/lodging/69a3feb9.jpg",
                "images/lodging/b70e0e33.jpg"
            ],
            "Kitchen & Dining": [
                "images/lodging/3798f6d1.jpg",
                "images/lodging/6e51f408.jpg",
                "images/lodging/77e9cb0b.jpg",
                "images/lodging/d008903d.jpg"
            ],
            "Master Bedroom": [
                "images/lodging/81ab2c30.jpg",
                "images/lodging/ddc625fa.jpg"
            ],
            "Bedroom 2": [
                "images/lodging/186c0693.jpg",
                "images/lodging/e20020cc.jpg"
            ],
            "Bunk Room": [
                "images/lodging/e7cf581d.jpg"
            ],
            "Bathrooms": [
                "images/lodging/3032ff41.jpg",
                "images/lodging/8b283b03.jpg",
                "images/lodging/a2bccfd9.jpg",
                "images/lodging/cd7cfc50.jpg"
            ],
            "Balcony": [
                "images/lodging/48ff7988.jpg",
                "images/lodging/b16027df.jpg",
                "images/lodging/e126cd51.jpg"
            ],
            "Amenities": [
                "images/lodging/0aef567d.jpg",
                "images/lodging/35474342.jpg",
                "images/lodging/37e06634.jpg",
                "images/lodging/47765a51.jpg",
                "images/lodging/5e4d7f21.jpg",
                "images/lodging/9b2bdc29.jpg",
                "images/lodging/d4a91ca0.jpg",
                "images/lodging/d727c8fb.jpg",
                "images/lodging/ec8dbbfb.jpg",
                "images/lodging/f2e52ee9.jpg",
                "images/lodging/f4f9ce40.jpg",
                "images/lodging/ffba253e.jpg"
            ]
        },
        amenities: [
            { icon: "wifi", name: "High-Speed WiFi" },
            { icon: "kitchen", name: "Full Kitchen" },
            { icon: "ac", name: "Air Conditioning" },
            { icon: "tv", name: "Smart TV" },
            { icon: "washer", name: "Washer & Dryer" },
            { icon: "beach", name: "Direct Beach Access" },
            { icon: "parking", name: "Parking Available" },
            { icon: "lagoon", name: "Lagoon Pools" },
            { icon: "indoor-pool", name: "Indoor Heated Pool" },
            { icon: "hottub", name: "Hot Tubs" },
            { icon: "spa", name: "Roman Spa" },
            { icon: "movie", name: "Movie & Media Center" },
            { icon: "conference", name: "Conference Center" },
            { icon: "gym", name: "Fitness Center" },
            { icon: "arcade", name: "Arcade & Seasonal Kids' Activities" },
            { icon: "restaurant", name: "Restaurant, Coffee Shop & Tiki Bar" },
            { icon: "grill", name: "Outdoor Grilling Area & Gift Shop" }
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
            "3 Bedrooms 3 Bath",
            "Sleeps 8",
            "1 king · 1 queen · 2 bunk beds · queen sleeper"
        ],
        seasonalAdjustments: [
            // 2026 Pricing based on Panhandle Getaways calendar
            { startDate: "2026-01-01", endDate: "2026-01-31", adjustment: 1.0 },   // January: $225/night base
            { startDate: "2026-02-01", endDate: "2026-02-28", adjustment: 0.55 },  // February: $125/night
            { startDate: "2026-03-01", endDate: "2026-03-14", adjustment: 1.3 },   // Early March: ~$290/night
            { startDate: "2026-03-15", endDate: "2026-04-11", adjustment: 1.5 },   // Spring Break: ~$340/night
            { startDate: "2026-04-12", endDate: "2026-05-15", adjustment: 1.2 },   // Late Spring: ~$270/night
            { startDate: "2026-05-16", endDate: "2026-05-31", adjustment: 2.2 },   // Memorial Day: ~$495/night
            { startDate: "2026-06-01", endDate: "2026-06-27", adjustment: 2.1 },   // Early Summer: ~$475/night
            { startDate: "2026-06-28", endDate: "2026-07-11", adjustment: 2.7 },   // July 4th Peak: ~$610/night
            { startDate: "2026-07-12", endDate: "2026-07-31", adjustment: 2.0 },   // Mid Summer: ~$450/night
            { startDate: "2026-08-01", endDate: "2026-08-31", adjustment: 1.4 },   // August: ~$315/night
            { startDate: "2026-09-01", endDate: "2026-09-30", adjustment: 1.3 },   // September: ~$295/night
            { startDate: "2026-10-01", endDate: "2026-10-31", adjustment: 1.2 },   // October: ~$270/night
            { startDate: "2026-11-01", endDate: "2026-11-21", adjustment: 1.0 },   // Early Nov: $225/night
            { startDate: "2026-11-22", endDate: "2026-11-28", adjustment: 1.2 },   // Thanksgiving: ~$269/night
            { startDate: "2026-11-29", endDate: "2026-12-16", adjustment: 1.0 },   // Dec: $225/night
            { startDate: "2026-12-17", endDate: "2026-12-31", adjustment: 1.5 }    // Holidays: ~$340/night
        ],
        unavailableDates: [
            // 2025 - From VRBO
            "2025-02-14", "2025-02-15", "2025-02-16",
            "2025-03-22", "2025-03-23", "2025-03-24", "2025-03-25", "2025-03-26",
            "2025-04-02", "2025-04-03", "2025-04-04",
            "2025-05-28", "2025-05-29", "2025-05-30", "2025-05-31",
            "2025-06-02", "2025-06-03", "2025-06-04", "2025-06-05", "2025-06-06",
            "2025-06-08", "2025-06-09", "2025-06-10", "2025-06-11", "2025-06-12",
            "2025-06-15", "2025-06-16", "2025-06-17", "2025-06-18", "2025-06-19", "2025-06-20",
            "2025-06-22", "2025-06-23", "2025-06-24", "2025-06-25", "2025-06-26",
            "2025-06-28", "2025-06-29", "2025-06-30", "2025-07-01", "2025-07-02", "2025-07-03", "2025-07-04",
            "2025-07-10", "2025-07-11", "2025-07-12", "2025-07-13",
            "2025-07-15", "2025-07-16", "2025-07-17", "2025-07-18", "2025-07-19", "2025-07-20", "2025-07-21",
            "2025-07-23", "2025-07-24", "2025-07-25", "2025-07-26",
            "2025-07-29", "2025-07-30", "2025-07-31", "2025-08-01",
            "2025-08-04", "2025-08-05", "2025-08-06", "2025-08-07", "2025-08-08", "2025-08-09", "2025-08-10",
            // 2026 - From VRBO
            "2026-04-10", "2026-04-11",
            "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24",
            "2026-06-18", "2026-06-19", "2026-06-20",
            // 2026 - From Airbnb
            "2026-05-28", "2026-05-29", "2026-05-30", "2026-05-31",
            // 2026 - From Booking.com
            "2026-06-21", "2026-06-22", "2026-06-23", "2026-06-24", "2026-06-25", "2026-06-26", "2026-06-27", "2026-06-28",
            "2026-07-03", "2026-07-04",
            "2026-07-26", "2026-07-27", "2026-07-28", "2026-07-29", "2026-07-30", "2026-07-31",
            "2026-08-01", "2026-08-02", "2026-08-03", "2026-08-04", "2026-08-05", "2026-08-06", "2026-08-07", "2026-08-08"
        ],
        // iCal sync URLs for future reference:
        // VRBO: http://www.vrbo.com/icalendar/2024eca45f854672b712124668878a90.ics?nonTentative
        // Airbnb: https://www.airbnb.com/calendar/ical/1102297481087079379.ics?s=90116a99e75615dcf80171ddb4905286
        // Booking: https://ical.booking.com/v1/export?t=35b688fc-4684-44a0-8867-82a2e361b18e
        bookingLinks: {
            airbnb: 'https://www.airbnb.com/rooms/1102297481087079379'
        }
    },
    {
        id: 5,
        title: "Majestic Sun 811",
        listingHeadline: "8th-floor Gulf views at Majestic Sun",
        listingTagline: "Boardwalk to the beach — Seascape pools, golf, and dining nearby.",
        location: "Destin, Florida",
        description: `Experience the best of Destin at Majestic Sun, where Gulf-front living meets comfort and convenience. This beautifully appointed 8th-floor beachfront condo offers breathtaking panoramic views of the emerald waters and sugar-white sands of the Gulf of Mexico. Step onto your private balcony to enjoy morning coffee, afternoon sea breezes, or unforgettable sunsets over the water.

Inside, the condo features a spacious, light-filled living area, coastal-inspired décor, and a fully equipped kitchen ideal for everything from quick breakfasts to family dinners. Thoughtful updates, modern finishes, and comfortable furnishings make this a perfect home base for couples, families, and friends seeking a relaxing beach getaway.

**Kitchen**

Full kitchen setup for cooking and dining:
• Refrigerator, stove, oven, microwave, dishwasher
• Dishes and utensils; pantry items
• Coffee maker, toaster, ice maker, freezer, blender
• Pots and pans; kitchen island; dining table; baking sheet
• Barbecue/grill utensils; coffee; wine glasses
• Slow cooker; air fryer; GEORGE FOREMAN grills (big and small); popcorn machine; food processor; spices; toaster oven; cookie sheets; pizza pan; veggie chopper

**Sleeping Arrangements**

• 2 bedrooms — sleeps 1–6 guests
• Bedroom 1: king bed
• Bedroom 2: queen bed
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
• 2 Birds Coffee & Café
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
        baseNightlyRate: 200,
        cleaningFee: 250,
        taxRate: 0.12,
        refundableDamageDeposit: 300,
        featured: false,
        coordinates: { lat: 30.3759919, lng: -86.3686236 },
        googleMapsUrl: "https://www.google.com/maps/place/Majestic+Sun/@30.3797734,-86.388212,15z/data=!4m10!1m2!2m1!1smajestic+sun+miramar+beach!3m6!1s0x88915b85c1712a1b:0x52984811f11ae7cb!8m2!3d30.3759919!4d-86.3686236",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=30.3759919,-86.3686236&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C30.3759919,-86.3686236",
        webcam: "https://www.youtube.com/embed/TyX02EtQcYI",
        images: [
            "images/lodging/02c6975d.jpg",
            "images/lodging/02c6975d.jpg",
            "images/lodging/130850e8.jpg",
            "images/lodging/145de5db.jpg",
            "images/lodging/23712c93.jpg",
            "images/lodging/130850e8.jpg",
            "images/lodging/145de5db.jpg",
            "images/lodging/29feb307.jpg",
            "images/lodging/23712c93.jpg",
            "images/lodging/29feb307.jpg",
            "images/lodging/2e26ea7e.jpg",
            "images/lodging/2e26ea7e.jpg",
            "images/lodging/3ec14d3a.jpg",
            "images/lodging/4c733aa2.jpg",
            "images/lodging/523b06b4.jpg",
            "images/lodging/3ec14d3a.jpg",
            "images/lodging/53fc2fa5.jpg",
            "images/lodging/4c733aa2.jpg",
            "images/lodging/523b06b4.jpg",
            "images/lodging/53fc2fa5.jpg",
            "images/lodging/60f18eb1.jpg",
            "images/lodging/60f18eb1.jpg",
            "images/lodging/64995824.jpg",
            "images/lodging/651d5007.jpg",
            "images/lodging/64995824.jpg",
            "images/lodging/651d5007.jpg",
            "images/lodging/73fcfcbf.jpg",
            "images/lodging/76a76394.jpg",
            "images/lodging/73fcfcbf.jpg",
            "images/lodging/76a76394.jpg",
            "images/lodging/83debb6c.jpg",
            "images/lodging/83debb6c.jpg",
            "images/lodging/84b5d288.jpg",
            "images/lodging/86666fbd.jpg",
            "images/lodging/873e4db7.jpg",
            "images/lodging/8faf312a.jpg",
            "images/lodging/90-12d3aab3.jpg",
            "images/lodging/84b5d288.jpg",
            "images/lodging/90-dd9eff64.jpg",
            "images/lodging/86666fbd.jpg",
            "images/lodging/873e4db7.jpg",
            "images/lodging/8faf312a.jpg",
            "images/lodging/98a48f5c.jpg",
            "images/lodging/90-12d3aab3.jpg",
            "images/lodging/90-dd9eff64.jpg",
            "images/lodging/a3ede817.jpg",
            "images/lodging/98a48f5c.jpg",
            "images/lodging/be8d0080.jpg",
            "images/lodging/a3ede817.jpg",
            "images/lodging/c8091c0a.jpg",
            "images/lodging/ca39c448.jpg",
            "images/lodging/be8d0080.jpg",
            "images/lodging/c8091c0a.jpg",
            "images/lodging/ca39c448.jpg",
            "images/lodging/d6bf8bed.jpg",
            "images/lodging/d6bf8bed.jpg",
            "images/lodging/e6b37388.jpg",
            "images/lodging/fd026101.jpg",
            "images/lodging/e6b37388.jpg",
            "images/lodging/ffced2f9.jpg",
            "images/lodging/fd026101.jpg",
            "images/lodging/02c6975d.jpg",
            "images/lodging/ffced2f9.jpg"
        ],
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
            // 2026 Pricing based on calendar
            { startDate: "2026-03-01", endDate: "2026-03-14", adjustment: 0.75 },   // Early March: ~$150/night
            { startDate: "2026-03-15", endDate: "2026-03-28", adjustment: 1.05 },   // Mid-Late March: $210/night
            { startDate: "2026-03-29", endDate: "2026-03-31", adjustment: 1.375 },  // End March: $275/night
            { startDate: "2026-04-01", endDate: "2026-04-30", adjustment: 1.45 },   // April: ~$290/night
            { startDate: "2026-05-01", endDate: "2026-05-23", adjustment: 1.375 },  // Early May: $275/night
            { startDate: "2026-05-24", endDate: "2026-05-31", adjustment: 1.70 },   // Memorial Day: $340/night
            { startDate: "2026-06-01", endDate: "2026-06-30", adjustment: 1.875 },  // June: $375/night
            { startDate: "2026-07-01", endDate: "2026-07-31", adjustment: 1.875 },  // July: $375/night
            { startDate: "2026-08-01", endDate: "2026-08-08", adjustment: 1.375 },  // Early Aug: $275/night
            { startDate: "2026-08-09", endDate: "2026-08-31", adjustment: 1.10 },   // Late Aug: $220/night
            { startDate: "2026-09-01", endDate: "2026-09-30", adjustment: 1.10 },   // September: $220/night
            { startDate: "2026-10-01", endDate: "2026-10-31", adjustment: 1.10 },   // October: $220/night
            { startDate: "2026-11-01", endDate: "2026-11-30", adjustment: 1.10 },   // November: $220/night
            { startDate: "2026-12-01", endDate: "2026-12-12", adjustment: 0.90 },   // Early Dec: $180/night
            { startDate: "2026-12-13", endDate: "2026-12-31", adjustment: 1.125 }   // Holiday: $225/night
        ],
        unavailableDates: [
            // 2025 - From VRBO (Jan-Feb blocked)
            "2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05", "2025-01-06", "2025-01-07",
            "2025-01-08", "2025-01-09", "2025-01-10", "2025-01-11", "2025-01-12", "2025-01-13", "2025-01-14",
            "2025-01-15", "2025-01-16", "2025-01-17", "2025-01-18", "2025-01-19", "2025-01-20", "2025-01-21",
            "2025-01-22", "2025-01-23", "2025-01-24", "2025-01-25", "2025-01-26", "2025-01-27", "2025-01-28",
            "2025-01-29", "2025-01-30", "2025-01-31",
            "2025-02-01", "2025-02-02", "2025-02-03", "2025-02-04", "2025-02-05", "2025-02-06", "2025-02-07",
            "2025-02-08", "2025-02-09", "2025-02-10", "2025-02-11", "2025-02-12", "2025-02-13", "2025-02-14",
            "2025-02-15", "2025-02-16", "2025-02-17", "2025-02-18", "2025-02-19", "2025-02-20", "2025-02-21",
            "2025-02-22", "2025-02-23", "2025-02-24", "2025-02-25", "2025-02-26", "2025-02-27",
            // March 2025 - VRBO
            "2025-03-07", "2025-03-08", "2025-03-09", "2025-03-10", "2025-03-11", "2025-03-12", "2025-03-13",
            // April 2025 - VRBO
            "2025-04-02", "2025-04-03", "2025-04-04", "2025-04-05", "2025-04-06",
            "2025-04-08", "2025-04-09", "2025-04-10", "2025-04-11",
            // May 2025 - VRBO
            "2025-05-01", "2025-05-02", "2025-05-03",
            "2025-05-09", "2025-05-10", "2025-05-11",
            "2025-05-31",
            // June 2025 - VRBO
            "2025-06-01", "2025-06-02", "2025-06-03", "2025-06-04", "2025-06-05", "2025-06-06",
            "2025-06-07", "2025-06-08", "2025-06-09", "2025-06-10", "2025-06-11", "2025-06-12", "2025-06-13",
            "2025-06-28", "2025-06-29", "2025-06-30",
            // July 2025 - VRBO
            "2025-07-01", "2025-07-02", "2025-07-03", "2025-07-04",
            "2025-07-05", "2025-07-06", "2025-07-07", "2025-07-08", "2025-07-09", "2025-07-10", "2025-07-11",
            "2025-07-12", "2025-07-13", "2025-07-14", "2025-07-15", "2025-07-16", "2025-07-17",
            "2025-07-18", "2025-07-19", "2025-07-20",
            "2025-07-21", "2025-07-22", "2025-07-23", "2025-07-24", "2025-07-25",
            "2025-07-26", "2025-07-27", "2025-07-28", "2025-07-29", "2025-07-30", "2025-07-31",
            // August 2025 - VRBO
            "2025-08-01", "2025-08-02", "2025-08-03", "2025-08-04", "2025-08-05", "2025-08-06", "2025-08-07", "2025-08-08",
            // September 2025 - VRBO
            "2025-09-20", "2025-09-21", "2025-09-22", "2025-09-23", "2025-09-24", "2025-09-25",
            "2025-09-26", "2025-09-27", "2025-09-28",
            // October 2025 - VRBO
            "2025-10-02", "2025-10-03", "2025-10-04", "2025-10-05",
            "2025-10-08", "2025-10-09", "2025-10-10", "2025-10-11",
            "2025-10-12", "2025-10-13", "2025-10-14", "2025-10-15", "2025-10-16",
            "2025-10-22", "2025-10-23", "2025-10-24", "2025-10-25",
            "2025-10-26", "2025-10-27", "2025-10-28", "2025-10-29", "2025-10-30", "2025-10-31",
            // November 2025 - VRBO
            "2025-11-01",
            "2025-11-12", "2025-11-13", "2025-11-14", "2025-11-15",
            "2025-11-20", "2025-11-21", "2025-11-22", "2025-11-23", "2025-11-24", "2025-11-25", "2025-11-26", "2025-11-27", "2025-11-28", "2025-11-29",
            // December 2025 - VRBO
            "2025-12-29", "2025-12-30", "2025-12-31",
            // January 2026 - VRBO
            "2026-01-01",
            // February 2026 - VRBO
            "2026-02-04", "2026-02-05", "2026-02-06", "2026-02-07", "2026-02-08", "2026-02-09", "2026-02-10",
            "2026-02-11", "2026-02-12", "2026-02-13", "2026-02-14",
            "2026-02-15",
            "2026-02-17", "2026-02-18", "2026-02-19", "2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24",
            // March 2026 - Booking.com
            "2026-03-29", "2026-03-30", "2026-03-31",
            // April 2026 - Airbnb + VRBO
            "2026-04-09", "2026-04-10", "2026-04-11", "2026-04-12",
            "2026-04-22", "2026-04-23", "2026-04-24", "2026-04-25",
            // May 2026 - Airbnb
            "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24"
        ],
        // iCal sync URLs:
        // VRBO: http://www.vrbo.com/icalendar/26c67d2c183648a9acc205117158b231.ics?nonTentative
        // Airbnb: https://www.airbnb.com/calendar/ical/42299567.ics?s=1ae773f2ff4da71a9023b1e6b5583af9
        // Booking: https://ical.booking.com/v1/export?t=729c6e15-03da-4978-8674-e357f2fd5897
        bookingLinks: {
            vrbo: 'https://www.vrbo.com/1892927'
        }
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
    4: [
        {
            id: 1,
            author: "Guest",
            date: "2024-11-15",
            rating: 5,
            comment: "Absolutely loved our stay at Tidewater! The condo was clean, modern, and had everything we needed. The views from the balcony were stunning, and the resort amenities were top-notch. The pools and hot tubs were perfect for relaxing after a day at the beach. Walking distance to Pier Park was a huge plus. Highly recommend!"
        },
        {
            id: 2,
            author: "Guest",
            date: "2024-10-22",
            rating: 5,
            comment: "Perfect location right on the beach! The condo was spacious and well-maintained. We especially enjoyed the gulf views and the convenience of having beach access right from the building. The kitchen was fully equipped, which made it easy to prepare meals. Would definitely stay here again."
        },
        {
            id: 3,
            author: "Guest",
            date: "2024-09-30",
            rating: 5,
            comment: "Great property with beautiful ocean views. The resort has excellent amenities including multiple pools, fitness center, and even a movie theater. The condo was comfortable and clean. Only minor issue was elevator wait times during peak hours, but overall a wonderful experience."
        },
        {
            id: 4,
            author: "Guest",
            date: "2024-08-18",
            rating: 5,
            comment: "This was our second time staying at this property and it did not disappoint! The beds were very comfortable, the kitchen had all the cookware we needed, and the balcony was our favorite spot for morning coffee with ocean views. Beach setup service made our days on the beach hassle-free."
        },
        {
            id: 5,
            author: "Guest",
            date: "2024-07-25",
            rating: 5,
            comment: "Beautiful condo in a great location. The resort is well-maintained and has tons of amenities. We loved the indoor pool for rainy days. The beach was stunning with white sand and clear water. Close to restaurants and shopping at Pier Park. Minor improvement needed on cleaning but overall excellent stay."
        },
        {
            id: 6,
            author: "Guest",
            date: "2024-06-12",
            rating: 5,
            comment: "Outstanding vacation rental! Everything was exactly as described. The condo is modern, spacious, and beautifully decorated. We enjoyed the resort's pools and hot tubs daily. The location can't be beat - right on the beach with easy access to everything Panama City Beach has to offer."
        },
        {
            id: 7,
            author: "Guest",
            date: "2024-05-20",
            rating: 5,
            comment: "We had an amazing family vacation here! The condo easily accommodated our family of 6. Kids loved the pools and beach access. Adults appreciated the well-stocked kitchen and comfortable beds. The resort grounds are beautiful and well-maintained. Will definitely be back!"
        },
        {
            id: 8,
            author: "Guest",
            date: "2024-04-15",
            rating: 5,
            comment: "Very nice property with great amenities. The gulf-front view was breathtaking. We enjoyed having laundry in the unit and a full kitchen. The resort's fitness center was a nice bonus. Check-in process was smooth and host communication was excellent throughout our stay."
        },
        {
            id: 9,
            author: "Guest",
            date: "2024-03-28",
            rating: 5,
            comment: "Perfect spring break getaway! The condo exceeded our expectations. Clean, comfortable, and beautifully furnished. The balcony had incredible views of the ocean. Resort amenities were fantastic - multiple pools, hot tubs, and beach access made it feel like a luxury resort experience."
        },
        {
            id: 10,
            author: "Guest",
            date: "2024-02-14",
            rating: 5,
            comment: "Great property for a beach vacation. The location is ideal - right on the gulf with beautiful sunsets. The condo was well-equipped with everything we needed. We appreciated the secure parking and easy elevator access. Would recommend to anyone looking for a quality beach rental in Panama City Beach."
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
    module.exports = { PROPERTIES, REVIEWS, SITE_BASE_URL, SITE_CONTACT };
}
