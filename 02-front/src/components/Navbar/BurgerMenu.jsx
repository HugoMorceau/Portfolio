import './BurgerMenu.scss'
import PropTypes from 'prop-types'
import ButtonTheme from '../Buttons/ButtonTheme/ButtonTheme'
import languages from '../../assets/languages/languages.js'
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage'
import { useState, useEffect, useRef } from 'react'

const BurgerMenu = ({ handleClick, menuItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuContainerRef = useRef(null)
  const burgerButtonRef = useRef(null)
  const handleClickBurger = () => {
    console.log('click burger')
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }
  // const handleClickOutside = (e) => {
  //   if (isMenuOpen && !e.target.closest('.burger-menu-item-container') && !e.target.closest('.burger-menu-button')) {
  //     setIsMenuOpen(false)
  //   }
  // }
  const handleClickOutside = (e) => {
    if (
      isMenuOpen &&
      menuContainerRef.current &&
      menuContainerRef.current.contains(e.target) &&
      burgerButtonRef.current &&
      !burgerButtonRef.current.contains(e.target)
    ) {
      if (e.target.classList.contains('burger-menu-item')) {
        setIsMenuOpen(false)
      }
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className='burger-menu-container' ref={menuContainerRef}>
      <div className='burger-menu-button' ref={burgerButtonRef}>
        <button className={isMenuOpen ? 'menu-button--open' : 'menu-button' }
          onClick={handleClickBurger}>
          <div className="menu-button__line">
          </div>
        </button>
      </div>
      <div className= {isMenuOpen ? 'burger-menu-item-container' : 'burger-menu-item-container--closed'} >
        <ButtonTheme className ="burger-menu--theme-button burger-menu-item" size={'1.6rem'} />
        <SwitchLanguage languages={languages}/>
        <ul className="App-nav--ul">
          {menuItem.map(({ key, title, ref }) => {
            return (<li key={key} ref={ref} className="burger-menu-item"
              onClick={(e) => handleClick(ref)}>
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
