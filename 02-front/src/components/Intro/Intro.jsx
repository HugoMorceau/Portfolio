
import { useState, useEffect } from 'react'
import './Intro.scss'
import ButtonFlashy from '../Buttons/ButtonFlashy/ButtonFlashy'
import Button from '../Buttons/Button/Button'
import { useTranslation } from 'react-i18next'
import { trackCVDownload, trackCVView } from '../../matomo/matomoTracker'
// import i18n from '../../i18n'

const profil = require('../../assets/images/profil.jpg')

export default function Intro () {
  const hellos = ['Hello there, I am', 'Hola, soy', 'Bonjour, je suis']
  const { t } = useTranslation()

  // States
  const [hello, setHello] = useState(hellos[0])
  const [langIndex, setLangIndex] = useState(0)

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

  return (
    <div className='Intro'>
      <div className ='Intro--header'>
        <div className='titles' >
          <div className='hello'>{hello}</div>
          <h1 className=' '>HUGO MORCEAU</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        {/* <div> */}
        <div className='photo-container'>
          <img
            src= {profil}
            alt='Hugo Morceau' />
        </div>
      </div>
      {/* <div className='background'></div> */}
      {/* </div> */}
      <p>{t('Intro')}</p>
      <div className='buttons-container'>
        {/* View Resume */}
        <a href={`${process.env.PUBLIC_URL}/resume/${t('CV file')}`}
          target="_blank" rel="noopener noreferrer"
          onClick={() => trackCVView(t('CV file'))}
        >
          <Button text={t('View CV')} />
        </a>
        {/* Download Resume */}
        <a href={`${process.env.PUBLIC_URL}/resume/${t('CV file')}`}
          download={t('CV file')}
          onClick={() => trackCVDownload(t('CV file'))}
        >
          <ButtonFlashy text={t('Download CV')}/>
        </a>
      </div>
    </div>
  )
}
