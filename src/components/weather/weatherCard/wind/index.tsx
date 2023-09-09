import React from 'react'
import styles from './wind.module.sass'
import WindSvg from '../../../icons/WindSvg'
import WindSpeedSvg from '../../../icons/WingSpeedSvg'
import WindDegSvg from '../../../icons/WindDegSvg'
import WindGustSvg from '../../../icons/WindGustSvg'
import WindDirectionArrowSvg from '../../../icons/WindDirectionArrowSvg'
import CompassSvg from '../../../icons/CompassSvg'

interface WindProps {
  data: {
    speed: number
    deg: number
    gust?: number
  }
}
const Wind: React.FC<WindProps> = ({ data }) => {
  const msTokmh = (ms: number) => Math.round(ms * 3.6)
  return (
    <>
      <div className={styles.windLogo}>
        <WindSvg />
      </div>

      <div className={styles.windInfos}>
        <div className={styles.windInfo}>
          <WindSpeedSvg />
          <div>
            {msTokmh(data.speed)}
            <span className={styles.units}>km/h</span>
          </div>
        </div>
        <div className={styles.windInfo}>
          <WindDegSvg />
          <div style={{ transformOrigin: '50% 50%', transform: `rotate(${data.deg}deg)` }}></div>
          <CompassSvg deg={data.deg} />
        </div>
        {data.gust && (
          <div
            className={styles.windInfo}
            data-tooltip-id="default-tooltip"
            data-tooltip-content={'Rafales de vent'}
            data-data-tooltip-place="top"
          >
            <WindGustSvg />
            <div>
              {msTokmh(data.gust)}
              <span className={styles.units}>m/s</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Wind
