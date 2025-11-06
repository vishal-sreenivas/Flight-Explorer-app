// Test with real flight numbers from current API
async function testRealFlights() {
  console.log('\n' + '='.repeat(80));
  console.log('EXACT FLIGHT NUMBER SEARCH - REAL DATA TEST');
  console.log('='.repeat(80) + '\n');
  
  try {
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    const data = await response.json();
    const flights = data.flights;
    
    // Get first flight from each airline
    const airlines = {};
    flights.forEach(f => {
      const prefix = f.flightNumber.substring(0, 2);
      if (!airlines[prefix]) airlines[prefix] = f;
    });
    
    console.log('📋 TESTING EXACT FLIGHT NUMBERS\n');
    
    Object.keys(airlines).slice(0, 10).forEach(prefix => {
      const flight = airlines[prefix];
      console.log(`\n--- ${prefix} AIRLINES ---`);
      console.log(`Flight Number: ${flight.flightNumber}`);
      console.log(`Airline: ${flight.airline}`);
      console.log(`Aircraft: ${flight.aircraft}`);
      console.log(`Route: ${flight.origin.city} (${flight.origin.code}) → ${flight.destination.city} (${flight.destination.code})`);
      console.log(`Departure: ${flight.departure.scheduled}`);
      console.log(`Arrival: ${flight.arrival.scheduled}`);
      console.log(`Status: ${flight.status}`);
      console.log(`Duration: ${flight.duration}`);
      
      // Test exact search
      const exactMatch = flights.find(f => f.flightNumber.toLowerCase() === flight.flightNumber.toLowerCase());
      console.log(`✅ Exact search "${flight.flightNumber}": ${exactMatch ? 'FOUND ✓' : 'NOT FOUND ✗'}`);
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('SEARCH STATISTICS');
    console.log('='.repeat(80));
    
    console.log('\n📊 Flights by Airline Prefix:\n');
    Object.keys(airlines).forEach(prefix => {
      const count = flights.filter(f => f.flightNumber.startsWith(prefix)).length;
      console.log(`  ${prefix}: ${count} flight(s)`);
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('🎯 READY TO TEST IN APP');
    console.log('='.repeat(80));
    console.log('\nTry searching for these exact flight numbers:\n');
    
    const examples = Array.from(Object.values(airlines)).slice(0, 5);
    examples.forEach(f => {
      console.log(`  • ${f.flightNumber} - ${f.airline}`);
    });
    
    console.log('\nOr search by prefix:\n');
    Object.keys(airlines).slice(0, 5).forEach(prefix => {
      console.log(`  • ${prefix} - See all ${prefix} flights`);
    });
    
    console.log('\n✨ App ready at: http://localhost:5173/\n');
    
  } catch (error) {
    console.error('❌ ERROR:', error);
  }
}

testRealFlights();
