import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,  // Ensure location is required
    },
    time: {
        type: String,
        required: true,  // Ensure time is required
    },
    images: [{
        url: String,
        altText: String,
    }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
