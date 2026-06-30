import React from 'react';
import { Mail, BookOpen, Rss, Award, Database, Layers, Cpu, Globe, Server, Layout, Wrench } from 'lucide-react';
import { getPublicUrl } from '../utils/url';
// merge
const skillCategories = [
  {
    title: 'Backend Engineering',
    icon: <Server size={18} />,
    skills: ['Spring Boot', 'Java', 'Python', 'Django', 'Node.js', 'RESTful API']
  },
  {
    title: 'Frontend Development',
    icon: <Layout size={18} />,
    skills: ['React', 'JavaScript (ES6+)', 'CSS3 / CSS Variables', 'HTML5', 'jQuery', 'Vanilla JS']
  },
  {
    title: 'Database & DevOps',
    icon: <Database size={18} />,
    skills: ['MySQL', 'ERD Design', 'Query Tuning', 'AWS EC2', 'Docker', 'GitHub Actions', 'Git / GitHub']
  },
  {
    title: 'Data & Utilities',
    icon: <Wrench size={18} />,
    skills: ['Tesseract OCR', 'BeautifulSoup (Web Crawling)', 'Notion API', 'Figma']
  }
];

const skillIcons = {
  // Backend Engineering
  "Spring Boot": <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" className="w-6 h-6" />,
  "Java": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="w-6 h-6" />,
  "Python": <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="w-6 h-6" />,
  "Django": <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="Django" className="w-6 h-6" />,
  "Node.js": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />,
  "RESTful API": <Layers size={18} style={{ color: 'var(--primary-color)' }} />,

  // Frontend Development
  "React": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-6 h-6" />,
  "JavaScript (ES6+)": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />,
  "CSS3 / CSS Variables": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" className="w-6 h-6" />,
  "HTML5": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" className="w-6 h-6" />,
  "jQuery": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" alt="jQuery" className="w-6 h-6" />,
  "Vanilla JS": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Vanilla JS" className="w-6 h-6" />,

  // Database & DevOps
  "MySQL": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6" />,
  "ERD Design": <Database size={18} style={{ color: 'var(--primary-color)' }} />,
  "Query Tuning": <Database size={18} style={{ color: 'var(--primary-color)' }} />,
  "AWS EC2": <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" className="w-6 h-6" />,
  "Docker": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" />,
  "GitHub Actions": <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub Actions" className="w-6 h-6" style={{ filter: 'var(--logo-filter)' }} />,
  "Git / GitHub": <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="w-6 h-6" />,
  "Git/GitHub": <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="w-6 h-6" />,
  "VS Code": <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-6 h-6" />,

  // Data & Utilities
  "Tesseract OCR": <Cpu size={18} style={{ color: 'var(--primary-color)' }} />,
  "BeautifulSoup (Web Crawling)": <Globe size={18} style={{ color: 'var(--primary-color)' }} />,
  "Notion API": <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="w-6 h-6" style={{ filter: 'var(--logo-filter)' }} />,
  "Figma": <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="w-6 h-6" />
};

const About = () => {
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

  return (
    <div className="content-wrapper wide project-detail-page">
      <div className="project-detail-layout">
        {/* Main Content Area (Left) */}
        <div className="project-detail-content">
          <section className="about-me-section" style={{ padding: '1rem 0' }}>
            {/* Hero Profile — 스크린샷 스타일 */}
            <div className="about-hero-layout" id="about-me">

              {/* 왼쪽: 둥근 카드 이미지 */}
              <div className="about-hero-image-wrap">
                <img
                  src={getPublicUrl("/assets/profile_character.jpg")}
                  alt="임민아 프로필"
                  className="about-hero-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/320x400?text=Minah';
                  }}
                />
              </div>

              <div className="about-hero-content">
                <span className="about-hero-role">SOFTWARE DEVELOPER</span>
                <h1 className="about-hero-headline">
                  배움을 나누며<br />
                  <span style={{
                    background: 'linear-gradient(to top, rgba(255, 235, 59, 0.45) 35%, transparent 35%)',
                    padding: '0 2px'
                  }}>성장하는 것</span>을 추구합니다.
                </h1>
                <p className="about-hero-desc">
                  SW 개발자로서 ERD 다이어그램을 직접 설계하며 데이터베이스 구조에 대한 이해도를 높였고, 쿼리 실행 계획 분석을 통해 발생하던 풀스캔 문제를 해결하여 서버 응답 속도를 약 30.34% 단축시켰습니다.
                </p>

                {/* 정보 2열 그리드 */}
                <div className="about-hero-info-grid">
                  <div className="about-info-item">
                    <Mail size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <a href="mailto:lminah620@gmail.com">lminah620@gmail.com</a>
                  </div>
                  <div className="about-info-item">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', flexShrink: 0 }}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <a href="https://github.com/01MINAH" target="_blank" rel="noopener noreferrer">github.com/01MINAH</a>
                  </div>
                  <div className="about-info-item">
                    <BookOpen size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <span>소프트웨어학과 (졸업)</span>
                  </div>
                  <div className="about-info-item">
                    <BookOpen size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <span>GPA 3.96 / 4.5</span>
                  </div>
                  <div className="about-info-item">
                    <Rss size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <a href="https://velog.io/@minah_94/posts" target="_blank" rel="noopener noreferrer">Velog 블로그</a>
                  </div>
                  <div className="about-info-item">
                    <Rss size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <a href="https://minah0904.tistory.com/" target="_blank" rel="noopener noreferrer">Tistory 블로그</a>
                  </div>

                  {/* 자격증 요약 추가 */}
                  <div className="about-info-item" style={{ gridColumn: 'span 2', marginTop: '0.5rem' }}>
                    <Award size={14} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>자격증: 정보처리기사 / 리눅스마스터 2급 / SQLD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section" id="skills">
              <h2 className="skills-section-title">
                <span className="skills-section-accent"></span>
                Skills
              </h2>
              <div className="skills-cards-grid">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-card-header">
                      <span className="skill-card-icon">{category.icon}</span>
                      <h3 className="skill-card-title">{category.title}</h3>
                    </div>
                    <div className="skill-tags-wrap">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-tag">
                          {skillIcons[skill] || null}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 성장과 변화를 만드는 개발 */}
            <div id="philosophy" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                성장과 변화를 만드는 개발
              </h2>
              <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
                SW 시스템이야말로 사용자 경험의 기반이자 기업 비즈니스의 중심이라고 생각하며, 기술로 세상의 편리한 성장과 변화를 이끌어 내고 싶습니다.
                단순히 작동하는 코드를 작성하는 것을 넘어, 대용량 트래픽 상황에서도 원활히 대처할 수 있는 견고하고 안정적인 인프라 및 DB 최적화에 흥미를 느끼고 깊이 학습하고 있습니다.
              </p>
            </div>

            {/* Career Section (About 내부로 이동) */}
            <div id="career" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
              <h2 className="skills-section-title" style={{ marginBottom: '1.5rem' }}>
                <span className="skills-section-accent"></span>
                Career
              </h2>
              <div className="meta-content-section" style={{ padding: '2rem 1.5rem', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <div className="timeline">
                  {[
                    {
                      date: '2024.06 - 2024.12',
                      title: 'LG유플러스 유레카 SW 교육과정 수료',
                      description: '실무 연계형 소프트웨어 개발자 육성 프로그램 참여. 백엔드(Spring Boot, JPA) 및 프론트엔드(React, JavaScript) 종합 설계 수행 - 최우수 수상 (2등)'
                    },
                    {
                      date: '2022.06 - 2022.12',
                      title: '학술 경진대회 프로젝트 참여',
                      description: 'OCR 이미지 기출문제 스캔 파이프라인 개발 및 BeautifulSoup 웹 크롤러를 이용한 대규모 데이터 적재(10,000건 이상) 개발 등 팀 프로젝트 수행 - 최우수 수상(2등)'
                    },
                    {
                      date: '2020.03 - 2024.08',
                      title: '대학교 소프트웨어학과 졸업 (학사)',
                      description: '소프트웨어공학, 알고리즘, 데이터베이스설계, 네트워크, 운영체제 등 컴퓨터 공학 기초 및 응용 학문 전반을 깊이 있게 이수하고 졸업하였습니다.'
                    },
                    {
                      date: '2021.11 - 현재',
                      title: '기술 블로그 글 연재 및 스터디 활동',
                      description: 'React, Spring Boot, 데이터베이스 등을 기록하며 지식을 축적하고 있습니다.'
                    }
                  ].map((event, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-date">{event.date}</div>
                      <h3 className="timeline-title">{event.title}</h3>
                      <p className="timeline-description">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div id="achievements" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                핵심 역량 및 기여 사례
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '1.5rem', flexDirection: 'row', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--primary-light)', padding: '0.75rem', borderRadius: 'var(--radius)', color: 'var(--primary-color)' }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>데이터베이스 설계 및 쿼리 튜닝 성능 개선</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      SW 개발자로서 ERD 다이어그램을 직접 설계하며 데이터베이스 정규화 구조에 대한 이해도를 넓혔습니다.
                      대기만성 프로젝트 진행 중 발생했던 데이터 조회 지연 문제에 대해, 쿼리 실행 계획 분석을 거쳐 풀스캔 병목을 파악하고 적절한 인덱스를 적용해 서버 응답 속도를 약 30.34% 단축하는 성과를 거두었습니다.
                    </p>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', flexDirection: 'row', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--primary-light)', padding: '0.75rem', borderRadius: 'var(--radius)', color: 'var(--primary-color)' }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>API 아키텍처 고도화 및 N+1 문제 해결</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      Spring Boot 기반의 엔터프라이즈 프로젝트에서 비즈니스 로직을 추상화하고 중복 코드를 제거하여 공통 REST API 모듈의 유지보수성을 크게 향상시켰습니다.
                      특히 ORM 기술 적용 과정에서 빈번하게 유발되는 N+1 문제에 대응하여 DTO를 통한 Join Fetch 및 벌크 연산 데이터 선 로딩 방식을 적용, 기존 2N+1회의 쿼리 발생 구조를 단 1회로 최적화하는 성능 개선을 완수했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div id="education" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
              <h2 className="skills-section-title" style={{ marginBottom: '1.5rem' }}>
                <span className="skills-section-accent"></span>
                Education
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div className="skill-card" style={{ gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: '0', fontWeight: '700', color: 'var(--text-color)' }}>
                      안양대학교
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                      2020.03 - 2024.08
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: '500', margin: '0.25rem 0' }}>소프트웨어학 학사 (졸업)</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>전공 학점 3.96 / 4.5</p>
                </div>
                <div className="skill-card" style={{ gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: '0', fontWeight: '700', color: 'var(--text-color)' }}>
                      LG유플러스 유레카 SW 과정
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                      2024.06 - 2024.12
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: '500', margin: '0.25rem 0' }}>풀스택 웹 개발자 교육 이수</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>백엔드 & 프론트엔드 핵심 프로젝트</p>
                </div>
              </div>
            </div>

            {/* Certification Section */}
            <div id="certification" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2 className="skills-section-title" style={{ marginBottom: '1.5rem' }}>
                <span className="skills-section-accent"></span>
                Certification
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div className="skill-card" style={{ gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.05rem', margin: '0', fontWeight: '700', color: 'var(--text-color)', lineHeight: '1.3' }}>
                      정보처리기사
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      2026.06.12
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>한국산업인력공단</p>
                </div>
                <div className="skill-card" style={{ gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.05rem', margin: '0', fontWeight: '700', color: 'var(--text-color)', lineHeight: '1.3' }}>
                      리눅스마스터 2급
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      2026.01.02
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>한국정보통신진흥협회 (KAIT)</p>
                </div>
                <div className="skill-card" style={{ gap: '0.5rem', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.05rem', margin: '0', fontWeight: '700', color: 'var(--text-color)', lineHeight: '1.3' }}>
                      SQL 개발자 (SQLD)
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                      2025.04.04
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>한국데이터산업진흥원 (Kdata)</p>
                </div>
              </div>
            </div>

          </section>
        </div>

        {/* Sidebar Table of Contents (Right) */}
        <aside className="project-detail-sidebar">
          <div className="sticky-toc">
            <h3>목차</h3>
            <ul className="toc-list">
              <li><a href="#about-me" onClick={(e) => scrollToSection(e, 'about-me')}>소개</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
              <li><a href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>성장과 철학</a></li>
              <li><a href="#career" onClick={(e) => scrollToSection(e, 'career')}>Career</a></li>
              <li><a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>핵심 역량</a></li>
              <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
              <li><a href="#certification" onClick={(e) => scrollToSection(e, 'certification')}>Certification</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
