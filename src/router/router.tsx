import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WeatherPage from '../pages/weatherPage/WeatherPage'
import NotFound from '../pages/notFound/NotFound'
import About from '../pages/about/About'
import DefaultLayout from '../layout/default/DefaultLayout'
import Home from '../pages/home/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
)

export default router
