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
import video from "./wwe2k18ad.webm";
import Card from "react-bootstrap/Card";
const my = styled.p`
  font-color: black;
`;
function Wwe2k18() {
  return (
    <div>
      <Softexmenu />
      <h2 style={{ textAlign: "center" }}>
        <img src={require("./wwe2k18.png")} width="140px" className="zoom" />
      </h2>
      <div className="container">
        <video loop autoPlay muted className="zoom">
          <source src={video} type="video/webm" />
        </video>
        <h5 className="brd">Be like no one and Never say Never</h5>
        <p>
          WWE 2K18 is a professional wrestling video game developed by Yuke's
          and published by 2K Sports.
          <br />
          It is the nineteenth installment in the WWE game series
          <br />
          Among the features 2K promoted were enhanced graphics.
        </p>
        <h1>WWE2K18</h1>
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
        <a href="https://www.wwe.com/section/wwe-2k18">
          <Button variant="outline-light">Visit</Button>
        </a>
      </div>
      <my style={{ padding: "20px" }}>
        On May 23, 2017, 2K Sports announced WWE 2K18 would be released in 2017.
        On June 19, 2017, 2K released a trailer, revealing that Seth Rollins
        will be featured as the game's cover star. In the trailer, it features
        Rollins vandalizing and burning down a fictitious WWE warehouse in
        Stamford, Connecticut, as well as showing the tagline "Be Like No One".
        The second trailer features Kurt Angle visiting the ruins of the
        warehouse and finding a pair of his boots among the ashes, which
        announced Angle as the game's pre-order. The game's Deluxe Edition was
        also announced, giving players access to the game four days early, along
        with the season pass and additional in-game content. On July 10, 2017, a
        Nintendo Switch version was also confirmed. On July 27, 2K Sports
        announced the Collector's Edition, called the "Cena (Nuff)" edition. The
        collector's edition revolves around John Cena, commemorating his 15
        years in the WWE, and includes a Cena action figure, a piece of the ring
        mat from his victory at the 2017 Royal Rumble, and an autographed photo
        from Cena. Unlike previous years, the Collector's Edition included the
        game's season pass. The Collector's Edition (as well as the Deluxe
        Edition) has two additional playable versions of Cena (included with
        2006's ECW One Night Stand and WrestleMania XXVI attires), as well as
        Batista and Rob Van Dam as playable characters.
      </my>
      <br />
      <my style={{ padding: "20px" }}>
        On August 16, 2K and IGN announced the first 47 playable characters,
        with a roster reveal special hosted by Corey Graves, Renee Young, and
        Goldust. Two days later, 2K announced that the soundtrack for the game
        would be curated by The Rock and will feature a mix of classic rock,
        modern rock, and hip hop. On September 26, 2K announced that for the
        first time, the PC version of the game will release alongside its
        console counterparts on October 17. Season pass details were unveiled on
        September 27, featuring the Accelerator, MyPlayer kick start, New Moves
        pack, NXT Generation pack, and the Enduring Icons pack. The NXT
        Generation pack was released on November 21, 2017, while the pre-order
        and deluxe edition bonus content was available as a separate purchase a
        week earlier. The New Moves pack was released on December 12, 2017, and
        the Enduring Icons pack was released on January 16, 2018. On March 23,
        2018, a WrestleMania-themed edition of WWE 2K18 was released
        internationally, which contained all of the characters and downloadable
        content in addition to exclusive items prior to WrestleMania 34.
      </my>
      <hr />
      <br />
      <h5 className="brd"> • GAME PLAY : </h5>
      <my style={{ padding: "20px" }}>
        Similar to its predecessors, WWE 2K18 is a professional wrestling game
        and for the first time since WWF SmackDown! Just Bring It, eight
        wrestlers are able to be in a match at once, instead of six (the
        Nintendo Switch version only supports six wrestlers in the ring, due to
        the console's limitations).The Royal Rumble match has been retooled,
        with new mechanics, finishers and elimination sequences. A carry system
        was introduced (which is similar to the Ultimate Control Grapple system
        introduced in WWE SmackDown vs. Raw 2007), allowing players to pick up
        or drag their opponent and place them in a specific spot. Thousands of
        new moves and animations have been added to the game.
      </my>
      <hr />
      <br />
      <h5 className="brd"> • GAME MODES </h5>
      <my style={{ padding: "20px" }}>
        Improvements have been made to the creation suite, such as new superstar
        parts and materials. One such material is a glow effect, which gives
        players the ability to make hair, clothing, and logos on their created
        superstars glow. Other new creation suite features include an enhanced
        highlight system, however the free-roaming camera has been removed when
        the highlight reel is being used mid-match. Crowd area templates can
        also be selected in Create-An-Arena, allowing players to select five
        different templates that have different weapons and objects to use. The
        Create-A-Match feature, last seen in the 7th-gen version of WWE 2K17
        (WWE 2K15 for 8th-gen players), has returned. New to the feature
        includes the ability to create your own custom matches and save them for
        use in exhibition mode, Universe, and Online through Private matches.
        MyCareer now allows backstage free roaming (Last seen in WWE SmackDown
        vs Raw 2011's Road to WrestleMania mode), with wrestlers creating
        alliances and enemies, and fighting styles are introduced in the
        MyCareer mode, letting players choose between eight different fighting
        styles, each with its own strengths and weaknesses. However mixed gender
        tag-team matches are not featured in the game and cannot be created
        using Create-a-Match. The new "Road To Glory" mode enables players to
        use their MyPlayer characters to qualify and compete in events, similar
        to the one found in WWE SuperCard. This mode replaces the 2K Tonight
        online mode from WWE 2K17. Universe mode has been improved with a new
        story system, alongside new cut-scenes, power-rankings, and a goal
        system.
      </my>
      <br />
      <Carousel
        slide={true}
        variant="dark"
        interval={2000}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Carousel.Item className="zoomout">
          <img src={require("./wwe1.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./wwe2.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./wwe3.jpg")} width="100%" />
        </Carousel.Item>

        <Carousel.Item className="zoomout">
          <img src={require("./wwe4.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./wwe5.jpg")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <img src={require("./wwe6.jfif")} width="100%" />
        </Carousel.Item>
      </Carousel>
      <my style={{ padding: "20px" }}>
        WWE 2K18 features a new commentary team of Monday Night Raw's Michael
        Cole, SmackDown Live's Byron Saxton, and dual branded commentator Corey
        Graves. Crowd sound is also improved and features authentic crowd chants
        for entrances and during a match.
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>
        WWE 2K18 received "mixed or average" reviews, according to review
        aggregator Metacritic. The Nintendo Switch version, however, received
        "generally unfavourable" reviews. It was heavily criticized for its
        inevitable glitches, with montages of them posted on YouTube. The
        technical issues were more severe on the Switch version.
      </my>
      <br /> <br /> <br />
      <my style={{ padding: "20px" }}>Publisher: 2K Sports.</my>
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
      <h4 className="brd">Storage Required: 32 Gb</h4>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "10rem" }} className="zooml">
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 1</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part01.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 2</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part02.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 3</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part03.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 4</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part04.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 5</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part05.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 6</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part06.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 7</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part07.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 8</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part08.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 9</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part09.rar"
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
              <img src={require("./wwe2k18card.jpg")} />
              <Card.Body>
                <Card.Title>Part 10</Card.Title>
                <Button variant="outline-dark">
                  <a
                    href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/WWE.2K18.part10.rar"
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
      </Container>
    </div>
  );
}
export default Wwe2k18;
