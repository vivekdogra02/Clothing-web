
import {all, call} from 'redux-saga/effects';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
        // or fetchCollectionsStart()
    ])
}