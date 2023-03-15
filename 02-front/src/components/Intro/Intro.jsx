
import { useState, useEffect } from 'react'
import './Intro.css'
import { useTranslation } from 'react-i18next'

const profil = require('../../assets/images/profil.jpg')

export default function Intro () {
  const hellos = ['Hello there, I am', 'Hola, soy', 'Bonjour, je suis']
  const [hello, setHello] = useState(hellos[0])
  const [langIndex, setLangIndex] = useState(0)
  const { t } = useTranslation()

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
        <button className='button2'>
          <a href={`${process.env.PUBLIC_URL}/resume/CV-ESP.pdf`} target="_blank" rel="noopener noreferrer">View Resume</a>
        </button>
        <button className='button'>
          <a href={`${process.env.PUBLIC_URL}/resume/CV-ESP.pdf`} download="CV-ESP.pdf">Download Resume</a>
        </button>
      </div>
    </div>
  )
}
