import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-subtitle">Experience</h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Front-End Developer Intern</h4>
                <p>Company Name, Location | June 2023 - August 2023</p>
                <ul>
                  <li>
                    Developed responsive web interfaces using React and
                    Bootstrap.
                  </li>
                  <li>
                    Collaborated with designers to translate UI/UX designs into
                    functional components.
                  </li>
                  <li>
                    Participated in code reviews and contributed to the
                    improvement of code quality.
                  </li>
                </ul>
              </li>
              {/* Add more experience items as needed */}
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-subtitle">Education</h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University Name, Location | Expected Graduation: May 2024</p>
                <ul>
                  <li>
                    Relevant coursework: Web Development, Data Structures,
                    Algorithms.
                  </li>
                </ul>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-subtitle">Skills</h3>
            <ul className="resume-list">
              <li className="resume-item">JavaScript, React, HTML, CSS</li>
              <li className="resume-item">Git, GitHub</li>
              <li className="resume-item">Responsive Web Design</li>
              {/* Add more skills as needed */}
            </ul>
          </div>

          {/* Add more sections if needed */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
