import CoordinatesByLocation from "./CoordinatesByLocation";

export default class WeatherByCity {
  private _appId: string;
  private _lon: number = 0;
  private _lat: number = 0;
  private coorindateByLocation: CoordinatesByLocation;

  constructor(appId: string) {
    this._appId = appId;
    this.coorindateByLocation = new CoordinatesByLocation(this._appId);
  }

  private getUrl(): string {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${this._appId}`;
  }
  async getWeather(city:string) {
    if (city && city === "") {
      console.error("");
      return;
    }
  }
  private async getWeahterByCoordinate(): Promise<any> {
    if (this._lat === 0 || this._lon === 0) {
      console.error("");
      return;
    }
    const url = this.getUrl();
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
