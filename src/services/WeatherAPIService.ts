import GeolocationAPIService from './GeolocationAPIService'

export default class WeatherAPIService {
  private _lon: number = Infinity
  private _lat: number = Infinity
  private geolocationAPIService: GeolocationAPIService
  private units: string
  private language: string

  constructor(units = 'metric', language = 'fr') {
    this.units = units
    this.language = language
    this.geolocationAPIService = new GeolocationAPIService()
  }

  private getUrl(lat: number, lon: number): string {
    return `/api/weather?lat=${lat}&lon=${lon}&units=${this.units}&lang=${this.language}`
  }

  async fetchWeatherByCoordinates(lat: number, lon: number) {
    if (typeof lat !== 'number' || typeof lon !== 'number') {
      throw new Error('Latitude ou longitude invalide.')
    }

    const url = this.getUrl(lat, lon)
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (data.cod !== 200) {
        throw new Error(data.message ? data.message : 'Echec de la demande.')
      }
      return data
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
