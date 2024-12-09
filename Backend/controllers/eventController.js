import Event from '../models/Event.js';

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const { eventName, eventDate, eventDescription } = req.body;

        // Validate input
        if (!eventName || !eventDate || !eventDescription) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if an image was uploaded
        let image = {};
        if (req.file) {
            image = {
                url: req.file.path,
                altText: `${eventName} - Service Image`,
            };
        }

        // Create new event
        const newEvent = new Event({
            eventName,
            eventDate,
            eventDescription,
            images: [image], // Save image as an array with a single object
        });

        // Save the event to the database
        await newEvent.save();

        // Send response
        res.status(201).json({
            message: 'Event created successfully',
            event: newEvent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


