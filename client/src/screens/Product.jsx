import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            className="product__image"
            src={product.image}
            alt="display will be soon"
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as="div">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
