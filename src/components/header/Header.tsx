import React from 'react'
import './Header.sass'
import ToggleTheme from './toggleTheme/ToggleTheme'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'
import Nav from './nav/Nav'
import LogoFullBlackSvg from '../icons/LogoFullBlackSvg'
import BubbleBack from './bubbleBack/BubbleBack'
import BackgroundSvg from './backgroundSvg/BackgroundSvg'

const Header: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <header className={classNames('header', theme)}>
        <div className="header-centered">
          <div className="logo">
            <LogoFullBlackSvg />
          </div>
          <nav>
            <Nav />
            <ul>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <BackgroundSvg primaryColor="#a637cc" secondaryColor="#ffflux" rotationAngle={45} />
      {/* <img src="/hero/hero_weather_2.png" alt="hero" className="hero__img" /> */}
      <BubbleBack />
    </>
  )
}

export default Header
