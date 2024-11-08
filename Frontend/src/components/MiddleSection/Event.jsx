// src/components/Events.js
import React from 'react';
import './Event.css';

const Events = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="event-items">
        <div className="event-card">
          <img src="https://via.placeholder.com/300x200" alt="Web Development Workshop" className="event-image" />
          <div className="event-info">
            <h3>Web Development Workshop</h3>
            <p>Learn the basics of web development in this hands-on workshop, exclusively for alumni members.</p>
            <span className="event-date">Feb 15, 2024</span>
          </div>
        </div>
        <div className="event-card">
          <img src="https://via.placeholder.com/300x200" alt="Annual Gala Dinner" className="event-image" />
          <div className="event-info">
            <h3>Annual Gala Dinner</h3>
            <p>Join us for an evening of celebration, networking, and great food at the Annual Gala Dinner.</p>
            <span className="event-date">Mar 22, 2024</span>
          </div>
        </div>
        {/* Add more events as needed */}
      </div>
    </section>
  );
};

export default Events;
