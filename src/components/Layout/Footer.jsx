import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} MIN-AH LOG. All rights reserved.</p>
      <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://github.com/01MINAH" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://minah0904.tistory.com/" target="_blank" rel="noopener noreferrer">Tistroty</a>
        <a href="https://velog.io/@minah_94/posts" target="_blank" rel="noopener noreferrer">velog</a>
        <a href="mailto:lminah620@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
