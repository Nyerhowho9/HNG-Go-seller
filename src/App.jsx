import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import CartReview from './pages/CartReview';
import Pays from './pages/Pays';
import Success from './pages/Success';
import Play from './components/Play';
import Playa from './components/Playa';


function App() {

  return (
    <div>   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartreview" element={<CartReview />} />
        <Route path="/pay" element={<Pays />} />
        <Route path="/success" element={<Success />} />

        <Route path="/play" element={<Play />} />

        <Route path="/playa" element={<Playa />} />


      </Routes>
    </div>
  )
}

export default App
