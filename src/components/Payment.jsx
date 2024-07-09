import React from 'react';
import CheckoutButton from './CheckoutButton';
import './Payment.css';

const Payment = () => {
  return (
    <div className='payment-container'>
      <div className='payment-wrapper'>
        <h2>Payment Method</h2>
        <div className='cc-wrapper'>
            <div className='cc-check'></div>
            <p>Credit Card</p>
        </div>
        <h3>Credit card details</h3>
        <form action="">
            <label htmlFor="cnum">Card number  <br />
                <input type="text" id="cnum" name="cnum"/>
            </label>
            <br />
            <label htmlFor="exdate">Expiry date <br />
                <input type="text" id="exdate" name="exdate"/>
            </label>
            <br />
            <label htmlFor="cvv">CVV  <br />
                <input type="text" id="cvv" name="cvv"/>
            </label>
            <br />

        </form>
        <CheckoutButton 
                    names='Pay Now'
                    path='/success'
                    />
      </div>
    </div>
  )
}

export default Payment
