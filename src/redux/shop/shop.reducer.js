import SHOP_DATA from "./shop.data";

const InitialState = {
    collections: SHOP_DATA
}

const ShopReducer = (state = InitialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ShopReducer;