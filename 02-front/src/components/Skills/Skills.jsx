
import skills from '../../data/skills/skillsFR.js'
export default function Skills () {
  // state
  // comportements
  // render
  console.log('render skills')
  return (
    <div className='Skills-container'>
      {skills.map((skill) => {
        return (
          <div key={skill.id} className = 'skill-wrapper'>
            <div>{skill.name}</div>
          </div>
        )
      }
      )}
    </div>
  )
}
