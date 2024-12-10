// src/models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
   
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Booking', bookingSchema);
