import React from 'react';
import './CartCard.css';
import Nairaa from '../assets/images/naira-sign.png';
import Prod1 from '../assets/images/product-1.png';
import Bin from '../assets/images/bin.png';
import CheckoutButton from './CheckoutButton';
import { Link } from 'react-router-dom';
import Rev1 from '../assets/images/reviewer1.png';
import Rev2 from '../assets/images/reviewer2.png';
import Rev3 from '../assets/images/reviewer3.png';
import Blackstar from '../assets/images/star.png';
import Greystar from '../assets/images/grey-star.png'; 

const CartReviewComp = () => {function handleClick(){
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
              names='Checkout'
              path='/checkout'
              />   
            </div>
            <div className='deets'>
              <div className='cart-description'>
                <div className='detail' style={{ backgroundColor:'#FDFAD4' }}>
                  <Link to='/cart' style={{ textDecoration: 'none', color: '#7A7979' }}><h5 className='details-headng' style={{  color: '#7A7979' }}>Product Details</h5></Link>
                </div>
                <div className='review' style={{ backgroundColor:'#F88379' }}>
                  <Link to='/cartreview' style={{ textDecoration: 'none' }}><h5 className='reviews-heading'  style={{  color: 'black' }}>Reviews</h5></Link>
                </div>
              </div>
              <div className='reviews-container'>
                <div className='review-wrapper'>
                  <div className='reviewer'>
                    <img src={Rev1} alt="a lady" />
                  </div>
                  <div className='rev-details'>
                    <h4>Uduak E</h4>
                    <p>The Product is not so good as it looks here, buying at your risk</p>
                    <div className='stars'>
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Greystar} alt="" />
                      <img src={Greystar} alt="" />
                      <img src={Greystar} alt="" />

                    </div>

                  </div>
                </div>
                <div className='review-wrapper'>
                  <div className='reviewer'>
                    <img src={Rev2} alt="a man" />
                  </div>
                  <div className='rev-details'>
                    <h4>Uduak E</h4>
                    <p>I love this Product so much</p>
                    <div className='stars'>
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />

                    </div>

                  </div>
                </div>
                <div className='review-wrapper'>
                  <div className='reviewer'>
                    <img src={Rev3} alt="a man" />
                  </div>
                  <div className='rev-details'>
                    <h4>Uduak E</h4>
                    <p>I love the  quality, i will still buy this product again.</p>
                    <div className='stars'>
                      <img src={Blackstar} alt="" c/>
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Blackstar} alt="" />
                      <img src={Greystar} alt="" />

                    </div>

                  </div>
                </div>
                
              </div>
            </div>
        </div>
      )
}

export default CartReviewComp
