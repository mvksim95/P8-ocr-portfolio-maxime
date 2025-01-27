import '../styles/Layout.sass';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.webp'

const Layout = () => {
  return (
    <div className='Layout'>
      <VideoBackground />
      <div className='content'>
        <header>
          <section className='Header'>
            <div className='logo-site'>
            <img className="vector d'un pc" src={logo} alt="pc portable design programming" />
              {/* <p>&lt;Maxime Tison /&gt;</p> */}
            </div>
            <nav className='nav'>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                About me
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Contact
              </NavLink>
            </nav>
          </section>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <div className='Footer'>
            <div className="social-links">
              <a href="https://github.com/mvksim95" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/maxime-tison-2bb15482" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <p className='copyright'>
              © 2025 Maxime Tison. All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;