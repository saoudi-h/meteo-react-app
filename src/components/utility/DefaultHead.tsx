import React from 'react'
import { Helmet } from 'react-helmet'

const DefaultHeader = () => {
  const PUBLIC_URL = `${process.env.REACT_APP_PUBLIC_URL || 'http://localhost'}:${
    process.env.REACT_APP_PUBLIC_PORT || '3000'
  }`

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={PUBLIC_URL + '/favicon/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={PUBLIC_URL + '/favicon/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={PUBLIC_URL + '/favicon/favicon-16x16.png'}
      />
      <link rel="manifest" href={PUBLIC_URL + '/favicon/site.webmanifest'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#83d9dc" />
      <meta name="description" content="My Weather : Votre application météo !" />
      <title>My Weather</title>
    </Helmet>
  )
}

export default DefaultHeader
