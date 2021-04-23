import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
import products from '../products'
import Products from './Products'
const Body = () => {
    return (
        <div>
            <Container>
                <Row className = "body__cards">
                {
                    products.map( product => (
                        <Products key = {product.id} item = {product} />
                    ))
                }
                </Row>
            </Container>
        </div>
    )
}

export default Body
