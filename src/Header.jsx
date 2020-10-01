import React from 'react';
import logo from './images/logo.png';
const Header = () => {
  return (
    <>
  <div className='header'>
  <img src={logo} alt="logo" width='80' height='60'/><h1 style={{color: '#2B81E2',}}>PrakTech GoogleKeep </h1>
  </div>
  </>
);
};
export default Header;
