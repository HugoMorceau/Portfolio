import '../styles/index.scss'
import '../styles/variables.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ThemeProvider } from '../themes/ThemeContext'
import { MatomoProvider } from '@datapunt/matomo-tracker-react'
import matomoInstance from '../matomo/matomoInstance'
import '../i18n'

// eslint-disable-next-line react/prop-types
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
