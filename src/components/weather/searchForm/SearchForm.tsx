import React, { useEffect, useState } from 'react'
import './SearchForm.sass'
import SearchSvg from '../../icons/SearchSvg'
import LocationSvg from '../../icons/locationSvg'
import WeatherAPIService from '../../../services/WeatherAPIService'
import { useDispatch } from 'react-redux'
import { addWeatherData } from '../../../store/actions/weatherActions'
import { WeatherData } from '../../../store/types'
import UnsplashAPIService from '../../../services/UnsplashAPIService'

type GeolocationStatus = 'prompt' | 'granted' | 'denied'
const SearchForm: React.FC = () => {
  const dispatch = useDispatch()
  const weatherTokenApi = process.env.REACT_APP_WEATHER_TOKEN || ''
  const unsplashTokenApi = process.env.REACT_APP_UNSPLASH_TOKEN || ''
  const weatherAPIService: WeatherAPIService = new WeatherAPIService(weatherTokenApi)
  const unsplashAPIService: UnsplashAPIService = new UnsplashAPIService(unsplashTokenApi)
  const [city, setCity] = useState('')
  const [geoLocationStatus, setGeoLocationStatus] = useState<GeolocationStatus>('denied')
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city !== '') {
      handleWeatherDataSuccess(await weatherAPIService.getWeather(city))
    }
  }

  const getGeoLocalisationStatus = async () => {
    const response = await window.navigator.permissions.query({ name: 'geolocation' })
    if (response.state) {
      setGeoLocationStatus(response.state)
    }
  }

  useEffect(() => {
    getGeoLocalisationStatus()
  }, [])

  const handleGeoLocationClick = async () => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      const { latitude, longitude } = position.coords
      handleWeatherDataSuccess(
        await weatherAPIService.fetchWeatherByCoordinates(latitude, longitude)
      )
    } catch (e: any) {
      alert("Erreur lors de l'obtention de la géolocalisation: " + e.message)
    }
  }

  const handleWeatherDataSuccess = async (weatherData: WeatherData) => {
    // add image url with unsplash api to weatherData
    weatherData.imageUrl = (await unsplashAPIService.getImageForCity(weatherData.name)) || undefined
    // add current datetime to weatherData
    weatherData.datetime = new Date().toISOString()
    console.log(JSON.stringify(weatherData))
    dispatch(addWeatherData(weatherData))
  }

  return (
    <div className="container">
      <form onSubmit={handleSearch} className="search_form">
        <div className="search_form__search">
          <button type="submit" className="button-submit">
            <SearchSvg />
          </button>
          <input
            type="search"
            name="searchQuery"
            placeholder="Oyonnax..."
            aria-label="Cherchez la météo par ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="button-location" type="button" onClick={handleGeoLocationClick}>
            <LocationSvg />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
