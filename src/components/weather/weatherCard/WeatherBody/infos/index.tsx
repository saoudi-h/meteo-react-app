import React from 'react'
import './Infos.sass'
import PressureSvg from '../../../../icons/PressureSvg'
import HumiditySvg from '../../../../icons/HumiditySvg'
import VisibilitySvg from '../../../../icons/VisibilitySvg'
import CloudsSvg from '../../../../icons/CloudsSvg'
import { classNames } from '../../../../../lib/classnames'

interface InfosProps {
  humidity: number
  pGround?: number
  pSea: number
  visibility: number
  clouds: number
}
const Infos: React.FC<InfosProps> = ({ humidity, pGround, pSea, visibility, clouds }) => {
  return (
    <div className="infosBox">
      <div className="info">
        <CloudsSvg />
        <div>
          {clouds}
          <span className="unit">%</span>
        </div>
      </div>

      <div className="info">
        <VisibilitySvg />
        <div>
          {Math.round(visibility / 100) / 10}
          <span className="unit">Km</span>
        </div>
      </div>

      <div className="info">
        <HumiditySvg />
        <div>
          {humidity}
          <span className="unit">%</span>
        </div>
      </div>

      <div className="info pressure">
        <div className="pressureText">Ground</div>
        <PressureSvg />
        <div>
          {pGround || '-'}
          <span className="unit">hPa</span>
        </div>
      </div>

      <div className="info pressure">
        <div className="pressureText">Sea</div>
        <PressureSvg />
        <div>
          {pSea}
          <span className="unit">hPa</span>
        </div>
      </div>
    </div>
  )
}

export default Infos
