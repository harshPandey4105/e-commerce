import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import weblogo from '../images/dataImages/weblogo.png'
const Navbar = () => {
    const [underLine,setUnderLine]=useState('shop');
    return (
        <nav>
            <div className="logo">
                <img src={weblogo} alt="Logo" />
                <span><i>Shopping Town</i></span>
            </div>
            <ul className='ulLinks'>
                <li><Link style={{textDecoration:'none'}} onClick={()=>setUnderLine('shop')} to='/'>Shop</Link>{underLine==='shop'?<hr/>:<></>}</li>
                <li><Link style={{textDecoration:'none'}} onClick={()=>setUnderLine('men')} to='/men'>Men</Link>{underLine==='men'?<hr/>:<></>}</li>
                <li><Link style={{textDecoration:'none'}}  onClick={()=>setUnderLine('women')} to='/women'>Women</Link>{underLine==='women'?<hr/>:<></>}</li>
                <li><Link style={{textDecoration:'none'}}  onClick={()=>setUnderLine('kids')} to='kids'>Kids</Link>{underLine==='kids'?<hr/>:<></>}</li>
            </ul>
            <div className="user-actions">
                <Link to='/login'><button className="login-button">Login</button></Link>
                <Link to='/cart'><i class="fa-solid fa-cart-shopping cart-logo"></i></Link>
            </div>
        </nav>
    )
}
export default Navbar;