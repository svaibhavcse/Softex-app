import React from "react";
import "./Softex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Softexmenu from "./Softexmenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FiDownload } from "react-icons/fi";
import { AiOutlineCaretRight } from "react-icons/ai";
import Button from "react-bootstrap/Button";
function Gameswindows() {
    return (
      <div>
        <Softexmenu />
        <Container fluid>
          <Row>
            <Col xs={4} md={2} className="center">
              <img
                src={require("./cricket22.jpg")}
                width="125px"
                className="zoom"
              />
            </Col>

            <Col xs={8} md={10} className="ver">
              <h5>Cricket 22 (Cracked) </h5>
              <p>
                Cricket 22 is a 2021 cricket video game developed by Big Ant
                Studios and published by Nacon. It is the official video game of
                the 2021–22 Ashes series of cricket matches, and the sequel to
                the 2019 game Cricket 19.
              </p>

              <p className="end">
                <Button variant="outline-dark">
                  <a href="/cricket22" className="link">
                    {" "}
                    Visit{" "}
                  </a>
                  <AiOutlineCaretRight />
                </Button>
              </p>

              <div className="brd" />
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={2} className="center">
              <img src={require("./mk11.jpg")} width="140px" className="zoom" />
            </Col>

            <Col xs={8} md={10} className="ver">
              <h5>Mortal Kombat 11 Ultimate </h5>
              <p>
                Mortal Kombat 11 is a 2019 fighting game developed by
                NetherRealm Studios and published by Warner Bros. Interactive
                Entertainment. Running on a heavily modified version of Unreal
                Engine 3,It is the eleventh main installment in the Mortal
                Kombat series and a sequel to 2015's Mortal Kombat X. Announced
                at The Game Awards 2018, the game was released in North America
                and Europe on April 23, 2019, for Microsoft Windows, Nintendo
                Switch, PlayStation 4, and Xbox One
              </p>

              <p className="end">
                <Button variant="outline-dark">
                  <a href="/mk11" className="link">
                    {" "}
                    Visit{" "}
                  </a>
                  <AiOutlineCaretRight />
                </Button>
              </p>

              <div className="brd" />
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Gameswindows;
