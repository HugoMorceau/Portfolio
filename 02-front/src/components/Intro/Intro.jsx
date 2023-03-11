/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Intro.css'

const profil = require('../../assets/images/profil.jpg')

export default function Intro () {
  const { t } = useTranslation()
  const hellos = ['Bonjour, je suis', 'Hello, I am', 'Hola, soy']
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const [hello, setHello] = useState('Hello, I am')

  const [langIndex, setLangIndex] = useState(-1)

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
    let iter = 0
    const interval = setInterval(() => {
      setHello(nextLang.split('')
        .map((letter, index) => {
          if (index < iter) {
            return nextLang[index]
          }
          return letters[Math.floor(Math.random() * 26)]
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
        <h4 >{hello}</h4>
        <h1 className=' '>HUGO MORCEAU</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className='toto'>
        <div className='photo-container'>
          <img
            src= {profil}
            alt='Hugo Morceau' />
        </div>
        <div className='background'></div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor praesentium quis asperiores dolorem inventore dolores ab tenetur numquam nobis. Dolorum iure assumenda, aperiam error ea nulla incidunt quos iusto nihil. Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad
      </p>
      <div className='buttons-container'>
        <button className='button2'>View Resume</button>
        <button className='button'>Download Resume</button>
      </div>
    </div>
  )
}
