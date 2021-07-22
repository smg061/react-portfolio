import React from "react";
import './NavigationBar.scss'
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo192.png'
const NavigationBar = () => {
  return (
    <Navbar className="navbar-right" collapseOnSelect fixed="top"  expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="#home"><img height="30" width="30" className="logo" src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">About me</Nav.Link>
            <Nav.Link href="#">My Skills</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#">My Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;