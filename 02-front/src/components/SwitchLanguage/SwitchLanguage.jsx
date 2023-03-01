import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function SwitchLanguage ({ languages }) {
  const { i18n } = useTranslation()
  console.log(languages)
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
