import { useTheme } from '../../../themes/ThemeContext'
import { BsMoonStars, BsSun } from '../../../assets/icons/icons'
import PropTypes from 'prop-types'

const ButtonTheme = ({ className, size }) => {
  const { theme, toggleTheme } = useTheme()
  console.log('theme', theme)
  const isLightTheme = theme === 'light'

  return (
    <button className={className} onClick={toggleTheme}>
      {isLightTheme ? <BsMoonStars size={size || '1em'}/> : <BsSun />}
    </button>
  )
}
ButtonTheme.propTypes = {
  className: PropTypes.string.isRequired,
  size: PropTypes.string
}
export default ButtonTheme
