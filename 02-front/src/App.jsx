
import './App.css'
import { useRef } from 'react'

// components
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import SwitchLanguage from './components/SwitchLanguage/SwitchLanguage'
import languages from './assets/languages/languages.js'
function App () {
  console.log('render app')
  // states

  const home = useRef(null)
  const skills = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const destinations = [
    { key: 'Home', ref: home },
    { key: 'Skills', ref: skills },
    { key: 'Work Experience', ref: work },
    { key: 'Personal projects', ref: projects },
    { key: 'Contact Me', ref: contact }
  ]

  // comportements
  /**
   * @param {Event} e event
   * @returns {void}
   * @description Scroll to the section of the page
    */
  const executeScroll = (e) => {
    const to = destinations.find((destination) => destination.key === e.target.innerText).ref
    to.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
  // render
  return (
    <div ref={home} className="App">
      <header className="App-header">
        <Navbar handleclick={executeScroll} liElt={destinations}/>
        <SwitchLanguage languages={languages}/>
      </header>
      <section className="App-section">
        <Intro />
      </section>
      <section ref={skills} className="App-section">
        <Skills/>
      </section>
      <section ref={work}className="App-section">
        <Work />
      </section>
      <section ref={projects}className="App-section">
        <Projects />
      </section>
      <section ref={contact} className="App-section">
        <Contact />
      </section>
    </div>
  )
}

export default App
