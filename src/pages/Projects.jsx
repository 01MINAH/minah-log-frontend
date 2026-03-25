import React from 'react';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "React와 CSS 변수를 활용한 개인 포트폴리오 사이트",
    image: "https://picsum.photos/id/1/400/300"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "쇼핑몰 프로젝트 (Spring Boot & React 연동)",
    image: "https://picsum.photos/id/2/400/300"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "일정 관리 및 협업 도구 서비스",
    image: "https://picsum.photos/id/3/400/300"
  }
];

const Projects = () => {
  return (
    <div className="content-wrapper">
      <section>
        <h1>Projects</h1>
        <div className="grid">
          {projects.map(project => (
            <div key={project.id} className="card">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
