import React from 'react';
import './item.css'
const Item=(i)=>{
    return(
        <div className='item'>
            <img src={i.image} alt='item image'/>
            <p>{i.name}</p>
            <div className='price-section'>
                <div className='new-price'>{i.new_price}</div>
                <div className='old-price'>{i.old_price}</div>
            </div>
        </div>
    )
}
export default Item;