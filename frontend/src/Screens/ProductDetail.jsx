import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Row, Col, Container, Button } from 'react-bootstrap'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import { productDetailsActions } from "../actions/productDetailsActions";
import axios from 'axios'


const ProductDetail = ({ match }) => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(productDetailsActions(match.params.id));
  // }, [dispatch])

  const [product, setProduct] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    getProduct()
  }, [match.params.id])

  // const productDetails = useSelector(state => state.productDetails)

  // const { loading, productDetail, error } = productDetails

  // const product = productDetail;
  const loading = false;
  return (
    <div>
      {
        loading ? <h1>loading...</h1> : (
          <Container fluid="md" style={{ height: "80vh" }} className="pt-2">
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

                  <Col>
                    <Button variant="outline-danger" size="lg" block disabled={product.count === 0} >
                      <strong>Add to Cart</strong>
                    </Button>
                  </Col>
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
        )
      }
    </div>
  )
}

export default ProductDetail
