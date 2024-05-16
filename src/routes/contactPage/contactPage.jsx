import "./contactPage.scss";

import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p className="intro-text">
        Welcome to PM Estate, your trusted partner in real estate. Whether
        you're looking to buy, rent, or sell, our team is here to assist you.
        Reach out to us through the following contact details:
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Phone</h2>
          <a href="tel:9301937306" className="highlight-box">
            9301937306
          </a>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <a
            href="mailto:priyashumandloi999@gmail.com"
            className="highlight-box"
          >
            priyashumandloi999@gmail.com
          </a>
        </div>
      </div>
      <p className="footer-text">
        We look forward to helping you find your dream home. Visit us at our
        office for a personal consultation.
      </p>
    </div>
  );
};

export default ContactSection;
