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
    <div className="windInfos">
      <div className="windInfo">
        <WindSpeedSvg />
        <div>
          {msTokmh(speed)}
          <span className="units">km/h</span>
        </div>
      </div>
      <div className="windInfo">
        <WindDegSvg />
        <div style={{ transformOrigin: '50% 50%', transform: `rotate(${deg}deg)` }}></div>
        <CompassSvg deg={deg} />
      </div>
      {gust && (
        <div
          className="windInfo"
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
