
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'

export default function Navbar ({ handleclick, liElt }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        {liElt.map(({ key, title, ref }) => {
          return (<li key={key} ref={ref} className="App-link"
            onClick={(e) => handleclick(ref)}>
            {title.toUpperCase()}
          </li>)
        })}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  handleclick: PropTypes.func.isRequired,
  liElt: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      ref: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
}
