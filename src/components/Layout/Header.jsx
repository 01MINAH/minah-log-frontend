import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Send, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header>
      <Link to="/" className="logo">
        <Send size={24} style={{ transform: 'rotate(-45deg)' }} />
        <span>MIN-AH LOG</span>
      </Link>
      <nav>
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/activities">Activities</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
};

export default Header;
