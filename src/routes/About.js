import React from 'react'
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <div className='about-Container'>
       <AboutContent />
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;