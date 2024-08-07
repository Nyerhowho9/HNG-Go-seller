import React from 'react';
import './Footer.css';
import Logo from '../assets/images/go-seller-logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='up-footer'>
                <img src={Logo} alt="Go-seller logo" />
                <p>The resolute brand is a street wear fashion hub that specializes on
                    classy street wears ranglng from different catergories like t-shirt, 
                    short, hats, joggers etc.
                </p>
            </div>
            <div className='contact'>
                <h6>Brand</h6>
                <p>Lekki base 1 Lagos</p>
                <p>07018648241</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
