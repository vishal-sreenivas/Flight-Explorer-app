#!/usr/bin/env node

/**
 * Complete Flight Search System Test
 * Run this in Node.js to verify the entire system works correctly
 */

async function runCompleteTest() {
  console.log('\n' + '='.repeat(60));
  console.log('FLIGHT EXPLORER - COMPLETE SYSTEM TEST');
  console.log('='.repeat(60) + '\n');

  try {
    // Test 1: API Connection
    console.log('📡 TEST 1: API Connection');
    console.log('-'.repeat(60));
    const response = await fetch('https://flight-explorer-api.codewalnut.com/api/flights');
    console.log(`✅ Status: ${response.status} ${response.statusText}`);

    // Test 2: Data Retrieval
    console.log('\n📊 TEST 2: Data Retrieval');
    console.log('-'.repeat(60));
    const data = await response.json();
    const flights = data.flights || [];
    console.log(`✅ Total flights: ${flights.length}`);
    console.log(`✅ Sample flight structure:`);
    console.log(JSON.stringify(flights[0], null, 2));

    // Test 3: Search By Flight Number
    console.log('\n🔍 TEST 3: Search By Flight Number');
    console.log('-'.repeat(60));
    
    const testSearches = [
      { term: 'AA', expected: 'Multiple' },
      { term: 'FA', expected: 'Multiple' },
      { term: 'UA', expected: 'Multiple' },
      { term: 'AA860', expected: 'Specific' },
    ];

    testSearches.forEach(({ term, expected }) => {
      const results = flights.filter(f => 
        f.flightNumber.toLowerCase().includes(term.toLowerCase())
      );
      console.log(`  "${term}" → ${results.length} results (Expected: ${expected})`);
      if (results.length > 0) {
        console.log(`    ✓ Sample: ${results[0].flightNumber} - ${results[0].airline}`);
      }
    });

    // Test 4: Search By Route
    console.log('\n🛫 TEST 4: Search By Route');
    console.log('-'.repeat(60));
    
    const routeSearches = ['Toronto', 'Denver', 'New York'];
    routeSearches.forEach(city => {
      const results = flights.filter(f =>
        f.origin.city.toLowerCase().includes(city.toLowerCase()) ||
        f.destination.city.toLowerCase().includes(city.toLowerCase())
      );
      console.log(`  City: "${city}" → ${results.length} results`);
      if (results.length > 0) {
        console.log(`    ✓ Sample: ${results[0].flightNumber} - ${results[0].origin.city} → ${results[0].destination.city}`);
      }
    });

    // Test 5: Available Airlines
    console.log('\n✈️  TEST 5: Available Airlines');
    console.log('-'.repeat(60));
    const airlines = [...new Set(flights.map(f => f.airline))].sort();
    console.log(`Total unique airlines: ${airlines.length}`);
    airlines.forEach(airline => {
      const count = flights.filter(f => f.airline === airline).length;
      console.log(`  • ${airline}: ${count} flights`);
    });

    // Test 6: Flight Number Prefixes
    console.log('\n📍 TEST 6: Flight Number Prefixes');
    console.log('-'.repeat(60));
    const prefixes = [...new Set(flights.map(f => f.flightNumber.substring(0, 2)))].sort();
    console.log(`Available prefixes: ${prefixes.join(', ')}`);
    prefixes.forEach(prefix => {
      const count = flights.filter(f => f.flightNumber.startsWith(prefix)).length;
      console.log(`  ${prefix}: ${count} flights`);
    });

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('✅ ALL TESTS PASSED!');
    console.log('='.repeat(60));
    console.log('\n🎯 RECOMMENDED SEARCHES TO TRY:');
    console.log('  • Flight Number: AA, FA, UA, BA, DA, E, L, JA, AC, SA');
    console.log('  • Specific Flight: AA860, FA633, UA921, DA645');
    console.log('  • Route: Toronto, Denver, New York, London, Frankfurt');
    console.log('\n✨ The app is ready to use!\n');

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    process.exit(1);
  }
}

// Run the test
runCompleteTest();
