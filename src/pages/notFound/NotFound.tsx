import React, { useState } from 'react'
import styles from './NotFound.module.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'
import { classNames } from '../../lib/classnames'
import {
  useSpring,
  useSpringRef,
  useChain,
  useTrail,
  a,
  Lookup,
  SpringRef,
  easings
} from '@react-spring/web'

const Trail: React.FC<{ children: React.ReactNode; springRef: SpringRef<Lookup<any>> }> = ({
  children,
  springRef
}) => {
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
        <a.div key={index} className={styles.bigText__div} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  )
}

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
  // const blurSpringRef = useSpringRef()
  // const blurSpring = useSpring(
  //   {
  //     ref: blurSpringRef,
  //     from: { opacity: 0, filter: "blur(30px)" },
  //     to: { opacity: 1, filter: "blur(0px)" },
  //     config: { duration: (400) }
  //   }
  // )
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
      <main className={classNames('main', styles.notfound)}>
        <section className={styles.animation}>
          {/* <div className={styles.animation__container}> */}
          <a.div
            className={styles.animation__text}
            // style={blurSpring}
          >
            <div className={styles.bigText}>
              <Trail springRef={trailSpringRef}>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </Trail>
            </div>
            <a.h1 className={styles.title} style={titleSpring}>
              Page introuvable
            </a.h1>
          </a.div>
          {/* </div> */}
        </section>
      </main>
    </>
  )
}
export default NotFound
