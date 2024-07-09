import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart-logo.png';
import Minus from '../assets/images/minus.png';
import Plus from '../assets/images/plus.png';
import Naira from '../assets/images/naira-sign.png'

const ProductCard = (props) => {

    let quantity =0;
    function handleClick() {
        alert("Cart is emptied");
    }
   

  return (
    <>  
        <div className='product'>
                <Link className='product-link' to={props.path}>
                    <figure className='product-pic-wrap'>
                        <img src={props.src} alt={props.imgAlt}  className='product-img'/>
                    </figure>
                </Link>
                <div className='product-info'>
                        <h5 className='product-name'>{props.name}</h5>
                        <h5 className='product-price'><span><img src={Naira} alt="" className='naira'/></span>{props.price}</h5>
                    </div>
                <div className='addCart-container'>
                    <div className='carti'>
                        <Link to={props.path}><img src={CartIcon} alt="Cart icon" className='cartIcon'/></Link>
                    </div>
                    <div className='count'> 
                        <Link to={props.path} style={{ textDecoration: 'none', color: 'black'}}><p><span>-</span> {quantity} <span>+</span></p></Link>
                    </div>
                    <button onClick={handleClick} className='clear-button'>Clear</button>
                    
                </div>
            </div>
        
            
    </>
  )
}

export default ProductCard
