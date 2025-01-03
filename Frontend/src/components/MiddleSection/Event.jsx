import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Event.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, loading: authLoading } = useAuth(); // Get authentication state
  const navigate = useNavigate();

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/allEvent');
        setEvents(response.data.events);
      } catch (err) {
        setError('Failed to load events.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle "Book Now" button click
  const handleBookNow = (eventId, eventName) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      navigate('/login', {
        state: { redirectTo: `/eventBook`, eventId, eventName },
      });
    } else {
      // Proceed to booking if authenticated
      navigate('/eventBook', { state: { eventId, eventName } });
    }
  };

  if (loading || authLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="event-items">
        {events.length > 0 ? (
          events.map((event) => (
            <div className="event-card" key={event._id}>
              <img
                src={event.images[0]?.url || 'https://via.placeholder.com/300x200'}
                alt={event.eventName}
                className="event-image"
              />
              <div className="event-info">
                <h3>{event.eventName}</h3>
                <p>{event.eventDescription}</p>
                <span className="event-date">
                  Date: {new Date(event.eventDate).toLocaleDateString()}
                </span>
                <span className="event-time">Time: {event.time}</span>
                <span className="event-location">
                  Location: {event.location || 'Not available'}
                </span>
                <button
                  className="regBtn"
                  onClick={() => handleBookNow(event._id, event.eventName)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No events available at the moment.</div>
        )}
      </div>
    </section>
  );
};

export default Events;
