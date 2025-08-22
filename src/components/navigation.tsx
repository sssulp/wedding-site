import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/styles.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 450) {
        setScrolled(window.scrollY > 0);
      } else {
        // reset when desktop
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true }); // re-check when resizing
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className={`main-navigation ${scrolled ? 'sticky' : ''}`}>
        <nav className="navigation">
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
              <Link to="/itinerary" onClick={closeMenu}>
                The Itinerary
              </Link>
            </li>
            <li>
              <Link to="/attire" onClick={closeMenu}>
                The Attire
              </Link>
            </li>
            <li>
              <Link to="/travel" onClick={closeMenu}>
                Getting Here
              </Link>
            </li>
            <li>
              <a
                href="https://www.myregistry.com/wedding-registry/tiffany-shimizu-and-andre-shotwell-mississauga-on/4958140"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Our Registry
              </a>
            </li>
            <li>
              <a
                href="https://www.gohawaii.com/experiences"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Things To Do
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </motion.div>
  );
};

export default Navigation;
