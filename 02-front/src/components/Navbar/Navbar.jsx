
import PropTypes from 'prop-types'
export default function Navbar ({ handleclick, liElt }) {
  return (
    <nav>
      <ul className="App-nav--ul">
        {liElt.map(({ key, ref }) => {
          return (<li key={key} className="App-nav--li App-link"><button id={key} onClick={(e) => handleclick(e, ref)}>{key}</button></li>)
        })}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  handleclick: PropTypes.func.isRequired,
  liElt: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      ref: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
}
