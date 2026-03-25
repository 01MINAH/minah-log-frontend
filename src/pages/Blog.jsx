import React from 'react';

const posts = [
  {
    id: 1,
    title: "React 다크모드 구현하기",
    date: "2024-03-25",
    description: "Context API와 CSS Variables를 이용한 테마 시스템",
    image: "https://picsum.photos/id/10/400/300"
  },
  {
    id: 2,
    title: "비행기 컨셉의 UI 디자인",
    date: "2024-03-24",
    description: "푸른색 계열의 깔끔한 포트폴리오 레이아웃 설계",
    image: "https://picsum.photos/id/20/400/300"
  }
];

const Blog = () => {
  return (
    <section>
      <h1>Blog</h1>
      <div className="grid">
        {posts.map(post => (
          <div key={post.id} className="card">
            <img src={post.image} alt={post.title} className="card-image" />
            <div className="card-content">
              <span style={{ fontSize: '0.8rem', color: 'var(--nav-link)' }}>{post.date}</span>
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
