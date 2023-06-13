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
        <Row md={8} className="home-about-description">
          {/* <Col md={8} className="home-about-description"> */}
            <h1 style={{ fontSize: "2.6em" }}>
              Want to <span className="purple"> KNOW </span> me better?
            </h1>
              
            <p className="home-about-body">
            I am a recent graduate in computer science specializing in
            <b className="purple"> machine learning </b>and <b className="purple">computer vision. </b>

            <br/>
            <br/>
              
            I have experience working with various language models and have successfully deployed prompt-based systems for tasks such as 
              <i>
                <b className="purple"> text generation, sentiment analysis, and chatbots. </b>
              </i>
              <br />
              <br />

              I am eager to continue expanding my knowledge and skills in machine learning and computer vision. 
              I am actively seeking new opportunities where I can contribute my expertise and work on challenging projects in these domains. 
              If you would like to connect or learn more about my work, please feel to contact me. 

              <br />
              <br />

              <i>
                <b className="purple">Thank you for visiting my portfolio! 
                </b>
              </i>
              
            </p>
          {/* </Col> */}
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CATCH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sooraj671"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                 <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a> 
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sooraj2a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sooraj_kumar672/"
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
