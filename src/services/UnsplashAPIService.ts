export default class UnsplashAPIService {
  private _apiKey: string

  constructor(apiKey: string) {
    this._apiKey = apiKey
  }

  private getImageUrl(query: string): Promise<string> {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${this._apiKey}`

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const randomImageIndex = Math.floor(Math.random() * data.results.length)
        return data.results[randomImageIndex].urls.regular
      })
  }

  async getImageForCity(cityName: string): Promise<string | null> {
    try {
      const imageUrl = await this.getImageUrl(cityName)
      return imageUrl
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération d'images à partir d'Unsplash:",
        error
      )
      return null
    }
  }
}
