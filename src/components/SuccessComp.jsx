import React from 'react';
import Tick from '../assets/images/tick.png';
import './Success.css'

const SuccessComp = () => {
  return (
    <div className='success-container'>
      <div className='success-wrapper'>
            <div className='success-img'>
                <img src={Tick} alt="Green tick" />
            </div>
            <h2>Payment Successful</h2>
            <p>You have successfully placed your order. Thank you.</p>
        </div>
    </div>
  )
}

export default SuccessComp
