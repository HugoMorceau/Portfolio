
import skills from '../../data/skills/skillsFR.js'
import logo from '../../logo.svg'

export default function Skills () {
  // state
  // comportements
  // render
  // console.log('render skills')
  return (
    <div className='Skills-container'>
      <img src={logo} className="App-logo" alt="logo" />
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
