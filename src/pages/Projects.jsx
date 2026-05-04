import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../config/projectsData';

const Projects = () => {
  return (
    <div className="content-wrapper project-page-container">
      <section className="projects-section">
        <h1 className="page-title">Projects</h1>
        <div className="projects-grid">
          {projectsData.map(project => (
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
              <div className="project-card-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-card-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Project+Cover';
                  }}
                />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-period">{project.period}</p>
                <p className="project-card-description">{project.description}</p>
                {project.techStack && project.techStack.length > 0 && (
                  <div className="project-card-tags">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="project-card-tag">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="project-card-tag project-card-tag-more">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
