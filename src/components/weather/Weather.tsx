import React, { useEffect, useState } from 'react'
import './Weather.sass'
import SearchForm from './searchForm/SearchForm'
import WeatherList from './weatherList/WeatherList'

const Weather: React.FC = () => {
  const [highlightedCity, setHighlightedCity] = useState<string | null>(null)
  useEffect(() => {
    if (highlightedCity) {
      const timeout = setTimeout(() => {
        setHighlightedCity(null)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [highlightedCity])
  return (
    <section className="weather">
      <SearchForm setHighlightedCity={setHighlightedCity} />
      <WeatherList highlightedCity={highlightedCity} />
      {/* <FormWeather onSubmit={handleSubmit} />
            <div>
                <CityCardWeather weatherData={result} />
            </div> */}
    </section>
  )
}

export default Weather
