import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h2 className="work-title">Work</h2>

        <div className="work-content">
          <div className="work-item">
            <h3 className="work-subtitle">Project Title 1</h3>
            <p className="work-description">
              Brief description of the project. This could include the project's
              purpose, technologies used, and your role.
            </p>
            <a
              href="https://example.com"
              className="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="work-item">
            <h3 className="work-subtitle">Project Title 2</h3>
            <p className="work-description">
              Brief description of the project. This could include the project's
              purpose, technologies used, and your role.
            </p>
            <a
              href="https://example.com"
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
