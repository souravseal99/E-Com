import {
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED
} from '../constants/productDetailsConst'
import axios from 'axios'

export const productDetailsActions = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_LOADING })
        const { productDetails } = await axios.get(`/api/products/60e4a5695b8f106c2c750f56`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: productDetails })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.response })
    }
}