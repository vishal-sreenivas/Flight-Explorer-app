// Quick test to see current flights and debug the search
fetch('https://flight-explorer-api.codewalnut.com/api/flights')
  .then(r => r.json())
  .then(d => {
    const flights = d.flights;
    console.log('=== CURRENT API DATA ===\n');
    console.log('Total flights:', flights.length);
    console.log('\nFirst 10 flights:');
    flights.slice(0, 10).forEach((f, i) => {
      console.log(`${i+1}. ${f.flightNumber} - ${f.airline}`);
    });
    
    console.log('\n=== SEARCH TEST ===');
    console.log('\nSearching for: FA845');
    const found = flights.find(f => f.flightNumber === 'FA845');
    console.log(found ? '✅ FOUND' : '❌ NOT FOUND');
    
    console.log('\nAll FA flights:');
    const faFlights = flights.filter(f => f.flightNumber.startsWith('FA'));
    console.log(`Found ${faFlights.length} FA flights:`);
    faFlights.forEach(f => console.log(`  - ${f.flightNumber}`));
    
    console.log('\nAll AA flights:');
    const aaFlights = flights.filter(f => f.flightNumber.startsWith('AA'));
    console.log(`Found ${aaFlights.length} AA flights:`);
    aaFlights.slice(0, 5).forEach(f => console.log(`  - ${f.flightNumber}`));
  })
  .catch(e => console.error('Error:', e.message));
