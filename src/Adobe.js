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
import { useNavigate } from "react-router-dom";
function Adobe() {
  const navigate = useNavigate();
  return (
    <>
      <Softexmenu />
      <img src={require("./adobethumb.png")} className="center" />
      <br />
      <Container fluid>
        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./ps.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Photoshop (Mod)</h5>
            <p>
              Adobe Photoshop is a raster graphics editor developed and
              published by Adobe Inc. for Windows and macOS. It was originally
              created in 1988 by Thomas and John Knoll. Since then, the software
              has become the industry standard not only in raster graphics
              editing, but in digital art as a whole.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Adobe.Photoshop.2020.rar"
                  className="link"
                >
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
            <img src={require("./illus.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Illustrator (Mod)</h5>
            <p>
              Adobe Illustrator is a vector graphics editor and design program
              developed and marketed by Adobe Inc. Originally designed for the
              Apple Macintosh, development of Adobe Illustrator began in 1985.
              Along with Creative Cloud, Illustrator CC was released.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/gertg54h4h/WareFiles/releases/download/Ware/Adobe.Illustrator.zip"
                  className="link"
                >
                  Download
                </a>
                <FiDownload />
              </Button>
            </p>

            <div className="brd" />
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={2} className="center">
            <img src={require("./ae.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe After Effects (Mod)</h5>
            <p>
              Adobe After Effects is a digital visual effects, motion graphics,
              and compositing application developed by Adobe Systems and used in
              the post-production process of film making, video games and
              television production. Among other things, After Effects can be
              used for keying, tracking, compositing, and animation.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a onClick={() => navigate("/#")} className="link">
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
            <img src={require("./pr.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Premiere Pro (Mod)</h5>
            <p>
              Adobe Premiere Pro is a timeline-based and non-linear video
              editing software application developed by Adobe Inc. and published
              as part of the Adobe Creative Cloud licensing program. First
              launched in 2003, Adobe Premiere Pro is a successor of Adobe
              Premiere.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/gertg54h4h/WareFiles/releases/download/Ware/Premiere.Pro.zip"
                  className="link"
                >
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
            <img src={require("./lr.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Lightroom (Mod)</h5>
            <p>
              Adobe Lightroom is a creative image organization and image
              manipulation software developed by Adobe Inc. as part of the
              Creative Cloud subscription family. It is supported on Windows,
              macOS, iOS, Android, and tvOS.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/gertg54h4h/WareFiles/releases/download/Ware/Adobe.Lightroom.zip"
                  className="link"
                >
                  Download{" "}
                </a>{" "}
                <FiDownload />
              </Button>
            </p>

            <div className="brd" />
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={2} className="center">
            <img
              src={require("./indesign.png")}
              width="80px"
              className="zoom"
            />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe InDesign (Mod)</h5>
            <p>
              Adobe InDesign is a desktop publishing and page layout designing
              software application produced by Adobe Inc. and first released in
              1999. It can be used to create works such as posters, flyers,
              brochures, magazines, newspapers, presentations, books and ebooks.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/gertg54h4h/WareFiles/releases/download/Ware/Adobe.InDesign.zip"
                  className="link"
                >
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
            <img src={require("./animate.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Animate (Mod)</h5>
            <p>
              Adobe Animate is a multimedia authoring and computer animation
              program developed by Adobe Inc. Animate is used to design vector
              graphics and animation for television series, online animation,
              websites, web applications, rich web applications, game
              development, commercials, and other interactive projects.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a onClick={() => navigate("/#")} className="link">
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
            <img src={require("./ac.png")} width="80px" className="zoom" />
          </Col>

          <Col xs={8} md={10} className="ver">
            <h5>Adobe Acrobat (Mod)</h5>
            <p>
              Adobe Acrobat is a family of application software and Web services
              developed by Adobe Inc. to view, create, manipulate, print and
              manage Portable Document Format files. The family comprises
              Acrobat Reader, Acrobat and Acrobat.com.
            </p>

            <p className="end">
              <Button variant="outline-dark">
                <a
                  href="https://github.com/gertg54h4h/WareFiles/releases/download/Ware/Adobe.Acrobat.zip"
                  className="link"
                >
                  {" "}
                  Download
                </a>{" "}
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
export default Adobe;
