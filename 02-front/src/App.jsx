
import './App.css'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// components
import {
  Intro, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows, Construction
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
  const destinations = [
    { key: 1, title: t('Home'), ref: home },
    { key: 2, title: t('Skills'), ref: skills },
    { key: 3, title: t('Work Experience'), ref: work },
    { key: 4, title: t('My Projects'), ref: projects },
    { key: 5, title: t('Contact Me'), ref: contact }
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
        <SwitchLanguage languages={languages}/>
      </header>
      <br/>
      <main className="Main">
        <Construction title='WebSite'/>
        <section className="Section" ref={home}>
          <Intro />
        </section>
        <Section title='Skills' ref={skills}>
          <Skills/>
        </Section>
        <Section title='Work Experience' ref={work}>
          <WorkXp></WorkXp>
        </Section>
        <Section title='My Projects' ref={projects}>
          <Projects />
        </Section>
        <Section title="Contact" ref={contact}>
          <Contact />
        </Section>
        < Arrows handleClick={executeScroll} arrowUp={arrowUp} arrowDown={arrowDown}/>
      </main>
    </div>
  )
}

export default App
