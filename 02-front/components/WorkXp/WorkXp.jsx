import Timeline from '../Timeline/Timeline.jsx'
import resumeFR from '../../data/resumes/resumeFR.js'
import resumeEN from '../../data/resumes/resumeEN.js'
import resumeES from '../../data/resumes/resumeES.js'
import i18n from 'i18next'

export default function WorkXp () {
  // state
  const resume = i18n.language === 'fr' ? resumeFR : i18n.language === 'en' ? resumeEN : resumeES

  // render
  return (
    <div className='Work-container'>
      <Timeline data={resume}/>
    </div>
  )
}
