import React from 'react'
import { Tooltip } from 'react-tooltip'
import './DefaultLayout.sass'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '../../contexts/ThemeContext'
const DefaultLayout: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      <Header />
      <Outlet />
      <Tooltip id="default-tooltip" className="default-tooltip" noArrow></Tooltip>
      <Footer />
    </>
  )
}

export default DefaultLayout
