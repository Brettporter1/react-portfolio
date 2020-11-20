import React, { Fragment, useState } from 'react';
import Header from '../../components/Header';
import DevData from '../../displayData/devData.json';
import WebCard from '../../components/WebCard';

function Development() {
  const [cardState, setCardState] = useState('');
  return (
    <Fragment>
      <Header />
      <div className='dev-card-container'>
        {DevData.map(item => {
          return <WebCard key={item.id} item={item} />;
        })}
      </div>
    </Fragment>
  );
}

export default Development;
