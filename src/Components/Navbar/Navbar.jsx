import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Navbar_() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Notes</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link ">
              Register
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Logout
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
