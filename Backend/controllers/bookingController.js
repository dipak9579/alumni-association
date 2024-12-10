import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Validate inputs
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        // Create the booking
        const booking = new Booking({ name, email });

        // Save the booking to the database
        const savedBooking = await booking.save();

        res.status(201).json({ 
            message: 'Booking created successfully', 
            booking: savedBooking 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
