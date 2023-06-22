import React, { useEffect, useState } from "react";
// import Products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";

const Home = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
