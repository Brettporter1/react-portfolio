import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Development from '../Development';

function Home() {
  return (
    <Fragment>
      <section className='home-section'>
        <div className='home-nav-container'>
          <ul className='home-nav'>
            <li>
              <Link to='/development' className='home-nav-link'>
                Web Development
              </Link>
            </li>
            <li>
              <Link to='/design' className='home-nav-link'>
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to='/photography' className='home-nav-link'>
                Photography
              </Link>
            </li>
            <li>
              <Link to='/about' className='home-nav-link about-nav-link'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className='home-contact'>
          <h1>
            brett <br />
            porter
          </h1>
          <h3>
            <a href='mailto:gkdesign06@gmail.com'>gkdesign06@gmail.com</a>
          </h3>
          <h3>
            <a href='tel:573-528-6673'>573.528.6673</a>
          </h3>
        </div>
      </section>
      <section className='icon-container desk-only'>
        <img className='tech-icon' src='./icons/html5-2.svg' alt='HTML 5' />
        <img className='tech-icon' src='./icons/css3.svg' alt='css 3' />
        <img
          className='tech-icon'
          src='./icons/javascript.svg'
          alt='Javascript'
        />
        <img className='tech-icon' src='./icons/jquery-2.svg' alt='JQuery' />
        <img className='tech-icon' src='./icons/mongodb.svg' alt='mongo DB' />
        <img
          className='tech-icon'
          src='./icons/nodejs-icon.svg'
          alt='Node JS'
        />
        <img className='tech-icon' src='./icons/react-2.svg' alt='React' />
        <img className='tech-icon' src='./icons/sass-1.svg' alt='Sass' />
        <img className='tech-icon' src='./icons/sketch-2.svg' alt='Sketch' />
        <img
          className='tech-icon'
          src='./icons/creative-cloud-cc.svg'
          alt='Creative Cloud CC'
        />
      </section>
    </Fragment>
  );
}

export default Home;
