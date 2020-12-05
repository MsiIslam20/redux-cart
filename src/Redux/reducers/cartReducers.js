const { ADD_TO_CART } = require("../actions/cartActions");

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
        default: 
            return state;
    }
}