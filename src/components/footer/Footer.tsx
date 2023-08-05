import React from 'react'
import './Footer.scss'
import ToolDevList from './toolDevList/ToolDevList'
import AuthorCard from './authorCard/AuthorCard'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-tools">
        <ToolDevList/>
        
      </div>
      <div className="footer-links">
        <h3>Liens</h3>
        <ul>
          <li><a href="https://github.com/votre-utilisateur/votre-projet">GitHub du projet</a></li>
        </ul>
      </div>
      <AuthorCard/>
      <div className="footer-legal">
        <h3>Mentions légales</h3>
        <p>© COPYRIGHT {new Date().getFullYear()}<br /></p>
        <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur.</p>
      </div>
    </footer>
  )
}

export default Footer