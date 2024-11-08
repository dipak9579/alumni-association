
import React, { useEffect, useState } from 'react';
import college1 from "../../assets/college1.jpg"
import college2 from "../../assets/college2.jpg"
import college3 from "../../assets/college3.jpg"
import college4 from "../../assets/college4.jpg"
import { Link } from 'react-router-dom';
import './HeroSection.css';

const images = [
  college3,
  college4,
  college1,
  // Add more image URLs here
];

const HeroSectionSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }, []);
  
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="hero-section-slider">
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div className="hero-gradient"></div> {/* Gradient overlay */}
          <div className="hero-content">
            <h1>Welcome to the Alumni Association</h1>
            <p>Reconnect with fellow alumni, stay updated on events, and be part of a vibrant community.</p>
            <div className="hero-buttons">
             <Link to="/register"><button className="btn-primary">Register</button></Link> 
              <button className="btn-secondary">Explore Events</button>
            </div>
          </div>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default HeroSectionSlider;