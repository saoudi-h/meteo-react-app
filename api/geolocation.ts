// const nodeFetch = require('node-fetch')
// const some = require('../libs/helpers')
// const nodeFetch = require('node-fetch')

export async function GET(request: Request) {
  // Parse l'URL de la requête pour obtenir les paramètres de requête
  const url = new URL(request.url)
  const city = url.searchParams.get('city')

  if (!city) {
    return new Response(JSON.stringify({ error: 'City parameter is missing' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const geoAPIKey = process.env.WEATHER_API_KEY as string
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    city
  )}&limit=1&appid=${geoAPIKey}`
  console.log('apiUrl:', apiUrl)

  try {
    const response = await fetch(apiUrl, { method: 'GET' })
    const data = await response.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error fetching coordinates from OpenWeatherMap:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch coordinates from OpenWeatherMap' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
