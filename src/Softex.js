import React from "react";
import "./Softex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Softexmenu from "./Softexmenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";


import { Carousel } from "react-bootstrap";
function Softex() {
  return (
    <>
      <Softexmenu />

      <Carousel slide={true} variant="dark">
        <Carousel.Item className="zoomout">
          <img src={require("./slide1.png")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <a href="/cricket22">
            {" "}
            <img src={require("./slide3.jpg")} width="100%" />
          </a>
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          {" "}
          <a href="/adobe">
            <img src={require("./slide2.gif")} width="100%" />
          </a>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <h3 className="space">Go By Platform</h3>
      <div className="brd" />
      <Container fluid>
        <Row>
          <Col xs={2} md={2}></Col>
          <Col xs={3} md={3}>
            <a  href="/windows">
              <img
                src={require("./windows.png")}
                width="100"
                className="zoom"
              />
            </a>
          </Col>
          <Col xs={4} md={4}>
            <a href="/apple">
              <img src={require("./apple.png")} width="120" className="zoom" />
            </a>
          </Col>
          <Col xs={3} md={3}>
            <a href="/android">
              <img
                src={require("./android.png")}
                width="100px"
                className="zoom"
              />
            </a>
          </Col>
          <Col xs={1} md={1}></Col>
        </Row>
      </Container>
      <div className="brd" />

      <h3 className="space">
        Windows <AiFillAppstore />
      </h3>
      <div className="brd" />
      <Container fluid>
        <Row>
          <Col xs={4} md={3}>
            <a href="/google" className="link">
              <img
                src={require("./google.png")}
                width="75px"
                className="zoom"
              />
              <figcaption>Google Services</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a
              href="https://github.com/svaibhavcse/Softex/releases/download/Softex/VSCodeSetup-x64-1.71.2.exe"
              className="link"
            >
              <img
                src={require("./vscode.png")}
                width="80px"
                className="zoom"
              />
              <figcaption>Visual Studio</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a href="/adobe" className="link">
              <img
                src={require("./adobelogo.png")}
                width="90px"
                className="zoom"
              />
              <figcaption>Adobe</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a href="/gameswindows" className="link">
              <img src={require("./game.jpg")} width="130px" className="zoom" />
              <figcaption>
                <IoGameController />
                <AiOutlineCaretRight />
              </figcaption>
            </a>
          </Col>
        </Row>
      </Container>
    
    </>
  );
}
export default Softex;