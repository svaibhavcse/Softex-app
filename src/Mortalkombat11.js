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
import video from "./mk11video.mp4";
import Card from "react-bootstrap/Card";
const my = styled.p`
  font-color: black;
`;
function Mortalkombat11() {
  return (
    <div>
      <Softexmenu />
      <h2 style={{ textAlign: "center" }}>
        <img src={require("./mk11back.jpg")} width="100px" className="zoom" />
      </h2>
      <div className="container">
        <video loop autoPlay muted className="zoom">
          <source src={video} type="video/webm" />
        </video>
        <h5 className="brd">
          No matter the reason, the time to fight will come.
        </h5>
        <p>
          Mortal kombat 11 ultimate offers newly playable fighters Mileena, Rain
          <br />
          and Rambo,along with the previously realeades Mortal Kombat 11.
          <br />
          Mortal Kombat 11 Ultimate is effective version & next-gen versions of
          Mortal Kombat 11 are here.
        </p>
        <h1>MORTAL KOMBAT</h1>
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
        <a href="https://www.mortalkombat.com/">
          <Button variant="outline-light">Visit</Button>
        </a>
      </div>
      <my style={{ padding: "20px" }}>
        Mortal Kombat 11 is a 2019 fighting game developed by NetherRealm
        Studios and published by Warner Bros. Interactive Entertainment. Running
        on a heavily modified version of Unreal Engine 3, It is the eleventh
        main installment in the Mortal Kombat series and a sequel to 2015's
        Mortal Kombat X. Announced at The Game Awards 2018, the game was
        released in North America and Europe on April 23, 2019, for Microsoft
        Windows, Nintendo Switch, PlayStation 4, and Xbox One—with the exception
        of Europe's Switch version which was released on May 10, 2019. The game
        was released on Stadia on November 19, 2019. Upon release, the console
        versions of Mortal Kombat 11 received generally favorable reviews, which
        praised the gameplay, story, graphics, and improved netcode, but it
        received criticism for the presence of microtransactions and
        over-reliance on grinding. An expansion for the game was released on May
        26, 2020, entitled Mortal Kombat 11: Aftermath. This expansion includes
        an additional story mode, three new characters, new stages, and the
        return of stage fatalities and the friendship finishing move. An
        enhanced version of the game containing all downloadable content up to
        that point, titled Mortal Kombat 11: Ultimate, was released for the
        Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series
        X/S on November 17, 2020
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        Like the previous three games in the series, including MK Mobile, Mortal
        Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities,
        Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay
        features are introduced, such as Fatal Blows and Krushing Blows. Fatal
        Blows are special moves similar to the X-ray moves in Mortal Kombat X.
        Like X-ray moves, Fatal Blows deal a large amount of damage, but unlike
        them, they only become available when a player's health drops below 30%,
        and can only be performed once per match. Krushing Blows are a special
        cinematic variation of a given special move, triggered when certain
        requirements are met, like most Brutalities in the previous game. Also
        new to the series is a Flawless Block mechanic, which allows for a
        comeback window after blocking an attack with precise timing. Another
        returning finisher is Mercy, last seen in Ultimate Mortal Kombat 3,
        where the winning player can opt to revive their opponent, giving them a
        small amount of life.
      </my>
      <hr />
      <br />
      <h5 className="brd"> • AFTER MATH</h5>
      <my style={{ padding: "20px" }}>
        Following Kronika's defeat, Fire God Liu Kang and Raiden attempt to
        utilize Kronika's Hourglass to restore history, but are interrupted by
        Shang Tsung, Fujin, and Nightwolf; all of whom were imprisoned in the
        Void by Kronika for refusing to join her. Shang Tsung elaborates that,
        due to the destruction of the Crown of Souls when Liu Kang defeated
        Kronika, the Hourglass cannot be used to change history without
        destroying it. He convinces Liu Kang to send him, Fujin, and Nightwolf
        back in time to retrieve the Crown of Souls before Cetrion does. Though
        Raiden is suspicious of Shang Tsung's motives, Liu Kang agrees and sends
        them back, staying behind to protect the Hourglass. Shang Tsung, Fujin,
        and Nightwolf are transported to the Koliseum just as Kitana confronted
        Shao Kahn. They attempt to flee undetected, but news spreads of their
        arrival, prompting Kronika to retaliate. To face Cetrion on his island,
        Shang Tsung determines their best option is to resurrect Sindel, so they
        head to the Netherrealm and capture her revenant. Returning to Outworld,
        Shang Tsung uses Sheeva's blood debt to Sindel to grant him access to
        the Soul Chamber and restore Sindel despite fierce resistance from
        Kitana and her allies.
      </my>
      <br />
      <Carousel
        slide={true}
        variant="dark" interval={2000}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Carousel.Item className="zoomout">
          <img src={require("./mk111.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./mk112.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./mk113.jpg")} width="100%" />
        </Carousel.Item>

        <Carousel.Item className="zoomout">
          <img src={require("./mk114.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./mk115.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./mk116.jpg")} width="100%" />
        </Carousel.Item>
      </Carousel>
      <my style={{ padding: "20px" }}>
        Along with series veterans including Kano, Raiden, Scorpion, Sonya Blade
        and Sub-Zero, and others such as Skarlet, who returns from the 2011
        reboot, four new fighters were introduced, three of whom are playable.
        Firstly, Kronika serves as the series's first-ever female boss
        character, who has powers over the flow of time, and had been
        supervising the events of the timelines since the very beginning of the
        events in the overall Mortal Kombat story. She is not among the game's
        playable characters.New playable fighters include Geras, a construct of
        Kronika who, like her, has powers that allow him to control the flow of
        time, and produce sand-based attacks; Cetrion, an Elder Goddess who is
        Shinnok's sister and Kronika's daughter and has control over elemental
        forces; and Kollector, a six-armed Naknadan who serves as a tribute
        collector to the Outworld empire.
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        Non-playable characters appearing in the game include Shinnok, who
        appears in the intro to the story mode and in one of the stages (albeit
        only his head); Sektor and Cyrax, who also appear in the story mode as
        NPC opponents; Ermac, Reptile and Smoke, who all appear in the gameplay
        as part of Shang Tsung's moveset, as well as one of Rain's fatalities;
        Kintaro, who appears in one of Shang Tsung's fatalities.
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        Publisher: Warner Bros. Games, Warner Bros.
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        Processor: Intel Core i5-750, 2.66 GHz / AMD
      </my>
      <br />
      <my style={{ padding: "20px" }}>Graphics: NVIDIA® GeForce™ GTX 670</my>
      <br />
      <my style={{ padding: "20px" }}>
        {" "}
        OS: 64-bit Windows 7 / Windows 10 or +
      </my>
      <br />
      <h4 className="brd">Storage Required: 85 Gb</h4>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 1</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part01.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 2</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part02.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 3</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part03.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 4</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part04.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 5</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part05.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 6</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part06.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 7</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part07.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 8</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part08.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 9</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part09.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 10</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part10.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 11</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part11.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 12</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part12.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 13</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part13.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 14</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part14.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 15</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part15.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 16</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part16.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 17</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part17.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 18</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part18.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 19</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part19.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 20</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part20.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 21</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part21.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 22</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part22.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 23</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part23.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 24</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part24.rar"
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

        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 25</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part25.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 26</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part26.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 27</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part27.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 28</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part28.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 29</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part29.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 30</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part30.rar"
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

        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 31</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part31.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 32</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part32.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 33</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part33.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 34</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part34.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 35</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part35.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 36</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part36.rar"
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

        <br />

        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 37</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part37.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 38</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part38.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 39</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part39.rar"
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
              <img src={require("./mk11card.png")} />
              <Card.Body>
                <Card.Title>Part 40</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Mortal.Kombat.11.Ultimate.part40.rar"
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
export default Mortalkombat11;
