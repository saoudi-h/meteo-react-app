import React, { useState } from 'react'
import './CityCardWeather.sass'

interface CityCardWeatherProps {
  weatherData: any;
}

const CityCardWeather: React.FC<CityCardWeatherProps> = ({ weatherData }: CityCardWeatherProps) => {
  const [expandDetail, setExpandDetail] = useState<boolean>(false);
  console.log(weatherData)
  const toggleDetails = () => {
    setExpandDetail(!expandDetail);
  }

  const celciusFromKelvin = (kelvin:number) =>{
    return Math.round((kelvin - 273.15)*100)/100 +" °C";
  }
  return (
    <div className="weather-card">
      {
        weatherData && (
          <>
            <div className="city-name">{weatherData.name}</div>
            <div className="weather-summary">
              {weatherData.weather[0].main} - {weatherData.weather[0].description}
            </div>
            <div className="temp">
              <div>
              <div className="temp__current">{celciusFromKelvin(weatherData.main.temp)}</div>

              </div>
              <div className="temp__feels_like">ressenti : {celciusFromKelvin(weatherData.main.feels_like)}</div>
              <div className="temp__temp_min">min : {celciusFromKelvin(weatherData.main.temp_min)}</div>
              <div className="temp__temp_max">max : {celciusFromKelvin(weatherData.main.temp_max)}</div>
            </div>
            <button className="expand-button" onClick={toggleDetails}>
              {expandDetail ? 'Réduire' : 'Voir plus'}
            </button>
            {expandDetail && (
              <div className="details">
                <div>Coordonnées : {weatherData.coord.lat}, {weatherData.coord.lon}</div>
                <div>Pression : {weatherData.main.pressure} hPa</div>
                <div>Humidité : {weatherData.main.humidity}%</div>
                <div>Vitesse du vent : {weatherData.wind.speed} m/s</div>
              </div>
            )}
          </>
        )}
    </div>
  )
}

export default CityCardWeather