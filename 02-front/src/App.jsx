/* eslint-disable no-unused-vars */

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// components
import {
  // eslint-disable-next-line no-unused-vars
  Intro, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows
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
  const [currentPosition, setCurrentPosition] = useState('')
  const [y, setY] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // comportements

  const executeScroll = (ref) => {
    if (!ref.current) {
      console.log('ref not found, scroll to home')
      ref = home
    }
    console.log('scroll to ', ref.current)

    console.log('currentPosition set to', currentPosition.current)

    setY(window.scrollY)
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    setCurrentPosition(ref)
    setIsScrolling(false)
  }

  // eslint-disable-next-line no-unused-vars
  const handleScroll = () => {
    const index = destinations.findIndex((destination) => {
      return destination.ref.current === currentPosition.current
    }
    )
    // console.log('index found ', index, ' ', destinations[index].title)
    // Scroll down
    if (window.scrollY > y) {
      // if (index < destinations.length - 1) {
      console.log('Scroll down', destinations[index + 1].title)
      executeScroll(destinations[index + 1].ref)
    }
  }

  const scrollListener = (e) => {
    if (!isScrolling) {
      console.log('scrollListener')
      // setIsScrolling(true)
      // handleScroll()
    }
  }

  // useEffect(() => {
  //   window.addEventListener('wheel', (e) => scrollListener(e))
  //   return () => {
  //     window.removeEventListener('wheel', (e) => scrollListener(e))
  //   }
  // })

  // useEffect(() => {
  //   console.log('UseEffect currentPosition set to', currentPosition.current)
  // }, [currentPosition])

  // render
  return (
    <div className="App">
      <header className="App-header">
        <Navbar handleclick={executeScroll} liElt={destinations}/>
        <SwitchLanguage languages={languages}/>
      </header>
      {/* <section className="App-section" ref={home}>
        <Intro />
      </section> */}
      <Section title='Home' ref={home}>
        <Intro />
      </Section>
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
    </div>
  )
}

export default App
