import { createInstance } from '@datapunt/matomo-tracker-react'
const matomoInstance = createInstance({
  urlBase: 'https://hugomorceau.com/matomo/',
  siteId: 1
})
export default matomoInstance
