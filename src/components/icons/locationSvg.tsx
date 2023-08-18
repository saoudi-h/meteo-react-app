import React from 'react'

const LocationSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeWidth="2">
        <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 12h2M3 12h2M12 19v2M12 3v2"
        ></path>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </g>
    </svg>
  )
}

export default LocationSvg
