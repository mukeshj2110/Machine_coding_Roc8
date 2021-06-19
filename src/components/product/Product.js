import React from 'react';
import './product.css'

const Product = ({id, name, img , price , brand})=>{
    return(
        <div className="product">
                <img className="pro_img"src={img} alt="source img"/>
                <div>
                    <small>{brand}</small>
                </div>
                <div>
                    <b>{name}</b>
                </div>
                <p className="pro_price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>
        </div>

    )
}

export default Product;