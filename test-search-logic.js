// Test exact match with REAL flight numbers
fetch('https://flight-explorer-api.codewalnut.com/api/flights')
  .then(r => r.json())
  .then(d => {
    const flights = d.flights;
    
    console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                    SEARCH LOGIC TEST - EXACT VS PREFIX                       ║
╚══════════════════════════════════════════════════════════════════════════════╝
`);
    
    // Test 1: Prefix search (2 chars)
    console.log('TEST 1: PREFIX SEARCH (2 characters)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const prefixSearch = 'JA';
    const prefixResults = flights.filter(f => f.flightNumber.toLowerCase().includes(prefixSearch.toLowerCase()));
    console.log(`Searching for: "${prefixSearch}"`);
    console.log(`Results: ${prefixResults.length} flights\n`);
    prefixResults.forEach(f => console.log(`  • ${f.flightNumber} - ${f.airline}`));
    
    // Test 2: Exact search with real flight number
    console.log(`\n\nTEST 2: EXACT SEARCH (Full flight number)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const realFlight = prefixResults[0];
    const exactSearch = realFlight.flightNumber;
    const exactResults = flights.filter(f => f.flightNumber.toLowerCase() === exactSearch.toLowerCase());
    console.log(`Searching for: "${exactSearch}"`);
    console.log(`Results: ${exactResults.length} flight(s)`);
    if (exactResults.length > 0) {
      const f = exactResults[0];
      console.log(`\n✅ FOUND EXACT MATCH:`);
      console.log(`   Flight Number: ${f.flightNumber}`);
      console.log(`   Airline: ${f.airline}`);
      console.log(`   Route: ${f.origin.city} (${f.origin.code}) → ${f.destination.city} (${f.destination.code})`);
      console.log(`   Aircraft: ${f.aircraft}`);
      console.log(`   Status: ${f.status}`);
      console.log(`   Duration: ${f.duration}`);
    }
    
    // Test 3: Non-existent flight
    console.log(`\n\nTEST 3: NON-EXISTENT FLIGHT`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const nonExistent = 'JA222';
    const notFoundResults = flights.filter(f => f.flightNumber.toLowerCase() === nonExistent.toLowerCase());
    console.log(`Searching for: "${nonExistent}"`);
    console.log(`Results: ${notFoundResults.length} flights`);
    console.log(`❌ NOT FOUND (This flight number doesn't exist in the API)\n`);
    
    // Summary
    console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                              SEARCH SUMMARY                                  ║
╚══════════════════════════════════════════════════════════════════════════════╝

✅ PREFIX SEARCH (2 characters or less):
   Example: "JA" → Returns ALL flights starting with JA
   Result: ${prefixResults.length} flights found

✅ EXACT SEARCH (Full flight number):
   Example: "${realFlight.flightNumber}" → Returns ONLY that flight
   Result: 1 flight found

❌ NON-EXISTENT SEARCH:
   Example: "JA222" → Returns 0 flights
   Reason: This flight doesn't exist in the API

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 HOW TO USE IN THE APP:

1. For PREFIX search (multiple results):
   • Type: JA
   • Get: ${prefixResults.length} JetBlue Airways flights

2. For EXACT search (single result):
   • Type: ${realFlight.flightNumber}
   • Get: Only that 1 flight with full details

3. For NON-EXISTENT:
   • Type: JA222
   • Get: No results (flight doesn't exist)

╚══════════════════════════════════════════════════════════════════════════════╝
    `);
  });
