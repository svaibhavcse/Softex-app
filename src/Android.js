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
function Android() {
  return (
    <>
      <Softexmenu />
      <img src={require("./androidthumb.gif")} className="center" />
      <Container fluid>
        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./lr.png")} width="80px" className="zoom" />
          </Col>
          <Col xs={8} md={10} className="ver">
            <h5>Lightroom Mobile (Mod)</h5>
            <p>
              Adobe Lightroom for mobile is a free app that gives you a
              powerful, yet simple solution for capturing, editing and sharing
              your photos. And you can upgrade for premium features that give
              you precise control with seamless access across all your devices –
              mobile, desktop and web.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Lightroom_7.5.1_607051000_1e911e.apk"
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
            <img src={require("./picsart.png")} width="80px" className="zoom" />
          </Col>
          <Col xs={8} md={10} className="ver">
            <h5>Picsart (Mod)</h5>
            <p>
              Picsart is a Miami, Florida-based technology company that develops
              the Picsart suite of online photo and video editing applications,
              with a social creative community. The platform allows users to
              take and edit pictures and videos, draw with layers, and share the
              images on Picsart and other social networks.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Picsart_20.7.0.apk"
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
            <img src={require("./wcc2.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>World Cricket Championship 2 (Mod)</h5>
            <p>
              World Cricket Championship (WCC) is a series of 3D cricket mobile
              games developed by Next wave Multimedia. WCC is the first game of
              the WCC franchise which was launched and released in 2011. The
              updated versions WCC2, WCC Rivals and WCC3 were also released
              under the WCC franchise. "WCC" claims to be the largest
              mobile-based cricket simulation with around 10.7 million monthly
              users for about 45 minutes per day.It has reported an average of
              over 2.1 million daily active users and is one of the most
              downloaded cricket game franchises in the world.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/World-Cricket-Championship-2-MOD-3.0.5-_.1.1.apk"
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
            <img src={require("./spotify.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Spotify (Mod)</h5>
            <p>
              Spotify is a proprietary Swedish audio streaming and media
              services provider founded on 23 April 2006 by Daniel Ek and Martin
              Lorentzon. It is one of the largest music streaming service
              providers, with over 433 million monthly active users, including
              188 million paying subscribers, as of June 2022.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Spotify_v8.7.64.478_mod.apk"
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
            <img
              src={require("./musicolet.png")}
              width="80px"
              className="zoom"
            />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Musicolet</h5>
            <p>
              Musicolet is the only music player in android market which
              supports multiple Queues. You can create maximum 20 Queues. For
              fast and easy navigation we placed all important components of the
              app (like Main player, Queues, Folders, Albums, Artists,
              Playlists) in just one row. So you can access them with just
              1-Tap!
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Musicolet.6.4.build384.apk"
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
export default Android;
