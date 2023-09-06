import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../weatherCard/WeatherCard'
import { RootState } from '../../../store/store'
import './WeatherList.sass'

interface WeatherListProps {
  highlightedCity: string | null
}
const WeatherList: React.FC<WeatherListProps> = ({ highlightedCity }) => {
  const weatherDataList = useSelector(
    (state: RootState) => state.weatherDataListState.weatherDataList
  )

  return (
    <div className="container">
      <div className="weather-list">
        {weatherDataList.map((weatherData, index) => (
          <WeatherCard
            key={index}
            weatherData={weatherData}
            highlighted={weatherData.name === highlightedCity}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherList
