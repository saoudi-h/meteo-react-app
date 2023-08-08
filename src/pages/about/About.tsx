import React from 'react'
import './About.sass'
import DefaultLayout from '../../layout/default/DefaultLayout'
import { MetaProps } from '../../components/utility/Meta'

const About = () => {
  const metaProps: MetaProps = {
    title: 'A propos',
    description: 'A propos de nous et My Weather APP',
    ogSrc: '/og/og_image.png',
    keyWord: 'info, MyWeather, météo, prévisions, about',
  }
  return (
    <DefaultLayout className="About" metaProps={metaProps}>
      <div>About</div>
    </DefaultLayout>
  )
}

export default About
