
import PropTypes from 'prop-types'
export default function Navbar ({ handleclick, liElt }) {
  return (
    <nav className='App-nav'>
      <ul className="App-nav--ul">
        {liElt.map(({ key, title, ref }) => {
          // return (<li key={key} className="App-nav--li App-link"><button onClick={(e) => handleclick(e, ref)}>{key}</button></li>)
          return (<li key={key} ref={ref} className="App-nav--li App-link"
            onClick={(e) => handleclick(e, ref)}>
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
