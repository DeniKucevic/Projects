import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const TopNav = () => {
  return (
    <div className="container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/documentation">Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/home">
          <img
            src="/favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="L33T"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export { TopNav };
