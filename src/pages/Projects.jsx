import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { projectsData } from '../config/projectsData';

// 프로젝트별 메타 정보 매핑 (날짜 & 소요 시간)
const getProjectMeta = (id) => {
  switch (id) {
    case 4:
      return { date: '2024.12', duration: '진행 중' };
    case 2:
      return { date: '2024.11', duration: '약 1개월 소요' };
    case 3:
      return { date: '2024.10', duration: '약 1개월 소요' };
    case 1:
      return { date: '2022.06', duration: '약 6개월 소요' };
    default:
      return { date: '', duration: '' };
  }
};

const Projects = () => {
  const [sortOption, setSortOption] = React.useState('latest'); // 'latest' or 'date'
  const [selectedTech, setSelectedTech] = React.useState('');

  // Compute unique tech tags
  const allTechTags = React.useMemo(() => {
    const tags = new Set();
    projectsData.forEach(p => p.techStack?.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Sort projects based on option
  const sortedProjects = React.useMemo(() => {
    const copy = [...projectsData];
    if (sortOption === 'latest') {
      // Assuming higher id = newer
      copy.sort((a, b) => b.id - a.id);
    } else {
      // sort by period start year (extract first 4 chars)
      copy.sort((a, b) => {
        const aYear = parseInt(a.period.substring(0, 4)) || 0;
        const bYear = parseInt(b.period.substring(0, 4)) || 0;
        return aYear - bYear;
      });
    }
    return copy;
  }, [sortOption]);

  // Apply tech filter
  const displayedProjects = React.useMemo(() => {
    if (!selectedTech) return sortedProjects;
    return sortedProjects.filter(p => p.techStack?.includes(selectedTech));
  }, [sortedProjects, selectedTech]);

  return (
    <div className="content-wrapper wide projects-page-container">
      <section className="projects-section">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">지금까지 주도적으로 설계하고 개발에 참여한 대표 프로젝트입니다.</p>

        <div className="projects-controls" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
          {/* Sort selector */}
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} style={{ padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)' }}>
            <option value="latest">최신순</option>
            <option value="date">날짜순</option>
          </select>
          {/* Tech tag filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            <button
              onClick={() => setSelectedTech('')}
              style={{
                padding: '0.25rem 0.55rem',
                borderRadius: '6px',
                backgroundColor: selectedTech === '' ? 'var(--primary-color)' : 'var(--primary-light)',
                color: selectedTech === '' ? 'var(--card-bg)' : 'var(--text-color)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              전체
            </button>
            {allTechTags.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                style={{
                  padding: '0.25rem 0.55rem',
                  borderRadius: '6px',
                  backgroundColor: selectedTech === tech ? 'var(--primary-color)' : 'var(--primary-light)',
                  color: selectedTech === tech ? 'var(--card-bg)' : 'var(--text-color)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {displayedProjects.map(project => {
            const meta = getProjectMeta(project.id);
            return (
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
                <div className="project-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.5rem' }}>
                  <h3 className="project-card-title" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p className="project-card-description" style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '3rem' // 2 lines * 1.5 line-height = 3rem to keep uniform height
                  }}>
                    {project.description}
                  </p>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="project-card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="project-card-tag" style={{
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--text-color)',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: '500'
                        }}>{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="project-card-tag project-card-tag-more" style={{
                          backgroundColor: 'var(--border-color)',
                          color: 'var(--text-muted)',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: '500'
                        }}>+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  )}

                  {/* 하단 구분선 및 날짜/기간 정보 추가 */}
                  <div style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '1rem',
                    marginTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} style={{ color: 'var(--primary-color)' }} />
                      <span>{meta.date}</span>
                    </div>
                    {meta.duration && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={13} style={{ color: 'var(--primary-color)' }} />
                        <span>{meta.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
