import React from 'react';
import '../scss/Portfolio.scss'
import NavBar from './NavBar';

function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <div className='portfolio-container'>
        <h1 className='port-header'>Portfolio</h1>

        {/*
        <div className='wrapper'>
          <div className='header'>HEADER</div>
          <div className='menu'>MENU</div>
          <div className='content'>CONTENT</div>
          <div className='footer'>FOOTER</div>
        </div>
  */}

        <div className='grid-container'>
          <div className='header'> HEADER</div>
          <div className='menu'>MENU</div>
          <div className='content'>CONTENT</div>
          <div className='my-footer'>FOOTER</div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;