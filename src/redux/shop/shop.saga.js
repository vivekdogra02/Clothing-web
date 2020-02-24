import ShopActionTypes from "./shop.types";
import { takeEvery , call, put, all} from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

export function* fetchCollectionAsync() {
    yield console.log('saga fired');
    try {
        const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    }
    catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }    
}


export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}