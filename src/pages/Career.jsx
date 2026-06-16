import React from 'react';

const Career = () => {
  const timelineEvents = [
    {
      date: '2024.10 - 2025.01',
      title: 'LG유플러스 유레카 SW 교육과정 수료',
      description: '실무 연계형 풀스택 소프트웨어 개발자 육성 프로그램 참여. 백엔드(Spring Boot, JPA) 및 프론트엔드(React, JavaScript) 융합 설계 수행 및 팀 프로젝트 최우수 수상.'
    },
    {
      date: '2022.06 - 2024.12',
      title: '학술 경진대회 및 중소 프로젝트 참여',
      description: 'OCR 이미지 기출문제 스캔 파이프라인 개발 및 BeautifulSoup 웹 크롤러를 이용한 대규모 데이터 적재(10,000건 이상) 개발 등 다양한 개인 및 팀 프로젝트 주도.'
    },
    {
      date: '2019.03 - 2023.02',
      title: '대학교 소프트웨어학과 졸업 (학사)',
      description: '소프트웨어공학, 알고리즘, 데이터베이스설계, 네트워크, 운영체제 등 컴퓨터 공학 기초 및 응용 학문 전반을 깊이 있게 이수하고 졸업하였습니다.'
    },
    {
      date: '2021.11 - 현재',
      title: '기술 블로그 글 연재 및 스터디 활동',
      description: 'React, Spring Boot, 데이터베이스 쿼리 최적화 등을 기록하며 지식을 축적하고 있습니다. 스터디를 개설하여 공동 기술 탐구 활동을 지속 중입니다.'
    }
  ];

  return (
    <div className="content-wrapper">
      <section className="career-section">
        <h1 className="page-title">Career</h1>
        <p className="page-subtitle">지금까지 걸어온 학업과 개발자로서의 여정입니다.</p>

        <div className="meta-content-section" style={{ padding: '3rem 2.5rem' }}>
          <div className="timeline">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
