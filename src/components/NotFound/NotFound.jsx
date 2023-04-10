import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__pic'>
        <img src='../../images/404.png' alt='' />
      </div>
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
