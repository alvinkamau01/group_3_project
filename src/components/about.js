import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <h2 className="about-section-title text-center">About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-content-box">
            <div className="about-icon-wrapper">
              <img src="https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami10-31-128.png" alt="Mission Icon" className="img-fluid" />
            </div>
            <h3 className="about-content-title">Our Mission</h3>
            <p className="about-content-text">
              We are dedicated to providing the best services to our customers. Our mission is to 
              deliver high-quality products and exceptional customer service that exceeds your expectations.
            </p>
          </div>
          <div className="about-content-box">
            <div className="about-icon-wrapper">
              <img src="https://cdn0.iconfinder.com/data/icons/untact-economy-1/32/ecommerce_career_rock_climber_climber_mission_career_objective-128.png" alt="Vision Icon" className="img-fluid" />
            </div>
            <h3 className="about-content-title">Our Vision</h3>
            <p className="about-content-text">
              To be a leader in our industry, known for our commitment to innovation and sustainability. 
              We strive to create a positive impact in the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;