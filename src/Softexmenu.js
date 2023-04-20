import React ,{useState}from "react";
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
import { TfiDirection } from "react-icons/tfi";
import { FiUserPlus } from "react-icons/fi";
import { RiUser6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {useAuth} from "./Authentication";

function Softexmenu() {
  const [search,setSearch]=useState()
  const auth = useAuth();
  const navigate = useNavigate();
    return (
      <>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            bg="light"
            expand="false"
            className="mb-3"
            style={{ borderRadius: "1rem" }}
          >
            <Container fluid>
              <Navbar.Brand onClick={() => navigate("/")}>
                <img src={require("./softexlogo.png")} width="180" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                style={{ borderRadius: "1rem" }}
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
                    {!auth.logged && (
                      <>
                        <Nav.Link onClick={() => navigate("/login")}>
                          <AiOutlineLogin /> Login
                        </Nav.Link>
                      </>
                    )}
                    {auth.logged && (
                      <>
                        <Nav.Link onClick={() => navigate("/profile")}>
                          {auth.currUser.gender === "male" && (
                            <>
                              <img src={require("./maleavatar.png")}width="30%" />
                            </>
                          )}
                          {auth.currUser.gender === "female" && (
                            <>
                              <img src={require("./femaleavatar.png")} />
                            </>
                          )}
                          {auth.currUser.gender === "none" && (
                            <>
                            <RiUser6Line/>
                            </>
                          )}
                          {auth.currUser.name}
                        </Nav.Link>
                      </>
                    )}

                    <Nav.Link onClick={() => navigate("/signup")}>
                      <FiUserPlus /> Signup
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/about")}>
                      <MdContacts /> Us
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/")}>
                      <AiFillHome /> Home
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/404")}>
                      <TfiDirection /> Go
                    </Nav.Link>
                    <NavDropdown
                      title="Platforms"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item onClick={() => navigate("/android")}>
                        <AiFillAndroid /> Android
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/windows")}>
                        <AiFillAppstore /> Windows
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/apple")}>
                        <AiFillApple /> Ios
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => navigate("/#")}>
                        Close
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <br></br>
                  <Form className="d-flex">
                    <Form.Control
                      type="search" onChange={(e) =>{setSearch(e.target.value)}}
                      placeholder="Search"
                      className="me-2"
                    />
                    <Button type="submit"  onClick={()=>{navigate(search)}} variant="outline-success">
                      Search
                    </Button>
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
