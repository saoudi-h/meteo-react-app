export default class UnsplashAPIService {
  private getImageUrl(query: string): Promise<string> {
    const apiUrl = `/api/unsplash?query=${encodeURIComponent(query)}`

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data.imageUrl
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
      throw error
    }
  }
}
