import React from 'react'
import {projects} from '../data'

function Projects() {
  return <section className='projects__container' id='projects'>
    <h2 className='projects__title'>Projects</h2>
    <div className='projects'>
      {projects.map((project, id) => {
        return (
          <div className='project-container' key={id}>
            <img src={project.imageSrc} className='project-img' alt=""/>
            <h3 className='project-title'>{project.title}</h3>
            <p className='project__description'>{project.description}</p>
            <ul className='projects-skills'>
              {project.skills.map((skill) => {
                return (
                  <li className='project-skill' key={skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>

            <div className='project-links'>
              <a href={project.demo} className='project-link'>Demo</a>
              <a href={project.source} className='project-link'>Source</a>
            </div>
          
          </div>
        )
      })}
    </div>
  </section>
  
}

export default Projects