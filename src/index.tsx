import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { ThemeProvider } from './contexts/ThemeContext'
import DefaultHeader from './components/utility/DefaultHead'
import { MouseMoveEventProvider } from './contexts/MouseMoveContext'
import { HelmetProvider } from 'react-helmet-async'
import store from './store/store'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider>
          <MouseMoveEventProvider>
            <DefaultHeader />
            <RouterProvider router={router} />
          </MouseMoveEventProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
    <Analytics />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
