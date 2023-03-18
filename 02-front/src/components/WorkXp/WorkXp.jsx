import Timeline from '../Timeline/Timeline.jsx'
import resume from '../../data/resumes/resumeFR.js'

export default function WorkXp () {
  // render
  return (
    <div className='Work-container'>
      <Timeline data={resume}/>
    </div>
  )
}
