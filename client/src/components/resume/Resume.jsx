import React, { useState } from "react";
import {
  FaCss3Alt,
  FaDownload,
  FaEye,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";
import "./Resume.css";

const Resume = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreSkills = () => {
    setShowMore(!showMore);
  };
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <div className="resume-buttons">
          <a href="/pathtocv.pdf" download className="button download-button">
            <FaDownload className="button-icon" /> Download CV
          </a>
          <a
            href="/path to cv.pdf"
            target="_blank"
            className="button view-button"
          >
            <FaEye className="button-icon" />
            View CV
          </a>
        </div>
        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-subtitle">Experience</h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Front-End Developer Intern</h4>
                <p>SixDesign, Lalitpur | March 2024 - June 2024</p>
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
                    Maintained version control using Git and GitHub, ensuring
                    streamlined code collaboration.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-subtitle">Skills</h3>
            <div className="skills-flex">
              <div className="skill-item">
                <div className="skill-icon-container">
                  <FaHtml5 className="skill-icon" />
                </div>
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon-container">
                  <FaCss3Alt className="skill-icon" />
                </div>
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon-container">
                  <FaJsSquare className="skill-icon" />
                </div>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon-container">
                  <FaReact className="skill-icon" />
                </div>
                <span>React.js</span>
              </div>

              {showMore && (
                <>
                  <div className="skill-item">
                    <div className="skill-icon-container">
                      <FaNodeJs className="skill-icon" />
                    </div>
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon-container">
                      <DiMongodb className="skill-icon" />
                    </div>
                    <span>MongoDB</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon-container">
                      <FaGitAlt className="skill-icon" />
                    </div>
                    <span>Git / GitHub</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon-container">
                      <SiBootstrap className="skill-icon" />
                    </div>
                    <span>Bootstrap</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon-container">
                      <SiTailwindcss className="skill-icon" />
                    </div>
                    <span>Tailwind CSS</span>
                  </div>
                </>
              )}
            </div>
            <div className="skills-toggle">
              <button onClick={toggleMoreSkills} className="toggle-button">
                Show {showMore ? "Less" : "More"}
              </button>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-subtitle">Education</h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>B.Sc. in Computer Science and Information Technology</h4>
                <p>Patan Multiple Campus, Lalitpur</p>
              </li>
              <li className="resume-item">
                <h4>+2 Science</h4>
                <p>Dharan Higher Secondary School, Dharan | 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
