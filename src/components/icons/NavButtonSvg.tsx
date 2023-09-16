import React from 'react'
import { useSpring, animated } from '@react-spring/web'

interface NavButtonSvgProps {
  open: boolean
}

const NavButtonSvg: React.FC<NavButtonSvgProps> = ({ open }) => {
  const { x, r, r1 } = useSpring({
    x: open ? 1 : 0,
    r: open ? 90 : 0,
    r1: open ? 0 : -90
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      style={{ overflow: 'hidden' }}
    >
      <animated.path
        d="M8.97 8.97a.75.75 0 011.06 0L12 10.94l1.97-1.97a.75.75 0 111.06 1.06L13.06 12l1.97 1.97a.75.75 0 01-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 01-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 010-1.06z"
        style={{
          // transformOrigin: 'center center',
          // transform: x.to((val) => `scale(${val})`),
          transform: r1.to((val) => `rotateY(${val}deg)`)
        }}
      ></animated.path>
      <animated.path
        d="M8 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM16 13a1 1 0 100-2 1 1 0 000 2z"
        style={{
          transformOrigin: 'center center',
          transform: r.to((val) => `rotateY(${val}deg)`)
        }}
      ></animated.path>
    </svg>
  )
}

export default NavButtonSvg
