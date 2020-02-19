import CartActionTypes from "./cart.types";

const InitialState = {
    hidden: true
}

const CartReducer = (state = InitialState, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
                return state;
    }
}

export default CartReducer;