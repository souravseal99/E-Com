import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED
} from '../constants/productListConst'

export default function productListReducer(state = [], action) {
    switch (action.type) {
        case PRODUCT_LIST_LOADING:
            return {
                loading: true,
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                state: action.payload,
            }
        case PRODUCT_LIST_FAILED:
            return {
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
