import React, { useState } from 'react';
import heroImage from '../images/hero.jpg';
import heroImage2 from '../images/dataImages/hero2.png';
import './Hero.css'


const Hero = () => {
    return (

        <div className='hero-section'>
            <div>
                <img src={heroImage} className='hero1'/>
                <img src={heroImage2} className='hero2'/>
                <button className="my-button">
                    Latest Collections  <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>

    )
}

export default Hero;