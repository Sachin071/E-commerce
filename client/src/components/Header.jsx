import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect="false">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">ShopMart</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-sharp fa-solid fa-cart-shopping fa-fade"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signin">
                <Nav.Link>
                  <i className="fas fa-user-tie fa-spin"></i>SignIn
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
