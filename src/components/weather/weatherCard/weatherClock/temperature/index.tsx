import React from 'react'
import styles from './temperature.module.sass'

interface TemperatureProps {
  kelvinTemperature: number
}
const Temperature: React.FC<TemperatureProps> = ({ kelvinTemperature }) => {
  const [main, rest] = (Math.round((kelvinTemperature - 273.15) * 10) / 10 + '').split('.')

  return (
    <div className={styles.temperature}>
      <div className={styles.temperature__main}>{main}</div>
      <div className={styles.temperature__right}>
        <div className="celcius">°C</div>
        <div className="rest">.{rest || 0}</div>
      </div>
    </div>
  )
}

export default Temperature
