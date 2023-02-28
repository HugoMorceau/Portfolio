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

  // comportements
  const executeScroll = (to) => {
    // event.preventDefault()
    console.log('executeScroll to: ', to)
    //   to.current.scrollIntoView({ behavior: 'smooth' })
    to.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }

  // render
  return (
    <div ref={home} className="App">
      <header className="App-header">
        <nav>
          <ul className="App-nav--ul">
            <li className="App-nav--li"><button onClick={() => executeScroll(home)}>Home</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(work)}>Work Experience</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(projects)}>Personal projects</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(contact)}>Contact Me</button></li>
          </ul>
        </nav>
      </header>

      {/* intro */}
      <section className="App-section">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I&apos;m <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>
      </section>

      {/* Work Experience */}
      <section ref={work}className="App-section">
        <Work />
      </section>

      {/* Projects */}
      <section ref={projects}className="App-section">
        <Projects />
      </section>

      {/* Contact */}
      <section ref={contact} className="App-section">
        <Contact />
      </section>
    </div>
  )
}

export default App
