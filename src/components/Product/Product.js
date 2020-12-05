import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import SingleProduct from './SingleProduct';

const products = [
    {
        name: 'Apple Macbook',
        price: 1200,
        id: 1
    },
    {
        name: 'Asus Laptop',
        price: 890,
        id: 2
    },
    {
        name: 'Hp Brand new laptop',
        price: 1799,
        id: 3
    },
    {
        name: 'Tosiba Newbook',
        price: 295,
        id: 4
    },
    {
        name: 'Dell inspiration',
        price: 699,
        id: 5
    }
];

const Product = () => {
    return (
        <>
            {
                products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        product: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);