import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../config/projectsData';
import CarouselSlider from '../CarouselSlider';
import { getPublicUrl } from '../../utils/url';

const FeaturedProjects = () => {
  const renderProjectCard = (project) => (
    <Link 
      to={`/projects/${project.id}`} 
      className="project-card" 
      style={{ width: '100%', height: '100%', textDecoration: 'none' }}
    >
      <div className="project-card-image-wrapper" style={{ height: '180px' }}>
        <img 
          src={getPublicUrl(project.image)} 
          alt={project.title} 
          className="project-card-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Project+Cover';
          }}
        />
      </div>
      <div className="project-card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 className="project-card-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          {project.title}
        </h3>
        <p className="project-card-description" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem', flexGrow: 1 }}>
          {project.description}
        </p>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
          <span>{project.period.split(' ')[0]}</span>
          {project.techStack && project.techStack.length > 0 && (
            <span className="tag" style={{ padding: '0.15rem 0.5rem', fontSize: '0.75rem' }}>
              {project.techStack[0]}
            </span>
          )}
        </div>
      </div>
    </Link>
  );

  return (
    <section className="featured-projects-section" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', marginTop: '3rem' }}>
      <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>
        프로젝트
      </h2>
      
      <CarouselSlider items={projectsData} renderItem={renderProjectCard} />
      
      <div className="view-more-container" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/projects" className="btn-secondary" style={{ display: 'inline-flex' }}>
          프로젝트 전체보기
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
