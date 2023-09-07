import React, { useState, useEffect } from 'react'
import { format, utcToZonedTime } from 'date-fns-tz'
import styles from './WeatherClock.module.sass'

interface WeatherClockProps {
  timeZone: number
}

const WeatherClock: React.FC<WeatherClockProps> = ({ timeZone }) => {
  const [localTime, setLocalTime] = useState<Date>(new Date())

  const getCityTime = (timeZone: number): Date => {
    const localUnixTime = Math.floor(Date.now() / 1000)
    const localTimeZone = new Date().getTimezoneOffset() * 60
    const cityUnixTime = localUnixTime + timeZone + localTimeZone
    return new Date(cityUnixTime * 1000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const zonedTime = getCityTime(timeZone)
      setLocalTime(zonedTime)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [timeZone])

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  const formattedLocalTime = localTime.toLocaleString(undefined, options)

  return <div className={styles.localTimezone}>{formattedLocalTime}</div>
}

export default WeatherClock
