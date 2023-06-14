import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to "Akshith" Travels</h1>
      <p className="home-subtitle">
        Discover, Plan, and Embark on Unforgettable Adventures
      </p>
      <div className="cta-container">
        <h2 className="cta-title">Start Your Journey Now</h2>
        <button className="cta-button">Explore Destinations</button>
      </div>
      <div className="feature-container">
        <div className="feature">
          <i className="fas fa-globe-americas feature-icon"></i>
          <h3 className="feature-title">Explore Exotic Locations</h3>
          <p className="feature-description">
            Uncover hidden gems and explore breathtaking destinations around the
            globe.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-hotel feature-icon"></i>
          <h3 className="feature-title">Find the Perfect Accommodation</h3>
          <p className="feature-description">
            Discover a wide range of accommodations to suit every taste and
            budget.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-map-signs feature-icon"></i>
          <h3 className="feature-title">Create Your Itinerary</h3>
          <p className="feature-description">
            Plan your itinerary with ease and make the most out of your travel
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
