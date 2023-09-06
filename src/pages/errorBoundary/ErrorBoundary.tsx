import React from 'react'

import './ErrorBoundary.sass'

import Meta, { MetaProps } from '../../components/utility/Meta'

import { useTheme } from '../../contexts/ThemeContext'

import Error from '../../components/error/Error'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
  const metaProps: MetaProps = {
    title: 'Erreur',

    description: 'Erreur inattendue',

    ogSrc: '/og/og_image.png',

    keyWord: 'Erreur, app, météo, prévisions, météo locale'
  }

  const error = useRouteError()

  return (
    <>
      <Meta {...metaProps} />

      <main className="main error-boundary">
        <Error
          errorName="Oups !"
          message="Quelque chose a mal tourné avec la météo."
          error={`${error}`}
        />
      </main>
    </>
  )
}

export default ErrorBoundary
