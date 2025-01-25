import '../styles/Layout.sass';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import logoheader from '../assets/images/logoheader.png'
// import logoFooter from '../assets/images/LogoFooter.png'

const Layout = () => {
  return (
    <div className='Layout'>
      
      <header>
        <section className='Header'>
          <div className='logo-site'>
            <p>&lt;Maxime Tison /&gt;</p>
          </div>
          <nav className='nav'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About me
            </NavLink>
          </nav>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className='Footer'>
          {/* <img src={logoFooter} alt="Logo du site" /> */}
          <p className='copyright'>
            © 2025 Maxime Tison. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;