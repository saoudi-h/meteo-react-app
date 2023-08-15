import React, { useState } from 'react'
import './NotFound.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'

const NotFound = () => {
  const [open, toggle] = useState(false)
  // const [{ freq, factor, scale, opacity }] = useSpring(
  //   () => ({
  //     reverse: open,
  //     from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
  //     to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
  //     config: { duration: 3000 },
  //   }),
  //   [open]
  // )
  const metaProps: MetaProps = {
    title: 'Page Introuvable',
    description: 'Erreur 404, Page Introuvable',
    ogSrc: '/og/og_image.png',
    keyWord: '404, app, météo, prévisions, météo locale'
  }
  return (
    <>
      <Meta {...metaProps} />
      <main className="main notfound">
        <section className="notfound-animation">
          <div className="notfound-animation__text">404 | page Introuvable</div>
        </section>
      </main>
    </>
  )
}
export default NotFound
