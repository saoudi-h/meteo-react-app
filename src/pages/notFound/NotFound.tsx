import React from 'react'

import './NotFound.sass'

import Meta, { MetaProps } from '../../components/utility/Meta'

import Error from '../../components/error/Error'

const NotFound = () => {
  const metaProps: MetaProps = {
    title: 'Page Introuvable',

    description: 'Erreur 404, Page Introuvable',

    ogSrc: '/og/og_image.png',

    keyWord: '404, app, météo, prévisions, météo locale'
  }

  return (
    <>
      <Meta {...metaProps} />

      <main className="main notfound">
        <Error errorName="404" message="Page introuvable" />
      </main>
    </>
  )
}
export default NotFound
