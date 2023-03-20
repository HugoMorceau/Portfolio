
import './App.css'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from './themes/ThemeContext'
import ButtonTheme from './components/Buttons/ButtonTheme/ButtonTheme'
import BurgerMenu from './components/Navbar/BurgerMenu'

// components
import {
  Intro, About, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows, /* Construction */
  Sidebar
} from './components'

// assets
import arrowUpLight from './assets/arrow/arrowUpLight.svg'
import arrowUpDark from './assets/arrow/arrowUpDark.svg'
import arrowDownLight from './assets/arrow/arrowDownLight.svg'
import arrowDownDark from './assets/arrow/arrowDownDark.svg'
import languages from './assets/languages/languages.js'
import Section from './components/Section/Section'

function App () {
  // console.log('render app')
  const { t } = useTranslation()
  const { theme } = useTheme()
  const arrowMap = {
    arrowUp: {
      light: arrowUpLight,
      dark: arrowUpDark
    },
    arrowDown: {
      light: arrowDownLight,
      dark: arrowDownDark
    }
  }
  const arrowUp = arrowMap.arrowUp[theme]
  const arrowDown = arrowMap.arrowDown[theme]

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
      ref = home
    }

    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    setCurrentPosition(ref)
  }

  // render
  return (
    <div className="App">
      <header className="App-header">
        {/* Top Menu */}
        {/* TODO: Disable for mobile ? */}
        <div className="App-header--top">
          <Navbar handleclick={executeScroll} liElt={destinations}/>
          <ButtonTheme className ="theme-button" />
          <SwitchLanguage languages={languages} arrowDown={arrowDown}/>
        </div>
        <div className="App-header--mobile">
          <BurgerMenu handleClick={executeScroll} menuItem={destinations} />
        </div>
      </header>
      <main className="Main">
        <Sidebar/>
        <section className="Section" ref={home}>
          {/* <Construction title='WebSite'/> */}
          <Intro />
        </section>
        <Section title='About' inConstruction={false} ref={about}>
          <About/>
        </Section>
        <Section title='Skills' inConstruction={false} ref={skills}>
          <Skills/>
        </Section>
        <Section title='Work Experience' inConstruction={true} ref={work}>
          <WorkXp></WorkXp>
        </Section>
        <Section title='My Projects' inConstruction={true} ref={projects}>
          <Projects />
        </Section>
        <Section title="Contact" inConstruction={false} ref={contact}>
          <Contact />
        </Section>
        <Arrows handleClick={executeScroll} arrowUp={arrowUp}/>
      </main>
      <footer className="App-footer">
        <p> 2023</p>
      </footer>
    </div>
  )
}

export default App
