import React from 'react'
import './DefaultLayout.sass'
import { classNames } from '../../lib/classnames'
import { Helmet } from 'react-helmet'

interface DefaultLayoutProps {
  layoutProps: any
  children: React.ReactNode
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ layoutProps, children }) => {
  return (
    <main className={classNames()}>
      <Helmet>
        <title>hakim</title>
      </Helmet>
      {children}
    </main>
  )
}

export default DefaultLayout
