import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileNavSlider() {
  return (
    <ul className='mobile-nav'>
      <li className='mobile-nav-link'>
        <NavLink to='/development'>Web Development</NavLink>
      </li>
      <li className='mobile-nav-link'>
        <NavLink to='/design'>Graphic Design</NavLink>
      </li>
      <li className='mobile-nav-link'>
        <NavLink to='/photography'>Photography</NavLink>
      </li>
      <li className='mobile-nav-link'>
        <NavLink to='/about'>About</NavLink>
      </li>
    </ul>
  );
}

export default MobileNavSlider;
