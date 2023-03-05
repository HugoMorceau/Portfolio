
import './App.css'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// components
import {
  Intro, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows
} from './components'

// assets
import arrowUp from './assets/arrow/arrowUp.svg'
import arrowDown from './assets/arrow/arrowDown.svg'
import languages from './assets/languages/languages.js'

function App () {
  console.log('render app')
  const { t } = useTranslation()
  // states
  const home = useRef(null)
  const skills = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const destinations = [
    { key: t('Home'), ref: home },
    { key: t('Skills'), ref: skills },
    { key: t('Work Experience'), ref: work },
    { key: t('My Projects'), ref: projects },
    { key: t('Contact Me'), ref: contact }
  ]
  const [currentPosition, setCurrentPosition] = useState(home)

  // comportements
  /**
   * @param {Event} e event
   * @returns {void}
   * @description Scroll to the section of the page
    */
  const executeScroll = (e) => {
    const to = destinations.find((destination) => destination.key === e.target.innerText).ref
    to.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    setCurrentPosition(to)
  }
  /**
   * @param {string} position
   * @returns {void}
   * @description Scroll to the next or previous section of the page
   * @example scrollTo('next')
   * @example scrollTo('previous')
   **/
  const scrollTo = (position) => {
    const index = destinations.findIndex((destination) => destination.ref === currentPosition)
    if (position === 'next') {
      if (index < destinations.length - 1) {
        destinations[index + 1].ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        setCurrentPosition(destinations[index + 1].ref)
      }
    } else {
      if (index > 0) {
        destinations[index - 1].ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        setCurrentPosition(destinations[index - 1].ref)
      }
    }
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
        <h2 className='App-section--title'>{t('Work Experience')}</h2>
        <WorkXp />
        <div>{t('Download CV')}</div>
      </section>
      <section ref={projects}className="App-section">
        <Projects />
      </section>
      <section ref={contact} className="App-section">
        <Contact />
      </section>
      < Arrows handleClick={scrollTo} arrowUp={arrowUp} arrowDown={arrowDown}/>
    </div>
  )
}

export default App
