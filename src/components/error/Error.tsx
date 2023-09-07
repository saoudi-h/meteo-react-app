import React from 'react'
import './Error.sass'
import {
  useSpring,
  useSpringRef,
  useChain,
  useTrail,
  a,
  Lookup,
  SpringRef
} from '@react-spring/web'

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

interface ErrorProps {
  errorName: string
  message: string
  error?: string
}
const Error = ({ errorName, message, error }: ErrorProps) => {
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
      {error && console.error(error)}
      <section className="animation">
        <a.div className="animation__text">
          <div className="bigText">
            <Trail springRef={trailSpringRef}>
              {errorName
                .trim()
                .split('')
                .map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
            </Trail>
          </div>
          <a.h1 className="title" style={titleSpring}>
            {message}
          </a.h1>
        </a.div>
      </section>
    </>
  )
}
export default Error
