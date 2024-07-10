import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import Prod1 from '../assets/images/product-1.png';
import Prod2 from '../assets/images/ product-2.png';
import Prod3 from '../assets/images/product-3.png';
import Prod4 from '../assets/images/product-4.png';
import Prod5 from '../assets/images/product-5.png';
import Prod6 from '../assets/images/product-6.png';
import Prod7 from '../assets/images/product-7.png';
import Prod8 from '../assets/images/product-8.png';
import Prod9 from '../assets/images/product-9.png';
import Prod10 from '../assets/images/product-10.png';
import Prod11 from '../assets/images/product-11.png';
import Prod12 from '../assets/images/product-12.png';
import Prod13 from '../assets/images/product-13.png';
import Prod14 from '../assets/images/product-14.png';
import Prod15 from '../assets/images/product-15.png';
import Prod16 from '../assets/images/Prod16.png';
import './Play.css';
import Play from './Play';



const Products = () => {
  return (
    <div >

        <div className='main'>
        <div className='head'>
            <h3>New Arrivals</h3>
        </div>
        <div className='white-cont'>
        <div className='lister'>
            <Play
            src={Prod1}
            imgAlt='Brown Shirt'
            name='Resolute Tee Shirt'
            price = {25000}
            path='/cart'
            />
            <Play
            src={Prod2}
            imgAlt='Brown Shirt'
            name='Trucker hats'
            price = {10000}
            path='/cart'
            />
            <Play
            src={Prod3}
            imgAlt='Brown Shirt'
            name='Leather jackets'
            price = {40000}
            path='/cart'
            />
            <Play
            src={Prod4}
            imgAlt='Brown Shirt'
            name='Two pieces tee '
            price = {35000}
            path='/cart'
            />
            <Play
            src={Prod5}
            imgAlt='Brown Shirt'
            name='Unisex armless '
            price = {40000}
            path='/cart'
            />
        </div>
        <div className='lister'>
        <Play
        src={Prod6}
        imgAlt='Brown Shirt'
        name='Bucket hat'
        price = {15000}
        path='/cart'
        />
        <Play
        src={Prod7}
        imgAlt='Brown Shirt'
        name='Snake skin jacket'
        price = {80000}
        path='/cart'
        />
        <Play
        src={Prod8}
        imgAlt='Brown Shirt'
        name='Unisex Turtle neck'
        price = {40000}
        path='/cart'
        />
        <Play
        src={Prod9}
        imgAlt='Brown Shirt'
        name='Cargo short'
        price = {20000}
        path='/cart'
        />
        <Play
        src={Prod10}
        imgAlt='Brown Shirt'
        name='Two piece crop top'
        price = {30000}
        path='/cart'
        />
        </div>
        <div className='lister'>
        <Play
        src={Prod11}
        imgAlt='Brown Shirt'
        name='Stitched jacket'
        price = {35000}
        path='/cart'
        />
        <Play
        src={Prod12}
        imgAlt='Brown Shirt'
        name='Purple hoodie'
        price = {30000}
        path='/cart'
        />
        <Play
        src={Prod13}
        imgAlt='Brown Shirt'
        name='Unisex jort'
        price = {20000}
        path='/cart'
        />
        <Play
        src={Prod14}
        imgAlt='Brown Shirt'
        name='Hoodie & joggers '
        price = {35000}
        path='/cart'
        />
        <Play
        src={Prod15}
        imgAlt='Brown Shirt'
        name='Unisex Tee '
        price = {40000}
        path='/cart'
        />
        </div>
        <div className='lister'>
        <Play
        src={Prod16}
        imgAlt='Brown Shirt'
        name='Resolute  polo'
        price = {35000}
        path='/cart'
        />
        <Play
        src={Prod12}
        imgAlt='Brown Shirt'
        name='Camo cargo'
        price = {30000}
        path='/cart'
        />
        <Play
        src={Prod15}
        imgAlt='Brown Shirt'
        name='Female short'
        price = {20000}
        path='/cart'
        />
        <Play
        src={Prod6}
        imgAlt='Brown Shirt'
        name='Hats'
        price = {35000}
        path='/cart'
        />
        <Play
        src={Prod4}
        imgAlt='Brown Shirt'
        name='Unisex Tee '
        price = {40000}
        path='/cart'
        />
        </div>
        </div>

        </div>
    </div>
  )
}

export default Products
