export default class CoordinatesByLocation {
  private _cityName: string;
  private _stateCode: string;
  private _countryCode: string;
  private _appId: string = "ac20a75cd3a8aa490c0bae7276c9f3f2";
  private _limit: number = 1;

  constructor(
    cityName: string = "",
    stateCode: string = "",
    countryCode: string = ""
  ) {
    this._cityName = cityName;
    this._stateCode = stateCode;
    this._countryCode = countryCode;
  }

  get cityName(): string {
    return this._cityName;
  }
  get stateCode(): string {
    return this._stateCode;
  }
  get countryCode(): string {
    return this._countryCode;
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
  set stateCode(value: string) {
    this._stateCode = value;
  }
  set countryCode(value: string) {
    this._countryCode = value;
  }
  set appId(value: string) {
    this._appId = value;
  }
  set limit(value: number) {
    this._limit = value;
  }

  setAll(
    cityName: string,
    stateCode: string,
    countryCode: string,
    appId: string,
    limit: number
  ) {
    this._cityName = cityName;
    this._stateCode = stateCode;
    this._countryCode = countryCode;
    this._appId = appId;
    this._limit = limit;
  }

  private getUrl(): string {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${this._cityName},${this._stateCode},${this._countryCode}&limit=${this._limit}&appid=${this._appId}`;
  }

  async getCity(): Promise<any> {
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
