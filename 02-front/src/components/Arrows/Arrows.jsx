import { PropTypes } from 'prop-types'
import './Arrows.css'
// import { useTheme } from '../../themes/ThemeContext'
export default function Arrows ({ handleClick, arrowUp }) {
  // state
  // comportements
  // render
  return (
    <div className='App-arrow'>
      <button className = "App-arrow--up" onClick={() => handleClick()}>
        <img src={arrowUp} alt='arrow up' height='40px' />
      </button>
    </div>
  )
}

// propTypes
Arrows.propTypes = {
  handleClick: PropTypes.func.isRequired,
  arrowUp: PropTypes.string.isRequired

}
