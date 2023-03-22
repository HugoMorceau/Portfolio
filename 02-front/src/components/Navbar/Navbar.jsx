
import PropTypes from 'prop-types'
import './Navbar.scss'

export default function Navbar ({ handleclick, liElt }) {
  return (
    <nav className='Navbar'>
      <ul className="Navbar--ul">
        {liElt.map(({ key, title, ref }) => {
          return (<li key={key} ref={ref} className="Navbar--li App-link"
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
