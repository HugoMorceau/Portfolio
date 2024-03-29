import { useTheme } from '../../../config/themes/ThemeContext'
import { BsMoonStars, BsSun } from '../../../config/icons/icons'
import PropTypes from 'prop-types'

const ButtonTheme = ({ className, size }) => {
  const { theme, toggleTheme } = useTheme()
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
