import matomoInstance from './matomoInstance'

export const trackPageView = (destination) => {
  matomoInstance.trackPageView(
    {documentTitle: destination}
  )
}

export const trackCVDownload = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV_Downloads',
    action: 'Download',
    name: cvName
  })
}

export const trackCVView = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV_Views',
    action: 'View',
    name: cvName
  })
}
