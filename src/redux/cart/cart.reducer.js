import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const InitialState = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = InitialState, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM: 
        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem =>  cartItem.id !== action.payload.id)
        }
        case CartActionTypes.REMOVE_ITEM: 
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
        default:
            return state;
    }
}

export default CartReducer;