import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import SingleProduct from './SingleProduct';

const Product = (props) => {
    const {products, addToCart} = props;
    console.log(props);
    return (
        <>
            {
                products.map(product => <SingleProduct key={product.id} product={product} addToCart={addToCart}></SingleProduct>)
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);