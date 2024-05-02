import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from '../Imgs/logo.png'
const Navs = ()=>{
    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#home">Explore Clothes</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#Register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs;