import React, { useState } from 'react'
import './WeatherCard.sass'
import { WeatherData } from '../../../store/types'
import { format } from 'date-fns'
import fr from 'date-fns/locale/fr'

interface WeatherCardProps {
  weatherData: WeatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }: WeatherCardProps) => {
  const [expandDetail, setExpandDetail] = useState<boolean>(false)
  const toggleDetails = () => {
    setExpandDetail(!expandDetail)
  }

  const celciusFromKelvin = (kelvin: number) => {
    return Math.round((kelvin - 273.15) * 100) / 100 + ' °C'
  }

  return (
    <>
      {weatherData && (
        <div
          className="weather-card"
          style={{
            background: `no-repeat url(${weatherData.imageUrl}) center center`,
            backgroundSize: 'cover'
          }}
        >
          <div className="weather-card__info">
            <div className="city-name">
              {weatherData.name}, {weatherData.sys.country}
            </div>
            {/* <div>{new Date(weatherData.datetime)}</div> */}
            <div className="city-date">
              {format(new Date(weatherData.datetime), 'dd MMM yyyy', { locale: fr })}
            </div>
            <div className="city-time">
              {format(new Date(weatherData.datetime), 'HH:mm:ss', { locale: fr })}
            </div>
          </div>
          <div className="weather-card__detail">
            <div className="weather-summary">
              {weatherData.weather[0].main} - {weatherData.weather[0].description}
            </div>
            <div className="temp">
              <div>
                <div className="temp__current">{celciusFromKelvin(weatherData.main.temp)}</div>
              </div>
              <div className="temp__feels_like">
                ressenti : {celciusFromKelvin(weatherData.main.feels_like)}
              </div>
              <div className="temp__temp_min">
                min : {celciusFromKelvin(weatherData.main.temp_min)}
              </div>
              <div className="temp__temp_max">
                max : {celciusFromKelvin(weatherData.main.temp_max)}
              </div>
            </div>
            <button className="expand-button" onClick={toggleDetails}>
              {expandDetail ? 'Réduire' : 'Voir plus'}
            </button>
            {expandDetail && (
              <div className="details">
                <div>
                  Coordonnées : {weatherData.coord.lat}, {weatherData.coord.lon}
                </div>
                <div>Pression : {weatherData.main.pressure} hPa</div>
                <div>Humidité : {weatherData.main.humidity}%</div>
                <div>Vitesse du vent : {weatherData.wind.speed} m/s</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default WeatherCard
