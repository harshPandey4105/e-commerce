import React from "react";
import data_product from '../assets/data'
import Item from './item'
import './popular.css'
const Popular = () => {
    return (
        <div className="pw">
            <h1>POPULAR IN WOMEN</h1>
            <hr></hr>
            <div className="products">
                {
                    data_product.map((item, index) => {
                        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}
export default Popular;