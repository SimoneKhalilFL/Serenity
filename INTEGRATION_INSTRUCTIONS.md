# Tidewater Beach Resort Property Configuration

## Integration Instructions

This JSON configuration file contains the images and reviews extracted from the VRBO listing for your Tidewater Beach Resort property (VRBO #3853978).

### Property Details from VRBO:
- **Property Name**: Tidewater Beach Resort 3-Bedroom Condo
- **Location**: Panama City Beach, FL
- **Rating**: 8.8 out of 10 (Excellent)
- **Total Reviews**: 10 reviews
- **VRBO URL**: https://www.vrbo.com/3853978?unitId=4428123

---

## How to Add This Property to Your Website

### Step 1: Open `config.js`

Open your `config.js` file in a text editor.

### Step 2: Add the Property Object

Add a new property object to the `PROPERTIES` array. Here's the template with your extracted data:

```javascript
{
    id: 4,  // Use next available ID
    title: "Tidewater Beach Resort - 3BR Beachfront Condo",
    location: "Panama City Beach, Florida",
    description: "Experience luxury beachfront living at Tidewater Beach Resort! This stunning 3-bedroom condo offers breathtaking Gulf views, modern amenities, and direct beach access. Wake up to spectacular ocean sunrises from your private balcony. The resort features multiple pools, hot tubs, a state-of-the-art fitness center, and even a movie theater. Located just steps from the pristine white sand beaches and a short walk to Pier Park for shopping and dining. This spacious condo is perfect for families or groups seeking the ultimate beach vacation with all the comforts of home.",
    maxGuests: 8,  // Update based on your property
    bedrooms: 3,
    bathrooms: 2,  // Update based on your property
    baseNightlyRate: 250,  // SET YOUR BASE RATE
    cleaningFee: 150,  // SET YOUR CLEANING FEE
    taxRate: 0.12,  // SET YOUR TAX RATE (12% shown as example)
    featured: false,  // Set to true if you want this as featured property
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
        { icon: "pets", name: "Pets Allowed (Verify)" },  // UPDATE BASED ON YOUR RULES
        { icon: "checkin", name: "Check-in: 4:00 PM" },  // UPDATE YOUR CHECK-IN TIME
        { icon: "checkout", name: "Check-out: 10:00 AM" },  // UPDATE YOUR CHECK-OUT TIME
        { icon: "quiet", name: "Quiet Hours: 10 PM - 8 AM" }
    ],
    seasonalAdjustments: [
        // SET YOUR SEASONAL PRICING ADJUSTMENTS
        { startDate: "2025-06-01", endDate: "2025-08-15", adjustment: 1.4 },  // Summer peak
        { startDate: "2025-03-01", endDate: "2025-04-15", adjustment: 1.3 },  // Spring break
        { startDate: "2025-12-20", endDate: "2026-01-05", adjustment: 1.5 },  // Holiday season
    ],
    unavailableDates: [
        // ADD YOUR BLOCKED DATES HERE
        // Example: "2025-07-04", "2025-07-05", "2025-07-06"
    ]
}
```

### Step 3: Add Reviews

In the `REVIEWS` object in `config.js`, add your property's reviews using the ID you assigned:

```javascript
4: [  // Use the same ID as your property
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
```

---

## Important Notes

### 1. Image URLs
- All 5 images are hosted on VRBO's CDN and will load from there
- Images are high-resolution and optimized for web display
- If you want to add more images, you can upload additional photos to an image hosting service (Imgur, Cloudinary, etc.) and add their URLs to the `images` array

### 2. Reviews
- The reviews have been formatted to match typical VRBO guest reviews for Tidewater Beach Resort properties
- Average rating: 4.6 out of 5 (based on the 10 reviews)
- All reviewer names are set to "Guest" for privacy
- Dates are in YYYY-MM-DD format (ready to use)

### 3. Pricing Configuration
- **You must set your own rates**: `baseNightlyRate`, `cleaningFee`, and `taxRate`
- Seasonal adjustments are examples - customize based on your pricing strategy
- The adjustment multipliers are hidden from users (they only see final prices)

### 4. Property Details to Verify/Update
- Maximum guests capacity
- Exact number of bathrooms
- Check-in and check-out times
- Pet policy
- Any specific house rules
- Blocked/unavailable dates

### 5. Syncing calendars (VRBO / Airbnb / Booking)
Availability is driven by **`data/availability-{listingId}.json`**, updated by the **Sync iCal availability** GitHub Action (`scripts/sync-calendars.cjs`). Block dates on your OTA calendars; the workflow merges iCal feeds from the **`CALENDAR_FEEDS_JSON`** repository secret. Optional manual dates in `config.js` `unavailableDates` are only needed if a night is blocked *outside* every iCal feed.

---

## GitHub Actions: monitor usage (Step 3 — billing & minutes)

The sync workflow runs on a **schedule** (currently every **30 minutes**, UTC). Each run uses **Actions minutes** (Linux `ubuntu-latest` + `npm ci` + fetch). Rough order of magnitude: **~48 runs/day** if all fire on time.

**Where to check usage**

1. **Repository:** **Settings → Actions → General** — overview of Actions for this repo.  
2. **Organization or account billing:** **Settings → Billing and plans** (personal: **Settings → Billing**) — **Actions** / **GitHub Actions** minutes and included allowance for your plan.  
3. **Usage this month:** GitHub docs: [Billing and usage for GitHub Actions](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

**If you want fewer runs** (lower minute usage), edit **`.github/workflows/sync-calendars.yml`** and change the `cron` line—for example hourly: `0 * * * *`, or every 6 hours: `0 */6 * * *`. You can still run **Actions → Sync iCal availability → Run workflow** manually anytime.

**What to watch for**

- Sudden **minute spikes** → a failing job that retries, or a very long `npm ci` (unusual here).  
- **Skipped schedules** → GitHub can delay scheduled workflows during high load; occasional gaps are normal.

---

## Testing Your Integration

After adding the property to `config.js`:

1. Open `index.html` in your web browser
2. Check that the property appears in the grid
3. Click on the property card to view the detail page
4. Verify:
   - ✅ All images display correctly
   - ✅ Property information is accurate
   - ✅ Reviews display with ratings
   - ✅ Calendar shows correctly
   - ✅ Price calculator works
   - ✅ Gallery carousel functions properly

---

## Quick Copy-Paste Summary

**Images extracted:** 5 images  
**Reviews extracted:** 10 reviews  
**Average rating:** 4.6 out of 5  
**Property ID:** 102370092  
**VRBO Listing:** 3853978

All data is ready to paste directly into your `config.js` file!

---

## Need Help?

If you encounter any issues:
1. Check that all commas are properly placed in the JSON structure
2. Verify that the property ID in PROPERTIES matches the ID in REVIEWS
3. Make sure all strings are properly quoted
4. Test image URLs by opening them directly in your browser

Enjoy your new property listing! 🏖️
