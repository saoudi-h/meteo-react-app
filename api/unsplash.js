const nodeFetch = require('node-fetch')

module.exports = async (req, res) => {
  const { query } = req.query
  const unsplashAPIKey = process.env.UNSPLASH_API_KEY
  const apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=${unsplashAPIKey}`

  try {
    const response = await nodeFetch(apiUrl)
    const data = await response.json()
    const randomImageIndex = Math.floor(Math.random() * data.results.length)
    const imageUrl = data.results[randomImageIndex].urls.regular
    res.status(200).json({ imageUrl })
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error)
    res.status(500).json({ error: 'Failed to fetch image from Unsplash' })
  }
}
