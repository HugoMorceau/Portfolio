import logo from './logo.svg'
import './App.css'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
// flags svg
import fr from './assets/flags/fr.svg'
import gb from './assets/flags/gb.svg'
import es from './assets/flags/es.svg'
// components
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App () {
  // states
  const to = {
    home: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  }

  const { t, i18n } = useTranslation()
  console.log(i18n)

  // comportements
  const executeScroll = (to) => {
    // event.preventDefault()
    console.log('executeScroll to: ', to)
    //   to.current.scrollIntoView({ behavior: 'smooth' })
    to.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }

  // render
  return (
    <div ref={to.home} className="App">
      <header className="App-header">
        <Navbar to={to.home} scroll={executeScroll}/>
      </header>

      <div className='App-lang'>
        <button className='App-lang--button' onClick={() => i18n.changeLanguage('en')}><img src={gb} alt="en" width="32" height="32" /></button>
        <button className='App-lang--button' onClick={() => i18n.changeLanguage('fr')}><img src={fr} alt="fr" width="32" height="32" /></button>
        <button className='App-lang--button' onClick={() => i18n.changeLanguage('es')}><img src={es} alt="es" width="32" height="32"/></button>
      </div>

      {/* <header className="App-header">
        <nav>
          <ul className="App-nav--ul">
            <li className="App-nav--li"><button onClick={() => executeScroll(home)}>Home</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(work)}>Work Experience</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(projects)}>Personal projects</button></li>
            <li className="App-nav--li"><button onClick={() => executeScroll(contact)}>Contact Me</button></li>
          </ul>
        </nav>
        <div className='App-lang'>
          <button className='App-lang--button' onClick={() => i18n.changeLanguage('en')}><img src={gb} alt="en" width="32" height="32" /></button>
          <button className='App-lang--button' onClick={() => i18n.changeLanguage('fr')}><img src={fr} alt="fr" width="32" height="32" /></button>
          <button className='App-lang--button' onClick={() => i18n.changeLanguage('es')}><img src={es} alt="es" width="32" height="32"/></button>
        </div>
      </header> */}

      {/* intro */}

      <div ref={to.home} className="App"></div>
      <section className="App-section">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I&apos;m <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>{t('Welcome to React')}</p>
      </section>

      {/* Work Experience */}
      <section ref={to.work}className="App-section">
        <Work />
      </section>

      {/* Projects */}
      <section ref={to.projects}className="App-section">
        <Projects />
      </section>

      {/* Contact */}
      <section ref={to.contact} className="App-section">
        <Contact />
      </section>
    </div>
  )
}

export default App
