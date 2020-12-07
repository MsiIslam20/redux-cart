import React from 'react';
import './product.css'

const SingleProduct = (props) => {
    const {addToCart, product} = props;
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;