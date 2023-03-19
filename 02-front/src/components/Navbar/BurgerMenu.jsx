import './BurgerMenu.css'
import PropTypes from 'prop-types'
const BurgerMenu = ({ menuItem, handleCick }) => {
  return (
    <div className='burger-menu'>
      <button className='burger-menu--button'>XXX</button>
      <div className='burger-menu-item-container'></div>
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
  handleCick: PropTypes.func.isRequired
}
export default BurgerMenu
