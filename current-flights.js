// Test with CURRENT flight numbers
fetch('https://flight-explorer-api.codewalnut.com/api/flights')
  .then(r => r.json())
  .then(d => {
    const flights = d.flights;
    
    console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                  CURRENT AVAILABLE FLIGHT NUMBERS                            ║
╚══════════════════════════════════════════════════════════════════════════════╝

Total Flights: ${flights.length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST 1: EXACT FLIGHT SEARCHES - USE THESE FLIGHT NUMBERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
    
    // Show first 5 flights as examples for exact search
    flights.slice(0, 5).forEach((f, i) => {
      console.log(`${i+1}. ${f.flightNumber} - ${f.airline}`);
    });
    
    console.log(`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEST 2: PREFIX SEARCHES - USE THESE AIRLINE CODES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    
    const prefixes = ['AA', 'FA', 'SA', 'BA', 'AC', 'UA', 'DA', 'JA', 'E', 'L'];
    prefixes.forEach(prefix => {
      const count = flights.filter(f => f.flightNumber.startsWith(prefix)).length;
      if (count > 0) {
        const examples = flights.filter(f => f.flightNumber.startsWith(prefix)).slice(0, 2);
        console.log(`\n${prefix}: ${count} flights`);
        examples.forEach(f => console.log(`   • ${f.flightNumber} - ${f.airline}`));
      }
    });
    
    console.log(`

╔══════════════════════════════════════════════════════════════════════════════╗
║                            HOW TO USE IN APP                                 ║
╚══════════════════════════════════════════════════════════════════════════════╝

✅ STEP 1: Visit http://localhost:5173/

✅ STEP 2: Click "Flight Number" tab

✅ STEP 3: Try EXACT search with: ${flights[0].flightNumber}
   Expected: 1 exact result

✅ STEP 4: Try PREFIX search with: AA
   Expected: Multiple results

✅ STEP 5: Check browser console (F12) for logs

╚══════════════════════════════════════════════════════════════════════════════╝
    `);
  });
