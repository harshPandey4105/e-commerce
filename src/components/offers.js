import React from 'react';
import offer_img from '../images/dataImages/offer_img.jpg';
import './offers.css';
const Offers = () => {
    return (
        <div className='offer-section'>
            <hr />
            <div>
                <img src={offer_img} alt='offer image' />
            </div>
            <button className='offer-btn'>Check Now</button>
        </div>
    )
}

export default Offers;