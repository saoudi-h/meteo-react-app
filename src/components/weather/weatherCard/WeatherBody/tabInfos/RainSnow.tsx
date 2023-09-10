import React from 'react'

interface SnowProps {
  oneH?: number | undefined
  threeH?: number | undefined
}

const RainSnow: React.FC<SnowProps> = ({ oneH, threeH }) => {
  return (
    <div className="windInfos">
      <div className="windInfo">
        <div>1H</div>
        {oneH ? (
          <div>
            {oneH}
            <span className="units">mm</span>
          </div>
        ) : (
          <div> - </div>
        )}
      </div>

      <div className="windInfo">
        <div>3H</div>
        {threeH ? (
          <div>
            {threeH}
            <span className="units">mm</span>
          </div>
        ) : (
          <div> - </div>
        )}
      </div>
    </div>
  )
}

export default RainSnow
