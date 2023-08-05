import React from 'react'
import './Footer.scss'
import ToolDevList from './toolDevList/ToolDevList'

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
      <div className="footer-about">
        <h3>À propos de moi</h3>
        <div className="about-content">
          <img src="chemin-vers-votre-logo.png" alt="Votre logo" className="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae velit non turpis blandit bibendum.</p>
          <div className="social-links">
            <a href="https://github.com/votre-utilisateur">GitHub</a>
            <a href="https://www.linkedin.com/in/votre-utilisateur">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <h3>Mentions légales</h3>
        <p>© 2023 Votre Nom. Tous droits réservés.</p>
        <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur.</p>
      </div>
    </footer>
  )
}

export default Footer