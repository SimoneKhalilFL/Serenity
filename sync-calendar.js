/**
 * @deprecated Use `npm run sync-calendars` (scripts/sync-calendars.cjs) which writes data/availability-{id}.json.
 *
 * Legacy script — kept for reference only.
 */

const https = require('https');
const http = require('http');

// iCal feed URLs
const ICAL_FEEDS = {
    vrbo: 'http://www.vrbo.com/icalendar/2024eca45f854672b712124668878a90.ics?nonTentative',
    airbnb: 'https://www.airbnb.com/calendar/ical/1102297481087079379.ics?s=90116a99e75615dcf80171ddb4905286',
    booking: 'https://ical.booking.com/v1/export?t=35b688fc-4684-44a0-8867-82a2e361b18e'
};

// Fetch URL content
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

// Parse iCal and extract blocked date ranges
function parseIcal(icalData) {
    const events = [];
    const eventBlocks = icalData.split('BEGIN:VEVENT');
    
    for (let i = 1; i < eventBlocks.length; i++) {
        const block = eventBlocks[i];
        const startMatch = block.match(/DTSTART;VALUE=DATE:(\d{8})/);
        const endMatch = block.match(/DTEND;VALUE=DATE:(\d{8})/);
        const summaryMatch = block.match(/SUMMARY:(.+)/);
        
        if (startMatch && endMatch) {
            events.push({
                start: startMatch[1],
                end: endMatch[1],
                summary: summaryMatch ? summaryMatch[1].trim() : 'Blocked'
            });
        }
    }
    return events;
}

// Convert YYYYMMDD to Date object
function parseDate(dateStr) {
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1;
    const day = parseInt(dateStr.substring(6, 8));
    return new Date(year, month, day);
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Expand date range into individual dates (DTEND is exclusive in iCal)
function expandDateRange(startStr, endStr) {
    const dates = [];
    const start = parseDate(startStr);
    const end = parseDate(endStr);
    
    const current = new Date(start);
    while (current < end) {
        dates.push(formatDate(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
}

async function syncCalendars() {
    console.log('🔄 Syncing calendars from VRBO, Airbnb, and Booking.com...\n');
    
    const allDates = new Set();
    const sourceDetails = {};
    
    for (const [source, url] of Object.entries(ICAL_FEEDS)) {
        try {
            console.log(`📅 Fetching ${source.toUpperCase()}...`);
            const data = await fetchUrl(url);
            const events = parseIcal(data);
            
            sourceDetails[source] = [];
            
            for (const event of events) {
                const dates = expandDateRange(event.start, event.end);
                dates.forEach(d => allDates.add(d));
                sourceDetails[source].push({
                    range: `${event.start} - ${event.end}`,
                    summary: event.summary,
                    dates: dates.length
                });
            }
            
            console.log(`   ✓ Found ${events.length} blocked periods\n`);
        } catch (error) {
            console.error(`   ✗ Error fetching ${source}: ${error.message}\n`);
        }
    }
    
    // Sort all dates
    const sortedDates = Array.from(allDates).sort();
    
    console.log('═'.repeat(60));
    console.log('\n📊 SUMMARY BY SOURCE:\n');
    
    for (const [source, events] of Object.entries(sourceDetails)) {
        console.log(`${source.toUpperCase()}:`);
        events.forEach(e => console.log(`   ${e.range} - ${e.summary} (${e.dates} days)`));
        console.log();
    }
    
    console.log('═'.repeat(60));
    console.log(`\n✅ Total unique blocked dates: ${sortedDates.length}\n`);
    
    // Output in config.js format
    console.log('📋 COPY THIS TO config.js unavailableDates array:\n');
    console.log('unavailableDates: [');
    
    // Group by year-month for readability
    let currentYearMonth = '';
    for (const date of sortedDates) {
        const yearMonth = date.substring(0, 7);
        if (yearMonth !== currentYearMonth) {
            if (currentYearMonth) console.log();
            console.log(`    // ${yearMonth}`);
            currentYearMonth = yearMonth;
        }
        console.log(`    "${date}",`);
    }
    
    console.log(']');
    console.log('\n✨ Sync complete!');
}

syncCalendars().catch(console.error);
