import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Products from './Products'
import axios from 'axios'


const Body = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const getList = async () => {
            const { data } = await axios.get('/api/products')
            setProductList(data)
        }
        getList()
    }, [])

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
