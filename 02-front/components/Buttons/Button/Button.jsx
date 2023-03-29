import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './Button.module.scss'
export default function Button ({ text, type, onClick }) {
  const [flashReverse, setFlashState] = useState(true)

  const handleMouseEnter = () => {
    setFlashState(false)
  }

  const handleMouseLeave = () => {
    setFlashState(true)
  }

  const handleClick = () => {
    onClick ? onClick() : console.log('No onClick function provided')
  }

  return (
    <button
      className={`${styles.button} ${flashReverse ? styles.buttonFlashReverse : ''}`}
      type={type}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}
