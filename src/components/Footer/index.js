import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li className='footer-link'>
          <a
            href='https://www.linkedin.com/in/brett-porter-36765590/'
            target='_blank'
            alt="Brett's LinkedIn"
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className='footer-icon'
            />
          </a>
        </li>
        <li className='footer-link'>
          <a
            href='https://github.com/Brettporter1'
            target='_blank'
            alt="Brett's Github"
            title='Github'
          >
            <FontAwesomeIcon icon={['fab', 'github']} className='footer-icon' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
