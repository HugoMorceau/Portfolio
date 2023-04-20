import React, { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import { useMatomo } from '@datapunt/matomo-tracker-react'
import { trackPageView } from '../config/matomo/matomoTracker'
import { useTheme } from '../config/themes/ThemeContext'

// components
import {
  Intro, About, Skills, WorkXp, Projects,
  Contact, Navbar, SwitchLanguage,
  Arrows, /* Construction */
  Sidebar, ButtonTheme, BurgerMenu
} from '../components'
 
// assets
import languages from '../config/languages/languages.js'
import Section from '../components/Section/Section'
function App () {
  // Imports
  // const { trackPageView } = useMatomo()

  const { i18n, t } = useTranslation()
  const { theme } = useTheme()

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
      light:'/assets/arrow/arrowUpLight.svg',
      dark: '/assets/arrow/arrowUpDark.svg'
    },
    arrowDown: {
      light: '/assets/arrow/arrowDownLight.svg',
      dark: '/assets/arrow/arrowDownDark.svg'
    }
  }
  const arrowUp = arrowMap.arrowUp[theme]
  const arrowDown = arrowMap.arrowDown[theme]

  // Destinations
  const destinations = [
    { key:1, id: 1, title: t('Home'), ref: home, component: Intro },
    { key:2, id: 2, title: t('About'), ref: about, component: About },
    { key:3, id: 3, title: t('Skills'), ref: skills, component: Skills },
    { key:4, id: 4, title: t('Work Experience'), ref: work, component: WorkXp },
    { key:5, id: 5, title: t('My Projects'), ref: projects, component: Projects },
    { key:6, id: 6, title: t('Contact Me'), ref: contact, component: Contact }
  ]
  // States
  const [currentPosition, setCurrentPosition] = useState('')
  const [activeSection, setActiveSection] = useState(1);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Scroll
    useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
      if (currentScrollY < 200) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Matomo
  useEffect(() => {
    trackPageView(destinations[activeSection -1 ].title)
  }, [activeSection])

  // Language
  useEffect(() => {
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
        {/* Top Menu for desktop */}
        <div className="App-header--top">
          <Navbar handleclick={executeScroll} destinations={destinations} activeSection={activeSection}/>
          <div className="App-header--top__right">
            <ButtonTheme className ="theme-button" />
            <SwitchLanguage languages={languages} arrowDown={arrowDown}/>
          </div>
        </div>
        {/* Burger Menu for Mobiles */}
        <div className="App-header--mobile">
          <BurgerMenu handleClick={executeScroll} menuItem={destinations} />
        </div>
      </header>
      <main className="Main">
        <Sidebar/>
        {destinations.map((destination) => (
          <Section 
            key={destination.key}
            id={destination.id}
            // title={destination.title === 'Home' ? '' : destination.title}
            title={destination.title}
            inConstruction={false}
            ref={destination.ref}
            setActiveSection={setActiveSection}
            scrollDirection={scrollDirection}
          >
            {/* Section specific component */}
            
            {React.createElement(destination.component)} 
          </Section>
        ))}
        {/* Icon Arrow => Scroll back to top */}
        {!isTopOfPage && <Arrows handleClick={executeScroll} arrowUp={arrowUp}/>}
      </main>
      <footer className="App-footer">
        <p> 2023</p>
      </footer>
    </div>
  )
}

export default App
