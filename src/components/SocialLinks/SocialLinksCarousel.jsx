import React from 'react';
import { socialLinks } from '../../config/socialLinks';

const SocialLinksCarousel = () => {
  return (
    <>
      <div className="interview-text">
        자세한 내용은 인터뷰를 통해 소개해 드리고 싶습니다. 감사합니다 :)
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {socialLinks.map((card, index) => (
            <a href={card.link} key={index} target="_blank" rel="noopener noreferrer" className="card-news">
              <img src={card.image} alt={card.title} className="card-news-image" />
              <div className="card-news-content">
                <h3 className="card-news-title">{card.title}</h3>
                <p className="card-news-description">{card.description}</p>
                <span className="card-news-link">방문하기 →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinksCarousel;
