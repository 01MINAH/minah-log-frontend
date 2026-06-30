import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
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

  // Helper to generate slug IDs matching MarkdownRenderer
  const generateId = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/<[^>]*>/g, '') // remove HTML tags
      .replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣-]/g, '') // keep alphanum, Korean, spaces, hyphen
      .replace(/\s+/g, '-');
  };

  // Component to render dynamic TOC based on markdown headings
  const DynamicTOC = ({ markdownPath, scrollToSection }) => {
    const [headings, setHeadings] = useState([]);
    useEffect(() => {
      if (!markdownPath) return;
      fetch(markdownPath)
        .then((res) => res.text())
        .then((text) => {
          const tokens = marked.lexer(text);
          const h2Tokens = tokens.filter((t) => t.type === 'heading' && t.depth === 2);
          const items = h2Tokens.map((t) => ({
            text: t.text,
            id: generateId(t.text),
          }));
          setHeadings(items);
        })
        .catch((err) => console.error('Failed to load markdown for TOC', err));
    }, [markdownPath]);

    return (
      <div className="sticky-toc">
        <h3>목차</h3>
        <ul className="toc-list">
          {headings.map((h) => (
            <li key={h.id}>
              <a href={`#${h.id}`} onClick={(e) => scrollToSection(e, h.id)}>{h.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
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
          <DynamicTOC markdownPath={project.markdownPath} scrollToSection={scrollToSection} />
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
