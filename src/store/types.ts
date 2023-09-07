export interface WeatherData {
  searchMethod: SearchMethod
  searchText?: string
  datetime: string
  imageUrl?: string
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export type GeolocationStatus = 'prompt' | 'granted' | 'denied'

export type SearchMethod = 'city' | 'geolocation'

export interface WeatherState {
  weatherDataList: WeatherData[]
}

export interface AddWeatherDataAction {
  type: 'weatherData/add'
  payload: WeatherData
}

export interface ClearWeatherDataAction {
  type: 'weatherData/clear'
}

export interface RemoveWeatherDataAction {
  type: 'weatherData/remove'
  payload: string
}

export type WeatherActionTypes =
  | AddWeatherDataAction
  | ClearWeatherDataAction
  | RemoveWeatherDataAction
