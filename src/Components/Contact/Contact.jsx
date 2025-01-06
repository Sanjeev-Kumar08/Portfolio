import React, { useState } from "react";
import Input from "../Input/Input";

import "./contact.css";

function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwlKaHFTDSOHSAlFM1fWvthltFygfAsl72r1yiSn9wDY30SB5RhaIXoYeeBej0gqffU/exec"; // Replace with your script URL

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("success");
          e.target.reset();
        } else {
          throw new Error("Failed to submit the form");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setSubmissionStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);

        setTimeout(() => {
          setSubmissionStatus("");
        }, 6000);
      });
  };

  return (
    <section id="ContactSection">
      <p className="para-text">Want To Talk?</p>
      <h2 className="contact-heading">
        <span className="black">Contact</span> <span className="red">Me</span>
      </h2>
      <div className="contact-container">
        <div className="image-container">
          <img
            src="/Contact-Me.svg"
            alt="contact-me"
            className="contact-me-image"
          />
        </div>
        <div className="form-container">
          <form
            onSubmit={handleSubmit}
            name="submit-to-google-sheet"
            className="Form"
          >
            <div className="input-container">
              <Input
                name={"Name"}
                type={"text"}
                placeholder={"Your Full Name"}
                id={"name-field"}
                label={"Your Name"}
              />
              <Input
                type={"email"}
                placeholder={"Email"}
                id={"email-field"}
                label={"Your Email"}
                name={"Email"}
              />
              <Input
                type={"text"}
                placeholder={"Type Message..."}
                id={"message-field"}
                label={"Message"}
                name={"Message"}
              />
            </div>
            <div className="submit-button-container">
              <button className="submit-button" type="submit">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {submissionStatus === "success" && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {submissionStatus === "error" && (
              <p className="error-message">
                There was a problem. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-body">
          <div className="footer-items-container">
            <a
              href="mailto:bhardwajsanjeev98055@gmail.com"
              className="footer-link"
            >
              <div className="footer-image-container">
                <img
                  src="/gmail.png"
                  alt="Gmail"
                  className="footer-section-icon"
                />
              </div>
            </a>
          </div>
          <div className="footer-items-container">
            <a
              href="https://www.linkedin.com/in/sanjeev-kumar-a58852252/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <div className="footer-image-container">
                <img
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  className="footer-section-icon"
                />
              </div>
            </a>
          </div>
          <div className="footer-items-container">
            <a
              href="https://github.com/Sanjeev-Kumar08"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <div className="footer-image-container">
                <img
                  src="/github.png"
                  alt="Github"
                  className="footer-section-icon"
                />
              </div>
            </a>
          </div>
          <div className="footer-items-container">
            <a
              href="https://leetcode.com/u/bracerishu/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <div className="footer-image-container">
                <img
                  src="/leetcode.png"
                  alt="Leetcode"
                  className="footer-section-icon"
                />
              </div>
            </a>
          </div>
          <div className="footer-items-container">
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <div className="footer-image-container">
                <img
                  src="/instagram.jpeg"
                  alt="Instagram"
                  className="footer-section-icon"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="copyright-text">Copyright © 2025 Sanjeev-Kumar</div>
      </footer>
    </section>
  );
}

export default Contact;
