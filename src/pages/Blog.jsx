import React from 'react';
import { Link } from 'react-router-dom';
import { postsData } from '../config/postsData';

const Blog = () => {
  return (
    <div className="content-wrapper wide blog-page-container">
      <section className="blog-section">
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">학습 과정에서의 기술적 생각과 일상을 기록합니다.</p>

        <div className="grid">
          {postsData.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="card">
              <div className="card-image-wrapper">
                <img src={post.image} alt={post.title} className="card-image" />
              </div>
              <div className="card-content">
                <span className="card-date">{post.date}</span>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="card-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="tag">#{tag}</span>
                    ))}
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

export default Blog;
