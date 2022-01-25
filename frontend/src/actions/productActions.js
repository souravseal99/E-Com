import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED,

    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED
} from '../constants/productConsts'
import axios from 'axios'

// Product List
export const productListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_LOADING,
        })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

// Product Details
export const productDetailsActions = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_LOADING })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.response })
    }
}