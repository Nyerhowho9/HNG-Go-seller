import React from 'react';
import './Play.css';
import Navbar from './Navbar';
import Footer from './FooterP';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-logo.png'
import Naira from '../assets/images/naira-sign.png'
import Prod1 from '../assets/images/product-1.png'

const Play = (props) => {

    let quantity =0;
    function handleClick() {
        alert("Cart is emptied");
    }

  return (
    <div className='main'>
    
        <div >
            <div className='white'>
                <Link to={props.path}>
                <div className='img-cont'>

                    <img src={props.src} alt={props.imgAlt}  />
                </div>
                </Link>
                
                <div className='prod-desc'>
                    <h4>{props.name}</h4>
                    <h4><span><img src={Naira} alt="" className='naira'/></span>{props.price}</h4>
                </div>
                <div className='add-cart'>
                    <div className='carte'>
                        <Link to={props.path}>  <img src={CartIcon} alt="Cart icon" className='cartIcon'/></Link>
                    </div>
                    <div className='counter'> 
                        <Link to={props.path} style={{ textDecoration: 'none', color: 'black'}}><p><span>-</span>  {quantity}  <span>+</span></p></Link>
                        
                    </div>
                    <button onClick={handleClick} className='clear-button'>Clear</button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Play
