import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hook/useAuth";

const MenuBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="menu-bg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link className="nav-brand text-light" to="/home">
              Az Security system
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/home#products"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/products"
            >
              Products
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="nav-items text-light"
              to="/explore"
            >
              Explore
            </Nav.Link>

            <Nav.Link>
              {user?.email ? (
                <div className="d-flex">
                  <Nav.Link
                    as={HashLink}
                    className="nav-items text-light"
                    to="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>
                  <Button
                    className=" btn btn-dark "
                    onClick={logOut}
                    variant="button"
                  >
                    Logout
                  </Button>
                  <Navbar.Text className="ms-3">
                    Mr .
                    <Link className="ps-2" to="/home">
                      {user?.displayName}
                    </Link>
                  </Navbar.Text>
                </div>
              ) : (
                <Button className=" btn btn-dark" variant="button ">
                  {" "}
                  <Link className="nav-items-btn text-light" to="/login">
                    Login
                  </Link>
                </Button>
              )}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
