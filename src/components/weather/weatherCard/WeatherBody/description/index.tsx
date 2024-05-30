import React from 'react'
import './Description.sass'
import SunRiseSvg from '../../../../icons/SunRiseSvg'
import SunSetSvg from '../../../../icons/SunSetSvg'

interface DescriptionCardProps {
  icon: string
  description: string
  sunrise: number
  sunset: number
  timeZoneOffset: number
}
const DescriptionCard: React.FC<DescriptionCardProps> = ({
  icon,
  description,
  sunrise,
  sunset,
  timeZoneOffset
}) => {
  const sunriseDate = new Date((sunrise + timeZoneOffset) * 1000)
  const sunsetDate = new Date((sunset + timeZoneOffset) * 1000)
  return (
    <div className="description-card">
      <img
        src={`/images/WeatherAnimatedSvg/${icon}.svg`}
        alt={description}
        className="card-grid__img"
      />
      <div className="sunRiseSet">
        <div className="sunrise">
          <SunRiseSvg />
          <div>{`${sunriseDate.getUTCHours()}H${sunriseDate.getUTCMinutes()}`}</div>
        </div>
        <div className="sunset">
          <SunSetSvg />
          <div>{`${sunsetDate.getUTCHours()}H${sunsetDate.getUTCMinutes()}`}</div>
        </div>
      </div>
      <div className="description__text">{description}</div>
    </div>
  )
}

export default DescriptionCard
