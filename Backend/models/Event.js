import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    images: [
        {
          url: String,
          altText: String,
        },
      ],
    eventDate: {
        type: Date,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
