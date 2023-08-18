import React from 'react'
import './Weather.sass'
import SearchForm from './searchForm/SearchForm'
import WeatherList from './weatherList/WeatherList'

const Weather: React.FC = () => {
  return (
    <section className="weather">
      <SearchForm
        onSearch={() => {
          console.log('hahah')
        }}
      />
      <WeatherList />
      {/* <FormWeather onSubmit={handleSubmit} />
            <div>
                <CityCardWeather weatherData={result} />
            </div> */}
    </section>
  )
}

export default Weather
