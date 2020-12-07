const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products: [
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
    ],
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
                products: state.products,
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