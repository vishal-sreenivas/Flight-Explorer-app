// Comprehensive test for flight search
async function testFlightSearch() {
  try {
    console.log('=== Testing Flight Search ===\n');
    
    // Fetch all flights
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    const data = await response.json();
    const allFlights = data.flights;
    
    console.log(`Total flights available: ${allFlights.length}\n`);
    
    // Get some sample flight numbers
    const sampleFlights = allFlights.slice(0, 10);
    console.log('Sample flight numbers:');
    sampleFlights.forEach(f => console.log(`  - ${f.flightNumber}`));
    
    // Test 1: Search for a specific flight number
    const testFlightNumber = 'SA494';
    console.log(`\n--- Test 1: Searching for flight number "${testFlightNumber}" ---`);
    const matching = allFlights.filter(f => 
      f.flightNumber.toLowerCase().includes(testFlightNumber.toLowerCase())
    );
    console.log(`Found: ${matching.length} flight(s)`);
    if (matching.length > 0) {
      matching.slice(0, 3).forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.airline}`);
      });
    }
    
    // Test 2: Search for partial flight number
    const testPartial = 'AA';
    console.log(`\n--- Test 2: Searching for partial flight number "${testPartial}" ---`);
    const partialMatching = allFlights.filter(f => 
      f.flightNumber.toLowerCase().includes(testPartial.toLowerCase())
    );
    console.log(`Found: ${partialMatching.length} flight(s)`);
    if (partialMatching.length > 0) {
      partialMatching.slice(0, 3).forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.airline}`);
      });
    }
    
    // Test 3: Search by origin
    const testOrigin = 'Toronto';
    console.log(`\n--- Test 3: Searching for origin "${testOrigin}" ---`);
    const originMatching = allFlights.filter(f => 
      f.origin.code.toLowerCase().includes(testOrigin.toLowerCase()) ||
      f.origin.city.toLowerCase().includes(testOrigin.toLowerCase())
    );
    console.log(`Found: ${originMatching.length} flight(s)`);
    if (originMatching.length > 0) {
      originMatching.slice(0, 3).forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.origin.city} → ${f.destination.city}`);
      });
    }
    
    // Test 4: Search by destination
    const testDest = 'Denver';
    console.log(`\n--- Test 4: Searching for destination "${testDest}" ---`);
    const destMatching = allFlights.filter(f => 
      f.destination.code.toLowerCase().includes(testDest.toLowerCase()) ||
      f.destination.city.toLowerCase().includes(testDest.toLowerCase())
    );
    console.log(`Found: ${destMatching.length} flight(s)`);
    if (destMatching.length > 0) {
      destMatching.slice(0, 3).forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.origin.city} → ${f.destination.city}`);
      });
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testFlightSearch();
