import { PropTypes } from 'prop-types'
import './Arrows.css'
export default function Arrows ({ handleClick, arrowUp, arrowDown }) {
  // state
  // comportements
  // render
  return (
    <div className='App-arrow'>
      <button className = "App-arrow--up" onClick={() => handleClick('previous')}>
        <img src={arrowUp} alt='arrow up' height='40px' />
      </button>
      {/* <button className = "App-arrow--down" onClick={() => handleClick('next')}>
        <img src={arrowDown} alt='arrow down' height='40px' />
      </button> */}
    </div>
  )
}

// propTypes
Arrows.propTypes = {
  handleClick: PropTypes.func.isRequired,
  arrowUp: PropTypes.string.isRequired,
  arrowDown: PropTypes.string.isRequired
}
