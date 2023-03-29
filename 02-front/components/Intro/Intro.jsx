import { useState, useEffect } from 'react'
import styles from './Intro.module.scss'
import ButtonFlashy from '../Buttons/ButtonFlashy/ButtonFlashy'
import Button from '../Buttons/Button/Button'
import { useTranslation } from 'react-i18next'
import { trackCVDownload, trackCVView } from '../../config/matomo/matomoTracker'
import Image from 'next/image'
// import i18n from '../../i18n'

// const profil = require('../../public/assets/images/profil.jpg')
// console.log(process.env)
console.log('PORT : ', process.env.NEXT_PUBLIC_PORT)
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
    <div className= {styles.intro}>
      <div className={styles.introHeader}>
        <div className={styles.titles} >
          <div className={styles.hello}>{hello}</div>
          <h1 className={styles.h1}>HUGO MORCEAU</h1>
          <h2 className={styles.h2}>Full Stack Web Developer</h2>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.imageWrapper}>
          <Image
            src={'/assets/images/profil.jpg'}
            alt='Hugo Morceau'
            width={220}
            height={220}
            objectFit='contain'
            objectPosition='center'  
          />
          </div>
        </div>
      </div>
      <p>{t('Intro')}</p>
      <div className={styles.buttonsContainer}>
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
