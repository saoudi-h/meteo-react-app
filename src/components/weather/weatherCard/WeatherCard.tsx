import React, { useRef, useState, useEffect } from 'react'
import { WeatherData } from '../../../store/types'
import WeatherClock from './weatherClock/WeatherClock'
import CardUpdateSvg from '../../icons/CardUpdateSvg'
import CardDeleteSvg from '../../icons/CardDeleteSvg'
import GeoLocationSvg from '../../icons/GeoLocationSvg'
import TimeLocationSvg from '../../icons/TimeLocationSvg'
import { classNames } from '../../../lib/classnames'
import { useSpring, animated } from '@react-spring/web'
import { useDispatch, useSelector } from 'react-redux'
import { removeWeatherData, updateWeatherData } from '../../../store/actions/weatherActions'
import './WeatherCard.sass'
import { formatDistanceToNow } from 'date-fns'
import fr from 'date-fns/locale/fr'
import WeatherBody from './WeatherBody'
import UnsplashAPIService from '../../../services/UnsplashAPIService'
import WeatherAPIService from '../../../services/WeatherAPIService'
import { RootState } from '../../../store/store'
import { toast } from 'react-toastify'

interface WeatherCardProps {
  weatherData: WeatherData
  highlighted: boolean
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherData,
  highlighted
}: WeatherCardProps) => {
  const weatherTokenApi = process.env.REACT_APP_WEATHER_TOKEN || ''
  const unsplashTokenApi = process.env.REACT_APP_UNSPLASH_TOKEN || ''
  const weatherAPIService: WeatherAPIService = new WeatherAPIService(weatherTokenApi)

  const dispatch = useDispatch()
  const timesLooped = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const isAnimating = useRef<boolean>(false)
  const [lastUpdate, setLastUpdate] = useState<string>('')
  const handleMouseEnterUpdate = () => {
    setLastUpdate(formatDistanceToNow(new Date(weatherData.dt * 1000), { locale: fr }))
  }
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

  useEffect(() => {
    if (highlighted) handleHighlighted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlighted])

  const handleHighlighted = () => {
    if (!isAnimating.current) {
      isAnimating.current = true
      timesLooped.current = 0

      api.start({
        scale: 1.1,
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              timeoutRef.current = undefined
              isAnimating.current = false
              api.start({ scale: 1 })
            }, 2000)
            api.stop()
          }
          if (timesLooped.current > 10) {
            api.start({ scale: 1 })
            timeoutRef.current = undefined
            isAnimating.current = false
          }
          return { reverse: true }
        }
      })
    } else {
      clearTimeout(timeoutRef.current)
      api.start({ scale: 1 })
      isAnimating.current = false
    }
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const updateCard = async () => {
    try {
      const newWeatherData = await weatherAPIService.fetchWeatherByCoordinates(
        weatherData.coord.lat,
        weatherData.coord.lon
      )
      newWeatherData.searchMethod = weatherData.searchMethod
      dispatch(updateWeatherData(newWeatherData))
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  function removeCard(): void {
    setTimeout(() => {
      dispatch(removeWeatherData(weatherData.name))
    }, 500)
    api.start({ opacity: 0, scale: 0 })
  }

  return (
    <animated.div
      className={classNames('weather-card', weatherData.searchMethod)}
      style={{
        backgroundImage: `url(${weatherData.imageUrl})`,
        zIndex: highlighted ? 20 : 0,
        ...props
      }}
      id={`city-${weatherData.name}`}
    >
      {/* header ***************************************************************/}
      <div className="weather-card__header">
        {/* header left */}
        <div className="header-left">
          <div className="header-left__logo">
            {weatherData.searchMethod === 'geolocation' ? <GeoLocationSvg /> : <TimeLocationSvg />}
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
          <button
            className="header-right__update"
            aria-label="Mettre à jour la carte"
            onClick={updateCard}
            onMouseEnter={handleMouseEnterUpdate}
            data-tooltip-id="default-tooltip"
            data-tooltip-content={'Mis à jour il y a ' + lastUpdate}
          >
            <CardUpdateSvg />
          </button>
          <button
            className="header-right__delete"
            aria-label="Supprimer la carte"
            onClick={removeCard}
            data-tooltip-id="default-tooltip"
            data-tooltip-content={'Supprimer'}
          >
            <CardDeleteSvg />
          </button>
        </div>
      </div>

      {/* body ******************************************************************/}
      <WeatherBody data={weatherData} />
    </animated.div>
  )
}
export default WeatherCard
