const nodeFetch = require('node-fetch')

module.export = async (req, res) => {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  const units = searchParams.get('units')
  const lang = searchParams.get('lang')
  const weatherAPIKey = process.env.WEATHER_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${weatherAPIKey}`

  try {
    const response = await nodeFetch(apiUrl)
    const data = await response.json()

    if (data.cod !== 200) {
      throw new Error(data.message ? data.message : 'Failed to fetch weather data.')
    }
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching weather data from OpenWeatherMap:', error)
    res.status(500).json({ error: 'Failed to fetch weather data from OpenWeatherMap' })
  }
}
