// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
import './Projects.css'
export default function Projects () {
  // state
  // comportements
  // render
  // const { t } = useTranslation()
  return (
    <div className='Projects-container'>
      {projects.map((project) => {
        return (
          <div key={project.id} className='Project-wrapper'>
            <div>{project.name.toUpperCase()}</div>
            <div>{project.description}</div>
            <div>View Code</div> <div>View Project</div>
          </div>
        )
      }
      )}

    </div>
  )
}
