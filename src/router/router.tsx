import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WeatherPage from '../pages/weatherPage/WeatherPage'
import NotFound from '../pages/notFound/NotFound'
import About from '../pages/about/About'
import DefaultLayout from '../layout/default/DefaultLayout'
import Home from '../pages/home/Home'
import ErrorBoundary from '../pages/errorBoundary/ErrorBoundary'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} errorElement={<ErrorBoundary />} />
        <Route path="weather" element={<WeatherPage />} errorElement={<ErrorBoundary />} />
        <Route path="about" element={<About />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
)

export default router
