import matomoInstance from './matomoInstance'

export const trackPageView = (destination) => {
  matomoInstance.trackPageView(
    {documentTitle: destination}
  )
}

export const trackCVDownload = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV',
    action: 'Download',
    name: cvName
  })
}

export const trackCVView = (cvName) => {
  matomoInstance.trackEvent({
    category: 'CV',
    action: 'View',
    name: cvName
  })
}

export const trackLangChang = (lang) => {
    matomoInstance.trackEvent({
      category: 'Language',
      action: 'Change',
      name: lang
    })
}

export const trackThemeChang = (them) => {
  matomoInstance.trackEvent({
    category: 'Theme',
    action: 'Change',
    name: them
  })
}
export const trackBurgerMenu = () => {
  matomoInstance.trackEvent({
    category: 'BurgerMenu',
    action: 'Click',
    name: 'open/close'
  })
}