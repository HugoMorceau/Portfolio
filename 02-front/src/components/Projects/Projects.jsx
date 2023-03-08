// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
export default function Projects () {
  // state
  // comportements
  // render
  // const { t } = useTranslation()
  return (
    <div>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              {project.name.toUpperCase()}
            </li>

          )
        }
        )}
      </ul>
    </div>
  )
}
