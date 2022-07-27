import React from 'react';
import '../scss/Portfolio.scss'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <div className='portfolio-container'>
        <h1 className='main-header'>Portfolio</h1>

        <div className='grid-container'>
          <div className='img-port-grid'>
            <img
              className='image-styles'
              alt='school'
              src='/images/Guelph_U.jpeg'
            />
          </div>
          <div className='port-grid-content'>
            <h1 className='port-header'> Movie App - In development</h1>

            <p className='test-text'>
              Developing a movie tracker app, where you are able to select your
              favourite movies and get text message reminder on favourite movies
              selected! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Laboriosam possimus magni tenetur nobis nihil recusandae
              asperiores quia dolorum, debitis, distinctio nesciunt velit omnis
              minima eum soluta eveniet? Similique, praesentium iste? Lorem
            </p>
          </div>
          {/*
          <div className='img-port-grid'>
            <img className='kang-img' alt='school' src='/images/Kang.jpeg' />
            CONTENT IMG GOES HERE
          </div>
          <div className='port-grid-content'>
            <p className='test-text'>
              <h1 className='port-header'> Movie App</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              commodi quos earum quod dolore, ducimus enim nihil, dolores
              consequuntur nostrum nam doloremque corporis fugiat facilis
              voluptates optio ullam accusamus eos?
            </p>
            
          </div>
          <div className='img-port-grid'>
            <img className='kang-img' alt='school' src='/images/Kang.jpeg' />
            CONTENT IMG
          </div>
          <div className='port-grid-content'>
            <p className='test-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              commodi quos earum quod dolore, ducimus enim nihil, dolores
              consequuntur nostrum nam doloremque corporis fugiat facilis
              voluptates optio ullam accusamus eos?
            </p>
          </div>
          <div className='my-footer'></div>
          */}
        </div>
      </div>
      
         <Footer></Footer>
      
    </>
  )
}

export default Portfolio;