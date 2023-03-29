import styles from'./BurgerMenu.module.scss'
import PropTypes from 'prop-types'
import ButtonTheme from '../Buttons/ButtonTheme/ButtonTheme'
import languages from '../../config/languages/languages.js'
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage'
import { useState, useEffect, useRef } from 'react'

const BurgerMenu = ({ handleClick, menuItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuContainerRef = useRef(null)
  const burgerButtonRef = useRef(null)
  const handleClickBurger = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }
  const handleClickOutside = (e) => {
    if (
      isMenuOpen &&
      burgerButtonRef.current &&
      !burgerButtonRef.current.contains(e.target) &&
       menuContainerRef.current &&
       !menuContainerRef.current.contains(e.target) &&
        !e.target.closest('svg')
    ) {
      setIsMenuOpen(false)
    }
  }
  const handleClickNavItem = (ref) => {
    setIsMenuOpen(false)
    handleClick(ref)
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className={styles.burgerMenuContainer} >
      <div className={styles.burgerMenuButton} ref={burgerButtonRef}>
        <button className={isMenuOpen ? styles.menuButtonOpen : styles.menuButton }
          onClick={handleClickBurger}>
          <div className={styles.menuButtonLine}>
          </div>
        </button>
      </div>
      <div className= {isMenuOpen ? styles.burgerMenuItemContainer : styles.burgerMenuItemContainerClosed} ref={menuContainerRef} >
        <ButtonTheme className ={`${styles.burgerMenuThemeButton} ${styles.burgerMenuItem}`} size={'1.6rem'} />
        <SwitchLanguage languages={languages}/>
        {/* TODO : rework this class*/}
        <ul className="App-nav--ul">
          {menuItem.map(({ key, title, ref }) => {
            return (<li key={key} ref={ref} className={styles.burgerMenuItem}
              onClick={(e) => handleClickNavItem(ref)}>
              {title.toUpperCase()}
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}
BurgerMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      ref: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
}
export default BurgerMenu
