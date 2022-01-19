import {
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED
} from '../constants/productDetailsConst'

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_LOADING: return {
            loading: true,
        }
        case PRODUCT_DETAILS_SUCCESS: return {
            loading: false,
            product: action.payload
        }

        case PRODUCT_DETAILS_FAILED: return {
            loading: false,
            error: action.payload
        }
        default: return state;
    }
}