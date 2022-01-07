import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED
} from '../constants/productListConst'
import axios from 'axios'

export const productListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_LOADING,
            payload: []
        })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            error: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}