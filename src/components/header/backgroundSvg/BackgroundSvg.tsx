import React from 'react'
import style from './BackgroundSvg.module.sass'
import { useSpring, animated } from '@react-spring/web'
import { useTheme } from '../../../contexts/ThemeContext'

const BackgroundSvg: React.FC = () => {
  const { theme } = useTheme()
  const [{ primary, secondary }] = useSpring(
    () => ({
      reverse: theme === 'dark',
      from: { primary: '#013f26', secondary: '#1f013f' },
      to: { primary: '#e494f5', secondary: '#1485ba' },
      config: { duration: 600 }
    }),
    [theme]
  )

  return (
    <div className={style.hero}>
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        className={style.hero__svg}
        preserveAspectRatio="none"
      >
        <defs>
          <animated.linearGradient
            id="ffflux-gradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            gradientTransform={`180 .5 .5)`}
          >
            <animated.stop offset="0%" stopColor={primary}></animated.stop>
            <animated.stop offset="100%" stopColor={secondary}></animated.stop>
          </animated.linearGradient>
          <filter
            id="ffflux-filter"
            width="140%"
            height="140%"
            x="-20%"
            y="-20%"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feTurbulence
              x="0%"
              y="0%"
              baseFrequency="0.003 0.003"
              result="turbulence"
              seed="96"
              stitchTiles="stitch"
              type="fractalNoise"
            ></feTurbulence>
            <feBlend
              x="0%"
              y="0%"
              in="SourceGraphic"
              in2="blur"
              mode="color-dodge"
              result="blend"
            ></feBlend>
          </filter>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#ffflux-gradient)`}
          filter={`url(#ffflux-filter)`}
        />
      </animated.svg>
    </div>
  )
}

export default BackgroundSvg
