import express from 'express';
import { createEvent,getAllEvents } from '../controllers/eventController.js';
import upload from '../config/multerConfig.js'

const router = express.Router();

// POST route to create a new event
router.post('/create',upload.single('image'), createEvent);
// Route to get all events
router.get('/allEvent', getAllEvents);

export default router;
