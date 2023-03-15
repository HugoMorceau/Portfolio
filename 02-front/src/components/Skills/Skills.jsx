import skills from '../../data/skills/skillsFR.js'
import './Skills.css'
// import logo from '../../logo.svg'
import {
  FaHtml5, FaCss3, FaNodeJs, FaReact, FaDatabase, FaGithub,
  SiIbm, IoCodeSlash, TbRelationOneToMany
} from '../../assets/icons/icons.js'

const iconMap = {
  fahtml5: FaHtml5,
  facss3: FaCss3,
  fanodejs: FaNodeJs,
  fareact: FaReact,
  fadatabase: FaDatabase,
  fagithub: FaGithub,
  siibm: SiIbm,
  iocodeslash: IoCodeSlash,
  tbrelationonetomany: TbRelationOneToMany
}

export default function Skills () {
  // Todo translate categories
  const categories = {
    web: { label: 'Web', skills: [] },
    multi: { label: 'Database', skills: [] },
    old: { label: 'Legacy Systems', skills: [] }
  }

  skills.forEach((skill) => {
    if (categories[skill.category]) {
      categories[skill.category].skills.push(skill)
    }
  })

  return (
    <div className="Skills-container">
      {Object.values(categories).map((category) => (
        <div key={category.label}
          className={`Skills-category Skills-category--${category.label.toLowerCase()}`}>
          <h2>{category.label}</h2>
          {category.skills.map((skill) => {
            const iconName = skill.icon.toLowerCase()
            const IconComponent = iconMap[iconName]

            return (
              <div key={skill.id} className="skill-wrapper">
                {IconComponent && <IconComponent size="1.5rem" />}
                {skill.name}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
