import React from 'react'
import './About.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'

const About = () => {
  const metaProps: MetaProps = {
    title: 'A propos',
    description: 'A propos de nous et My Weather APP',
    ogSrc: '/og/og_image.png',
    keyWord: 'info, MyWeather, météo, prévisions, about'
  }
  return (
    <>
      <Meta {...metaProps} />
      <main className="main about">About</main>
    </>
  )
}

export default About
