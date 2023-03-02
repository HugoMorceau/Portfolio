import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

/**
 * @param {Object} props
 * @param {Array} props.languages Array of objects
 * * @param {Array} props.languages.name language name
 * * @param {Array} props.languages.code language code
 * * @param {Array} props.languages.flag language flag
 * @returns {JSX.Element}
 * @description Switch language component
 * @example
 * const languages = [
 * {
 *  name: 'English',
*   code: 'en',
*   flag: 'https://www.countryflags.io/gb/flat/64.png'
* },
* {
*   name: 'Français',
*   code: 'fr',
*   flag: 'https://www.countryflags.io/fr/flat/64.png'
* }
* ]
  */
export default function SwitchLanguage ({ languages }) {
  const { i18n } = useTranslation()
  return (
    <div className="App-lang">
      {languages.map((language) => {
        return (
          <button className="App-lang--button" key={language.code} onClick={() => i18n.changeLanguage(language.code)}>
            <img src={language.flag} alt={language.name} height='40px' />
          </button>
        )
      })}
    </div>
  )
}

SwitchLanguage.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      flag: PropTypes.string
    }).isRequired
  ).isRequired
}
