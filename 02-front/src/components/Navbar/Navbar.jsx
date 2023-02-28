/* eslint-disable react/prop-types */

// import { useRef } from 'react'
export default function Navbar ({ to, scroll }) {
  // state
  // const home = useRef(null)
  // const work = useRef(null)
  // const projects = useRef(null)
  // const contact = useRef(null)
  // comportements
  // render
  return (
    <nav>
      <ul className="App-nav--ul">
        <li className="App-nav--li"><button onClick={() => {
          console.log(scroll)
          scroll(to)
        }}
        >Home</button></li>

        <li className="App-nav--li"><button onClick={() => scroll(to)}>Work Experience</button></li>
        <li className="App-nav--li"><button onClick={() => scroll(to)}>Personal projects</button></li>
        <li className="App-nav--li"><button onClick={() => scroll(to)}>Contact Me</button></li>
      </ul>
    </nav>
  )
}
