import React from 'react'
import Prod1 from '../assets/images/product-1.png';
import Nairaa from '../assets/images/naira-sign.png';
import Bin from '../assets/images/bin.png'
import './CartCard.css';
import ShippingForm from './ShippingForm';
import CheckoutButton from './CheckoutButton';
import { Link } from 'react-router-dom';

const CheckoutComp = () => {
    function handleClick(){
        alert('Item deleted')
        
          }
  return (
    <div>
       <div className='checkout-container'>
            <div className='checkout-up'>
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
                    <p>Quantity:   <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>- 1 + </Link> <span><img src={Bin} alt="trash icon" className='trash' onClick={handleClick}/></span></p>
                </div>
            </div>
              
            <div className='checkout-down'>
                <ShippingForm/>
                <div className='order'>
                    <div className='order1'>
                        <h2>Order Summary</h2>
                        <div className='orderp'>
                            <p>Resolute Tee (1 pieces) - 25,000 </p>
                            <p>Shipping fee - 2,000 </p>
                        </div>
                    </div>
                    <div className='total'>
                        <h3>Total </h3>
                        <p>27,000</p>

                    </div>

                    

                   

                </div>
                <CheckoutButton 
                    names='Pay Now'
                    path='/pay'
                    />
            </div>
              
         </div>
    </div>
  )
}

export default CheckoutComp
