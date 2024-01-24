import React, { useState } from 'react';
import heroImage from '../images/hero.jpg';
import './Hero.css'
import img2 from '../images/dataImages/img2.webp';

const Hero = () => {
    return (

        <div className='hero-section'>
            <div>
                <img src={heroImage} />
                <button className="my-button">
                    Latest Collections  <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>

    )
}

export default Hero;