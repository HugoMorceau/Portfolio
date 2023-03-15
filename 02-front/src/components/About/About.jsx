import './About.css'

import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="About">
      <p> {t('Aboutme')} </p>
    </div>
  )
}

export default About
