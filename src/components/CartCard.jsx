import React from 'react';
import './CartCard.css';
import Nairaa from '../assets/images/naira-sign.png';
import Prod1 from '../assets/images/product-1.png';
import Bin from '../assets/images/bin.png';
import CheckoutButton from './CheckoutButton';
import { Link } from 'react-router-dom';

const CartCard = (props) => {
  function handleClick(){
alert('Item deleted')

  }
  return (
    
    <div className='cartcard-container'>
        <div >
          <div className='cart-image-container'>
            <img src={Prod1} alt="Brown tee shirt" className='cart-image'/>
          </div>
          <div className='info'>
            <h5> Resolute Tee Shirt</h5>
            <h5 className='product-price'><span><img src={Nairaa} alt="" className='nairaa'/></span>25,000</h5>
          </div>
          <div className='sizing'>
            <p>Size: M</p>
            <p>Color: Pink</p>
          </div>
          <div className='quantity'>
            <p>Quantity: - 1 + <span><img src={Bin} alt="trash icon" className='trash' onClick={handleClick}/></span></p>
          </div>
          <CheckoutButton 
          names='Checkout Here' 
          path='/checkout'
          />   
        </div>
        <div className='deets'>
          <div className='cart-description'>
            <div className='detail'>
              <Link to='/cart' style={{ textDecoration: 'none' }}><h5 className='details-headng'>Product Details</h5></Link>
            </div>
            <div className='review'>
              <Link to='/cartreview' style={{ textDecoration: 'none' }}><h5 className='reviews-heading'>Reviews</h5></Link>
            </div>
          </div>
          <div className='details-contaner'>
            <div className='description'>
              <h6>Description</h6>
              <p>Resolute tee  shirt is a classic crewneck with relaxed, comfortable shoulder The material are of 52% Cotton,
                48% Polyester blend for softness and durability.
              </p>
            </div>
            <div className='color'>
              <h6>Colors</h6>
              <p>Pink 
                <br />
                Black
                <br /> 
                White 
               </p>            
            </div>
            <div className='size'>
              <h6>Size</h6>
              <p>M 
                <br />
                XL
                <br /> 
                XXL 
               </p>            
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartCard
