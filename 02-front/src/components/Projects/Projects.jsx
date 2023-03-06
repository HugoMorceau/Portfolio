import { useTranslation } from 'react-i18next'
export default function Projects () {
  // state
  // comportements
  // render
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('My Projects')}</h2>
      <br/>
      <ul>
        <li>
          <a href=" ">Project 1</a>
        </li>
        <li>
          <a href=" ">Project 1</a>
        </li>
      </ul>
    </div>
  )
}
