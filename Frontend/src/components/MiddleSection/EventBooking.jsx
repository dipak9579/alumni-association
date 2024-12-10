import React, { useState } from 'react';
import axios from 'axios';
import './EventBooking.css'; // Add custom styles if needed

const EventBooking = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage('');
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:5000/api/bookings/create', {
                name,
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the header.
                },
            });

            setMessage(response.data.message);
            setName('');
            setEmail('');
        } catch (error) {
            setError(error.response?.data?.message || 'Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="event-booking">
            <h2>Book Your Spot</h2>
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Book Now'}
                </button>
            </form>
        </div>
    );
};

export default EventBooking;
