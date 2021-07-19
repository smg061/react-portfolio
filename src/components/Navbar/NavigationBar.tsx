import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <Navbar className="" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="#home"><img height="30" width="30" className="logo" src="/logo192.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
