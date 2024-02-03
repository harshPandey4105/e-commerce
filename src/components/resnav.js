import React, { useState } from 'react';
import './resnav.css'; // Import your CSS file for styling
import './Navbar.css';
import { Link } from 'react-router-dom';
import weblogo from '../images/dataImages/weblogo.png'
const Resnav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [underLine, setUnderLine] = useState('shop');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={weblogo} alt="Logo" />
                    <span><i>Shopping Town</i></span>
                </div>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className='ulLinks'>
                        <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('shop')} to='/'>Shop</Link>{underLine === 'shop' ? <hr /> : <></>}</li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('men')} to='/men'>Men</Link>{underLine === 'men' ? <hr /> : <></>}</li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('women')} to='/women'>Women</Link>{underLine === 'women' ? <hr /> : <></>}</li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('kids')} to='kids'>Kids</Link>{underLine === 'kids' ? <hr /> : <></>}</li>
                    <div className='right-section'>
                        <Link to='/login'><button className="login-button">Login</button></Link>
                        <Link to='/cart'><i class="fa-solid fa-cart-shopping cart-logo"></i></Link>
                    </div>
                    </ul>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Resnav;
