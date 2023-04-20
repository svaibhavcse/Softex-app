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
import { AiFillAppstore, AiFillAndroid } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { BsMusicNoteList, BsPhoneLandscape } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Carousel } from "react-bootstrap";

import video from "./spotifyvideo.webm";

function Softex() {
  const navigate = useNavigate()
  return (
    <>
      <Softexmenu />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Carousel
        controls
        transition="crossfade"
        interval={2000}
        variant="dark"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Carousel.Item className="zoomout">
          <img src={require("./slide1.png")} width="100%" />
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          <a onClick={() => navigate("/cricket22")}>
            {" "}
            <img src={require("./slide3.jpg")} width="100%" />
          </a>
        </Carousel.Item>
        <Carousel.Item className="zoomout">
          {" "}
          <a onClick={() => navigate("/adobe")}>
            <img src={require("./slide2.gif")} width="100%" />
          </a>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <h3 className="space">Go By Platform</h3>
      <div />
      <Container fluid>
        <Row>
          <Col xs={2} md={2}></Col>
          <Col xs={3} md={3}>
            <a onClick={() => navigate("/windows")}>
              <img
                src={require("./windows.png")}
                width="100"
                className="zoom"
              />
            </a>
          </Col>
          <Col xs={4} md={4}>
            <a onClick={() => navigate("/apple")}>
              <img src={require("./apple.png")} width="120" className="zoom" />
            </a>
          </Col>
          <Col xs={3} md={3}>
            <a onClick={() => navigate("/android")}>
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
        Windows Will <AiFillAppstore />
      </h3>
      <div />
      <Container fluid>
        <Row>
          <Col xs={4} md={3}>
            <a onClick={() => navigate("/google")} className="link">
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
            <a onClick={() => navigate("/adobe")} className="link">
              <img
                src={require("./adobelogo.png")}
                width="90px"
                className="zoom"
              />
              <figcaption>Adobe</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a onClick={() => navigate("/gameswindows")} className="link">
              <img src={require("./game.jpg")} width="130px" className="zoom" />
              <figcaption>
                <IoGameController />
                <AiOutlineCaretRight />
              </figcaption>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="container-home">
              <video loop autoPlay muted className="zooml">
                <source src={video} type="video/webm" />
              </video>
              <Button
                variant="outline-success"
                className="btn-1"
                onClick={() => {
                  toast.success("Bookmark Added");
                }}
              >
                <BsBookmarkStar />
              </Button>

              <Button
                variant="outline-success"
                className="btn-1"
                style={{ transform: "translate(10%, 250%)" }}
              >
                <RiComputerLine />
              </Button>
              <Button
                variant="outline-danger"
                className="btn-1"
                onClick={() => {
                  toast.error("Wishlist");
                }}
                style={{ transform: "translate(10%, 400%)" }}
              >
                <AiOutlineHeart />
              </Button>
              <Button
                variant="outline-success"
                className="btn-1"
                style={{ transform: "translate(10%, 550%)" }}
                onClick={() => {
                  toast.success("Category : Music");
                }}
              >
                <BsMusicNoteList />
              </Button>
              <a
                href="https://github.com/svaibhavcse/Softex/releases/download/Softex/SpotifySetup.exe"
                className="link"
              >
                <Button
                  variant="outline-dark"
                  className="btn-1"
                  style={{ transform: "translate(10%, 700%)" }}
                  onClick={() => {
                    toast("Click Save To Download");
                  }}
                >
                  Download <FiDownload />
                </Button>{" "}
              </a>
            </div>
          </Col>
        </Row>

        <img src={require("./spotify.png")} width="80px" className="zoom" />
        <h3>Spotify</h3>

        <Row>
          <p>
            Spotify is all the music you’ll need. Spotify is one of the most
            popular music apps around, and it’s not at all difficult to see why.
            Firstly, it’s hugely accessible. There is a version of Spotify
            available for almost every platform you could think of using and
            this is a large part of its likability. This version for Windows is
            exactly the type of flagship app you’d expect - it’s crisp-looking,
            fast, and easy-to-use and, although music quality depends largely on
            the quality of the device you’re reproducing it on (and not the app
            you’re using to play it), only the pickiest ears will have anything
            to say about the quality of the music you can listen to with
            Spotify.
            <br />
            The most basic level of Spotify is free, which is why it really is
            “music for everyone”. You can also sign up to Spotify Premium by
            paying a monthly fee. On the premium tier, the user experience is
            just a little bit nicer, with the ability to download music (great
            for planes), skip songs you don’t like and, many people’s favorite
            plus - you don’t have to listen to the ads.
          </p>
        </Row>
      </Container>
      <hr />
      <h3 className="space">
        Android's Pick <AiFillAndroid />
      </h3>
      <div />
      <Container fluid>
        <Row>
          <Col xs={4} md={3}>
            <a
              href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/Themes_3.9.2.2.apk"
              className="link"
            >
              <img
                src={require("./themes.png")}
                width="90px"
                className="zoom"
              />
              <figcaption>MIUI Themes</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a
              href="https://github.com/svaibhavcse/Softex/releases/download/Softex.sources/App.cloner.apk"
              className="link"
            >
              <img
                src={require("./appcloner.png")}
                width="95px"
                className="zoom"
              />
              <figcaption>App Cloner</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a
              href="https://github.com/svaibhavcse/Softex/releases/download/Softex/Musicolet.6.4.build384.apk"
              className="link"
            >
              <img
                src={require("./musicolet.png")}
                width="85px"
                className="zoom"
              />
              <figcaption>Musicolet</figcaption>
            </a>
          </Col>

          <Col xs={4} md={3}>
            <a onClick={() => navigate("/android")} className="link">
              <img
                src={require("./android.png")}
                width="90px"
                className="zoom"
              />
              <figcaption>
                <AiFillAndroid />
                <AiOutlineCaretRight />
              </figcaption>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="container-home">
              <video loop autoPlay muted className="zooml">
                <source src={require("./codvideo.webm")} type="video/webm" />
              </video>
              <Button
                variant="outline-warning"
                className="btn-1"
                onClick={() => {
                  toast.warn("Bookmarks");
                }}
              >
                <BsBookmarkStar />
              </Button>

              <Button
                variant="outline-danger"
                className="btn-1"
                style={{ transform: "translate(10%, 250%)" }}
              >
                <BsPhoneLandscape />
              </Button>
              <Button
                variant="outline-warning"
                className="btn-1"
                style={{ transform: "translate(10%, 400%)" }}
              >
                <BiRocket />
              </Button>
              <Button
                variant="outline-info"
                className="btn-1"
                style={{ transform: "translate(10%, 550%)" }}
                onClick={() => {
                  toast.info("Category : Games");
                }}
              >
                <IoGameController />
              </Button>
              <a
                href="https://github.com/svaibhavcse/Softex/releases/download/Softex/SpotifySetup.exe"
                className="link"
              >
                <Button
                  variant="outline-dark"
                  className="btn-1"
                  style={{ transform: "translate(10%, 700%)" }}
                  onClick={() => {
                    toast("Click Save To Download");
                  }}
                >
                  Download <FiDownload />
                </Button>{" "}
              </a>
            </div>
          </Col>
        </Row>
        <img src={require("./cod.png")} width="100px" className="zoom" />
        <h3>Call Of Duty Mobile</h3>
        <Row>
          <p>
            Call of Duty: Mobile is a free-to-play shooter game developed by
            TiMi Studio Group and published by Activision for Android and iOS.
            It was released on October 1, 2019, where it was one of the largest
            mobile game launches in history, generating over US$480 million with
            270 million downloads within a year. Call of Duty: Mobile was
            published in other regions by Garena, Tencent Games, VNG Games and
            TiMi Studio Group.
            <br />
            Players can choose to play ranked or non-ranked matches in
            multiplayer mode. It has two types of in-game currencies: "Credits",
            which are earned through playing the game, and "COD Points", which
            are bought with real-world money. It is possible to play the full
            game without paying, though some exclusive character and weapon
            skins can only be bought with COD Points. Apart from standard
            matchmaking, a private room for both the multiplayer and battle
            royale modes can also be accessed where players can invite and
            battle with their in-game friends.
          </p>
        </Row>
      </Container>
    </>
  );
}
export default Softex;