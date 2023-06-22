import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../components";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:8080/products/${id}`);
      setproduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-light ">
        <i class="fas fa-angle-left me-2" />
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price} </ListGroupItem>
            <ListGroupItem>Description : {product.description} </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product?.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="btn-block" type="button">
              Add To Cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
