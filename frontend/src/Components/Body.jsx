import React from 'react'
import { Container } from 'react-bootstrap'
import { productList } from '../productList'
import Products from './Products'

const Body = () => {
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
