import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './SwitchLanguage.css'

export default function SwitchLanguage ({ languages, arrowDown }) {
  const { i18n } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(languages.find((language) => language.code === i18n.language))

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.code)
    setActiveLanguage(language)
    setIsDropdownOpen(false)
  }

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="lang">
      <img className="lang--arrow" src={arrowDown} alt='arrow down' height='20px' />
      <button className="lang--button" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>

        {/* <span className="lang--button-label">v</span> */}

        <img src={activeLanguage.flag} alt={activeLanguage.name} height='25px' width= '25px' />

        {isDropdownOpen &&
          <ul className="lang--dropdown">
            {languages.map((language) => {
              if (language.code === activeLanguage.code) {
                return null
              }
              return (
                <li className="lang--dropdown-item" key={language.code} onClick={() => handleLanguageChange(language)}>
                  <img src={language.flag} alt={language.name} height='25px' width= '25px' />
                  {/* <span className="lang--dropdown-label">{language.name}</span> */}
                </li>
              )
            })}
          </ul>
        }
      </button>

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
  ).isRequired,
  arrowDown: PropTypes.string.isRequired
}
