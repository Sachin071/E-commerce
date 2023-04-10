import React from "react";
import "./assets/css/app.css";
import { Container } from "react-bootstrap";
import { Footer, Header } from "./components";
import { Home, ProductDetails } from "./screens";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="my-3">
          {/* <h1>E-commerce App</h1> */}
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
