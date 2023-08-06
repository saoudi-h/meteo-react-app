import React from 'react'
import './Footer.sass'
import ToolDevList from './toolDevList/ToolDevList'
import AuthorCard from './authorCard/AuthorCard'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'
const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className={classNames('footer', theme)}>
      <div className="footer-tools">
        <ToolDevList />

      </div>
      <div className="footer-links">
        <h3>Liens</h3>
        <ul>
          <li><a href="https://github.com/votre-utilisateur/votre-projet">GitHub du projet</a></li>
        </ul>
      </div>
      <AuthorCard />
      <div className="footer-legal">
        <h3>Mentions légales</h3>
        <p>© COPYRIGHT {new Date().getFullYear()}<br /></p>
        <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur.</p>
      </div>
    </footer>
  )
}

export default Footer