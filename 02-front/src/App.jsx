/* eslint-disable react/no-unescaped-entities */

import logo from './logo.svg'
import './App.css'
import { useRef } from 'react'
// components
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App () {
  // state
  const home = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const executeScroll = (to) => {
    // event.preventDefault()
    console.log('executeScroll to: ', to)
    to.current.scrollIntoView({ behavior: 'smooth' })
  }
  // comportements
  // render
  return (
    <div ref={home} className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li><button onClick={() => executeScroll(home)}>Home</button></li>
            <li><button onClick={() => executeScroll(work)}>Work Experience</button></li>
            <li><button onClick={() => executeScroll(projects)}>Personal projects</button></li>
            <li><button onClick={() => executeScroll(contact)}>Contact Me</button></li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>

      {/* Work Experience */}
      <section ref={work}className="work">
      <Work />
      </section>

      {/* Projects */}
      <section ref={projects}className="projects">
        <Projects />
      </section>
      {/* Contact */}
      <section className="contact">
        <br />
        <h2 ref={contact}>Contact</h2>
        <Contact />
      </section>
      </header>
    </div>
  )
}

export default App
