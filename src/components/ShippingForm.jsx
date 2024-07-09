import React from 'react';
import './form.css';

const ShippingForm = () => {
  return (
    <div className='form-container'>
      <h2>Shipping  Information</h2>
      <form action="">
        <label htmlFor="fname">Full name <br />
            <input type="text" id="fname" name="fname"/>
        </label>
        <br />
        <label htmlFor="email">Email <br />
            <input type="text" id="email" name="email"/>
        </label>
        <br />
        <label htmlFor="pnumber">Phone Number <br />
            <input type="text" id="pnumber" name="pnumber"/>
        </label>
        <br />
        <label htmlFor="state">State <br />
            <input type="text" id="state" name="state"/>
        </label>
        <br />
        <label htmlFor="city">City <br />
            <input type="text" name="city" id="city" />
        </label>
        
      </form>
    </div>
  )
}

export default ShippingForm
