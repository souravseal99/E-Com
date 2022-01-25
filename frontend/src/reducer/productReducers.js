import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED,

    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED
} from '../constants/productConsts'

// Product List Reducer
export function productListReducer(state = { products: [] }, action) {
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

// Product Details Reducer
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
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