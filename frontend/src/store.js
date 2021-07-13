import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = []
const reducers = combineReducers({})
const middlewear = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewear)))

export default store;