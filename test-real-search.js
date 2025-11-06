// Test exact search with real flights
fetch('https://flight-explorer-api.codewalnut.com/api/flights')
  .then(r => r.json())
  .then(d => {
    console.log('🔍 Testing Exact Flight Search')
    console.log('================================\n')
    
    // Test 1: Search for JA539
    const searchTerm1 = 'JA539'
    const flight1 = d.flights.find(f => f.flightNumber === searchTerm1)
    console.log(`Search: "${searchTerm1}"`)
    if (flight1) {
      console.log('✅ FOUND!')
      console.log(`   Flight: ${flight1.flightNumber}`)
      console.log(`   Airline: ${flight1.airline}`)
      console.log(`   Route: ${flight1.origin.city} → ${flight1.destination.city}`)
      console.log(`   Aircraft: ${flight1.aircraft}`)
      console.log(`   Status: ${flight1.status}\n`)
    } else {
      console.log('❌ NOT FOUND\n')
    }
    
    // Test 2: Search for AA369
    const searchTerm2 = 'AA369'
    const flight2 = d.flights.find(f => f.flightNumber === searchTerm2)
    console.log(`Search: "${searchTerm2}"`)
    if (flight2) {
      console.log('✅ FOUND!')
      console.log(`   Flight: ${flight2.flightNumber}`)
      console.log(`   Airline: ${flight2.airline}`)
      console.log(`   Route: ${flight2.origin.city} → ${flight2.destination.city}`)
      console.log(`   Aircraft: ${flight2.aircraft}`)
      console.log(`   Status: ${flight2.status}\n`)
    } else {
      console.log('❌ NOT FOUND\n')
    }
    
    // Test 3: Prefix search (JA)
    console.log('Search: "JA" (prefix search)')
    const jaFlights = d.flights.filter(f => f.flightNumber.startsWith('JA'))
    console.log(`✅ Found ${jaFlights.length} flights:`)
    jaFlights.forEach(f => {
      console.log(`   - ${f.flightNumber}`)
    })
  })
