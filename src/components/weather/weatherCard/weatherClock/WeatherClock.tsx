import React, { useState, useEffect } from 'react'
import { format, utcToZonedTime } from 'date-fns-tz'
import styles from './WeatherClock.module.sass'

interface WeatherClockProps {
  offset: number
}

const WeatherClock: React.FC<WeatherClockProps> = ({ offset }) => {
  const [localTime, setLocalTime] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const utcTime = new Date()
      const zonedTime = utcToZonedTime(
        utcTime,
        `Etc/GMT${offset > 0 ? '-' : '+'}${Math.abs(offset) / 3600}`
      )
      setLocalTime(zonedTime)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [offset])

  const formattedLocalTime = format(localTime, 'HH:mm:ss')

  return <div className={styles.localTimezone}>{formattedLocalTime}</div>
}

export default WeatherClock
