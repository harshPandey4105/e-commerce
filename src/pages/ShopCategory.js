import React, { useContext } from "react";
import { shopContext } from "../components/shopContext";
import Item from "../components/item";
import './shopCategory.css'

const ShopCategory = (props) => {
    const { all_products } = useContext(shopContext);
    return (
        <div className="shop-category">
            <div className="banner-section">
                <img src={props.banner} alt="banner-img" />
            </div>
            <div className="text-section">
                <p>Showing 1-12 out of 36 products</p>
            </div>
            <div className="item-section">
                {
                    all_products.map((item) => {
                        if (item.category === props.category) {
                            return <Item image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ShopCategory;