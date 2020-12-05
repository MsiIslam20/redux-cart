const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            // return {
            //     cart: [...state.cart, action.id]
            // }
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {
                cart: newCart
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remaningCart = state.cart.filter(item => item !== id);
            return{cart: remaningCart};
        default: 
            return state;
    }
}

export default cartReducers;