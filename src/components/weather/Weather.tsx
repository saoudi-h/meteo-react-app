import React, { useEffect, useState } from 'react'
import './Weather.sass'
import SearchForm from './searchForm/SearchForm'
import WeatherList from './weatherList/WeatherList'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Weather: React.FC = () => {
  const weatherDataList = useSelector(
    (state: RootState) => state.weatherDataListState.weatherDataList
  )

  const [highlightedCity, setHighlightedCity] = useState<string | null>(null)

  useEffect(() => {
    if (highlightedCity) {
      const timeout = setTimeout(() => {
        setHighlightedCity(null)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [highlightedCity])

  return (
    <section className="weather">
      <SearchForm setHighlightedCity={setHighlightedCity} />
      <WeatherList weatherDataList={weatherDataList} highlightedCity={highlightedCity} />
    </section>
  )
}

export default Weather
