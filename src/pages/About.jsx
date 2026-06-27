import React from 'react';
import { Mail, Phone, BookOpen, Rss, Award, Database, Layers, Cpu, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Engineering',
    skills: ['Spring Boot', 'Java', 'Python', 'Django', 'Node.js', 'Express', 'RESTful API']
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'JavaScript (ES6+)', 'CSS3 / CSS Variables', 'HTML5', 'jQuery', 'Vanilla JS']
  },
  {
    title: 'Database & DevOps',
    skills: ['MySQL', 'ERD Design', 'Query Tuning', 'AWS EC2 / RDS', 'Docker', 'GitHub Actions', 'Git / GitHub']
  },
  {
    title: 'Data & Utilities',
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
  "Express": <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="w-6 h-6" style={{ filter: 'var(--logo-filter)' }} />,
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
  "AWS EC2 / RDS": <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" className="w-6 h-6" />,
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
  return (
    <div className="content-wrapper">
      <section className="about-me-section" style={{ padding: '1rem 0' }}>
        {/* Hero Profile — 스크린샷 스타일 */}
        <div className="about-hero-layout">

          {/* 왼쪽: 둥근 카드 이미지 */}
          <div className="about-hero-image-wrap">
            <img
              src="/assets/profile_character.jpg"
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
              배움을 나누며<br />성장하는 것을 추구합니다.
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
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            Skills
          </h2>
          <div className="meta-content-section" style={{ padding: '3rem 2.5rem' }}>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skills-category" style={{ marginBottom: idx === skillCategories.length - 1 ? 0 : '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', borderLeft: '3px solid var(--primary-color)', paddingLeft: '0.75rem', marginBottom: '1.25rem', color: 'var(--text-color)' }}>
                  {category.title}
                </h3>
                <div className="skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500', padding: '0.4rem 0.75rem' }}>
                      {skillIcons[skill] || null}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative bio */}
        <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            성장과 변화를 만드는 개발
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
            SW 시스템이야말로 사용자 경험의 기반이자 기업 비즈니스의 중심이라고 생각하며, 기술로 세상의 편리한 성장과 변화를 이끌어 내고 싶습니다.
            단순히 작동하는 코드를 작성하는 것을 넘어, 대용량 트래픽 상황에서도 원활히 대처할 수 있는 견고하고 안정적인 인프라 및 DB 최적화에 흥미를 느끼고 깊이 학습하고 있습니다.
          </p>
        </div>

        {/* Key Achievements */}
        <div style={{ textAlign: 'left' }}>
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
                  대기만성 프로젝트 진행 중 발생했던 데이터 조회 지연 문제에 대해, 쿼리 실행 계획 분석을 거쳐 풀스캔 병목을 파악하고 적절한 인덱스를 적용해 **서버 응답 속도를 약 30.34% 단축**하는 성과를 거두었습니다.
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
                  특히 ORM 기술 적용 과정에서 빈번하게 유발되는 N+1 문제에 대응하여 DTO를 통한 Join Fetch 및 벌크 연산 데이터 선 로딩 방식을 적용, **기존 2N+1회의 쿼리 발생 구조를 단 1회로 최적화**하는 성능 개선을 완수했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
