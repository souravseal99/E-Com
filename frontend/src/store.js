import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import productListReducer from './reducer/productListReducer'
const initialState = []
const reducers = combineReducers({
    productList: productListReducer
})
const middlewear = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewear)))

export default store;