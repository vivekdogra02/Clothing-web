import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../root.saga';

const sagaMiddleware = createSagaMiddleWare();

const middleWares = [sagaMiddleware];
if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };