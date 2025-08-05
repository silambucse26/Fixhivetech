import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="FixhiveTech.png" alt="" />
        <span className="fix">Fixhive</span>
        <span className="tech">Technologies</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              className={location.pathname === path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/services">
            <button className="get-started">Get Started</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
