import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-subtitle">Who We Are</h3>
          <p className="about-description">
            We are a passionate team of travel enthusiasts dedicated to creating
            unforgettable journeys for our clients. With years of experience in
            the travel industry, we have established ourselves as a reliable and
            trusted travel organizing company.
          </p>
        </div>
        <div className="about-text">
          <h3 className="about-subtitle">Our Mission</h3>
          <p className="about-description">
            Our mission is to provide exceptional travel experiences that
            inspire and create lifelong memories. We strive to offer
            personalized itineraries, handpicked accommodations, and expert
            guidance to ensure that each journey exceeds our clients'
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
