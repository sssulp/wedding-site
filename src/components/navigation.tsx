import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/styles.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="main-navigation">
        <nav className="navigation wrapper">
          <div className="nav-logo">
            <Link to="/">
              <h1>Tiffany & Andre</h1>
            </Link>
          </div>

          {/* responsive menu */}
          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* menu items */}
          <ul className={`menu-list ${isOpen ? 'show' : ''}`}>
            <li>
              <Link to="/event">Itinerary</Link>
            </li>
            <li>
              <Link to="/travel">Getting Here</Link>
            </li>
            <li>
              <Link to="/lodging">Lodging</Link>
            </li>
            <li>
              <Link to="/things-to-do">Things to Do</Link>
            </li>
            <li>
              <Link to="/attire">Attire</Link>
            </li>
          </ul>
        </nav>
      </section>
    </motion.div>
  );
};

export default Navigation;
