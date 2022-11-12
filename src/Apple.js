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
function Apple() {
  return (
    <>
      <Softexmenu />
      <img src={require("./applethumb.gif")} className="center" />
      <Container fluid>
        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./wot.png")} width="115px" className="zoom" />
          </Col>
          <Col xs={8} md={10} className="ver">
            <h5>World Of Tanks</h5>
            <p>
              World of Tanks (WoT) is a massively multiplayer online game
              developed by Belarusian company Wargaming, featuring 20th century
              (1910s–1970s) era combat vehicles. It is built upon a freemium
              business model where the game is free-to-play, but participants
              also have the option of paying a fee for use of "premium"
              features.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/world-of-tanks-20-7-0-2519.dmg"
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
        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./itunes.png")} width="100px" className="zoom" />
          </Col>
          <Col xs={8} md={10} className="ver">
            <h5>iTunes</h5>
            <p>
              iTunes is a software program that acts as a media player, media
              library, mobile device management utility, and the client app for
              the iTunes Store.The latest entertainment apps now come installed
              with macOS Catalina. Upgrade today to get your favourite music,
              movies, TV shows and podcasts. You can join Apple Music and stream
              — or download and play offline — millions of songs, ad‑free.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/itunes-12-8-2.dmg"
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

        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./safari.png")} width="100px" className="zoom" />
          </Col>
          <Col xs={8} md={10} className="ver">
            <h5>Safari</h5>
            <p>
              Safari is a graphical web browser developed by Apple. It is
              primarily based on open-source software, and mainly WebKit. It
              succeeded Netscape Navigator, Cyberdog and Internet Explorer for
              Mac as the default web browser for Macintosh computers.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/safari-6-0-2-es-en-fr-de-it-mac.pkg"
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
export default Apple;
