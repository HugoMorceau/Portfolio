import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './ButtonFlashy.module.scss'
export default function ButtonFlashy ({ text, onClick }) {
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
      className={`${styles.buttonFlashy} ${flashReverse ? styles.FlashReverse : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  )
}
ButtonFlashy.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}
