// Debug script to test API connection
fetch('https://flight-explorer-api.codewalnut.com/api/flights')
  .then(res => res.json())
  .then(data => {
    console.log('Total flights:', data.flights?.length);
    console.log('\nFirst 5 flights:');
    data.flights?.slice(0, 5).forEach((flight, i) => {
      console.log(`${i + 1}. ID: ${flight.id}, FlightNumber: ${flight.flightNumber}, Airline: ${flight.airline}`);
    });
    console.log('\nSample flight structure:');
    console.log(JSON.stringify(data.flights?.[0], null, 2));
  })
  .catch(err => console.error('Error:', err));
