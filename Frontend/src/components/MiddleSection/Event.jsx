import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API requests
import './Event.css';

const Events = () => {
  const [events, setEvents] = useState([]); // Store events from the API
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // Store any errors

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/allEvent'); // Make the GET request to the API
        setEvents(response.data.events); // Set the events data in the state
      } catch (err) {
        setError('Failed to load events.'); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    fetchEvents(); // Call the function to fetch events
  }, []); // Empty dependency array means this will run once when the component mounts

  if (loading) {
    return <div>Loading events...</div>; // Show loading text while events are being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there was an error fetching events
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
               
                <button className="regBtn" >
                  Register Now
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
