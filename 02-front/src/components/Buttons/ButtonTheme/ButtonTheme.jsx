import { useTheme } from '../../../themes/ThemeContext'
import { BsMoonStars, BsSun } from '../../../assets/icons/icons'
import PropTypes from 'prop-types'

const ButtonTheme = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  const isLightTheme = theme === 'light'

  return (
    <button className={className} onClick={toggleTheme}>
      {isLightTheme ? <BsMoonStars /> : <BsSun />}
    </button>
  )
}
ButtonTheme.propTypes = {
  className: PropTypes.string.isRequired
}
export default ButtonTheme
