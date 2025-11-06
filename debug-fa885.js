// Direct test of flight search for FA885
async function testFA885Search() {
  try {
    console.log('=== Testing FA885 Search ===\n');
    
    // Fetch all flights
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    const data = await response.json();
    const allFlights = data.flights;
    
    console.log(`Total flights in API: ${allFlights.length}`);
    
    // Test exact match
    const testFlightNumber = 'FA885';
    console.log(`\nSearching for: "${testFlightNumber}"`);
    
    const exactMatch = allFlights.filter(f => 
      f.flightNumber.toLowerCase() === testFlightNumber.toLowerCase()
    );
    console.log(`Exact match found: ${exactMatch.length}`);
    if (exactMatch.length > 0) {
      exactMatch.forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.airline}`);
      });
    }
    
    // Test partial match (includes)
    const partialMatch = allFlights.filter(f => 
      f.flightNumber.toLowerCase().includes(testFlightNumber.toLowerCase())
    );
    console.log(`\nPartial match (includes) found: ${partialMatch.length}`);
    if (partialMatch.length > 0) {
      partialMatch.forEach(f => {
        console.log(`  ✓ ${f.flightNumber} - ${f.airline}`);
      });
    }
    
    // Show all FA flights
    const allFAFlights = allFlights.filter(f => f.flightNumber.toLowerCase().startsWith('fa'));
    console.log(`\nAll FA flights available: ${allFAFlights.length}`);
    allFAFlights.forEach(f => {
      console.log(`  ✓ ${f.flightNumber} - ${f.airline}`);
    });
    
    // Show ALL flight numbers
    console.log(`\n\nComplete list of all ${allFlights.length} flight numbers:`);
    allFlights.forEach((f, i) => {
      console.log(`${i+1}. ${f.flightNumber}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testFA885Search();
