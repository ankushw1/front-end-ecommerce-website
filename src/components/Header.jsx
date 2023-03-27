import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Dropdown } from "react-bootstrap";

const Header = () => {
  const cart = []; // Your cart data goes here

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <h1 className="text-warning" to='/'>MaxTechies</h1>
          <Link className="text-success mx-3" to='/'>
            Home
          </Link>
          <Link className="text-success mx-3" to='/store'>
            Store
          </Link>
          <Link className="text-success mx-3" to='/about'>
            About
          </Link>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px"/>
              <Badge>6</Badge>
            </Dropdown.Toggle>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
