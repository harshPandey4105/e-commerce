import React from "react";
import new_data_product from "../assets/newCollectionsData.js"; 
import Item from "./item.js";
import './Newcollection.css'
const Newcollections=()=>{
    return(
        <div className="new">
            <h1>New Collections</h1>
            <hr/>
            <div className="new-collections">
                {
                    new_data_product.map((item,index)=>{
                        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })
                }
            </div>
        </div>
    )
}

export default Newcollections;