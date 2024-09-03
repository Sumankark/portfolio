import React, { useState } from "react";
import "./Hireme.css";

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Your request has been sent!");
  };

  return (
    <section id="hireme" className="hireme-section">
      <div className="hireme-container">
        <h2 className="hireme-title">Hire Me</h2>
        <p className="hireme-description">
          Interested in working with me? Fill out the form below or click the
          button to get in touch.
        </p>
        <div className="hireme-content">
          <a href="mailto:example@example.com" className="hireme-cta">
            <button className="cta-button">Get in Touch</button>
          </a>
          <form onSubmit={handleSubmit} className="hireme-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
