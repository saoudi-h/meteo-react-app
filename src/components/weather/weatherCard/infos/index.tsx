import React from 'react'
import styles from './infos.module.sass'
import PressureSvg from '../../../icons/PressureSvg'
import HumiditySvg from '../../../icons/HumiditySvg'
import VisibilitySvg from '../../../icons/VisibilitySvg'
import CloudsSvg from '../../../icons/CloudsSvg'

interface InfosProps {
  humidity: number
  pressure: number
  visibility: number
  clouds: number
}
const Infos: React.FC<InfosProps> = ({ humidity, pressure, visibility, clouds }) => {
  return (
    <>
      <div className={styles.info}>
        <PressureSvg />
        <div>
          {pressure}
          <span className={styles.unit}>hPa</span>
        </div>
      </div>

      <div className={styles.info}>
        <HumiditySvg />
        <div>
          {humidity}
          <span className={styles.unit}>%</span>
        </div>
      </div>

      <div className={styles.info}>
        <VisibilitySvg />
        <div>
          {Math.round(visibility / 100) / 10}
          <span className={styles.unit}>Km</span>
        </div>
      </div>

      <div className={styles.info}>
        <CloudsSvg />
        <div>
          {clouds}
          <span className={styles.unit}>%</span>
        </div>
      </div>
    </>
  )
}

export default Infos
