import React from 'react'
import { Container, Row  } from 'react-bootstrap'
import { productList } from '../productList'
import Products from './Products'
const Body = () => {
    return (
        <div>
            <Container>
                <Row className = "body__cards">
                {
                    productList.map( product => (
                        <Products key = {product.id} item = {product} />
                    ))
                }
                </Row>
            </Container>
        </div>
    )
}

export default Body
