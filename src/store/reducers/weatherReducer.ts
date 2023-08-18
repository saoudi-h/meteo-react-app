import { WeatherActionTypes, WeatherState } from '../types'

const initialState: WeatherState = {
  weatherDataList: []
}

const weatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
  switch (action.type) {
    case 'weatherData/add':
      return { ...state, weatherDataList: [...state.weatherDataList, action.payload] }
    case 'weatherData/clear':
      return { ...state, weatherDataList: [] }
    default:
      return state
  }
}

export default weatherReducer
