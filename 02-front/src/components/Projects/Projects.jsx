// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
import './Projects.scss'
import { FiGithub, FiExternalLink } from '../../assets/icons/icons'
import noImage from '../../assets/images/Image_not_available.png'

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
            {project.image.length > 0
              ? <img src={project.image[0]} alt={project.name} className='Project__image' />
              : <img src={noImage} alt={project.name} className='Project__image' />
            }
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
              <a href={project.github} className='Project__action'
                target='_blank' rel='noopener noreferrer'
                title="View the code on Github"
              >
                <FiGithub size={24} />
              </a>
              <a href={project.link} className='Project__action'
                target='_blank' rel='noopener noreferrer'
                title="View the project"
              >
                <FiExternalLink size={24} />
              </a>

              {/* TODO: Project page  */}
              {/* <a href={'/' + project.name.replace(/\s+/g, '-')} className='Project__action'
                target='_blank' rel='noopener noreferrer'
                title="View project details">
                <FiMoreHorizontal size={24} />
              </a> */}
            </div>
          </div>
        )
      })}

    </div>
  )
}
