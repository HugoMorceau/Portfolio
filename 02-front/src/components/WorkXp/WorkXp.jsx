// import WorkCard from './WorkCard/WorkCard'
import Timeline from '../Timeline/Timeline.jsx'
import resume from '../../data/resumes/resumeFR.js'

export default function WorkXp () {
  // state
  // comportements
  // render

  return (
    <div className='Work-container'>
      <Timeline data={resume}/>
      {/* <WorkCard resume={resume}/> */}
    </div>
  )
}
