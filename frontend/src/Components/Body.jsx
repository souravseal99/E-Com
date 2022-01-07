import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Container } from 'react-bootstrap'
import Products from './Products'
// import axios from 'axios'


const Body = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch()
    }, [dispatch])

    const productList = [];

    return (
        <div style={{ height: "80vh" }}>
            <Container>
                <div className="body__cards">
                    {
                        productList.map(product => (
                            <Products key={product._id} item={product} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Body
