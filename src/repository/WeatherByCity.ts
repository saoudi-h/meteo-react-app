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
    return `http://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${this._appId}`;
  }
  async getWeather(city: string) {
    console.log("getWeather");
    if (city && city === "") {
      console.error("error");
      return;
    }
    await this.coorindateByLocation
      .getCoordinates(city)
      .then((data) => console.log(data));
    // console.log(data);
  }
  private async getWeahterByCoordinate(): Promise<any> {
    if (this._lat === 0 || this._lon === 0) {
      console.error("");
      return;
    }
    const url = this.getUrl();
    const options = {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log("mon erreur : : : ");
      console.error(error);
      throw error;
    }
  }
}
