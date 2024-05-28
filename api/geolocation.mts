import nodeFetch from 'node-fetch'

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city')
  const weatherAPIKey = process.env.WEATHER_API_KEY
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    city || ''
  )}&limit=1&appid=${weatherAPIKey}`

  try {
    const response = await nodeFetch(apiUrl)
    const data = await response.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Error fetching coordinates from OpenWeatherMap:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch coordinates from OpenWeatherMap' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
