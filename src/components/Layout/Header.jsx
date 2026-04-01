import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Send, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Link to="/" className="logo" onClick={closeMenu}>
        <Send size={24} style={{ transform: 'rotate(-45deg)' }} />
        <span>MIN-AH LOG</span>
      </Link>
      
      <nav>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
          <li><NavLink to="/activities" onClick={closeMenu}>Activities</NavLink></li>
          <li><NavLink to="/career" onClick={closeMenu}>Career</NavLink></li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <button className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
};

export default Header;
