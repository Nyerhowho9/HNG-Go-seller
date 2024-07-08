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



const Products = () => {
  return (
    <div className='product-container'>
        <h2 className='products-heading'>New Arrivals</h2>
        <div className='cards-container'>
            <ul>
                <ProductCard
                    src={Prod1}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                    
                />
                
                <ProductCard
                    src={Prod2}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod3}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod4}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod5}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod6}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod7}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod8}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod9}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod10}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod11}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod12}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                v
                <ProductCard
                    src={Prod13}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod14}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
                <ProductCard
                    src={Prod15}
                    imgAlt='Brown Shirt'
                    name='Resolute Tee Shirt'
                    price = {25000}
                    path='/cart'
                />
            </ul>
        </div>      
    </div>
  )
}

export default Products
