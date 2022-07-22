import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <HomeBody/>
      <Footer/>
    </>
  );
}

export default App;
