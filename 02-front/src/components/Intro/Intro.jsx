
import { useState, useEffect } from 'react'
import './Intro.css'
import { useTranslation } from 'react-i18next'

const profil = require('../../assets/images/profil.jpg')

export default function Intro () {
  const hellos = ['Hello there, I am', 'Hola, soy', 'Bonjour, je suis']
  const { t } = useTranslation()

  // States
  const [hello, setHello] = useState(hellos[0])
  const [langIndex, setLangIndex] = useState(0)
  const [flashReverse, setFlashState] = useState(true)

  // Hooks
  // Animate and changes lang of the hello message every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      const nextLangIndex = langIndex === hellos.length - 1 ? 0 : langIndex + 1
      animateIntro(nextLangIndex)
      setLangIndex(nextLangIndex)
    }, 2500)

    return () => clearInterval(interval)
  }, [langIndex])

  const animateIntro = (nextLangIndex) => {
    const nextLang = hellos[nextLangIndex]
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let iter = 0
    const interval = setInterval(() => {
      setHello(nextLang.split('')
        .map((letter, index) => {
          if (index < iter) {
            return nextLang[index]
          }
          return letters[Math.floor(Math.random() * 26)].toLowerCase()
        }).join(''))

      if (iter >= nextLang.length) {
        clearInterval(interval)
        iter = 0
      }
      iter += 1 / 3
    }, 30)
  }

  const handleMouseEnter = () => {
    setFlashState(false)
  }

  const handleMouseLeave = () => {
    setFlashState(true)
  }

  return (
    <div className='Intro'>
      <div className='titles' >
        <div className='hello'>{hello}</div>
        <h1 className=' '>HUGO MORCEAU</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className='toto'>
        <div className='photo-container'>
          <img
            src= {profil}
            alt='Hugo Morceau' />
        </div>
        <div className='background'></div>
      </div>
      <p>{t('Intro')}</p>
      <div className='buttons-container'>
        <a href={`${process.env.PUBLIC_URL}/resume/CV-ESP.pdf`} target="_blank" rel="noopener noreferrer">
          <button className='button2'>View Resume</button></a>

        <a
          href={`${process.env.PUBLIC_URL}/resume/CV-ESP.pdf`}
          download="CV-ESP.pdf"
        >
          <button
            className={`button ${flashReverse ? 'button-flash-reverse' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Download Resume
          </button></a>
      </div>
    </div>
  )
}
