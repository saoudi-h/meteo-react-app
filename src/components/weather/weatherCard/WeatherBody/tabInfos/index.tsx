import React, { useState, useEffect, useRef } from 'react'
import './tabInfos.sass'
import WindSvg from '../../../../icons/WindSvg'
import RainSvg from '../../../../icons/RainSvg'
import SnowSvg from '../../../../icons/SnowSvg'
import { useSpring, animated, useSpringValue } from '@react-spring/web'
import { classNames } from '../../../../../lib/classnames'
import { WeatherData } from '../../../../../store/types'
import Wind from './Wind'
import RainSnow from './RainSnow'

type Tab = 'wind' | 'rain' | 'snow'
type TabItem = {
  id: number
  name: Tab
  component: React.JSX.Element
}

interface TabInfosProps {
  weatherData: WeatherData
}

const TabInfos: React.FC<TabInfosProps> = ({ weatherData }) => {
  const itemLength = 30
  const marginSwitch = 3
  const containerRef = useRef<HTMLDivElement>(null)
  const listTab: TabItem[] = [
    {
      id: 0,
      name: 'wind',
      component: <WindSvg />
    },
    {
      id: 1,
      name: 'rain',
      component: <RainSvg />
    },
    {
      id: 2,
      name: 'snow',
      component: <SnowSvg />
    }
  ]
  const [selected, setSelected] = useState<TabItem>(listTab[0])

  const getRightValue = (add: number = 0) =>
    (listTab.length - 1 - selected.id) * itemLength + marginSwitch + add + 'px'

  const getLeftValue = (add: number = 0) => selected.id * itemLength + marginSwitch + add + 'px'

  const getBorderRadius = () => {
    const borderRadiusLeft = selected.id === 0 ? '15px' : '3px'
    const borderRadiusRight = selected.id === listTab.length - 1 ? '15px' : '3px'
    return `${borderRadiusLeft} ${borderRadiusRight} ${borderRadiusRight} ${borderRadiusLeft}`
  }

  const [springs, api] = useSpring(() => ({
    from: {
      left: getLeftValue(),
      right: getRightValue(),
      borderRadius: getBorderRadius()
    }
  }))

  const y = useSpringValue(0, {
    config: {
      mass: 3,
      tension: 300,
      friction: 26
    }
  })

  const handleItemClick = (tabName: Tab) => {
    if (tabName !== selected.name) {
      setSelected(listTab.find((item) => item.name === tabName) || listTab[0])
    }
  }
  const handleItemHover = (hoveredTab: string) => {
    if (hoveredTab !== selected.name) {
      const isLeft = selected.id < listTab.find((item) => item.name === hoveredTab)!.id
      api.start({
        left: getLeftValue(isLeft ? 0 : -20),
        right: getRightValue(isLeft ? -20 : 0)
      })
    }
  }

  useEffect(() => {
    api.start({
      left: getLeftValue(),
      right: getRightValue(),
      borderRadius: getBorderRadius()
    })

    y.start(-selected.id * (containerRef.current?.clientHeight || 0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const handleItemHoverEnd = () => {
    api.start({
      left: getLeftValue(),
      right: getRightValue()
    })
  }

  return (
    <>
      <ul className="weather-tab" id="weather-tab">
        <animated.div className="weather-tab__switch" style={{ ...springs }} />
        {listTab.map((tab, index) => (
          <li
            key={index}
            className={classNames('weather-tab__svg-box', tab.name)}
            onMouseEnter={() => handleItemHover(tab.name)}
            onClick={() => handleItemClick(tab.name)}
            onMouseLeave={handleItemHoverEnd}
          >
            {tab.component}
          </li>
        ))}
      </ul>
      <div className="weather-pages" ref={containerRef}>
        <animated.ul className="weather-pages__list" style={{ y }}>
          <li>
            <Wind {...weatherData.wind} />
          </li>
          <li>
            <RainSnow oneH={weatherData.rain?.['1h']} threeH={weatherData.rain?.['3h']} />
          </li>
          <li>
            <RainSnow oneH={weatherData.snow?.['1h']} threeH={weatherData.snow?.['3h']} />
          </li>
        </animated.ul>
      </div>
    </>
  )
}

export default TabInfos
