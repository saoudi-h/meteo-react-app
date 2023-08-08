import React, { useEffect, useState } from 'react'
import './WeaterPage.css'
import FormWeather from '../../components/formWeather/FormWeather'
import WeatherByCity from '../../repository/WeatherByCity'
import CityCardWeather from '../../components/cityCardWeather/CityCardWeather'

const WeatherPage = () => {
  const [city, setCity] = useState<string>('')
  const [result, setResult] = useState<any>()
  const tokenApi = process.env.REACT_APP_WEATHER_TOKEN || ''
  const weatherByCity: WeatherByCity = new WeatherByCity(tokenApi)
  useEffect(() => {
    if (city !== '') weatherByCity.getWeather(city).then((data) => setResult(data))
  }, [city])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get('searchQuery')?.toString() || ''
    if (searchQuery !== '') {
      setCity(searchQuery)
    }
  }

  return (
    <>
      <FormWeather onSubmit={handleSubmit} />
      <div>
        <CityCardWeather weatherData={result} />
      </div>
    </>
  )
}

export default WeatherPage
