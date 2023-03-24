import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import './styles/variables.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import App from './App'
import { ThemeProvider } from './themes/ThemeContext'
import reportWebVitals from './reportWebVitals'
import { MatomoProvider } from '@datapunt/matomo-tracker-react'
import matomoInstance from './matomo/matomoInstance'

// Language translation
import './i18n'
// const matomoInstance = createInstance({
//   urlBase: 'https://hugomorceau.com/matomo/',
//   siteId: 1
// })
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MatomoProvider value={matomoInstance}>
      <ThemeProvider defaultTheme='dark'>
        <App />
      </ThemeProvider>
    </MatomoProvider>
  </React.StrictMode>
)

reportWebVitals()
