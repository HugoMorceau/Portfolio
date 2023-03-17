
import './App.css'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// components
import {
  Intro, About, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows /* Construction */
} from './components'

// assets
import arrowUp from './assets/arrow/arrowUp.svg'
import arrowDown from './assets/arrow/arrowDown.svg'
import languages from './assets/languages/languages.js'
import Section from './components/Section/Section'

function App () {
  // console.log('render app')
  const { t } = useTranslation()
  // states
  const home = useRef(null)
  const skills = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const about = useRef(null)
  const destinations = [
    { key: 1, title: t('Home'), ref: home },
    { key: 2, title: t('About'), ref: about },
    { key: 3, title: t('Skills'), ref: skills },
    { key: 4, title: t('Work Experience'), ref: work },
    { key: 5, title: t('My Projects'), ref: projects },
    { key: 6, title: t('Contact Me'), ref: contact }
  ]
  // eslint-disable-next-line no-unused-vars
  const [currentPosition, setCurrentPosition] = useState('')

  // comportements

  const executeScroll = (ref) => {
    if (!ref) {
      console.log('ref not found, scroll to home')
      ref = home
    }

    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    setCurrentPosition(ref)
  }

  // render
  return (
    <div className="App">
      <header className="App-header">
        <Navbar handleclick={executeScroll} liElt={destinations}/>
        <SwitchLanguage languages={languages} arrowDown={arrowDown}/>
      </header>
      <main className="Main">
        <section className="Section" ref={home}>
          {/* <Construction title='WebSite'/> */}
          <Intro />
        </section>
        <Section title='About' inConstruction={false} ref={about}>
          <About/>
        </Section>
        <Section title='Skills' inConstruction={true} ref={skills}>
          <Skills/>
        </Section>
        <Section title='Work Experience' inConstruction={true} ref={work}>
          <WorkXp></WorkXp>
        </Section>
        <Section title='My Projects' inConstruction={true} ref={projects}>
          <Projects />
        </Section>
        <Section title="Contact" inConstruction={true} ref={contact}>
          <Contact />
        </Section>
        <Arrows handleClick={executeScroll} arrowUp={arrowUp} arrowDown={arrowDown}/>
      </main>
      <footer className="App-footer">
        <p> 2023</p>
      </footer>
    </div>
  )
}

export default App
