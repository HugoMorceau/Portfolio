import WorkCard from './WorkCard/WorkCard'
import resume from '../../data/resumes/resumeFR.js'

export default function WorkXp () {
  // state
  // comportements
  // render

  return (
    <div className='Work-container'>
      <WorkCard resume={resume}/>
    </div>
  )
}
