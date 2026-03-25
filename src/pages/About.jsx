import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-thumbnail">
        <img 
          src="/assets/종이비행기가 나는 푸른 하늘.png" 
          alt="종이비행기가 나는 푸른 하늘" 
        />
      </div>
      <section className="about-content">
        <h1>About Me</h1>
        <p>안녕하세요! "비행기"처럼 높이 비상하는 개발자 민아의 포트폴리오입니다.</p>
      </section>
    </div>
  );
};

export default About;

