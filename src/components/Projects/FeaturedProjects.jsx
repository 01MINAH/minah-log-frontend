import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../config/projectsData';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const featuredProjects = projectsData.slice(0, 3); // 상위 3개 프로젝트
  const hasMore = projectsData.length > 3;

  return (
    <section className="featured-projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="project-list">
        {featuredProjects.map((project) => (
          <div key={project.id} className="project-item">
            <Link to={`/projects/${project.id}`} className="project-icon-link">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-icon"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/180?text=Project'; // 이미지 없을 때 대체
                }}
              />
            </Link>
            
            <div className="project-info">
              <h3><Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{project.title}</Link></h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-meta">
                <div className="project-meta-item">
                  <span className="meta-label">작업 기간</span>
                  <span>{project.period}</span>
                </div>
                <div className="project-meta-item">
                  <span className="meta-label">인원 수</span>
                  <span>{project.members}</span>
                </div>
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-item">
                  GitHub 바로가기
                </a>
                <a href={project.retrospective} target="_blank" rel="noopener noreferrer" className="project-link-item">
                  프로젝트 회고록
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="view-more-container">
          <button 
            className="btn-view-more" 
            onClick={() => navigate('/projects')}
          >
            더보기
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
