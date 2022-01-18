import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Rating from './Rating'
import { LinkContainer } from 'react-router-bootstrap'

const Products = ({ item }) => {
    return (
        <div>
            <Container style={{ margin: 'auto 0px' }}>
                <Card style={{ width: '18rem', marginBottom: '2em' }}>
                    <Card.Img className="card__image" variant="top" src={item.image} alt={item.name} />
                    <LinkContainer to={`/product/${item._id}`}>
                        <Card.Body>
                            <Card.Title>{item.brand}</Card.Title>
                            <Card.Text>
                                {item.name}
                            </Card.Text>
                        </Card.Body>
                    </LinkContainer>
                    <Card.Footer className="text-muted">
                        <Rating value={item.rating} reviewCount={item.numReview} />
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default Products
