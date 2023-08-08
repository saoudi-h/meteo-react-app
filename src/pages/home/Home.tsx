import { Link } from 'react-router-dom'
import './Home.sass'
import BubbleBack from '../../components/bubbleBack/BubbleBack'
import { useState } from 'react'
import DefaultLayout, { LayoutProps } from '../../layout/default/DefaultLayout'

const Home = () => {
  const layoutProps: LayoutProps = {
    title: 'Bienvenue sur Météo App',
    metaTags: [
      {
        name: 'description',
        content: 'Découvrez les prévisions météorologiques locales avec Météo App.',
      },
      {
        name: 'keywords',
        content: 'météo, prévisions, météo locale, conditions météorologiques',
      },
      {
        name: 'og:title',
        content: 'Météo App - Prévisions Météorologiques',
      },
      {
        name: 'og:description',
        content: 'Découvrez les prévisions météorologiques locales avec Météo App.',
      },
      {
        name: 'og:image',
        content: '/og_image.png',
      },
    ],
  }
  const [mouseEvent, setMouseEvent] = useState<React.MouseEvent>()
  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseEvent(e)
  }
  return (
    <DefaultLayout className="" layoutProps={layoutProps}>
      <main className="home" onMouseMove={handleMouseMove}>
        <img src="/hero/hero_weather_2.png" alt="hero" className="home__hero" />

        <div className="container exhero">
          <h1 className="exhero__title">
            Découvrez la <span className="exhero__title__stress">météo</span>
            <br /> en un instant!
          </h1>
          <p className="exhero__text">
            votre portail complet pour les prévisions météorologiques, des informations précises sur
            chaque ville, et bien plus encore !
          </p>
          <Link to="/weather" type="button" className="button--app" style={{ width: 160 }}>
            Lancer l'application
          </Link>
        </div>
        <BubbleBack mouseEvent={mouseEvent} />
      </main>
    </DefaultLayout>
  )
}

export default Home
