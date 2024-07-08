import React from 'react';
import './Hero.css';
import HeroWeb from '../assets/images/hero-web.png';
import HeroMobile from '../assets/images/hero-mobile.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-text'>
                <h1>Level up your <span className='fashion'>fashion</span> style with our collection</h1>
                <p>WELCOME TO RESOLUTE , YOUR DESTINATION FOR ALL FASHION AND STYLE,
                REBRAND YOUR COLLECTION WITH US.</p>
            </div>
            <div className='hero-img'>
                <img src={HeroWeb} alt="A lady with shopping bags" />
            </div>
        </div>
        
      
    </div>
  )
}

export default Hero
