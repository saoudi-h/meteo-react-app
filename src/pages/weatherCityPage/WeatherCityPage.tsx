import React from 'react'
import './WeatherCityPage.css'
import Meta, { MetaProps } from '../../components/utility/Meta'

const WeatherCityPage = () => {
  const metaProps = {
    title: 'Météo city',
    description: 'Météo de votre ville',
    ogSrc: '/og/og_image.png',
    keyWord: 'detail, city, ville,app, météo, prévisions, météo locale'
  }
  return (
    <>
      <Meta {...metaProps} />
    </>
  )
}

export default WeatherCityPage
