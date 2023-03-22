import matomoInstance from './matomoInstance'

export const trackPageView = () => {
  matomoInstance.trackPageView()
}

export const trackCVDownload = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV_Downloads',
    action: 'Download',
    name: cvName
  })

  matomoInstance.trackEvent({
    category: 'CV_Downloads',
    action: 'Download',
    name: 'Global_CV'
  })
}

export const trackCVView = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV_Views',
    action: 'View',
    name: cvName
  })
}
