import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle event creation logic here
        console.log('Event Created:', {
            eventName,
            eventDate,
            eventDescription,
        });

        // Clear the form
        setEventName('');
        setEventDate('');
        setEventDescription('');
        alert('Event created successfully!');
    };

    return (
        <div className="create-event">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        type="date"
                        id="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDescription">Event Description</label>
                    <textarea
                        id="eventDescription"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        placeholder="Enter event description"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
