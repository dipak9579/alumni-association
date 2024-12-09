import Event from '../models/Event.js';

// Create a new event
export const createEvent = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { eventName, eventDate, eventDescription, location, time } = req.body;

        // Validate input to ensure all fields are provided
        if (!eventName || !eventDate || !eventDescription || !location || !time) {
            return res.status(400).json({ message: 'All fields (eventName, eventDate, eventDescription, location, time) are required' });
        }

        // Check if an image was uploaded
        let image = {};
        if (req.file) {
            image = {
                url: req.file.path,
                altText: `${eventName} - Event Image`,
            };
        }

        // Create the new event
        const newEvent = new Event({
            eventName,
            eventDate,
            eventDescription,
            location,  // Add location to the event object
            time,      // Add time to the event object
            images: [image], // Save image as an array with a single object (if uploaded)
        });

        // Save the event to the database
        await newEvent.save();

        // Send a success response with the newly created event data
        res.status(201).json({
            message: 'Event created successfully',
            event: newEvent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



// Controller function to fetch all events
export const getAllEvents = async (req, res) => {
    try {
        // Retrieve all events from the database
        const events = await Event.find();

        // If no events are found
        if (events.length === 0) {
            return res.status(404).json({ message: 'No events found' });
        }

        // Send the events data as response
        res.status(200).json({
            message: 'Events fetched successfully',
            events: events
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


