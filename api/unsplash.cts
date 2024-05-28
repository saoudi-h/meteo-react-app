// const nodeFetch = require('node-fetch')

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get('query')
  if (!query) {
    return new Response(JSON.stringify({ error: 'Query parameter is missing' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }
  const unsplashAPIKey = process.env.UNSPLASH_API_KEY
  console.log('UNSPLASH_API_KEY:', unsplashAPIKey)
  const apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=${unsplashAPIKey}`

  console.log('apiUrl:', apiUrl)

  try {
    console.log('before fetch')
    const response = await fetch(apiUrl, { method: 'GET' })
    console.log('after fetch')
    const data = await response.json()
    console.log('data:', data)
    const randomImageIndex = Math.floor(Math.random() * data.results.length)
    const imageUrl = data.results[randomImageIndex].urls.regular
    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch image from Unsplash' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
