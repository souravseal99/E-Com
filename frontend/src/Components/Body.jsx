import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import ProductView from './Products'
import { productListAction } from '../actions/productActions'

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productListAction())
    }, [dispatch])

    const productList = useSelector(state => state.productList)

    const { loading, products, error } = productList

    return (
        <div style={{ minHeight: "80vh" }}>
            {(function () {

                if (loading) {
                    return <h1> Loading...</h1 >
                } else if (error) {
                    return <h1>{error}</h1>
                } else {
                    return (
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
                }

            })()}
        </div >
    )
}

export default Body
