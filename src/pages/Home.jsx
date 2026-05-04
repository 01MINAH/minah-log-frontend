import React from 'react';
import SocialLinksCarousel from '../components/SocialLinks/SocialLinksCarousel';
import FeaturedProjects from '../components/Projects/FeaturedProjects';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-thumbnail">
        <img 
          src="/assets/종이비행기가 나는 푸른 하늘.png" 
          alt="종이비행기가 나는 푸른 하늘" 
        />
      </div>
      <section className="about-content">
        <h1>Welcome to MIN-AH LOG</h1>
        <p>안녕하세요! "비행기"처럼 높이 비상하는 개발자 민아의 포트폴리오 메인 페이지입니다.</p>
        <p>상단 메뉴를 통해 저의 프로젝트, 기술 스택, 그리고 활동들을 확인해보세요!</p>
        
        {/* Synchronized Social Links Section (Card News Style) */}
        <SocialLinksCarousel />

        {/* Featured Projects Section (Vertical List with Circle Icons) */}
        <FeaturedProjects />
      </section>
    </div>
  );
};

export default Home;
