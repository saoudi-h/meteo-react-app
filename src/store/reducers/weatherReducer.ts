import { WeatherActionTypes, WeatherState } from '../types'

const initialState: WeatherState = {
  weatherDataList: []
}

const weatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
  switch (action.type) {
    // check if the city already exists.
    case 'weatherData/add':
      if (state.weatherDataList.some((weatherData) => weatherData.name === action.payload.name)) {
        return state
      }
      return {
        ...state,
        weatherDataList: [...state.weatherDataList, action.payload]
      }

    case 'weatherData/update':
      if (
        state.weatherDataList.some((weatherData) =>
          action.payload.searchMethod === 'city'
            ? weatherData.coord.lat === action.payload.coord.lat &&
              weatherData.coord.lon === action.payload.coord.lon
            : weatherData.searchMethod === 'geolocation'
        )
      ) {
        const updatedList = state.weatherDataList.map((item) => {
          if (
            action.payload.searchMethod === 'city'
              ? item.coord.lat === action.payload.coord.lat &&
                item.coord.lon === action.payload.coord.lon
              : item.searchMethod === 'geolocation'
          ) {
            return { ...item, ...action.payload }
          }
          return item
        })

        return {
          ...state,
          weatherDataList: updatedList
        }
      }
      return state

    case 'weatherData/remove':
      return {
        ...state,
        weatherDataList: [
          ...state.weatherDataList.filter((weatherData) => weatherData.name !== action.payload)
        ]
      }
    case 'weatherData/clear':
      return { ...state, weatherDataList: [] }
    default:
      return state
  }
}

export default weatherReducer
