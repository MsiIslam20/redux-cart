import React from 'react';
import './product.css'

const SingleProduct = ({product}) => {
    return (
        <div className="product">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;