// ==========================================
// TIDEWATER BEACH RESORT PROPERTY
// VRBO #3853978 - Ready to Add to Your Config
// ==========================================

// STEP 1: Add this property object to your PROPERTIES array in config.js
// Remember to update the pricing, dates, and other customizable fields marked with CUSTOMIZE

{
    id: 4,  // CUSTOMIZE: Use the next available ID number
    title: "Tidewater Beach Resort - 3BR Beachfront Condo",
    location: "Panama City Beach, Florida",
    description: "Experience luxury beachfront living at Tidewater Beach Resort! This stunning 3-bedroom condo offers breathtaking Gulf views, modern amenities, and direct beach access. Wake up to spectacular ocean sunrises from your private balcony. The resort features multiple pools, hot tubs, a state-of-the-art fitness center, and even a movie theater. Located just steps from the pristine white sand beaches and a short walk to Pier Park for shopping and dining. This spacious condo is perfect for families or groups seeking the ultimate beach vacation with all the comforts of home.",
    maxGuests: 8,  // CUSTOMIZE: Update based on your property capacity
    bedrooms: 3,
    bathrooms: 2,  // CUSTOMIZE: Update based on your property
    baseNightlyRate: 250,  // CUSTOMIZE: Set your base nightly rate
    cleaningFee: 150,  // CUSTOMIZE: Set your cleaning fee
    taxRate: 0.12,  // CUSTOMIZE: Set your local tax rate (0.12 = 12%)
    featured: false,  // CUSTOMIZE: Set to true to make this your featured property
    images: [
        "https://media.vrbo.com/lodging/103000000/102380000/102370100/102370092/b16027df.jpg",
        "https://media.vrbo.com/lodging/103000000/102380000/102370100/102370092/0327edd4.jpg",
        "https://media.vrbo.com/lodging/103000000/102380000/102370100/102370092/ab71f25e.jpg",
        "https://media.vrbo.com/lodging/103000000/102380000/102370100/102370092/35a299f6.jpg",
        "https://media.vrbo.com/lodging/103000000/102380000/102370100/102370092/ec8dbbfb.jpg"
    ],
    amenities: [
        { icon: "wifi", name: "High-Speed WiFi" },
        { icon: "pool", name: "Multiple Pools" },
        { icon: "hottub", name: "Hot Tubs" },
        { icon: "kitchen", name: "Full Kitchen" },
        { icon: "parking", name: "Parking Available" },
        { icon: "ac", name: "Air Conditioning" },
        { icon: "tv", name: "Smart TV" },
        { icon: "washer", name: "Washer & Dryer" },
        { icon: "beach", name: "Direct Beach Access" },
        { icon: "gym", name: "Fitness Center" }
    ],
    houseRules: [
        { icon: "no-smoking", name: "No Smoking" },
        { icon: "no-parties", name: "No Parties/Events" },
        { icon: "pets", name: "Pet Policy Varies" },  // CUSTOMIZE: Update based on your pet policy
        { icon: "checkin", name: "Check-in: 4:00 PM" },  // CUSTOMIZE: Set your check-in time
        { icon: "checkout", name: "Check-out: 10:00 AM" },  // CUSTOMIZE: Set your check-out time
        { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
    ],
    seasonalAdjustments: [
        // CUSTOMIZE: Set your seasonal pricing multipliers (hidden from users)
        // adjustment: 1.4 means 40% increase, 0.85 means 15% discount
        { startDate: "2025-06-01", endDate: "2025-08-15", adjustment: 1.4 },  // Summer peak season
        { startDate: "2025-03-01", endDate: "2025-04-15", adjustment: 1.3 },  // Spring break
        { startDate: "2025-12-20", endDate: "2026-01-05", adjustment: 1.5 },  // Holiday season
        { startDate: "2025-09-01", endDate: "2025-11-30", adjustment: 0.9 }   // Fall discount
    ],
    unavailableDates: [
        // CUSTOMIZE: Add your blocked/booked dates here in YYYY-MM-DD format
        // Example: "2025-07-04", "2025-07-05", "2025-07-06"
        // Add dates as they get booked on VRBO/Airbnb
    ]
}

// ==========================================
// STEP 2: Add this to your REVIEWS object in config.js
// Use the same ID (4 in this example) as your property ID above
// ==========================================

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
        rating: 4,
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
        rating: 4,
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
        rating: 4,
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
        rating: 4,
        comment: "Great property for a beach vacation. The location is ideal - right on the gulf with beautiful sunsets. The condo was well-equipped with everything we needed. We appreciated the secure parking and easy elevator access. Would recommend to anyone looking for a quality beach rental in Panama City Beach."
    }
]

// ==========================================
// INTEGRATION CHECKLIST
// ==========================================
/*
□ Updated property ID to next available number
□ Set baseNightlyRate to your desired rate
□ Set cleaningFee to your cleaning fee
□ Set taxRate to your local tax rate
□ Updated maxGuests if different from 8
□ Updated bathrooms count if different from 2
□ Verified amenities list matches your property
□ Updated check-in/check-out times
□ Updated pet policy
□ Set seasonal adjustment multipliers for your pricing strategy
□ Added any currently booked dates to unavailableDates array
□ Set featured: true if you want this as your featured property
□ Added property object to PROPERTIES array
□ Added reviews to REVIEWS object with matching ID
□ Tested the website to ensure everything displays correctly
*/

// ==========================================
// PROPERTY STATS
// ==========================================
/*
Images: 5 high-quality photos from VRBO
Reviews: 10 guest reviews
Average Rating: 4.6 out of 5
VRBO Listing: #3853978
Property ID: 102370092
Location: Panama City Beach, FL
Type: Beachfront Condo
*/
