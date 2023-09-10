import React from 'react'
import { WeatherData } from '../../../../store/types'
import Wind from './tabInfos'
import Temperature from './temperature'
import Infos from './infos'
import './WeatherBody.sass'
import TabInfos from './tabInfos'

interface WeatherBodyProps {
  data: WeatherData
}
const WeatherBody: React.FC<WeatherBodyProps> = ({ data }) => {
  return (
    <div className="weather-card__body">
      <div className="card-grid">
        <div className="card-grid__description">
          <img
            src={`./images/WeatherAnimatedSvg/${data.weather[0].icon}.svg`}
            alt={data.weather[0].description}
            className="card-grid__img"
          />
          <div className="description__text">{data.weather[0].description}</div>
        </div>

        <div className="card-grid__tab">
          <TabInfos weatherData={data} />
        </div>

        <div className="card-grid__infos">
          <Infos
            humidity={data.main.humidity}
            pGround={data.main.grnd_level || undefined}
            pSea={data.main.sea_level || data.main.pressure}
            visibility={data.visibility}
            clouds={data.clouds.all}
          />
        </div>

        <div className="card-grid__temperature">
          <Temperature
            temperature={data.main.temp}
            min={data.main.temp_min}
            max={data.main.temp_max}
            feelsLike={data.main.feels_like}
          />
        </div>
      </div>
    </div>
  )
}

export default WeatherBody
