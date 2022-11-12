import React from "react";
import "./Softex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Softexmenu from "./Softexmenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FiDownload } from "react-icons/fi";
import Button from "react-bootstrap/Button";
function Google(){
return (
  <>
    <Softexmenu />
    <img src={require("./googlethumb.gif")} className="center" />
    <Container fluid>
      <Row>
        <Col xs={4} md={2} className="center">
          <img src={require("./google.png")} width="80px" />
        </Col>
        <Col xs={8} md={10} className="ver">
          <h5>Google</h5>
          <p>
            Google Apps is a Web-based and collaborative Software as a Service
            (SaaS) solution that customizes the proprietary Google platform and
            brand for businesses of all sizes, including large enterprises.
            Google Apps facilitates the provisioning of Google applications and
            user/enterprise management tools, including Gmail, Google Talk,
            Google Calendar, Google Docs, Google Videos and Google Cloud
            Connect.
          </p>
          <div className="brd" />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2} className="center">
          <img src={require("./chrome.png")} width="80px" className="zoom" />
        </Col>

        <Col xs={8} md={10} className="ver">
          <h5>Chrome</h5>
          <p>
            Google Chrome features a minimalistic user interface, with its
            user-interface principles later being implemented into other
            browsers. For example, the merging of the address bar and search bar
            into the omnibox or omnibar. Chrome also has a reputation for strong
            browser performance.
          </p>

          <p className="end">
            <Button variant="outline-dark">
              <a
                href="https://github.com/svaibhavcse/Softex/releases/download/Softex/ChromeSetup.exe"
                className="link"
              >
                {" "}
                Download{" "}
              </a>
              <FiDownload />
            </Button>
          </p>

          <div className="brd" />
        </Col>
      </Row>
    </Container>
  </>
);
}
export default Google;