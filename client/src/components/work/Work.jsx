import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h2 className="work-title">My Projects</h2>

        <div className="work-content">
          {/* Chat App Project */}
          <div className="work-item">
            <h3 className="work-subtitle">Chat App – Full-Stack Developer</h3>
            <p className="work-description">
              Built a real-time chat application using Node.js, React, and
              Material UI for efficient user interaction. Implemented secure
              authentication methods and precise authorization controls using
              Advanced Encryption Standard (AES) for secure messaging. Leveraged
              Socket.io for real-time messaging to enhance user experience.
            </p>
            <a
              href="https://github.com/Sumankark"
              className="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Bookstore App Project */}
          <div className="work-item">
            <h3 className="work-subtitle">
              Bookstore App – Full-Stack Developer
            </h3>
            <p className="work-description">
              Developed a full-stack Bookstore App using React.js, Node.js,
              Express, and MongoDB. Integrated RESTful APIs, implemented CRUD
              operations for managing books and orders with real-time status
              updates for admins. Improved UI/UX by ensuring mobile
              responsiveness with Tailwind CSS and used JWT for secure user
              authentication.
            </p>
            <a
              href="https://github.com/Sumankark"
              className="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Add more work items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Work;
