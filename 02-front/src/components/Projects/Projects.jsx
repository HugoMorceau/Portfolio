import React from 'react'
import projects from '../../data/projects/projectsFR.js'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import './Projects.scss'

export default function Projects () {
  return (
    <div className="Projects-container">
      {projects.map((project) => (
        <div key={project.id} className="Project-wrapper">
          <h2>{project.name.toUpperCase()}</h2>
          <img src={project.image[0]} alt={project.name} className="Project-image" />
          <p>{project.description}</p>
          <div className="tag-container">
            {project.tags.map((tag) => (
              <div className="tag-wrapper" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="Project-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={24} />
              <span>View Code</span>
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={24} />
              <span>View Project</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
