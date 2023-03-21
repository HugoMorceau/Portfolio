import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import './styles/variables.css'
import App from './App'
import { ThemeProvider } from './themes/ThemeContext'
import reportWebVitals from './reportWebVitals'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

// Language translation
import './i18n'
const matomoInstance = createInstance({
  urlBase: 'https://hugomorceau.com/matomo/',
  siteId: 1
})
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
