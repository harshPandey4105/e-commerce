import React from 'react';
import './footer.css'
import weblogo from '../images/dataImages/weblogo.png';

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={weblogo} alt="Logo" />
                <span><i>Shopping Town</i></span>
            </div>

            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='social-media-section'>
                <i class="fa-brands fa-square-whatsapp"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <hr />
            <div className="copyright-section">
                <p>&copy; Shopping Town. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;