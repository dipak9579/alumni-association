// src/components/Events.js
import React from 'react';
import './Event.css';

const Events = () => {
  const events = [
    {
      title: 'Web Development Workshop',
      description: 'Learn the basics of web development in this hands-on workshop, exclusively for alumni members.',
      date: 'Feb 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Alumni Center, Building A',
      registrationUrl: 'https://example.com/register-web-dev-workshop',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Annual Gala Dinner',
      description: 'Join us for an evening of celebration, networking, and great food at the Annual Gala Dinner.',
      date: 'Mar 22, 2024',
      time: '6:00 PM - 11:00 PM',
      location: 'Grand Ballroom, City Hotel',
      registrationUrl: 'https://example.com/register-gala-dinner',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // Add more events here as needed
  ];

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="event-items">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="event-date">Date: {event.date}</span>
              <span className="event-time">Time: {event.time}</span>
              <span className="event-location">Location: {event.location}</span>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
