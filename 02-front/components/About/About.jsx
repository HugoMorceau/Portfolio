import './About.module.scss'
import Button from '../Buttons/Button/Button'
import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.about}>
      <p> {t('Aboutme')} </p>
      {/* View Resume */}
      <div className={styles.resumeContainer}>
        <div className={styles.resume}>
          <a href={`${process.env.PUBLIC_URL}/resume/CV-FR.pdf`} target="_blank" rel="noopener noreferrer">
            <Button text='CV Francais' />
          </a>
        </div>
        <div className='resume'>
          <a href={`${process.env.PUBLIC_URL}/resume/CV-ES.pdf`} target="_blank" rel="noopener noreferrer">
            <Button text='CV Español' />
          </a>
        </div>
        <div className='resume'>
          <a href={`${process.env.PUBLIC_URL}/resume/CV-EN.pdf`} target="_blank" rel="noopener noreferrer">
            <Button text='CV English' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
