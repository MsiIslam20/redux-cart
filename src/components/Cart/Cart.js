import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div className="cart">
            <h2>This is Cart Page</h2>
            <ul>
                {
                    cart.map(item => 
                    <li key={item.cartId}>{item.name}
                        <button onClick={() => removeFromCart(item.cartId)}>remove</button>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);