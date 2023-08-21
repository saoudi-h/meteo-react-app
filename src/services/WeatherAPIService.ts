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
      throw new Error('Invalid latitude or longitude.')
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
      throw new Error('City name is missing.')
    }

    const data = await this.geolocationAPIService.getCoordinatesForCity(city)
    const { lat, lon } = data[0]

    if (typeof lat !== 'number' || typeof lon !== 'number' || lat < 0 || lon < 0) {
      throw new Error('Invalid coordinates.')
    }

    return await this.fetchWeatherByCoordinates(lat, lon)
  }
}
