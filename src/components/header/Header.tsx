import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'
import ToggleTheme from './toggleTheme/ToggleTheme'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'

const Header: React.FC = () => {
  const { theme } = useTheme()
  return (
    <header className={classNames('header', theme)}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              <div>Accueil</div>
            </Link>
          </li>
          <li>
            <Link to="/weather" className="link">
              <div>Meteo</div>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <div>About</div>
            </Link>
          </li>
        </ul>
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
