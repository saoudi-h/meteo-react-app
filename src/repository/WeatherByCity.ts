import CoordinatesByLocation from "./CoordinatesByLocation";

export default class WeatherByCity {
    private _appId: string;
    private _lon: number = 0;
    private _lat: number = 0;
    private coorindateByLocation:CoordinatesByLocation;

    constructor(appId:string){
        this._appId = appId;
        this.coorindateByLocation = new CoordinatesByLocation();
    }

    private getUrl(): string {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&appid=${this._appId}`;
      }
    async getWeather(city){

    }
    private async getWeahterByCoordinate(){

    }



}