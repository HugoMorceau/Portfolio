import WorkCard from './WorkCard'
import resume from '../../data/resumeFR.js'
import { useTranslation } from 'react-i18next'

export default function WorkXp () {
  // state
  // comportements
  // render
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('Work Experience')}</h2>
      <WorkCard resume={resume}/>
    </div>
  )
}
