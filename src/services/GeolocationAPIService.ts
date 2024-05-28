export default class GeolocationAPIService {
  private _cityName: string
  private _limit: number = 1

  constructor(cityName: string = '') {
    this._cityName = cityName
  }

  get cityName(): string {
    return this._cityName
  }

  get limit(): number {
    return this._limit
  }

  set cityName(value: string) {
    this._cityName = value
  }

  set limit(value: number) {
    this._limit = value
  }

  setAll(cityName: string, limit: number) {
    this._cityName = cityName
    this._limit = limit
  }

  private getCoordinatesUrl(city: string): string {
    return `/api/geolocation?city=${encodeURIComponent(city)}&limit=${this._limit}`
  }

  async getCoordinatesForCity(city: string = ''): Promise<any> {
    if (city && city !== '') {
      this._cityName = city
    }

    const url = this.getCoordinatesUrl(this._cityName)
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      return await response.json()
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des coordonnées:", error)
      throw error
    }
  }
}
