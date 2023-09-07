import React from 'react'
import './WeatherPage.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'
import Weather from '../../components/weather/Weather'

const WeatherPage = () => {
  const metaProps: MetaProps = {
    title: 'Météo',
    description: 'Météo par ville',
    ogSrc: '/og/og_image.png',
    keyWord: 'weather, MyWeather, météo, prévisions, application'
  }

  return (
    <>
      <Meta {...metaProps} />
      <main className="main weather">
        <Weather />
      </main>
    </>
  )
}

export default WeatherPage
