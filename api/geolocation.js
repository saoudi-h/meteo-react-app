const nodeFetch = require('node-fetch')

module.exports = async (req, res) => {
  const { city } = req.query
  const weatherAPIKey = process.env.WEATHER_API_KEY
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    city
  )}&limit=1&appid=${weatherAPIKey}`

  try {
    const response = await nodeFetch(apiUrl)
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching coordinates from OpenWeatherMap:', error)
    res.status(500).json({ error: 'Failed to fetch coordinates from OpenWeatherMap' })
  }
}
