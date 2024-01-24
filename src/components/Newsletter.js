import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='newletter'>
            <div className='newLetterBox'>
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our new letter and stay updated</p>
                <div>
                    <input type='email' placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default Newsletter;