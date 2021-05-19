import React from 'react'
import { productList } from '../productList'
import { Image, Row, Col, Container } from 'react-bootstrap'
import Rating from '../Components/Rating'

const ProductDetail = ({ match }) => {
  const product = productList.find(p => parseInt(p._id) === parseInt(match.params.id))
  console.log(product._id)
  return (
    <div>
      <Container style={{ height: "80vh" }} className="pt-4">
        <Row>
          <Col>
            <Image src={product.image} />
          </Col>
          <Col>
            <Row className="mt-2">
              {product.brand}
            </Row>
            <Row className="mt-2">
              {product.price}
            </Row>
            <Row className="mt-1">
              <Rating value={product.rating} reviewCount={product.numReview} />
            </Row>
            <Row className="mt-5">
              <div className=" pr-4 ">
                <h4>Details: <br /></h4>
                {product.name}
              </div>
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
