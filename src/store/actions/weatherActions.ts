import { AddWeatherDataAction, ClearWeatherDataAction, WeatherData } from '../types'

export const addWeatherData: (data: WeatherData) => AddWeatherDataAction = (data: WeatherData) => ({
  type: 'weatherData/add',
  payload: data
})

export const clearWeatherData: () => ClearWeatherDataAction = () => ({
  type: 'weatherData/clear'
})
