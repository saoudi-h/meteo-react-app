import nodeFetch from 'node-fetch'

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const unsplashAPIKey = process.env.UNSPLASH_API_KEY
  const apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query || ''
  )}&client_id=${unsplashAPIKey}`

  try {
    const response = await nodeFetch(apiUrl)
    const data = await response.json()

    if (!data.results || data.results.length === 0) {
      return new Response(JSON.stringify({ error: 'No images found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    const randomImageIndex = Math.floor(Math.random() * data.results.length)
    const imageUrl = data.results[randomImageIndex].urls.regular

    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch image from Unsplash' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
