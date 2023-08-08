import CoordinatesByLocation from './CoordinatesByLocation'

export default class WeatherByCity {
  private _appId: string
  private _lon: number = 0
  private _lat: number = 0
  private coorindateByLocation: CoordinatesByLocation

  constructor(appId: string) {
    this._appId = appId
    this.coorindateByLocation = new CoordinatesByLocation(this._appId)
  }

  private getUrl(): string {
    return `http://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${this._appId}`
  }
  async getWeather(city: string) {
    if (city && city === '') {
      console.error('error')
      return
    }
    const data = await this.coorindateByLocation.getCoordinates(city).then((data) => data)
    const { lat, lon } = data[0]
    if (lat && lon && lat >= 0 && lon >= lon) {
      this._lat = lat
      this._lon = lon
      const jsonData = this.getWeahterByCoordinate()
      return jsonData
    }
  }
  private async getWeahterByCoordinate() {
    if (this._lat === 0 || this._lon === 0) {
      console.error('')
      return
    }
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
}
