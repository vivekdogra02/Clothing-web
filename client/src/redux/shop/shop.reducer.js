import ShopActionTypes from "./shop.types";

const InitialState = {
    collections: null,
    isFetching: false,
    erroMessage: ''
}

const ShopReducer = (state = InitialState, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return  {
                ...state,
                isFetching: true,
            }
            case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return  {
                ...state,
                isFetching: false,
                collections: action.payload
            }
            case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return  {
                ...state,
                isFetching: false,
                erroMessage: action.payload
            }
        default:
            return state;
    }
}

export default ShopReducer;