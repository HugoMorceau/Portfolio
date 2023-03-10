
import { useTranslation } from 'react-i18next'

export default function Intro () {
  const { t } = useTranslation()
  // state
  // comportements
  // render
  return (
    <div>

      <h1>{t('Hello World')}<span className="name"> Hugo</span></h1>
      <h2>Full Stack Web Developer</h2>
      <p>{t('Welcome')}</p>
      <p>{t('Intro')}</p>
    </div>
  )
}
