import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../weatherCard/WeatherCard'
import { RootState } from '../../../store/store'

const WeatherList = () => {
  const weatherDataList = useSelector(
    (state: RootState) => state.weatherDataListState.weatherDataList
  )

  return (
    <div>
      {weatherDataList.map((weatherData, index) => (
        <WeatherCard key={index} weatherData={weatherData} />
      ))}
    </div>
  )
}

export default WeatherList
