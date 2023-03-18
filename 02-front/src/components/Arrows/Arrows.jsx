import { PropTypes } from 'prop-types'
import './Arrows.css'
export default function Arrows ({ handleClick, arrowUp }) {
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
