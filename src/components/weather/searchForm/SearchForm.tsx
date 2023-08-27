import React, { useEffect, useState } from 'react'
import './SearchForm.sass'
import SearchSvg from '../../icons/SearchSvg'
import LocationSvg from '../../icons/locationSvg'
import WeatherAPIService from '../../../services/WeatherAPIService'
import { useDispatch, useSelector } from 'react-redux'
import { addWeatherData } from '../../../store/actions/weatherActions'
import { GeolocationStatus, SearchMethod, WeatherData } from '../../../store/types'
import UnsplashAPIService from '../../../services/UnsplashAPIService'
import { weatherConditions } from '../../../services/WeatherDataTranslate'
import { toast } from 'react-toastify'
import { RootState } from '../../../store/store'

interface SearchFormProps {
  setHighlightedCity: React.Dispatch<React.SetStateAction<string | null>>
}
const SearchForm: React.FC<SearchFormProps> = ({ setHighlightedCity }) => {
  const dispatch = useDispatch()
  const weatherTokenApi = process.env.REACT_APP_WEATHER_TOKEN || ''
  const unsplashTokenApi = process.env.REACT_APP_UNSPLASH_TOKEN || ''
  const weatherAPIService: WeatherAPIService = new WeatherAPIService(weatherTokenApi)
  const unsplashAPIService: UnsplashAPIService = new UnsplashAPIService(unsplashTokenApi)
  const [city, setCity] = useState('')
  const [geoLocationStatus, setGeoLocationStatus] = useState<GeolocationStatus>('denied')
  const weatherDataList = useSelector(
    (state: RootState) => state.weatherDataListState.weatherDataList
  )

  const coordRound = (n: number) => Math.round(n * 100) / 100
  const getWeatherDataByCoords = (lon: any, lat: any) => {
    lon = coordRound(lon)
    lat = coordRound(lat)
    return weatherDataList.find(
      (weatherData) =>
        coordRound(weatherData.coord.lon) === lon && coordRound(weatherData.coord.lat) === lat
    )
  }
  const getWeatherDataByName = (name: string) => {
    return weatherDataList.find((weatherData) => weatherData.name === name)
  }
  const geolocationExists = (lon: number, lat: number): boolean => {
    lon = coordRound(lon)
    lat = coordRound(lat)
    console.log('weatherDataList', weatherDataList)
    const res = weatherDataList.some((weatherData) => {
      console.log(
        `${coordRound(weatherData.coord.lon)} === ${lon} && ${coordRound(
          weatherData.coord.lat
        )} == ${lat}`
      )
      return coordRound(weatherData.coord.lon) === lon && coordRound(weatherData.coord.lat) === lat
    })
    console.log('some: ', res)
    return res
  }
  const checkCityExists = (cityName: string): boolean => {
    return weatherDataList.some((weatherData) => weatherData.name === cityName)
  }
  const handleFormSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city !== '') {
      try {
        handleWeatherDataSuccess(await weatherAPIService.getWeather(city), 'city')
      } catch (e: any) {
        toast.error(e.message)
      }
    }
  }

  const getGeoLocalisationStatus = async () => {
    const response = await window.navigator.permissions.query({
      name: 'geolocation'
    })
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
      if (!geolocationExists(longitude, latitude)) {
        handleWeatherDataSuccess(
          await weatherAPIService.fetchWeatherByCoordinates(latitude, longitude),
          'geolocation'
        )
      } else {
        const name = getWeatherDataByCoords(longitude, latitude)?.name
        setHighlightedCity(name || null)
      }
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const handleWeatherDataSuccess = async (weatherData: WeatherData, searchMethod: SearchMethod) => {
    // translate data to french
    const matchingCondition = weatherConditions.find(
      (condition) => condition.id === weatherData.weather[0].id
    )
    if (matchingCondition) weatherData.weather = [{ ...matchingCondition }]
    // add searchText to weatherData if method city
    if (searchMethod === 'city') {
      weatherData.searchText = city
      // re init form
      setCity('')
    }
    weatherData.searchMethod = searchMethod

    // add image url with unsplash api to weatherData
    weatherData.imageUrl =
      (await unsplashAPIService.getImageForCity(weatherData.searchText || weatherData.name)) ||
      undefined
    // add current datetime to weatherData
    weatherData.datetime = new Date().toISOString()
    console.log(JSON.stringify(weatherData))
    dispatch(addWeatherData(weatherData))
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSearch} className="search_form">
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
