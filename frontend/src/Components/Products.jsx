import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Rating from './Rating'

const Products = ({ item }) => {
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.brand}</Card.Title>
                        <Card.Text>
                            {item.name}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Rating value = {item.rating} reviewCount = {item.numReview} />
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default Products
