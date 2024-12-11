import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css'; // Add custom styles

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, email, eventName } = location.state || {}; // Extract data passed via state

  if (!name || !email) {
    // Redirect back to the events page if accessed directly without state
    navigate('/events');
    return null;
  }

  return (
    <div className="confirmation">
      <h2>Booking Confirmation</h2>
      <p>Thank you, <strong>{name}</strong>, for booking your spot!</p>
      <p>We’ve sent a confirmation email to <strong>{email}</strong>.</p>
      {eventName && <p>You are booked for the event: <strong>{eventName}</strong>.</p>}
      <button className="btn-home" onClick={() => navigate('/events')}>
        Back to Events
      </button>
    </div>
  );
};

export default Confirmation;
