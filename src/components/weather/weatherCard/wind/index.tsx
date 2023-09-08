import React from 'react'
import styles from './wind.module.sass'
import WindSvg from '../../../icons/WindSvg'
import WindSpeedSvg from '../../../icons/WingSpeedSvg'
import WindDegSvg from '../../../icons/WindDegSvg'
import WindGustSvg from '../../../icons/WindGustSvg'

interface WindProps {
  data: {
    speed: number
    deg: number
    gust?: number
  }
}
const Wind: React.FC<WindProps> = ({ data }) => {
  return (
    <>
      <div className={styles.windLogo}>
        <WindSvg />
      </div>

      <div className={styles.windInfos}>
        <div className={styles.windInfo}>
          <WindSpeedSvg />
          <div>
            {data.speed}
            <span className={styles.units}>m/s</span>
          </div>
        </div>
        <div className={styles.windInfo}>
          <WindDegSvg />
          <div>
            {data.deg}
            <span className={styles.units}>°</span>
          </div>
        </div>
        {data.gust && (
          <div className={styles.windInfo}>
            <WindGustSvg />
            <div>
              {data.gust}
              <span className={styles.units}>m/s</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Wind
