import React from 'react'
import './AuthorCard.sass'
import GithubSvg from '../../icons/GithubSvg'
import TwitterSvg from '../../icons/TwitterSvg'
import LinkedInSvg from '../../icons/LinkedInSvg'
import InstagramSvg from '../../icons/InstagramSvg'
import { useTheme } from '../../../contexts/ThemeContext'
import { classNames } from '../../../lib/classnames'

const AuthorCard: React.FC = () => {
  const { theme } = useTheme()

  const authorData = {
    name: 'Hakim SAOUDI',
    logoUrl: '/svg/logo.svg',
    webSite: {
      name: 'hakimsaoudi.dev',
      url: 'https://hakimsaoudi.dev'
    },
    socials: {
      github: ['https://github.com/saoudi-h', <GithubSvg />, 'Github'],
      linkedIn: ['https://www.linkedin.com/in/hakim-saoudi', <LinkedInSvg />, 'LinkedIn'],
      twitter: ['https://twitter.com/hakim__saoudi', <TwitterSvg />, 'Twitter'],
      instagram: ['https://www.instagram.com/saisho_no_ippo', <InstagramSvg />, 'Instagram']
    }
  }
  return (
    <div className={classNames('author', theme)}>
      <div className="author-presentation">
        <img
          src={authorData.logoUrl}
          alt={`${authorData.name}`}
          className="author-logo"
          width={200}
          height={200}
        />

        <div className="author-presentation__right">
          <h2 style={{ fontSize: '1.26rem' }}>{`${authorData.name}`}</h2>
          <a href={authorData.webSite.url} target="_blank" rel="noopener noreferrer">
            {authorData.webSite.name}
          </a>
        </div>
      </div>
      <ul className="author-socials">
        {Object.entries(authorData.socials).map(([platform, data]) => (
          <li key={platform}>
            <a
              href={data[0] as string}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data[2] as string}
            >
              {data[1]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuthorCard
