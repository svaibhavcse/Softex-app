import React from "react";
import "./Softex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { AiFillAndroid } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

function Softexmenu() {
  
    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand="false" className="mb-3">
            <Container fluid>
              <Navbar.Brand href="/">
                <img src={require("./softexlogo.png")} width="180" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Softex
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">
                      <AiFillHome /> Home
                    </Nav.Link>
                    <Nav.Link href="/android">
                      <AiFillAndroid /> Android
                    </Nav.Link>
                    <Nav.Link href="/windows">
                      <AiFillAppstore /> Windows
                    </Nav.Link>
                    <Nav.Link href="/apple">
                      <AiFillApple /> Ios
                    </Nav.Link>
                    <NavDropdown
                      title="More"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/about">
                        <MdContacts /> Us
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#"></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        <AiOutlineLogin />
                        Login
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <br></br>
                  <Form action="/" method="get" className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      
                    />
                    <Button type="submit" variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
}
export default Softexmenu;
