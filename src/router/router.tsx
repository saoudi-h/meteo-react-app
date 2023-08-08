import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/home/Home'
import WeatherPage from '../pages/weatherPage/WeatherPage'
import WeatherCityPage from '../pages/weatherCityPage/WeatherCityPage'
import NotFound from '../pages/notFound/NotFound'
import About from '../pages/about/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="about" element={<About />} />
      <Route path="weather/:city" element={<WeatherCityPage />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)

export default router
