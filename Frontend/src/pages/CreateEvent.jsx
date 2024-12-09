import React, { useState } from 'react';
import './CreateEvent.css';
import axios from 'axios';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [location, setLocation] = useState('');  // Added location state
    const [time, setTime] = useState('');          // Added time state
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('eventName', eventName);
        formData.append('eventDate', eventDate);
        formData.append('eventDescription', eventDescription);
        formData.append('location', location);  // Added location to formData
        formData.append('time', time);          // Added time to formData
        if (image) formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/api/events/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Event Created:', response.data);
            alert('Event created successfully!');
            setEventName('');
            setEventDate('');
            setEventDescription('');
            setLocation('');  // Clear location field
            setTime('');      // Clear time field
            setImage(null);
        } catch (error) {
            console.error('Error creating event:', error);
            setError('Failed to create event. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="create-event">
            <h2>Create New Event</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                <div className="form-group">
                    <label htmlFor="location">Event Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter event location"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Event Time</label>
                    <input
                        type="text"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="Enter event time"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Event Image</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Creating Event...' : 'Create Event'}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
