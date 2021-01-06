import {applyMiddleware, createStore, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga"
import rootSaga from './sagas/index'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware,thunk]


const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)

export default store;