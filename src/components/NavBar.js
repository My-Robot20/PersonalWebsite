import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {


  return (
    <>
      <Navbar
        collapseOnSelect
        fixed='top'
        expand='sm'
        bg='styleA'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Daniel.js
            <div className='icon'>
              <i className='fa-solid fa-code'></i>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='nav-links' as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                AboutMe
              </Nav.Link>
              <Nav.Link as={Link} to='/portfolio'>
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;