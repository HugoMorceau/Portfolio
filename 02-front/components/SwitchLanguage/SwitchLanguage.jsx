import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styles from './SwitchLanguage.module.scss'

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
    <div className={arrowDown ? styles.lang : ''}>
      {/* desktop */}
      {arrowDown && <div className={styles.langContainer}>
        <img className={styles.langArrow} src={arrowDown} alt='arrow down' height='20px' />
        <button className={styles.langButton} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <img src={activeLanguage.flag} alt={activeLanguage.name} height='25px' width= '25px' />

          {isDropdownOpen &&
          <ul className={styles.langDropdown}>
            {languages.map((language) => {
              if (language.code === activeLanguage.code) {
                return null
              }
              return (
                <li className={styles.langDropdownItem} key={language.code} onClick={() => handleLanguageChange(language)}>
                  <img src={language.flag} alt={language.name} height='25px' width= '25px' />
                </li>
              )
            })}
          </ul>
          }
        </button>
      </div>}
      {/* mobile */}
      {!arrowDown && <div className={styles.langMobile}>
        {languages.map((language) => {
          return (
            <div className={styles.langMobileItem} key={language.code} onClick={() => handleLanguageChange(language)}>
              <img src={language.flag} alt={language.name} height='25px' width= '25px' />
            </div>
          )
        })}
      </div>}
    </div>

  )
}

SwitchLanguage.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      flag: PropTypes.object
    }).isRequired
  ).isRequired,
  arrowDown: PropTypes.object
}
