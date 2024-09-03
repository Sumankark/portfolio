import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services-section">
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h2 className="services-title">My Services</h2>
            <p className="services-description">
              I offer a variety of services in web development, including both
              frontend and backend development using the MERN Stack.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="service-card">
            <h3>Full-Stack Development</h3>
            <p>
              Expertise in building complete web applications using MongoDB,
              Express.js, React, and Node.js (MERN Stack)
            </p>
          </Col>
          <Col md={4} sm={12} className="service-card">
            <h3>Front-End Development</h3>
            <p>
              Building responsive and interactive interfaces with React,
              JavaaScript, HTML, CSS and Using Tailwind Css and Bootstrap.
            </p>
          </Col>
          <Col md={4} sm={12} className="service-card">
            <h3>Backend Development</h3>
            <p>
              Strong skills in creating scalable and secure server-side
              applications with Node.js, Express, and MongoDB.
            </p>
          </Col>
          <Col md={4} sm={12} className="service-card">
            <h3>Web Performance Optimization</h3>
            <p>
              Optimizing web performance and ensuring faster loading times to
              enhance user experience.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
