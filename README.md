# Vacation Rental Website

A fully responsive, modern vacation rental website built with vanilla JavaScript, HTML, and CSS. Features include property listings, detailed property pages, interactive calendar with availability tracking, dynamic pricing calculator with hidden seasonal adjustments, image gallery with lightbox, and guest reviews system.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Property Listings**: Grid layout with featured property section
- **Property Detail Pages**: Comprehensive property information with navigation
- **Image Gallery**: Multi-image carousel with thumbnail navigation and full-screen lightbox
- **Availability Calendar**: Interactive calendar showing available/unavailable dates
- **Dynamic Pricing Calculator**: Real-time price calculation with:
  - Nightly rates (with hidden seasonal adjustments)
  - Cleaning fees
  - Tax calculations
  - Total price estimation
- **Reviews System**: Display guest reviews with ratings and read more functionality
- **SEO Optimized**: Semantic HTML, meta tags, and structured content

### Admin Features (Code-Based)
- Easy configuration through `config.js`
- Multiple property support
- Seasonal pricing adjustments (hidden from users)
- Review management
- Unavailable date configuration

## File Structure

```
vacation-rental/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── app.js              # Application logic and interactivity
├── config.js           # Property data, pricing, and reviews configuration
└── README.md           # This file
```

## Quick Start

1. **Download all files** to a directory
2. **Open `index.html`** in a web browser
3. **Customize** `config.js` with your property data (see Configuration section)

That's it! No build process or dependencies required.

## Configuration Guide

### Adding/Editing Properties

Edit the `PROPERTIES` array in `config.js`:

```javascript
{
    id: 1,                                  // Unique identifier
    title: "Beachfront Paradise Villa",    // Property name
    location: "Malibu, California",         // Location
    description: "Your description...",     // Full description
    maxGuests: 10,                          // Maximum guests
    bedrooms: 5,                            // Number of bedrooms
    bathrooms: 4,                           // Number of bathrooms
    baseNightlyRate: 850,                   // Base rate per night
    cleaningFee: 250,                       // One-time cleaning fee
    taxRate: 0.12,                          // Tax percentage (0.12 = 12%)
    featured: true,                         // Show as featured property?
    images: [                               // Array of image URLs
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    amenities: [                            // Available amenities
        { icon: "wifi", name: "High-Speed WiFi" },
        { icon: "pool", name: "Infinity Pool" }
    ],
    houseRules: [                           // House rules
        { icon: "no-smoking", name: "No Smoking" },
        { icon: "checkin", name: "Check-in: 3:00 PM" }
    ],
    seasonalAdjustments: [                  // Hidden pricing adjustments
        { 
            startDate: "2024-12-20",        // Start date (YYYY-MM-DD)
            endDate: "2025-01-05",          // End date (YYYY-MM-DD)
            adjustment: 1.5                 // Multiplier (1.5 = 50% increase)
        }
    ],
    unavailableDates: [                     // Blocked dates
        "2024-12-24",
        "2024-12-25"
    ]
}
```

### Seasonal Pricing Adjustments

The `seasonalAdjustments` feature allows you to modify pricing for specific date ranges **without showing the adjustment to users**. The system displays only the final adjusted rate.

**Examples:**
- `adjustment: 1.5` = 50% increase (peak season)
- `adjustment: 1.3` = 30% increase (summer)
- `adjustment: 0.85` = 15% discount (off-season)
- `adjustment: 0.7` = 30% discount (promotional period)

**How it works:**
1. User selects dates in the calendar
2. System checks if dates fall within any adjustment periods
3. Base nightly rate is multiplied by the adjustment factor
4. Adjusted rate is displayed as the "nightly rate" (adjustment is invisible to user)
5. Total is calculated: (adjusted nightly rate × nights) + cleaning fee + tax

### Available Amenity Icons

```javascript
wifi, pool, kitchen, parking, ac, tv, washer, beach, hottub, 
fireplace, heating, ski, elevator, gym, workspace
```

### Available House Rule Icons

```javascript
no-smoking, no-parties, pets, no-pets, checkin, checkout, quiet
```

### Managing Reviews

Edit the `REVIEWS` object in `config.js`:

```javascript
const REVIEWS = {
    1: [  // Property ID
        {
            id: 1,
            author: "John Doe",
            date: "2024-01-15",           // YYYY-MM-DD format
            rating: 5,                     // 1-5 stars
            comment: "Amazing property!"   // Review text
        }
    ]
};
```

### Using Your Own Images

**Option 1: External URLs (Recommended for demo)**
```javascript
images: [
    "https://example.com/your-image.jpg",
    "https://another-site.com/image2.jpg"
]
```

**Option 2: Local Images**
1. Create an `images` folder in your project
2. Add your images to the folder
3. Reference them relatively:
```javascript
images: [
    "images/property1-main.jpg",
    "images/property1-bedroom.jpg"
]
```

### Customizing Unavailable Dates

Add dates to the `unavailableDates` array in `config.js`:

```javascript
unavailableDates: [
    "2024-12-24",
    "2024-12-25",
    "2025-01-01"
]
```

**Tip:** For ongoing bookings from platforms like Airbnb/VRBO, you would typically sync this via their iCal feeds (requires backend integration).

## Styling Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2D7DD2;      /* Main brand color */
    --secondary-color: #F59E0B;    /* Accent color */
    --text-primary: #1F2937;       /* Main text color */
    --text-secondary: #6B7280;     /* Secondary text color */
}
```

### Changing Fonts

The site uses Google Fonts. To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```
4. Update CSS variables in `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Responsive Breakpoints

Current breakpoints in `styles.css`:
- **Desktop**: > 1024px (default)
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization Tips

1. **Optimize Images**: 
   - Use WebP format when possible
   - Compress images before uploading
   - Recommended size: 1200px wide for gallery images
   - Use CDN for faster loading (e.g., Cloudinary, Imgix)

2. **Lazy Loading**: 
   - Consider adding lazy loading for images
   - Example: `<img loading="lazy" src="...">`

3. **Minification**:
   - Minify CSS and JS for production
   - Use tools like [CSS Minifier](https://cssminifier.com/) and [JS Minifier](https://javascript-minifier.com/)

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select your branch and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is instantly live with a custom URL
3. Optional: Connect to Git repository for automatic deployments

### Traditional Web Hosting
1. Upload all files to your web server via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Access your site via your domain

## Advanced Customization

### Adding More Properties

Simply add more property objects to the `PROPERTIES` array in `config.js`. The site automatically handles any number of properties.

### Multi-Page Structure

To convert to multi-page:
1. Create separate HTML files (e.g., `property-1.html`, `property-2.html`)
2. Copy the property detail section to each file
3. Update navigation links
4. Simplify JavaScript to work per page

### Backend Integration

To add booking functionality:
1. Add a backend (Node.js, PHP, Python)
2. Connect to a database for storing bookings
3. Integrate payment gateway (Stripe, PayPal)
4. Add email notifications
5. Implement user authentication

### Calendar Sync with Airbnb/VRBO

To sync availability:
1. Export iCal feed from Airbnb/VRBO
2. Create backend endpoint to fetch and parse iCal
3. Update `unavailableDates` dynamically
4. Set up cron job for periodic sync

## Troubleshooting

**Images not loading:**
- Check image URLs are accessible
- Verify CORS settings if using external images
- Check browser console for errors

**Calendar not updating:**
- Verify dates in `config.js` use YYYY-MM-DD format
- Check browser console for JavaScript errors

**Pricing calculator not working:**
- Ensure `baseNightlyRate`, `cleaningFee`, and `taxRate` are numbers
- Verify `seasonalAdjustments` date ranges don't overlap

**Mobile menu not opening:**
- Check if JavaScript is enabled
- Verify no console errors
- Test in different browsers

## Legal Disclaimers

The following disclaimers are included in the footer and property pages:

> "Prices shown reflect owner-configured rates. Availability synced from third-party platforms. Final pricing confirmed directly with the owner."

**Important Notes:**
- This is a display-only website (no payment processing)
- Users contact property owners directly to complete bookings
- You are responsible for ensuring compliance with local rental laws
- Consider adding terms of service and privacy policy

## Future Enhancement Ideas

- User accounts and saved searches
- Email notifications for availability changes
- Multi-currency support
- Language translations
- Booking request form
- Admin dashboard for managing properties
- Integration with property management systems
- Map view showing property locations
- Comparison feature for multiple properties
- Advanced search and filtering

## Support

For questions or issues:
1. Check this README
2. Review code comments in files
3. Check browser console for errors
4. Verify `config.js` syntax

## License

This template is provided as-is for personal or commercial use. Modify as needed for your requirements.

## Credits

- Icons: Feather Icons (inline SVG)
- Fonts: Google Fonts (Inter, Playfair Display)
- Sample Images: Unsplash (replace with your own)

---

**Version**: 1.0  
**Last Updated**: January 2025  
**Compatibility**: All modern browsers
