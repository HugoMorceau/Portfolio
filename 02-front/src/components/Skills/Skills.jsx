import { useTranslation } from 'react-i18next'
export default function Skills () {
  const { t } = useTranslation()
  // state
  // comportements
  // render
  return (
    <div>
      <h2>{t('Skills')}</h2>
      <br/>
      <ul>
        <li> Javascript</li>
        <li> React</li>
        <li> NoSpan </li>
      </ul>
    </div>
  )
}
