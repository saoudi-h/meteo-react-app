import React from 'react'
import styles from './temperature.module.sass'
import TemperatureMinSvg from '../../../icons/TemperatureMinSvg'
import TemperatureMaxSvg from '../../../icons/TemperatureMaxSvg'
import FeelsLikeSvg from '../../../icons/FeelsLikeSvg'

interface TemperatureProps {
  temperature: number
  min: number
  max: number
  feelsLike: number
}
const Temperature: React.FC<TemperatureProps> = ({ temperature, min, max, feelsLike }) => {
  const f = (t: number): number => Math.round(t * 10) / 10
  const [main, rest] = `${f(temperature)}`.split('.')

  return (
    <div className={styles.temperature}>
      <div className={styles.temperature__main}>
        <div className={styles.temperature__left}>{main}</div>
        <div className={styles.temperature__right}>
          <div className="celcius">°C</div>
          <div className="rest">.{rest || 0}</div>
        </div>
      </div>

      <div className={styles.info}>
        <TemperatureMinSvg />
        <div>
          {f(min)}
          <span className={styles.unit}>C°</span>
        </div>
      </div>

      <div className={styles.info}>
        <TemperatureMaxSvg />
        <div>
          {f(max)}
          <span className={styles.unit}>C°</span>
        </div>
      </div>

      <div className={styles.info}>
        <FeelsLikeSvg />
        <div>
          {f(feelsLike)}
          <span className={styles.unit}>C°</span>
        </div>
      </div>
    </div>
  )
}

export default Temperature
