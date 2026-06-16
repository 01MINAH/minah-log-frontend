import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSlider = ({ items, renderItem }) => {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeft(scrollLeft > 10);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    // Use a slight delay to ensure the DOM is fully painted
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [items]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 400);
    }
  };

  const needArrows = items.length > 3;

  return (
    <div style={{ position: 'relative', width: '100%', margin: '1rem 0' }}>
      {needArrows && showLeft && (
        <button 
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '-18px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-color)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.2s'
          }}
          className="carousel-arrow"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {needArrows && showRight && (
        <button 
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '-18px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-color)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.2s'
          }}
          className="carousel-arrow"
        >
          <ChevronRight size={18} />
        </button>
      )}

      <div 
        ref={containerRef}
        onScroll={checkScroll}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '0.5rem 0.25rem 1.5rem 0.25rem',
          width: '100%'
        }}
        className="carousel-track-scroll"
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              flex: '0 0 calc(33.333% - 1rem)', 
              minWidth: '280px',
              display: 'flex'
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
