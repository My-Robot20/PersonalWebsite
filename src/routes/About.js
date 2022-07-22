import React from 'react'
import NavBar from '../components/NavBar';
import '../scss/About.scss';

function About() {
  return (
    <>
      <NavBar />
      <div className='about-Container'>
        <h1 className='about-main-header'>Get to know me</h1>
        <div className='grid'>
          <div className='col'>
            <img className='image-style' alt='school' src='/images/Guelph_U.jpeg' />
            <h1 className='content-Header'>
              Education - University of Guelph (Class of 2018)
            </h1>
            <p>
              I graduated from the University of Guelph in October 2018 with a
              Bachelor of Computer Science Degree. I took several courses in
              Data Structures, Algorithms, Databases and UI Design. One of my
              greatest accomplishments at the University was leading my UI
              Design team to develop prototypes from a low-fidelity to high
              fidelity with the purpose of shipping a product that would be used
              by consumers. This gave me insight into certain aspects such as
              doing user research, utilizing design thinking principles and
              having a vision of a product roadmap before any development takes
              place!
            </p>
            <br></br>
            <p>
              I'm also passionate about the future of Computer Science. I enjoy
              concepts like Cybersecurity, Blockchain and Artificial
              Intelligence which are shaping the future. With the right A.I at
              our beck and call we can solve complex problems facing the world
              and beyond!
            </p>
          </div>
          <div className='col'>
            <img className='image-style' alt='movies' src='/images/KC.jpeg' />
            <h1 className='content-Header'>Movies, TV & Comics</h1>
            <p>
              I love so many movies, tv shows and comics! I don't have one
              particular favourite. I enjoy movies and shows in the genre of
              Sci-Fi, Thriller and Action mainly. When it comes to movies I can
              easily say I am heavily invested in the Marvel Cinematic Universe
              Franchise also known as the MCU. I have a bunch of characters in
              MCU and Marvel Comics in general that I like. However, the
              character that resonates with me more is Kang The Conqueror! He
              was a scientist who eventually conquered time and was able to
              travel through different timelines!
            </p>
          </div>
          <div className='col'>
            <img className='image-style' alt='stem' src='/images/STEM.jpeg' />
            <h1 className='content-Header'>STEM</h1>
            <p>STEM - Science, Technology, Engineering and Math</p>
            <p>
              Every aspect of STEM is a blessing to mankind. Physics,
              Engineering, Chemistry, Calculus, Differential equations,
              Astrophysics, Quantum Physics, Computer Science and more! In my
              lifetime I hope we can truly become a multiplanetary species and
              evolve life beyond Earth! The person I look up to in the STEM
              field is the one and only Elon Musk! I love his passion for
              developing sustainable and renewable energy as well as
              interstellar travel. If we can develop more minds to love STEM and
              grow in it, as a race we would be able to solve so many complex
              problems{' '}
            </p>
          </div>
          <div className='col'>
            <img
              className='image-style'
              alt='game'
              src='/images/star_wars.jpeg'
            />
            <h1 className='content-Header'>GAMING</h1>
            <p>Gaming is always loads of fun for me</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;