import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';


function App() {

  return (
    <div>   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
