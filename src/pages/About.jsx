import React from 'react';
import SocialLinksCarousel from '../components/SocialLinks/SocialLinksCarousel';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-content">
        <h1>About Me</h1>
        
        {/* Synchronized Social Links Section */}
        <SocialLinksCarousel />

        <div style={{ marginTop: '3rem' }}>
          <p>여기에 민아님의 상세한 자기소개 내용을 채워 넣으시면 됩니다!</p>
        </div>
      </section>
    </div>
  );
};

export default About;
