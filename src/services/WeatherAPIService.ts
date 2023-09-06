import GeolocationAPIService from './GeolocationAPIService'

export default class WeatherAPIService {
  private _appId: string
  private _lon: number = Infinity
  private _lat: number = Infinity
  private geolocationAPIService: GeolocationAPIService

  constructor(appId: string) {
    this._appId = appId
    this.geolocationAPIService = new GeolocationAPIService(this._appId)
  }

  private getUrl(): string {
    return `http://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${this._appId}`
  }

  async fetchWeatherByCoordinates(lat: number, lon: number) {
    if (typeof lat !== 'number' || typeof lon !== 'number') {
      throw new Error('Latitude ou longitude invalide.')
    }

    this._lat = lat
    this._lon = lon

    const url = this.getUrl()
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      return await response.json()
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getWeather(city: string) {
    if (!city) {
      throw new Error('Le nom de la ville est manquant')
    }

    const data = await this.geolocationAPIService.getCoordinatesForCity(city)
    if (data.length === 0) {
      throw new Error('Nom de ville invalide.')
    }
    const { lat, lon } = data[0]

    if (typeof lat !== 'number' || typeof lon !== 'number') {
      throw new Error('Coordonnées invalides.')
    }

    return await this.fetchWeatherByCoordinates(lat, lon)
  }
}
