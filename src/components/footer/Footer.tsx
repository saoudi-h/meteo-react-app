import React from 'react'
import './Footer.sass'
import ToolDevList from './toolDevList/ToolDevList'
import AuthorCard from './authorCard/AuthorCard'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'
const Footer: React.FC = () => {
  const { theme } = useTheme()
  return (
    <footer className={classNames('footer', theme)}>
      <div className="footer-centered">
        <ToolDevList />
        <AuthorCard />
        <div className="footer-legal">
          <h3>Mentions légales</h3>
          <p>
            © COPYRIGHT {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;Ce site utilise des cookies
            pour améliorer l'expérience utilisateur.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
