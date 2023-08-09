import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'
import ToggleTheme from './toggleTheme/ToggleTheme'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'
import Nav from './nav/Nav'

const Header: React.FC = () => {
  const { theme } = useTheme()
  return (
    <header className={classNames('header', theme)}>
      <nav>
        <Nav />
        <ul>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
