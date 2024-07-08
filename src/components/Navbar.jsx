import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/go-seller-logo.png';
import CartIcon from '../assets/images/cart-logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav'>

        <div className='logo-section'>
        <Link to="/home">
          <img src={Logo} alt="Go seller logo" />
        </Link>

          
        </div>
        <div className='right-side'>
          <p className='new-arivals'>New Arrivals</p>
          <Link to="/cart">
          <div className='cart'>
            <img src={CartIcon} alt="Cart icon" className='cartIcon'/>
          </div>
          </Link>
          
        </div>
      </div>
      
    </div>
  )
  
}

export default Navbar;
