// import React, { useState } from 'react';
// import './Navbar.css'
// import { Link } from 'react-router-dom';
// import weblogo from '../images/dataImages/weblogo.png'
// const Navbar = () => {
//     const [underLine, setUnderLine] = useState('shop');
//     const links=document.querySelector(".nav-links");
//     const login_cart_section=document.querySelector(".user-actions");
//     const Show=()=>{
//         links.classList.toggle("display-none");
//         login_cart_section.classList.toggle("display-none");
//     }
//     return (
//         <nav>
//             <div className="logo">
//                 <img src={weblogo} alt="Logo" />
//                 <span><i>Shopping Town</i></span>
//             </div>
//                 <div className='nav-links display-none bar-elements'>
//                     <ul className='ulLinks'>
//                         <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('shop')} to='/'>Shop</Link>{underLine === 'shop' ? <hr /> : <></>}</li>
//                         <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('men')} to='/men'>Men</Link>{underLine === 'men' ? <hr /> : <></>}</li>
//                         <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('women')} to='/women'>Women</Link>{underLine === 'women' ? <hr /> : <></>}</li>
//                         <li><Link style={{ textDecoration: 'none' }} onClick={() => setUnderLine('kids')} to='kids'>Kids</Link>{underLine === 'kids' ? <hr /> : <></>}</li>
//                     </ul>
//                     <Link to='/login'><button className="login-button">Login</button></Link>
//                     <Link to='/cart'><i class="fa-solid fa-cart-shopping cart-logo"></i></Link>
//                 </div>
//                 <div className="user-actions display-none bar-elements">
//                 </div>
//             <button onClick={Show} className='list-btn'>click</button>
//         </nav>
//     )
// }
// export default Navbar;