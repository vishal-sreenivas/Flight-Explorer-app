// Test exact vs partial flight number search
async function testFlightSearch() {
  console.log('=== Testing Exact vs Partial Flight Number Search ===\n');
  
  try {
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    const data = await response.json();
    const allFlights = data.flights;
    
    // Test 1: Exact match
    console.log('TEST 1: Searching for exact flight number "FA355"');
    const exactSearch = allFlights.filter(f => f.flightNumber.toLowerCase() === 'fa355');
    console.log(`  Results: ${exactSearch.length}`);
    if (exactSearch.length > 0) {
      console.log(`  ✅ Found: ${exactSearch[0].flightNumber} - ${exactSearch[0].airline}`);
      console.log(`     From: ${exactSearch[0].origin.city} → To: ${exactSearch[0].destination.city}`);
    }
    
    // Test 2: Partial match (prefix)
    console.log('\nTEST 2: Searching for prefix "FA"');
    const partialSearch = allFlights.filter(f => f.flightNumber.toLowerCase().includes('fa'));
    console.log(`  Results: ${partialSearch.length}`);
    console.log(`  All FA flights:`);
    partialSearch.forEach(f => {
      console.log(`    • ${f.flightNumber} - ${f.airline}`);
    });
    
    // Test 3: Another exact match
    console.log('\nTEST 3: Searching for exact flight number "AA177"');
    const exactSearch2 = allFlights.filter(f => f.flightNumber.toLowerCase() === 'aa177');
    console.log(`  Results: ${exactSearch2.length}`);
    if (exactSearch2.length > 0) {
      console.log(`  ✅ Found: ${exactSearch2[0].flightNumber} - ${exactSearch2[0].airline}`);
      console.log(`     From: ${exactSearch2[0].origin.city} → To: ${exactSearch2[0].destination.city}`);
    }
    
    // Test 4: Short prefix
    console.log('\nTEST 4: Searching for prefix "AA"');
    const partialSearch2 = allFlights.filter(f => f.flightNumber.toLowerCase().includes('aa'));
    console.log(`  Results: ${partialSearch2.length} flights`);
    partialSearch2.slice(0, 5).forEach(f => {
      console.log(`    • ${f.flightNumber} - ${f.airline}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testFlightSearch();
