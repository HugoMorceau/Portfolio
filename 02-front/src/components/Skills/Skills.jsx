import skills from '../../data/skills/skillsFR.js'
import logo from '../../logo.svg'
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaDatabase, FaGithub, SiIbm } from '../../assets/icons/icons.js'

const iconMap = {
  fahtml5: FaHtml5,
  facss3: FaCss3,
  fanodejs: FaNodeJs,
  fareact: FaReact,
  fadatabase: FaDatabase,
  fagithub: FaGithub,
  siibm: SiIbm
}

export default function Skills () {
  return (
    <div className="Skills-container">
      <img src={logo} className="App-logo" alt="logo" />
      {skills.map((skill) => {
        const iconName = skill.icon.toLowerCase()
        const IconComponent = iconMap[iconName]
        console.log(IconComponent)
        return (
          <div key={skill.id} className="skill-wrapper">
            <div>

              {IconComponent &&
                <IconComponent size = '2rem' />
              }{skill.name}

              {/* <FaHtml5 />
              <FaCss3 /> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}
