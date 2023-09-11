import React from 'react'

interface SnowProps {
  oneH?: number | undefined
  threeH?: number | undefined
}

const RainSnow: React.FC<SnowProps> = ({ oneH, threeH }) => {
  return (
    <div className="pageInfos">
      <div className="pageInfo">
        <div className="pageInfo__rs">1H</div>
        {oneH ? (
          <div>
            {oneH}
            <span className="units">mm</span>
          </div>
        ) : (
          <div> - </div>
        )}
      </div>

      <div className="pageInfo">
        <div className="pageInfo__rs">3H</div>
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
