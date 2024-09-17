// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Create this CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="banner-image-url.jpg" alt="Banner" className="banner-image" />
      <h1>Welcome to My Feed App</h1>
    </div>
  );
};

export default HeroSection;
