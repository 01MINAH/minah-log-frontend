import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} MIN-AH LOG. All rights reserved.</p>
      <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem' }}>
        <a href="https://github.com/01MINAH" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>GitHub</a>
        <a href="https://minah0904.tistory.com/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>Tistory</a>
        <a href="https://velog.io/@minah_94/posts" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>Velog</a>
        <a href="mailto:lminah620@gmail.com" style={{ transition: 'color 0.2s' }}>Email</a>
      </div>
    </footer>
  );
};

export default Footer;
