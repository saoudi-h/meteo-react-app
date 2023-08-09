import React from 'react'
import './DefaultLayout.sass'
import { classNames } from '../../lib/classnames'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Meta, { MetaProps } from '../../components/utility/Meta'

interface DefaultLayoutProps {
  className?: string
  metaProps: MetaProps
  children: React.ReactNode
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ className, metaProps, children }) => {
  className = className || ''
  return (
    <>
      <Meta {...metaProps} />
      <Header />
      <main className={classNames('main', className)}>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
