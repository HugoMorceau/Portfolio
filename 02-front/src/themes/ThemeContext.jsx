import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme')
    root.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
