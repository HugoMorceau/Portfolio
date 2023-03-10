
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
      <div className='titles' >
        <h4>{t('Hello World')}</h4>
        <h1 className=' '>HUGO MORCEAU</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className='photo-container'>
        <img
          src= {profil}
          alt='Hugo Morceau' />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor praesentium quis asperiores dolorem inventore dolores ab tenetur numquam nobis. Dolorum iure assumenda, aperiam error ea nulla incidunt quos iusto nihil. Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad
      </p>

    </div>
  )
}
