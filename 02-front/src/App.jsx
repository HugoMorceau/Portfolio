import logo from './logo.svg'
import './App.css'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

// components
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import SwitchLanguage from './components/SwitchLanguage/SwitchLanguage'
import languages from './assets/flags/languages.js'
function App () {
  console.log('render app')
  // states
  const { t } = useTranslation()
  const home = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const destinations = [
    { key: 'Home', ref: home },
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
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I&apos;m <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>{t('Welcome to React')}</p>
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
