import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer)

