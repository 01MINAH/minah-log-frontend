import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinksCarousel from '../components/SocialLinks/SocialLinksCarousel';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import CarouselSlider from '../components/CarouselSlider';
import { postsData } from '../config/postsData';

const Home = () => {
  const renderStoryCard = (post) => (
    <Link 
      to={`/blog/${post.id}`} 
      className="card" 
      style={{ width: '100%', height: '100%', textDecoration: 'none' }}
    >
      <div className="card-image-wrapper" style={{ height: '180px' }}>
        <img src={post.image} alt={post.title} className="card-image" />
      </div>
      <div className="card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span className="card-date" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          {post.date}
        </span>
        <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          {post.title}
        </h3>
        <p className="card-description" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem', flexGrow: 1 }}>
          {post.description}
        </p>
        <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
          {post.tags?.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="tag" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="home-page">
      <div className="hero-thumbnail" style={{ height: '420px' }}>
        <img 
          src="/assets/미나로그_예시풍경.png" 
          alt="미나로그 예시풍경 배너" 
        />
      </div>
      
      <div className="content-wrapper">
        <section className="about-content" style={{ padding: '2rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '1rem' }}>
            Welcome to MIN-AH LOG
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            안녕하세요! 하늘 높이 날아오르는 비행기처럼, 늘 배움을 멈추지 않고 스스로의 가치를 확장해 나가는 개발자 임민아의 포트폴리오 공간입니다.
          </p>
          
          {/* Synchronized Social Links Section */}
          <SocialLinksCarousel />
          
          {/* Featured Projects Section */}
          <FeaturedProjects />

          {/* Latest Stories Section (Blog Carousel) */}
          <section className="featured-stories-section" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', marginTop: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>
              최신 스토리
            </h2>
            
            <CarouselSlider items={postsData} renderItem={renderStoryCard} />
            
            <div className="view-more-container" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/blog" className="btn-secondary" style={{ display: 'inline-flex' }}>
                스토리 전체보기
              </Link>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
