// const nodeFetch = require('node-fetch')

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  const units = searchParams.get('units')
  const lang = searchParams.get('lang')
  const weatherAPIKey = process.env.WEATHER_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${weatherAPIKey}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (data.cod !== 200) {
      throw new Error(data.message ? data.message : 'Failed to fetch weather data.')
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error fetching weather data from OpenWeatherMap:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch weather data from OpenWeatherMap' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
