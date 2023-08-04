import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link to="/home" className="link">Accueil</Link>
                <Link to="/weather" className="link">Meteo</Link>
                <Link to="/about" className="link">About</Link>
            </nav>
        </header>
    )
}

export default Header