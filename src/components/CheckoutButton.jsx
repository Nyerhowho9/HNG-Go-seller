import React from 'react';
import './CheckoutButton.css';
import { Link } from 'react-router-dom';

const CheckoutButton = (props) => {
  return (
    <div className='buttonContainer'>
        <Link to={props.path}><button className='checkoutButton'>{props.names}</button></Link>

      </div>
  )
}

export default CheckoutButton
