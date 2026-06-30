import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useParams, Link, Navigate } from 'react-router-dom';
import { postsData } from '../config/postsData';
import MarkdownRenderer from '../components/MarkdownRenderer';

const PostDetail = () => {
  const { id } = useParams();
  const post = postsData.find(p => p.id === parseInt(id));

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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="content-wrapper wide post-detail-page">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/blog" className="btn-secondary" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          ← 블로그 목록으로
        </Link>
      </div>

      {/* Header info - scrolls normally, NOT fixed */}
      <div className="detail-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
        <span className="card-date" style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>{post.date}</span>
        <h1 className="detail-title" style={{ fontSize: '2.5rem', margin: '0 0 1.5rem 0', lineHeight: '1.25' }}>{post.title}</h1>
        
        <div className="card-tags" style={{ marginBottom: '2rem' }}>
          {post.tags?.map((tag, idx) => (
            <span key={idx} className="tag" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>#{tag}</span>
          ))}
        </div>

        <img 
          src={post.image} 
          alt={post.title} 
          className="detail-main-image"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
        />
      </div>

      {/* Flex layout: post body (left) + TOC sidebar (right) */}
      <div className="post-detail-layout">
        <article className="post-detail-content">
          <section className="post-body">
            <MarkdownRenderer markdownPath={post.markdownPath} />
          </section>
        </article>

        {/* Sidebar Table of Contents */}
        <aside className="post-detail-sidebar">
          <DynamicTOC markdownPath={post.markdownPath} scrollToSection={scrollToSection} />
        </aside>
      </div>
    </div>
  );
};

export default PostDetail;
