import React from 'react'
import WindSpeedSvg from '../../../../icons/WingSpeedSvg'
import WindDegSvg from '../../../../icons/WindDegSvg'
import WindGustSvg from '../../../../icons/WindGustSvg'
import CompassSvg from '../../../../icons/CompassSvg'
import { WeatherData } from '../../../../../store/types'

interface WindProps {
  speed: number
  deg: number
  gust?: number | undefined
}

const Wind: React.FC<WindProps> = ({ speed, deg, gust }) => {
  const msTokmh = (ms: number) => Math.round(ms * 3.6)
  return (
    <div className="pageInfos">
      <div className="pageInfo">
        <WindSpeedSvg />
        <div>
          {msTokmh(speed)}
          <span className="units">km/h</span>
        </div>
      </div>
      <div className="pageInfo">
        <WindDegSvg />
        <div className="compass-container">
          <CompassSvg deg={deg} />
        </div>
      </div>
      {gust && (
        <div
          className="pageInfo"
          data-tooltip-id="default-tooltip"
          data-tooltip-content={'Rafales de vent'}
          data-data-tooltip-place="top"
        >
          <WindGustSvg />
          <div>
            {msTokmh(gust)}
            <span className="units">m/s</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wind
