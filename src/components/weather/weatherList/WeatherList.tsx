import React from 'react'
import WeatherCard from '../weatherCard/WeatherCard'
import './WeatherList.sass'
import { WeatherData } from '../../../store/types'

interface WeatherListProps {
  weatherDataList: WeatherData[]
  highlightedCity: string | null
}
const WeatherList: React.FC<WeatherListProps> = ({ weatherDataList, highlightedCity }) => {
  return (
    <div className="container">
      <div className="weather-list">
        {weatherDataList.map((weatherData, index) => (
          <WeatherCard
            key={weatherData.name}
            weatherData={weatherData}
            highlighted={weatherData.name === highlightedCity}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherList
