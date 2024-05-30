import React from 'react'
import './Footer.sass'
import ToolDevList from './toolDevList/ToolDevList'
import AuthorCard from './authorCard/AuthorCard'
import { useTheme } from '../../contexts/ThemeContext'
import { classNames } from '../../lib/classnames'
import { HashLink } from 'react-router-hash-link'
const Footer: React.FC = () => {
  const { theme } = useTheme()
  return (
    <footer className={classNames('footer', theme)}>
      <div className="footer-centered container">
        <ToolDevList />
        <AuthorCard />
        <div className="footer-legal">
          <HashLink smooth to="/about#use-local-storage" className="link-accent">
            Mentions légales
          </HashLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
