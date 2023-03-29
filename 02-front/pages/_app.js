import '../styles/index.scss'
import '../styles/variables.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ThemeProvider } from '../config/themes/ThemeContext'
import { MatomoProvider } from '@datapunt/matomo-tracker-react'
import matomoInstance from '../config/matomo/matomoInstance'
import '../config/i18n'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Hugo Morceau - Software Engineer</title>
    </Head>
      <MatomoProvider value={matomoInstance}>
        <ThemeProvider defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </MatomoProvider>
    </>
  )
}

export default MyApp
