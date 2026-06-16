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
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Send size={20} className="logo-icon" />
          <span>MIN-AH LOG</span>
        </Link>
        
        <nav>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
            <li><NavLink to="/activities" onClick={closeMenu}>Activities</NavLink></li>
            <li><NavLink to="/career" onClick={closeMenu}>Career</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
