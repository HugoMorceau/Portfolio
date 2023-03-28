import '../styles/index.scss'
import '../styles/variables.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ThemeProvider } from '../config/themes/ThemeContext'
import { MatomoProvider } from '@datapunt/matomo-tracker-react'
import matomoInstance from '../config/matomo/matomoInstance'
import '../config/i18n'

function MyApp ({ Component, pageProps }) {
  return (
    <MatomoProvider value={matomoInstance}>
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </MatomoProvider>
  )
}

export default MyApp
