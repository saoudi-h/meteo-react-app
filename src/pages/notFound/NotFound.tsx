import React, { useState } from 'react'
import './NotFound.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'
import { classNames } from '../../lib/classnames'
import {
  useSpring,
  useSpringRef,
  useChain,
  useTrail,
  a,
  Lookup,
  SpringRef
} from '@react-spring/web'
import { useTheme } from '../../contexts/ThemeContext'

const Trail: React.FC<{
  children: React.ReactNode
  springRef: SpringRef<Lookup<any>>
}> = ({ children, springRef }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    ref: springRef,
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 300,
      mass: 5,
      friction: 120,
      tension: 120
    }
  })
  return (
    <>
      {trail.map((style, index) => (
        <a.div key={index} className="bigText__div" style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  )
}

const NotFound = () => {
  const metaProps: MetaProps = {
    title: 'Page Introuvable',
    description: 'Erreur 404, Page Introuvable',
    ogSrc: '/og/og_image.png',
    keyWord: '404, app, météo, prévisions, météo locale'
  }
  const { theme, toggleTheme } = useTheme()

  const trailSpringRef = useSpringRef()
  const titleSpringRef = useSpringRef()
  const titleSpring = useSpring({
    ref: titleSpringRef,
    from: { x: '-100vw' },
    to: { x: '0' },
    config: {
      duration: 300,
      mass: 5,
      friction: 120,
      tension: 120
    }
  })
  useChain([trailSpringRef, titleSpringRef], [0.1, 0.5])
  return (
    <>
      <Meta {...metaProps} />
      <main className={classNames('main', 'notfound', theme)}>
        <section className="animation">
          <a.div className="animation__text">
            <div className="bigText">
              <Trail springRef={trailSpringRef}>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </Trail>
            </div>
            <a.h1 className="title" style={titleSpring}>
              Page introuvable
            </a.h1>
          </a.div>
        </section>
      </main>
    </>
  )
}
export default NotFound
