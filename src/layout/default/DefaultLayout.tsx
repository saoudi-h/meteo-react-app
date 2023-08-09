import React from 'react'
import './DefaultLayout.sass'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Home from '../../pages/home/Home'

const DefaultLayout: React.FC = () => {
  const isHome = useLocation().pathname === '/'

  return (
    <>
      <Header />
      {isHome && <Home />}
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
