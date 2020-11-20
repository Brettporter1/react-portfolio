import React, { Fragment } from 'react';
import Photo from './brett.jpg';
import Header from '../../components/Header';

function About() {
  return (
    <Fragment>
      <Header />
      <div className='about-page'>
        <img src={Photo} className='about-photo' />
        <div className='info-card'>
          <div className='info-header'>
            <h1>Brett Porter</h1>
          </div>
          <div className='info-body'>
            <p>This is where my info will go</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
