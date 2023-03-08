
import skills from '../../data/skills/skillsFR.js'
export default function Skills () {
  // state
  // comportements
  // render
  console.log('render skills')
  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return (
            <li key={skill.id}>
              <div>{skill.name}</div>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}
