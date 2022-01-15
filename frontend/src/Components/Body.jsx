import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import ProductView from './Products'
import getProducts from '../actions/productListAction'

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList)

    const { loading, products, error } = productList

    return (
        <div style={{
            minHeight: "80vh"
        }}>
            {
                loading ? (
                    <h1> Loading...</h1 >
                ) : (
                    error ? (
                        <h1>{error}</h1>
                    ) : (
                        <Container>
                            <div className="body__cards">
                                {
                                    products.map(product => (
                                        <ProductView key={product._id} item={product} />
                                    ))
                                }
                            </div>
                        </Container>
                    )
                )
            }

        </div >
    )
}

export default Body
