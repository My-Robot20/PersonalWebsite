import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='footer-content'>
          &copy; Daniel Braimah
          <p>
            <a rel='noreferrer'
              target='_blank'
              href='https://twitter.com/CouncilDans'
            >
              <i className='fa-brands fa-twitter'></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
