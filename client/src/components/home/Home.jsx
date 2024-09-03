import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";

const Home = () => {
  return (
    <div id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7} sm={12} className="order-xs-2 order-md-1">
            <h4 className="welcome-text">Welcome to My World!</h4>
            <h1 className="name-title">
              Hi, I'm <span className="highlight">Suman Karki</span>
            </h1>
            <h2 className="role-title">
              a <span className="highlight">MERN Stack Developer</span>
            </h2>
            <p className="description">
              I have expertise in creating responsive and visually appealing
              websites, focusing on user experience and full-stack development
              using MongoDB, Express, React, and Node.js.
            </p>
            <div className="action-buttons">
              <Button className="resume-button">
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </Button>
              <Button className="contact-button">Contact Me </Button>
            </div>
            <SocialMediaLinks />
          </Col>

          <Col md={5} sm={12} className="text-center order-xs-1 order-md-2">
            <img
              src="./suman.png"
              alt="Suman Karki"
              className="profile-photo"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
