import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../config/projectsData';

const Projects = () => {
  return (
    <div className="content-wrapper">
      <section>
        <h1>Projects</h1>
        <div className="grid">
          {projectsData.map(project => (
            <Link to={`/projects/${project.id}`} key={project.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="card-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Project';
                }}
              />
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
