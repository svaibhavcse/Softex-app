import React from "react";
import "./Softex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Softexmenu from "./Softexmenu";
import { GrLinkedin } from "react-icons/gr";
function About() {
  return (
    <div>
      <Softexmenu />
      <Container fluid>
        <Row>
          <Col>
            <p style={{ padding: "35px" }}>
              <img
                src={require("./aboutthumb.gif")}
                width="50%"
                className="zooml"
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "block",
                  margin: "auto",
                }}
              />
            </p>
          </Col>
        </Row>
        <h1 className="brd">Softex</h1>
        <Row>
          <Col xs={4} md={4}>
            <img
              src={require("./android.png")}
              width="350px"
              className="zoom"
            />
          </Col>
          <Col xs={8} md={8} className="zooml">
            <div style={{ paddingTop: "50px" }} className="brd">
              <h2>Android Original/Modded Apk's</h2>
              <p>
                APK stands for Android Package (sometimes Android Package Kit or
                Android Application Package). It's the file format that Android
                uses to distribute and install apps. As a result, an APK
                contains all the elements that an app needs to install correctly
                on your device. An APK is an archive file, meaning that it
                contains multiple files, plus some metadata about them. APKs are
                a variant of the JAR (Java Archive) file format, since a lot of
                Android is built in Java. All APKs are ZIP files at their core,
                but they must contain additional information to properly
                function as an APK. So all APKs are ZIPs, but not all ZIPs are
                APKs.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={8} md={8} className="zooml">
            <div style={{ paddingTop: "50px" }} className="brd">
              <h2>Windows Exe/Rar</h2>
              <p>
                An executable file (EXE file) is a computer file that contains
                an encoded sequence of instructions that the system can execute
                directly when the user clicks the file icon. Executable files
                commonly have an EXE file extension, but there are hundreds of
                other executable file formats. Some executable file types can
                run on any compatible system without requiring the existence of
                another program. These files are considered to pose a high
                security risk. They include EXE, BAT, COM, CMD, INF, IPA, OSX,
                PIF, RUN and WSH. With Windows, EXE is the file extension for an
                executable file. All EXE files are executable files, but not all
                executable files are EXE files.
              </p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <img
              src={require("./windows.png")}
              width="250px"
              className="zoom"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={4} md={4}>
            <img src={require("./apple.png")} width="350px" className="zoom" />
          </Col>
          <Col xs={8} md={8} className="zooml">
            <div style={{ paddingTop: "50px" }} className="brd">
              <h2>Apple .ipa </h2>
              <p>
                An .ipa file is an iOS and iPadOS application archive file which
                stores an iOS/iPadOS app. Each .ipa file includes a binary and
                can only be installed on an iOS, iPadOS, or ARM-based macOS
                device. Files with the .ipa extension can be uncompressed by
                changing the extension to .zip and unzipping. Most .ipa files
                cannot be installed on the iPhone Simulator because they do not
                contain a binary for the x86 architecture, only one for the ARM
                architecture of mobile phones and tablets.[1] To run
                applications on the simulator, original project files which can
                be opened using the Xcode SDK are required. However, some .ipa
                files can be opened on the simulator by extracting and copying
                over the .app file found in the Payload folder. Some simple apps
                are able to run on the simulator through this method.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={8} md={8} className="zooml">
            <div style={{ paddingTop: "50px" }} className="brd">
              <h2>APK's </h2>
              <p>
                Mod APKs are reworked copies of the original mobile apps that
                were distributed with them. Mod APKs are made to provide users
                access to new or improved features that aren’t present in the
                original version of the app. The Android operating system’s
                package file format is called APK, and it is used to distribute
                and install mobile applications and middleware in that format.
                It’s not uncommon for games on smartphones to need you to pay a
                fee in order to access certain features. It’s at this point when
                mods come into play. All of the game’s premium features will be
                available for free in the modified version. Mod APKs have grown
                in popularity recently for this same reason.
              </p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <img src={require("./mod.png")} width="400px" className="zoom" />
          </Col>
        </Row>

        <Row>
          <Col xs={4} md={4}>
            <img
              src={require("./gamesmod.png")}
              style={{ paddingLeft: "40px" }}
              width="250px"
              className="zoom"
            />
          </Col>
          <Col xs={8} md={8} className="zooml">
            <div style={{ paddingTop: "50px" }} className="brd">
              <h2>Game Files </h2>
              <p>
                Video game modding (short for "modification") is the process of
                alteration by players or fans of one or more aspects of a video
                game, such as how it looks or behaves, and is a sub-discipline
                of general modding. Mods may range from small changes and tweaks
                to complete overhauls, and can extend the replay value and
                interest of the game. Modding a game can also be understood as
                the act of seeking and installing mods to the player's game, but
                the act of tweaking pre-existing settings and preferences is not
                truly modding. Mods have arguably become an increasingly
                important factor in the commercial success of some games, as
                they add depth to the original work, and can be both fun for
                players playing the mods and as means of self-expression for mod
                developers.
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ backgroundColor: "lightgray" ,borderRadius:"2rem"}}>
          <Col>
          <br/>
            <h5>Developed By :</h5>
            <p>VAIBHAV S </p>
            <a
              href="https://www.linkedin.com/in/vaibhav-shanmugasundaram-293163240/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BhmbEHWhFRJCMdNyIHXVZjQ%3D%3D"
              className="ad"
            >
              {" "}
              <p className="center">
                {" "}
                <GrLinkedin />
              </p>{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
