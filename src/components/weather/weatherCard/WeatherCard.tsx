import React, { useRef, useState, useEffect } from 'react'
import './WeatherCard.sass'
import { WeatherData } from '../../../store/types'
import WeatherClock from './weatherClock/WeatherClock'
import CardUpdateSvg from '../../icons/CardUpdateSvg'
import CardDeleteSvg from '../../icons/CardDeleteSvg'
import GeoLocationSvg from '../../icons/GeoLocationSvg'
import TimeLocationSvg from '../../icons/TimeLocationSvg'
import { classNames } from '../../../lib/classnames'
import { useSpring, animated, easings, useSpringValue } from '@react-spring/web'
import { useDispatch } from 'react-redux'
import { removeWeatherData } from '../../../store/actions/weatherActions'
interface WeatherCardProps {
  weatherData: WeatherData
  highlighted: boolean
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherData,
  highlighted
}: WeatherCardProps) => {
  const dispatch = useDispatch()
  const timesLooped = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const [isAnimating, setIsAnimating] = useState(false)

  const [props, api] = useSpring(
    () => ({
      from: {
        opacity: 1,
        scale: 1,
        config: {
          friction: 40,
          tension: 250
        }
      }
    }),
    []
  )

  const [expandDetail, setExpandDetail] = useState<boolean>(false)
  const toggleDetails = () => {
    setExpandDetail(!expandDetail)
  }

  const celciusFromKelvin = (kelvin: number) => {
    return Math.round((kelvin - 273.15) * 100) / 100 + ' °C'
  }

  useEffect(() => {
    if (highlighted) handleHighlighted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlighted])

  const handleHighlighted = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      timesLooped.current = 0

      api.start({
        scale: 1.1,
        loop: () => {
          if (2 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              api.set({ scale: 1 })
              timeoutRef.current = undefined
              setIsAnimating(false)
            }, 2000)
            api.stop()
          }
          return { reverse: true }
        }
      })
    }
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  function updateCard(event: React.MouseEvent): void {
    // TODO UpdateCard
    throw new Error('Function not implemented.')
  }

  function removeCard(): void {
    setTimeout(() => {
      dispatch(removeWeatherData(weatherData.name))
    }, 500)
    api.start({ opacity: 0, scale: 0 })
  }

  return (
    <>
      {weatherData && (
        <animated.div
          className={classNames('weather-card', weatherData.searchMethod)}
          style={{
            backgroundImage: `url(${weatherData.imageUrl})`,
            zIndex: isAnimating ? 10 : 0,
            ...props
          }}
          id={`city-${weatherData.name}`}
        >
          {/* header */}
          <div className="weather-card__header">
            {/* header left */}
            <div className="header-left">
              <div className="header-left__logo">
                {weatherData.searchMethod === 'geolocation' ? (
                  <GeoLocationSvg />
                ) : (
                  <TimeLocationSvg />
                )}
                {/* <LocationTimeSvg /> */}
              </div>
              <div className="header-left__info">
                <div className="city-name">
                  {weatherData.name}, {weatherData.sys.country}
                </div>
                <div className="city-time">
                  <WeatherClock timeZone={weatherData.timezone} />
                </div>
              </div>
            </div>
            {/* header right */}
            <div className="header-right">
              <button className="header-right__update" onClick={updateCard}>
                <CardUpdateSvg />
              </button>
              <button className="header-right__delete" onClick={removeCard}>
                <CardDeleteSvg />
              </button>
            </div>
          </div>

          {/* detail */}
          <div className="weather-card__body">
            <div className="card-grid">
              <div className="card-grid__icon">
                <img
                  src={`./images/WeatherAnimatedSvg/${weatherData.weather[0].icon}.svg`}
                  alt={weatherData.weather[0].description}
                  className="card-grid__img"
                />
              </div>
            </div>
            {/* <div className="weather-summary">
              {weatherData.weather[0].main} - {weatherData.weather[0].description}
            </div>
            <div className="temp">
              <div>
                <div className="temp__current">{celciusFromKelvin(weatherData.main.temp)}</div>
              </div>
              <div className="temp__feels_like">
                ressenti : {celciusFromKelvin(weatherData.main.feels_like)}
              </div>
              <div className="temp__temp_min">
                min : {celciusFromKelvin(weatherData.main.temp_min)}
              </div>
              <div className="temp__temp_max">
                max : {celciusFromKelvin(weatherData.main.temp_max)}
              </div>
            </div>
            <button className="expand-button" onClick={toggleDetails}>
              {expandDetail ? 'Réduire' : 'Voir plus'}
            </button>
            {expandDetail && (
              <div className="details">
                <div>
                  Coordonnées : {weatherData.coord.lat}, {weatherData.coord.lon}
                </div>
                <div>Pression : {weatherData.main.pressure} hPa</div>
                <div>Humidité : {weatherData.main.humidity}%</div>
                <div>Vitesse du vent : {weatherData.wind.speed} m/s</div>
              </div>
            )} */}
          </div>
        </animated.div>
      )}
    </>
  )
}
export default WeatherCard
