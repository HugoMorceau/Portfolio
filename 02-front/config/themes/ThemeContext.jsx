import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { trackThemeChang } from '../matomo/matomoTracker'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ defaultTheme, children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme')
    root.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    trackThemeChang(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.string.isRequired
}
