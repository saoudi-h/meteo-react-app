import {
  AddWeatherDataAction,
  ClearWeatherDataAction,
  RemoveWeatherDataAction,
  WeatherData
} from '../types'

export const addWeatherData: (data: WeatherData) => AddWeatherDataAction = (data: WeatherData) => ({
  type: 'weatherData/add',
  payload: data
})

export const removeWeatherData: (city: string) => RemoveWeatherDataAction = (city: string) => ({
  type: 'weatherData/remove',
  payload: city
})

export const clearWeatherData: () => ClearWeatherDataAction = () => ({
  type: 'weatherData/clear'
})
