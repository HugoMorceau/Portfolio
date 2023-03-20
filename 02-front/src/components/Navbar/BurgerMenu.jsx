import './BurgerMenu.css'
import PropTypes from 'prop-types'
import ButtonTheme from '../Buttons/ButtonTheme/ButtonTheme'
import languages from '../../assets/languages/languages.js'
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage'
import { useState } from 'react'

const BurgerMenu = ({ handleClick, menuItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <button className='burger-menu--button' onClick={() => setIsMenuOpen(!isMenuOpen)}>XXX</button>
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
