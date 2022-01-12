import {
    PRODUCT_LIST_LOADING,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED
} from '../constants/productListConst'
import axios from 'axios'

const productListAction = () => async (dispatch) => {
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

export default productListAction