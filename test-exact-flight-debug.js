// Test exact flight search
const API_BASE_URL = 'https://flight-explorer-api.codewalnut.com/api'

async function testExactSearch() {
  try {
    console.log('🚀 TESTING EXACT FLIGHT SEARCH')
    console.log('================================')
    
    // Step 1: Fetch all flights
    console.log('\n📡 Step 1: Fetching all flights...')
    const response = await fetch(`${API_BASE_URL}/flights`)
    console.log('Response status:', response.status)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('✅ Fetched successfully')
    console.log('Data structure keys:', Object.keys(data))
    console.log('Has flights array:', !!data.flights)
    console.log('Number of flights:', data.flights?.length)
    
    if (!data.flights || data.flights.length === 0) {
      console.error('❌ No flights in response!')
      return
    }
    
    // Step 2: Show available flights
    console.log('\n📋 Step 2: First 10 flight numbers:')
    data.flights.slice(0, 10).forEach((f, i) => {
      console.log(`  ${i + 1}. ${f.flightNumber}`)
    })
    
    // Step 3: Test exact search logic
    console.log('\n🔍 Step 3: Testing exact search logic...')
    const searchTerm = 'JA645'
    console.log(`Searching for: "${searchTerm}"`)
    console.log(`Search term length: ${searchTerm.length}`)
    
    const allFlights = data.flights
    const results = allFlights.filter((flight) => {
      const flightNum = flight.flightNumber.toLowerCase()
      const term = searchTerm.toLowerCase()
      const isExactMatch = flightNum === term
      
      if (isExactMatch) {
        console.log(`  ✅ EXACT MATCH found: ${flight.flightNumber}`)
      }
      return isExactMatch
    })
    
    console.log(`\n📊 Results found: ${results.length}`)
    if (results.length > 0) {
      results.forEach((f) => {
        console.log(`  ✅ ${f.flightNumber} - ${f.airline}`)
        console.log(`     Route: ${f.origin.city} → ${f.destination.city}`)
        console.log(`     Aircraft: ${f.aircraft}`)
      })
    } else {
      console.log('  ❌ No exact match found')
      console.log('\n  Available flight numbers (first 30):')
      allFlights.slice(0, 30).forEach((f, i) => {
        console.log(`    ${i + 1}. ${f.flightNumber}`)
      })
    }
    
  } catch (error) {
    console.error('❌ ERROR:', error.message)
    console.error(error)
  }
}

testExactSearch()
