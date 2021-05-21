import React from 'react'
import { productList } from '../productList'
import { Image, Row, Col, Container } from 'react-bootstrap'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'

const ProductDetail = ({ match }) => {
  const product = productList.find(p => parseInt(p._id) === parseInt(match.params.id))
  return (
    <div>
      <Container style={{ height: "80vh" }} className="pt-2">
        <Link to='/' className=' offset-md-11 px-4 py-2 btn btn-outline-dark' variant="outline-dark">Back</Link>
        <Row>
          <Col className="col-lg-6 col-md-12">
            <Image src={product.image} alt={product.name} />
          </Col>
          <Col>
            <Row>
              <h1>{product.name}</h1>
            </Row>
            <Row className="mt-2">
              <h5 style={{ fontSize: '15px' }}>
                {product.brand} - {product.category}
              </h5>
            </Row>
            <Row className="mt-2">
              <h4 style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                Price: {product.price}
              </h4>
            </Row>

            <Row className="mt-1">
              <Rating value={product.rating} reviewCount={product.numReview} />
            </Row>
            <Row className="mt-5">
              <div className=" pr-4 ">
                <h4>Details: <br /></h4>
                {product.details}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
