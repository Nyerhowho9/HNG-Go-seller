import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/FooterP';
import Products from '../components/Products';

function Home() {
  return (
    <div>
      <Navbar
      title='New Arrivals' />
      <Hero />
      <Products/>
      <Footer />
    </div>
  )
}

export default Home
