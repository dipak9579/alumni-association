// src/components/SuccessStories.js
import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories">
        <div className="story">
          <div className="image-overlay">
            <img src="https://via.placeholder.com/80" alt="Jane Doe" className="alumni-image" />
          </div>
          <div className="story-content">
            <p>"Thanks to the alumni association, I connected with mentors who helped me land my dream job!"</p>
            <span>- Jane Doe, Class of 2015</span>
          </div>
        </div>
        <div className="story">
          <div className="image-overlay">
            <img src="https://via.placeholder.com/80" alt="John Smith" className="alumni-image" />
          </div>
          <div className="story-content">
            <p>"The alumni network provided funding and support for my startup. I'm forever grateful."</p>
            <span>- John Smith, Class of 2010</span>
          </div>
        </div>
        {/* Add more success stories as needed */}
      </div>
    </section>
  );
};

export default SuccessStories;
