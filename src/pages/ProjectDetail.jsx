import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projectsData } from '../config/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  // 스크롤 맨 위로 이동
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
      const headerOffset = 80; // 고정 헤더 높이 여백
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-wrapper project-detail-page">
      <div className="project-detail-layout">
        
        {/* 본문 (좌측) */}
        <div className="project-detail-content">
          <div className="detail-header">
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

          <div className="detail-sections">
            <section id="team" className="detail-section">
              <h2>팀 명 / 구성원</h2>
              <p><strong>팀명:</strong> {project.teamName}</p>
              <p><strong>인원:</strong> {project.members}</p>
            </section>

            <section id="description" className="detail-section">
              <h2>프로젝트 설명</h2>
              <p>{project.detailedDescription}</p>
            </section>

            <section id="period" className="detail-section">
              <h2>작업 기간</h2>
              <p>{project.period}</p>
            </section>

            <section id="contribution" className="detail-section">
              <h2>내가 기여한 부분</h2>
              <p>{project.contribution}</p>
            </section>

            <section id="techstack" className="detail-section">
              <h2>사용 기술</h2>
              <ul className="tech-stack-list">
                {project.techStack?.map((tech, idx) => (
                  <li key={idx} className="tech-tag">{tech}</li>
                ))}
              </ul>
            </section>

            <section id="troubleshooting" className="detail-section">
              <h2>트러블슈팅</h2>
              <div className="troubleshooting-list">
                {project.troubleshooting?.map((ts, idx) => (
                  <div key={idx} className="troubleshooting-item">
                    <h3 className="ts-issue">문제: {ts.issue}</h3>
                    <p className="ts-solution">해결: {ts.solution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section links-section">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                GitHub 보러가기
              </a>
              <a href={project.retrospective} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                회고록 읽기
              </a>
            </section>
          </div>
        </div>

        {/* 목차 / 사이드바 (우측) */}
        <aside className="project-detail-sidebar">
          <div className="sticky-toc">
            <h3>목차</h3>
            <ul className="toc-list">
              <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')}>팀 명 / 구성원</a></li>
              <li><a href="#description" onClick={(e) => scrollToSection(e, 'description')}>프로젝트 설명</a></li>
              <li><a href="#period" onClick={(e) => scrollToSection(e, 'period')}>작업 기간</a></li>
              <li><a href="#contribution" onClick={(e) => scrollToSection(e, 'contribution')}>내가 기여한 부분</a></li>
              <li><a href="#techstack" onClick={(e) => scrollToSection(e, 'techstack')}>사용 기술</a></li>
              <li><a href="#troubleshooting" onClick={(e) => scrollToSection(e, 'troubleshooting')}>트러블슈팅</a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ProjectDetail;
