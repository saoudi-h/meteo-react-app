import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'
import ToggleTheme from './toggleTheme/ToggleTheme'

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className="link">Accueil</Link></li>
                    <li><Link to="/weather" className="link">Meteo</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                </ul>
                <ul>
                    <li><ToggleTheme /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header