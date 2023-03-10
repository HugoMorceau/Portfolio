
import { useTranslation } from 'react-i18next'
import './Intro.css'
const profil = require('../../assets/images/profil.jpg')

export default function Intro () {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation()
  // state
  // comportements
  // render
  return (
    <div className='Intro'>
      <h1 className=' '>HUGO MORCEAU</h1>
      <div className='photo-container'>
        <img
          src= {profil}
          alt='Hugo Morceau' />
      </div>
      <h3>Full Stack Web Developer</h3>

      {/* <h1>{t('Hello World')}<span className="name"> Hugo</span></h1>
      <h2>Full Stack Web Developer</h2>
      <p>{t('Welcome')}</p>
      <p>{t('Intro')}</p> */}
    </div>
  )
}
