import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with hacking—ethically of course—and since then, there’s been no turning back. 
              <br />
              <br />I’m fluent in the language of
              <i>
                <b className="purple"> vulnerabilities, exploits, and secure code. </b>
              </i>
              <br />
              <br />
              My fields of interest's include  &nbsp;
              <i>
                <b className="purple">breaking and securing Web Applications</b> and
                and uncovering flaws in real-world systems.
              </i>
              <br />
              <br/>
              <i>I speak fluent TCP/IP and can sniff packets like a bloodhound on Red Bull.</i>
              <br />
              <br />
              Whenever possible, I channel my passion into <b className="purple">penetration testing, threat modeling </b> and
              <i>
                <b className="purple">
                  {" "}
                  leveraging tools
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Burp Suite, Wireshark, Nmap, and Metasploit</b> — while also staying {" "}
              </i>
              <i>
              sharp with scripting in <b className="purple">Python </b>and <b className="purple">Bash.</b>
              </i>
              <br/>
              <br/>
              <i>
                Oh, and I’m a <b className="purple">Certified Ethical Hacker (CEH) </b> too. Because who says defenders can’t think like <b className="purple">attackers </b>? 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SharkHack09223"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/shaar_kun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sharukhan09223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shaar_kun/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
