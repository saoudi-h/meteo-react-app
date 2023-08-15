import React from 'react'
import style from './BackgroundSvg.module.sass'

interface BackgroundSvgProps {
  primaryColor: string
  secondaryColor: string
  rotationAngle: number
}

const BackgroundSvg: React.FC<BackgroundSvgProps> = ({
  primaryColor,
  secondaryColor,
  rotationAngle
}) => {
  return (
    <div className={style.hero}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        className={style.hero__svg}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="ffflux-gradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            gradientTransform={`rotate(${rotationAngle} .5 .5)`}
          >
            <stop offset="0%" stopColor={primaryColor}></stop>
            <stop offset="100%" stopColor={secondaryColor}></stop>
          </linearGradient>
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
            <feGaussianBlur
              x="0%"
              y="0%"
              in="turbulence"
              result="blur"
              stdDeviation="27 27"
            ></feGaussianBlur>
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
        {/* <path
          fill={`url(#ffflux-gradient)`}
          d="M0 0H700V700H0z"
          filter={`url(#ffflux-filter)`}
        ></path> */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="700%"
          fill={`url(#ffflux-gradient)`}
          filter={`url(#ffflux-filter)`}
        />
      </svg>
    </div>
  )
}

export default BackgroundSvg
