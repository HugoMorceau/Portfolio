/* eslint-disable react/prop-types */
export default function Navbar ({ handleclick, liElt }) {
  return (
    <nav>
      <ul className="App-nav--ul">
        {liElt.map(({ key, ref }) => {
          return (<li key={key} className="App-nav--li"><button id={key} onClick={(e) => handleclick(e, ref)}>{key}</button></li>)
        })}
      </ul>
    </nav>
  )
}
