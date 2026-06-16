import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { postsData } from '../config/postsData';
import MarkdownRenderer from '../components/MarkdownRenderer';

const PostDetail = () => {
  const { id } = useParams();
  const post = postsData.find(p => p.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="content-wrapper post-detail-page">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/blog" className="btn-secondary" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          ← 블로그 목록으로
        </Link>
      </div>

      <article className="post-detail-content">
        <header className="detail-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
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
        </header>

        <section className="post-body">
          <MarkdownRenderer markdownPath={post.markdownPath} />
        </section>
      </article>
    </div>
  );
};

export default PostDetail;
