import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar_() {
  const userToken = localStorage.getItem("userToken");
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Notes</Navbar.Brand>
          <Nav className="ms-auto">
            {userToken ? (
              <NavLink
                onClick={() => {
                  logout();
                }}
                className="nav-link"
              >
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link ">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
