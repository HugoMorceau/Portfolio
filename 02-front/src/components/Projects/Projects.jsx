// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
import './Projects.scss'
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
            <img src={project.image[0]} alt={project.name} />
            <div>{project.description}</div>
            <div className='tag-container'>
              {/* TODO: Fil tag from real data */}
              {project.tags.map((tag) => {
                return (<div className='tag-wrapper' key={tag}>{tag}
                </div>)
              })}
            </div>
            <div>View Code</div> <div>View Project</div>
          </div>
        )
      }
      )}

    </div>
  )
}
