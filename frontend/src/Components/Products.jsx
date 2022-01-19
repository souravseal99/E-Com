import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Rating from './Rating'
import { LinkContainer } from 'react-router-bootstrap'

const Products = ({ item }) => {
    return (
        <div>
            <LinkContainer to={`/product/${item._id}`} style={{ margin: 'auto 0px' }}>
                <Container>
                    <Card style={{ width: '18rem', marginBottom: '2em' }}>
                        <Card.Img className="card__image" variant="top" src={item.image} alt={item.name} />
                        <Card.Body>
                            <Card.Title>{item.brand}</Card.Title>
                            <Card.Text>
                                {item.name}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Rating value={item.rating} reviewCount={item.numReview} />
                        </Card.Footer>
                    </Card>
                </Container>
            </LinkContainer>
        </div>
    )
}

export default Products
