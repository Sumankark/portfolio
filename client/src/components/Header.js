import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);

    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="md" className="text-white navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="brand-custom">
          Suman Karki
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Link
              to="home"
              smooth={true}
              duration={100}
              className={`nav-link-custom ${
                activeLink === "home" ? "active-link" : ""
              }`}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={100}
              className={`nav-link-custom ${
                activeLink === "services" ? "active-link" : ""
              }`}
              onClick={() => handleClick("services")}
            >
              {" "}
              Services
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className={`nav-link-custom ${
                activeLink === "resume" ? "active-link" : ""
              }`}
              onClick={() => handleClick("resume")}
            >
              Resume
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className={`nav-link-custom ${
                activeLink === "work" ? "active-link" : ""
              }`}
              onClick={() => handleClick("work")}
            >
              Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`nav-link-custom ${
                activeLink === "contact" ? "active-link" : ""
              }`}
              onClick={() => handleClick("contact")}
            >
              Contact
            </Link>
            <Link to="hireme" smooth={true} duration={500}>
              <Button
                variant="success"
                className="hire-me-btn"
                onClick={() => handleClick("hireme")}
              >
                Hire Me
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
