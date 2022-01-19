import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import productListReducer from './reducer/productListReducer'
import { productDetailsReducer } from './reducer/productDetailsReducer.'
const initialState = {}
const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const middlewear = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewear)))

export default store;