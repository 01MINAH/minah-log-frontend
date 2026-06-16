import React from 'react';
import { socialLinks } from '../../config/socialLinks';

const SocialLinksCarousel = () => {
  return (
    <div style={{ marginTop: '2.5rem', marginBottom: '3.5rem', textAlign: 'center' }}>
      <div className="interview-text" style={{ fontSize: '1.05rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
        채널 바로가기 ✈️
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
        {socialLinks.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              padding: '0.55rem 1.25rem', 
              borderRadius: '30px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-sm)'
            }}
            title={card.description}
          >
            <img 
              src={card.image} 
              alt={card.title} 
              style={{ 
                width: '18px', 
                height: '18px', 
                objectFit: 'contain',
                borderRadius: card.title === 'GitHub' || card.title === 'Notion' ? '0' : '4px'
              }} 
            />
            <span>{card.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksCarousel;
