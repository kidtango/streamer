import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamer
      </Link>
      <div className='right menu'>
        <Link to='/streams/list' className='item'>
          All Streams
        </Link>
        <div className='item'>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
