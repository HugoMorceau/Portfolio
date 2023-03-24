// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
import './Projects.scss'
import { FiGithub, FiExternalLink, FiMoreHorizontal } from '../../assets/icons/icons'

export default function Projects () {
  return (
    <div className='Projects'>
      {projects.map((project) => {
        return (
          <div key={project.id} className='Project'>
            {/* Title */}
            <div className='Project__title'>{project.name.toUpperCase()}</div>
            {/* Description */}
            <div className='Project__description'>{project.description}</div>
            {/* Image */}
            <img src={project.image[0]} alt={project.name} className='Project__image' />
            {/* Tag list */}
            <div className='Project__tags'>
              {project.tags.slice(0, 4).map((tag) => {
                return (
                  <div className='Project__tag' key={tag}>
                    {tag}
                  </div>
                )
              })}
            </div>
            {/* Links */}
            <div className='Project__actions'>
              <a href={project.github} className='Project__action' target='_blank' rel='noopener noreferrer'>
                <FiGithub size={24} />
              </a>
              <a href={project.link} className='Project__action' target='_blank' rel='noopener noreferrer'>
                <FiExternalLink size={24} />
              </a>
              <a href={'/' + project.name} className='Project__action' target='_blank' rel='noopener noreferrer'>
                <FiMoreHorizontal size={24} />
              </a>
            </div>
          </div>
        )
      })}

    </div>
  )
}
