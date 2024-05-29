import React from 'react'
import { WeatherData } from '../../../../store/types'
import Wind from './tabInfos'
import Temperature from './temperature'
import Infos from './infos'
import './WeatherBody.sass'
import TabInfos from './tabInfos'
import DescriptionCard from './description'

interface WeatherBodyProps {
  data: WeatherData
}
const WeatherBody: React.FC<WeatherBodyProps> = ({ data }) => {
  return (
    <div className="weather-card__body">
      <div className="card-grid">
        <div className="card-grid__description cell">
          <DescriptionCard
            icon={data.weather[0].icon}
            description={data.weather[0].description}
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            timeZoneOffset={data.timezone}
          />
        </div>

        <div className="card-grid__tab cell">
          <TabInfos weatherData={data} />
        </div>

        <div className="card-grid__infos cell">
          <Infos
            humidity={data.main.humidity}
            pGround={data.main.grnd_level || undefined}
            pSea={data.main.sea_level || data.main.pressure}
            visibility={data.visibility}
            clouds={data.clouds.all}
          />
        </div>

        <div className="card-grid__temperature cell">
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
