import React from 'react';
import offer_img from '../images/dataImages/offer_img.jpg';
import offerimg2 from '../images/dataImages/offerimage2.jpg'
import './offers.css';
const Offers = () => {
    return (
        <div>
            <div className='offer-section'>
                <hr />
                <div>
                    <img src={offer_img} alt='offer image' />
                </div>
                <button className='offer-btn'>Check Now</button>
            </div>
            <div className='offer-section2'>
                <div>
                    <img src={offerimg2} alt='offer image' />
                </div>
            </div>
        </div>
    )
}

export default Offers;