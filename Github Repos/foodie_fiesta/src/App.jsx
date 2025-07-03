import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Posts from './components/Posts';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;