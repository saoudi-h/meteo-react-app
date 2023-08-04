export default class CoordinatesByLocation {
  private _cityName: string;
  private _appId: string = "ac20a75cd3a8aa490c0bae7276c9f3f2";
  private _limit: number = 1;

  constructor(
    cityName: string = "",
    stateCode: string = "",
    countryCode: string = ""
  ) {
    this._cityName = cityName;
  }

  get cityName(): string {
    return this._cityName;
  }
  get appId(): string {
    return this._appId;
  }
  get limit(): number {
    return this._limit;
  }

  set cityName(value: string) {
    this._cityName = value;
  }
  set appId(value: string) {
    this._appId = value;
  }
  set limit(value: number) {
    this._limit = value;
  }

  setAll(
    cityName: string,
    appId: string,
    limit: number
  ) {
    this._cityName = cityName;
    this._appId = appId;
    this._limit = limit;
  }

  private getUrl(): string {
    
    return `http://api.openweathermap.org/geo/1.0/direct?q=${this._cityName}&limit=${this._limit}&appid=${this._appId}`;
  }

  async getCity(city=""): Promise<any> {
    if(city && city !==""){
        this._cityName = city;
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
