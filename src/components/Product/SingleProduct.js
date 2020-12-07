import React from 'react';
import './product.css'

const SingleProduct = (props) => {
    const {name, price, id} = props.product;
    const {addToCart} = props;
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;