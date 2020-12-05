import React from 'react';
import './product.css'

const SingleProduct = ({product}) => {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;