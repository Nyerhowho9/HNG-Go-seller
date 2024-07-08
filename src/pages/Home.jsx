import React from 'react';
import Navbar from '../CartCard.css/Navbar';
import Hero from '../CartCard.css/Hero';
import Footer from '../CartCard.css/FooterP';
import Products from '../CartCard.css/Products';
import ProductCard from '../CartCard.css/ProductCard';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products/>
      <Footer />
    </div>
  )
}

export default Home
