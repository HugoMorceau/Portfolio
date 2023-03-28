import React, { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useTheme } from '../config/themes/ThemeContext'
import ButtonTheme from '../components/Buttons/ButtonTheme/ButtonTheme'
import BurgerMenu from '../components/Navbar/BurgerMenu'

// components
import {
  Intro, About, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows, /* Construction */
  Sidebar
} from '../components'
 
// assets
import languages from '../config/languages/languages.js'
import Section from '../components/Section/Section'
function App () {
  // Imports
  const { trackPageView } = useMatomo()
  const { i18n, t } = useTranslation()
  const { theme } = useTheme()

  // States
  const [currentPosition, setCurrentPosition] = useState('')

  // Refs
  const home = useRef(null)
  const skills = useRef(null)
  const work = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const about = useRef(null)

  // Arrow maps
  const arrowMap = {
    arrowUp: {
      light:'assets/arrow/arrowUpLight.svg',
      dark: 'assets/arrow/arrowUpDark.svg'
    },
    arrowDown: {
      light: 'assets/arrow/arrowDownLight.svg',
      dark: 'assets/arrow/arrowDownDark.svg'
    }
  }
  const arrowUp = arrowMap.arrowUp[theme]
  const arrowDown = arrowMap.arrowDown[theme]

  // Destinations
  const destinations = [
    { key: 1, title: t('Home'), ref: home },
    { key: 2, title: t('About'), ref: about },
    { key: 3, title: t('Skills'), ref: skills },
    { key: 4, title: t('Work Experience'), ref: work },
    { key: 5, title: t('My Projects'), ref: projects },
    { key: 6, title: t('Contact Me'), ref: contact }
  ]

  // Effects
  useEffect(() => {
    trackPageView()
  })
  useEffect(() => {
    // Met à jour l'attribut `lang` de l'élément `<html>` en fonction de la langue actuelle
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  // Functions
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
          <div className="App-header--top__right">
            <ButtonTheme className ="theme-button" />
            <SwitchLanguage languages={languages} arrowDown={arrowDown}/>
          </div>
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
        <Section title='Work Experience' inConstruction={false} ref={work}>
          <WorkXp></WorkXp>
        </Section>
        <Section title='My Projects' inConstruction={false} ref={projects}>
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
