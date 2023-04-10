import React from "react";
import Products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Row>
        {Products &&
          Products.map((product) => {
            // console.log("product", product.name);
            return (
              <Col key={product._id} md={3}>
                <Product product={product} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Home;
