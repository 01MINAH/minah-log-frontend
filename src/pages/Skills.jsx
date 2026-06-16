import React from 'react';

const Skills = () => {
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

  return (
    <div className="content-wrapper">
      <section className="skills-section">
        <h1 className="page-title">Skills</h1>
        <p className="page-subtitle">서비스의 가치를 뒷받침하고 지속 가능하도록 돕는 기술 스택입니다.</p>

        <div className="meta-content-section" style={{ padding: '3rem 2.5rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-category" style={{ marginBottom: idx === skillCategories.length - 1 ? 0 : '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', borderLeft: '3px solid var(--primary-color)', paddingLeft: '0.75rem', marginBottom: '1.25rem', color: 'var(--text-color)' }}>
                {category.title}
              </h3>
              <div className="skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag" style={{ border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
