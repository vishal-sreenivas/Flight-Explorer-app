// Test exact flight search with real flight numbers
async function testExactSearch() {
  try {
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    const data = await response.json();
    const flights = data.flights;
    
    console.log('=== TESTING EXACT FLIGHT NUMBER SEARCH ===\n');
    
    const testFlights = ['FA123', 'AA196', 'UA261', 'BA179', 'DA272'];
    
    testFlights.forEach(flightNum => {
      const found = flights.find(f => f.flightNumber.toLowerCase() === flightNum.toLowerCase());
      
      if (found) {
        console.log(`✅ ${flightNum} FOUND:`);
        console.log(`   Airline: ${found.airline}`);
        console.log(`   Route: ${found.origin.city} (${found.origin.code}) → ${found.destination.city} (${found.destination.code})`);
        console.log(`   Departure: ${found.departure.scheduled}`);
        console.log(`   Arrival: ${found.arrival.scheduled}`);
        console.log(`   Aircraft: ${found.aircraft}`);
        console.log(`   Status: ${found.status}`);
        console.log(`   Duration: ${found.duration}\n`);
      } else {
        console.log(`❌ ${flightNum}: NOT FOUND\n`);
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testExactSearch();
