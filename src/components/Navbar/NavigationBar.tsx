import React from "react";
import './NavigationBar.scss'
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo192.png'
const NavigationBar = () => {
  return (
    <Navbar className="navbar-right" collapseOnSelect fixed="top"  expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="#about"><img height="30" width="30" className="logo" src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#skills">My Skills</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#projects">My Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact"> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
