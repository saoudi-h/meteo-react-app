import { Link } from 'react-router-dom'
import './Home.sass'
import BubbleBack from '../../components/bubbleBack/BubbleBack'
import Meta, { MetaProps } from '../../components/utility/Meta'

const Home = () => {
  const metaProps: MetaProps = {
    title: 'Bienvenue sur Météo App',
    description: 'Découvrez les prévisions météorologiques locales avec Météo App.',
    ogSrc: '/og/og_image.png',
    keyWord: 'météo, prévisions, météo locale, conditions météorologiques'
  }

  return (
    <>
      <Meta {...metaProps} />
      <main className="main home">
        <section className="home-hero">
          <div className="container exhero">
            <h1 className="exhero__title">
              Découvrez la <span className="exhero__title__stress">météo</span>
              <br /> en un instant!
            </h1>
            <p className="exhero__text">
              votre portail complet pour les prévisions météorologiques, des informations précises
              sur chaque ville, et bien plus encore !
            </p>
            <Link to="/weather" type="button" className="button--app" style={{ width: 160 }}>
              Lancer l'application
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
