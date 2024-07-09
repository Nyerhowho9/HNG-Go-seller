import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import CartReview from './pages/CartReview';
import Pay from './pages/Pay';


function App() {

  return (
    <div>   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartreview" element={<CartReview />} />
        <Route path="/pay" element={<Pay />} />

      </Routes>
    </div>
  )
}

export default App
