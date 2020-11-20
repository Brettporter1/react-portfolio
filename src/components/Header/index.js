import React from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from '../MobileNav';

function Header() {
  return (
    <div className='header-bar'>
      <NavLink to='/'>
        <section className='logo-container'>
          <h1 className='logo-name'>brett porter</h1>
        </section>
      </NavLink>
      <div className='nav-container'>
        <NavLink to='/development' className='nav-links'>
          Web Development
        </NavLink>
        <NavLink to='/design' className='nav-links'>
          Graphic Design
        </NavLink>
        <NavLink to='/photography' className='nav-links'>
          Photography
        </NavLink>
        <NavLink to='/about' className='nav-links'>
          About
        </NavLink>
      </div>
      <div className='mobile-only'>
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
