import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../Images/navlogo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/home" className="d-flex align-items-center">
            <img className=" navLogo " src={logo} alt="" />
            <h2 className=" ms-1 d-inline-block fw-bold text-dark">
              Codding School
            </h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="ms-4 text-decoration-none text-dark"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="ms-4 text-decoration-none text-dark"
                to="/About"
              >
                About
              </NavLink>
              <NavLink
                className="ms-4 text-decoration-none text-dark"
                to="/tutorials"
              >
                Tutorials
              </NavLink>
              <NavLink
                className="ms-4 text-decoration-none text-dark"
                to="/reference"
              >
                References
              </NavLink>
              <NavLink
                className="ms-4 text-decoration-none text-dark"
                to="/exercises"
              >
                Exercises
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
