import React from "react";
import './breadcrum.css'
import ratingStar from '../images/dataImages/ratingStars.png'
const Breadcrum = (props) => {
    const product = props;
    return (
        <div>
            <div className="path-section">
                HOME ➜ SHOP ➜ {(product.category).toUpperCase()} ➜ {(product.name).toUpperCase()}
            </div>
            <div className="product-section">
                <div className="image-section">
                    <div className="large-img">
                        <img src={product.image} />
                    </div>
                    <div className="small-images">
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                    </div>
                </div>
                <div className="detail-section">
                    <h1>{(product.name).toUpperCase()}</h1>
                    <span className="product-rating">
                        <img src={ratingStar}/>
                    </span>
                    <div className="price-section">
                        <span className="old">{product.old_price}</span>
                        <span className="new">{product.new_price}</span>
                    </div>
                    <div className="size-section">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>
                    <div className="btn-section"><button>Add to Cart</button></div>
                    <div className="product-quality-section">
                        <p> This cloth is seamlessly blends fashion-forward designs with timeless classics, ensuring you make a statement wherever you go. Experience the ultimate in comfort and confidence as you embrace the superior craftsmanship that defines our brand. Elevate your wardrobe with pieces that transcend trends, embodying enduring style and unparalleled quality. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrum;