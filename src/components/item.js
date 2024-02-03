import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';
const Item=(i)=>{
    return(
        <div className='item'>
            <Link to={`/product/${i.id}`}>
            <img src={i.image} alt='item image'/>
            </Link>
            <p>{i.name}</p>
            <div className='price-section'>
                <div className='new-price'>{i.new_price}</div>
                <div className='old-price'>{i.old_price}</div>
            </div>
        </div>
    )
}
export default Item;