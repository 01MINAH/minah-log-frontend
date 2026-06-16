import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../config/projectsData';
import MarkdownRenderer from '../components/MarkdownRenderer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90; // sticky header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-wrapper wide project-detail-page">
      {/* Top Header Row with Back and Resource Links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/projects" className="btn-secondary" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          ← 프로젝트 목록으로
        </Link>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            GitHub 소스코드
          </a>
          {project.retrospective && (
            <a href={project.retrospective} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              프로젝트 회고록
            </a>
          )}
        </div>
      </div>

      <div className="project-detail-layout">
        {/* Main Content Area (Left) */}
        <div className="project-detail-content">
          <div className="detail-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-subtitle">{project.description}</p>
            <img 
              src={project.image} 
              alt={project.title} 
              className="detail-main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400?text=Project+Cover';
              }}
            />
          </div>

          {/* Quick Stats Meta Box */}
          <div className="detail-meta-box">
            <div className="detail-meta-item">
              <span className="detail-meta-label">팀명</span>
              <span>{project.teamName}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">구성원</span>
              <span>{project.members}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">작업 기간</span>
              <span>{project.period}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">기술 스택</span>
              <span>{project.techStack?.join(', ')}</span>
            </div>
          </div>

          {/* Markdown Content */}
          <div className="project-body-content">
            <MarkdownRenderer markdownPath={project.markdownPath} />
          </div>
        </div>

        {/* Sidebar Table of Contents (Right) */}
        <aside className="project-detail-sidebar">
          <div className="sticky-toc">
            <h3>목차</h3>
            <ul className="toc-list">
              <li><a href="#프로젝트-소개" onClick={(e) => scrollToSection(e, '프로젝트-소개')}>프로젝트 소개</a></li>
              <li><a href="#사용-기술" onClick={(e) => scrollToSection(e, '사용-기술')}>사용 기술</a></li>
              <li><a href="#내가-기여한-부분" onClick={(e) => scrollToSection(e, '내가-기여한-부분')}>내가 기여한 부분</a></li>
              <li><a href="#트러블슈팅-및-극복-과정" onClick={(e) => scrollToSection(e, '트러블슈팅-및-극복-과정')}>트러블슈팅</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
