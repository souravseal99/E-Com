import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED
} from '../constants/productListConst'

export default function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_LOADING:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }
        case PRODUCT_LIST_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
