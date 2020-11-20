import React, { useState, useEffect } from 'react';

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <button className='menu-btn'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 24 24'
        >
          <g>
            <path d='M91.1,67h-82c-1.4,0-2.5,1.1-2.5,2.5S7.7,72,9.1,72h82c1.4,0,2.5-1.1,2.5-2.5S92.5,67,91.1,67' />
            <path d='M16.3,53.4h67.5c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5H16.3c-1.4,0-2.5,1.1-2.5,2.5C13.8,52.2,15,53.4,16.3,53.4' />
            <path d='M26.1,34h48c1.4,0,2.5-1.1,2.5-2.5S75.5,29,74.1,29h-48c-1.4,0-2.5,1.1-2.5,2.5S24.7,34,26.1,34' />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default MobileNav;
