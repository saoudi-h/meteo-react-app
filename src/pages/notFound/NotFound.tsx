import React from 'react'
import './NotFound.css'
import Meta, { MetaProps } from '../../components/utility/Meta'

const NotFound = () => {
  const metaProps = {
    title: 'Page Introuvable',
    description: 'Erreur 404, Page Introuvable',
    ogSrc: '/og/og_image.png',
    keyWord: '404, app, météo, prévisions, météo locale'
  }
  return (
    <>
      <Meta {...metaProps} />
      <div className="notfound">404 | page Introuvable</div>
    </>
  )
}
export default NotFound
