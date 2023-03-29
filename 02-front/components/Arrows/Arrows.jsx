import { PropTypes } from 'prop-types'
import styles from './Arrows.module.scss'
import Image from 'next/image'
export default function Arrows ({ handleClick, arrowUp }) {
  return (
    <div className={styles.arrow}>
      <button className = {styles.arrowUp} onClick={() => handleClick()}>
        {/* <img src={arrowUp} alt='arrow up' height='40px' /> */}
          <Image src={arrowUp} alt='arrow up' height='40px' width='40px' />
      </button>
    </div>
    
  )
}

// propTypes
Arrows.propTypes = {
  handleClick: PropTypes.func.isRequired,
  arrowUp: PropTypes.string.isRequired
  
}
