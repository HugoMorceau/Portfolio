// eslint-disable-next-line react-hooks/rules-of-hooks
import './About.scss'
import Button from '../Buttons/Button/Button'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="About">
      <p> {t('Aboutme')} </p>
      {/* View Resume */}
      <div className='resume-container'>
        <div className='resume'>
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
