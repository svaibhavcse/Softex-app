import React from "react";
import "./Softex.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Softexmenu from "./Softexmenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FiDownload } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
import { BsBookmarkStar } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import video from "./cricket22video.webm";
import Card from "react-bootstrap/Card";
const my =styled.p`
font-color:black`;
function Cricket22() {
  return (
    <div>
      <Softexmenu />
      <h2 style={{ textAlign: "center" }}>
        <img src={require("./bigant.png")} width="163px" className="zoom" />
      </h2>
      <div className="container">
        <video loop autoPlay muted className="zoom">
          <source src={video} type="video/webm" />
        </video>
        <h5 className="brd">Building the next generation of cricket.</h5>
        <p>
          Cricket 22 is a cricket video game developed by Big Ant Studios and
          published by Nacon.
          <br />
          The game features the inclusion of both men's and women's editions of
          the Big Bash league for <br />
          the very first time.
        </p>
        <h1>CRICKET 22</h1>
        <Button variant="outline-light">
          <BsBookmarkStar />
        </Button>

        <Button variant="outline-light">
          <IoGameControllerOutline />
        </Button>
        <Button variant="outline-light">
          <RiComputerLine />
        </Button>
        <Button variant="outline-light">
          <AiOutlineHeart />
        </Button>
        <a href="https://www.bigant.com/announcing-cricket-22-a-new-era-of-cricket-games-has-arrived/">
          <Button variant="outline-light">Visit</Button>
        </a>
      </div>
      <h5>Cricket 22 also features a bevy of new innovations, including :</h5>
      <my style={{ padding: "20px" }}>
        <span style={{ fontWeight: "bold" }}>
          • All-new bowling and fielding controls :
        </span>
        Whether it’s a feisty fast bouncer, or the satisfying “snap” as you hurl
        the ball from the infield for a precision run-out, Cricket 22 features
        refined, tight controls that enable you to play your best game of
        cricket.
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        <span style={{ fontWeight: "bold" }}>
          • A deep, narrative-driven career mode :
        </span>
        you are in control on and off the field. You manage your training and
        press conferences, deal with injuries, and decide your path towards
        international glory!
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        <span style={{ fontWeight: "bold" }}>
          • An all-new commentary team :
        </span>
        Cricket 22 brings a star-studded commentary team, featuring Michael
        Atherton, Ian Healy, Mel Jones, Alison Mitchell and David Gower. Every
        shot will be called with greater depth and analysis than ever before,
        and for the first time ever in a sports game, there will be an all-women
        commentary team, further deepening the representation of women in the
        Cricket 22 experience.
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        <span style={{ fontWeight: "bold" }}>
          • The best-looking cricket ever :
        </span>
        Cricket 22 takes full advantage of the capabilities of the latest
        generation of hardware. Not only does the game load with blinding speed,
        getting you into the action more quickly than ever before, it also
        includes a full suite of visual updates, including incredible real-time
        ray tracing elements, providing the most visually realistic game of
        cricket ever seen.
      </my>
      <br />
      <Carousel
        slide={true}
        variant="dark"
        interval={2000}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Carousel.Item className="zoomout">
          <img src={require("./cricket2.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./cricket4.png")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./cricket1.jpg")} width="100%" />
        </Carousel.Item>

        <Carousel.Item className="zoomout">
          <img src={require("./cricket5.avif")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./cicket3.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./cricket7.jpg")} width="100%" />
        </Carousel.Item>
      </Carousel>
      <my style={{ padding: "20px" }}>
        “The number of cricket fans that have been asking us about our
        next-generation cricket plans has been overwhelming,” Big Ant CEO, Ross
        Symons, said. “We’re incredibly excited by what we’re able to bring to
        the table with Cricket 22. This is our fifth cricket simulation title,
        and it really represents the cumulation of everything that we’ve learned
        on this ten-year (and counting) journey. We have the most passionate
        fans, and we can’t wait to get this into their hands.”
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        Russell James, ECB Sales & Marketing Director said, “we are thrilled to
        be partnering with Big Ant again for the hugely exciting Cricket 22
        game. Cricket is a game for everyone and whether taking on the challenge
        of playing an Ashes Test or facing the best men’s and women’s white ball
        cricketers in the world in The Hundred, Cricket 22 has everything
        cricket fans could want.”
      </my>{" "}
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        “Cricket Australia is proud to partner once again with Australian game
        developer Big Ant Studios to bring such a visually realistic video game
        to our passionate fans,” Cricket Australia CEO, Nick Hockley said.
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        “The Ashes is one of the greatest rivalries in world sport and we can’t
        wait to bring the game of cricket to new audiences via Cricket 22.”
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        Graphics: AMD Radeon R7 260 / NVIDIA GTX
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        Processor: Intel Core i3 / AMD Ryzen 3 or high
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        Publisher: Nacon Released: Dec 1, 2021
      </my>
      <br />
      <h4 className="brd">Storage Required: 44.5 Gb</h4>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 1</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part01.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 2</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part02.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 3</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part03.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 4</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part04.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 5</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part05.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 6</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part06.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 7</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part07.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 8</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part08.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 9</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part09.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 10</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part10.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 11</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part11.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 12</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part12.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 13</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part13.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 14</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part14.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 15</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part15.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 16</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part16.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 17</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part17.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 18</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part18.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 19</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part19.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 20</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part20.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 21</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part21.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 22</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part22.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 23</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part23.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./cricket22.jpg")} />
              <Card.Body>
                <Card.Title>Part 24</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Cricket.22.part24.rar"
                    className="link"
                  >
                    Download
                  </a>{" "}
                  <FiDownload />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
export default Cricket22;