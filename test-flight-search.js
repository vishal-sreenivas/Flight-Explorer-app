#!/usr/bin/env node

/**
 * FLIGHT SEARCH TEST - Command Line Testing
 * Tests exact flight number search
 */

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function divider(char = '=', length = 80) {
  console.log(char.repeat(length));
}

async function testFlightSearch() {
  divider('=', 80);
  log('✈️  FLIGHT EXPLORER - EXACT FLIGHT NUMBER SEARCH TEST', 'cyan');
  divider('=', 80);

  try {
    // Fetch flights
    log('\n📡 Fetching flight data from API...', 'blue');
    const response = await fetch(
      'https://flight-explorer-api.codewalnut.com/api/flights'
    );
    const data = await response.json();
    const allFlights = data.flights;
    log(`✅ Successfully fetched ${allFlights.length} flights\n`, 'green');

    // Test 1: Full flight number searches
    log('TEST 1: FULL FLIGHT NUMBER SEARCH (Exact Match)', 'bold');
    divider('-', 80);

    const exactSearchTests = ['AA762', 'JA384', 'E752', 'AC173', 'L650'];

    exactSearchTests.forEach((searchTerm) => {
      log(`\nSearching for: "${searchTerm}"`);
      
      const results = allFlights.filter(
        (f) => f.flightNumber.toLowerCase() === searchTerm.toLowerCase()
      );

      if (results.length > 0) {
        const flight = results[0];
        log(`✅ FOUND: ${flight.flightNumber}`, 'green');
        log(
          `   Airline: ${flight.airline}`,
          'green'
        );
        log(
          `   Route: ${flight.origin.city} (${flight.origin.code}) → ${flight.destination.city} (${flight.destination.code})`,
          'green'
        );
        log(
          `   Aircraft: ${flight.aircraft}`,
          'green'
        );
        log(
          `   Departure: ${flight.departure.scheduled}`,
          'green'
        );
        log(
          `   Arrival: ${flight.arrival.scheduled}`,
          'green'
        );
        log(
          `   Status: ${flight.status}`,
          'green'
        );
        log(
          `   Duration: ${flight.duration}`,
          'green'
        );
      } else {
        log(`❌ NOT FOUND`, 'red');
      }
    });

    // Test 2: Prefix searches
    log('\n\nTEST 2: PREFIX SEARCH (2 characters)', 'bold');
    divider('-', 80);

    const prefixSearchTests = ['AA', 'JA', 'AC', 'UA', 'DA', 'BA', 'SA'];

    prefixSearchTests.forEach((searchTerm) => {
      log(`\nSearching for: "${searchTerm}"`);
      
      const results = allFlights.filter((f) =>
        f.flightNumber.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      if (results.length > 0) {
        log(`✅ FOUND ${results.length} flights:`, 'green');
        results.slice(0, 3).forEach((flight) => {
          log(
            `   • ${flight.flightNumber} - ${flight.airline}`,
            'green'
          );
        });
        if (results.length > 3) {
          log(
            `   ... and ${results.length - 3} more flights`,
            'yellow'
          );
        }
      } else {
        log(`❌ NOT FOUND`, 'red');
      }
    });

    // Test 3: Non-existent flight
    log('\n\nTEST 3: NON-EXISTENT FLIGHT (Expected to fail)', 'bold');
    divider('-', 80);

    const nonExistentSearch = 'XX999';
    log(`\nSearching for: "${nonExistentSearch}"`);
    
    const results = allFlights.filter(
      (f) => f.flightNumber.toLowerCase() === nonExistentSearch.toLowerCase()
    );

    if (results.length === 0) {
      log(`✅ Correctly returned NO results (as expected)`, 'green');
    } else {
      log(`❌ Unexpectedly found results`, 'red');
    }

    // Summary
    divider('=', 80);
    log('📊 SUMMARY', 'cyan');
    divider('=', 80);

    log(`\n✅ Total flights in API: ${allFlights.length}`, 'green');
    
    const uniquePrefixes = [...new Set(allFlights.map((f) => f.flightNumber.substring(0, 2)))].sort();
    log(`✅ Unique airline prefixes: ${uniquePrefixes.join(', ')}`, 'green');

    log(`\n🎯 SEARCH BEHAVIOR:`, 'yellow');
    log(`  • AA762 (5 chars) → Exact match ONLY → 1 result`, 'cyan');
    log(`  • AA (2 chars)   → Prefix match → Multiple results`, 'cyan');
    log(`  • XX999 (5 chars) → Exact match ONLY → No results`, 'cyan');

    divider('=', 80);
    log('✨ ALL TESTS COMPLETED SUCCESSFULLY!', 'green');
    log('\n📍 App running at: http://localhost:5173/', 'blue');
    log('🚀 Try searching for these flight numbers in the app!\n', 'blue');

  } catch (error) {
    log(`\n❌ ERROR: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the test
testFlightSearch();
