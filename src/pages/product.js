import React, { useContext }  from "react";
import { shopContext } from "../components/shopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum";
import Description from "../components/description";

const Product=()=>{
    const {all_products}=useContext(shopContext);
    const {productId}=useParams();

    const product=all_products.find((item)=>{
        if(item.id === Number(productId)){
            return item;
        }
    })
    
    return(
        <div>
            <Breadcrum id={product.id} image={product.image} name={product.name} category={product.category} old_price={product.old_price} new_price={product.new_price}/>
            <Description/>
        </div>
    )
}

export default Product;