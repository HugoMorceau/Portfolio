// import { useTranslation } from 'react-i18next'
import projects from '../../data/projects/projectsFR.js'
import styles from './Projects.module.scss'
import { FiGithub, FiExternalLink } from '../../config/icons/icons'
const noImage = 'assets/images/Image_not_available.png'

export default function Projects () {
  return (
      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={styles.project}>
              {/* Title */}
              <div className={styles.projectTitle}>{project.name.toUpperCase()}</div>
              {/* Description */}
              <div className={styles.projectDescription}>{project.description}</div>
              {/* Image */}
              {project.image.length > 0
                ? <img src={project.image[0]} alt={project.name} className={styles.projectImage} />
                : <img src={noImage} alt={project.name} className={styles.projectImage} />
              }
              {/* Tag list */}
              <div className={styles.projectTags}>
                {project.tags.slice(0, 4).map((tag) => {
                  return (
                    <div className={styles.projectTag} key={tag}>
                      {tag}
                    </div>
                  )
                })}
              </div>
              {/* Links */}
              <div className={styles.projectActions}>
              {project.github.length > 0 &&
                <a href={project.github} className={styles.projectAction}
                  target='_blank' rel='noopener noreferrer'
                  title="View the code on Github"
                >
                  <FiGithub size={24} />
                </a>
              }
                {project.link.length > 0 && 
                <a href={project.link} className={styles.projectAction}
                  target='_blank' rel='noopener noreferrer'
                  title="View the project"
                >
                  <FiExternalLink size={24} />
              </a>
              }

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
