import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Swapiku
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Films
            </Nav.Link>
            <Nav.Link as={Link} to="/character">
              Peoples
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
