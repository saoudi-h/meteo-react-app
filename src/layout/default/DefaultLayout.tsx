import React from 'react'
import './DefaultLayout.sass'
import { classNames } from '../../lib/classnames'
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export interface LayoutProps {
  title?: string
  metaTags?: { name: string; content: string }[]
}

interface DefaultLayoutProps {
  className?: string
  layoutProps: LayoutProps
  children: React.ReactNode
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ className, layoutProps, children }) => {
  const title = layoutProps.title || 'MyWeather'
  className = className || ''
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {layoutProps.metaTags &&
          layoutProps.metaTags.map((tag, index) => (
            <meta key={index} name={tag.name} content={tag.content} />
          ))}
      </Helmet>
      <Header />
      <main className={classNames('main', className)}>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
