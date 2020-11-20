import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function WebCard(props) {
  const { id, name, image, description, gitUrl, deployedUrl } = props.item;
  return (
    <div className='card-container'>
      <h1>{name}</h1>
      <img src={image} />
      <h4>{description}</h4>
      <div className='card-icon-container'>
        <a href={gitUrl} target='_blank'>
          <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
        </a>
        <a href={deployedUrl} target='_blank'>
          <FontAwesomeIcon className='icon' icon={faDesktop} />
        </a>
      </div>
    </div>
  );
}

export default WebCard;
