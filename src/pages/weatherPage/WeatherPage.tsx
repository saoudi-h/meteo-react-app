import React, { useEffect, useState } from 'react'
import './WeaterPage.sass'
import FormWeather from '../../components/formWeather/FormWeather'
import WeatherByCity from '../../repository/WeatherByCity'
import CityCardWeather from '../../components/cityCardWeather/CityCardWeather'
import DefaultLayout from '../../layout/default/DefaultLayout'
import { MetaProps } from '../../components/utility/Meta'

const WeatherPage = () => {
  const metaProps: MetaProps = {
    title: 'Météo',
    description: 'Météo par ville',
    ogSrc: '/og/og_image.png',
    keyWord: 'weather, MyWeather, météo, prévisions, application'
  }
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
    <DefaultLayout className="weather" metaProps={metaProps}>
      <FormWeather onSubmit={handleSubmit} />
      <div>
        <CityCardWeather weatherData={result} />
      </div>
    </DefaultLayout>
  )
}

export default WeatherPage
