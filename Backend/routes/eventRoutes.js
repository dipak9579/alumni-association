import express from 'express';
import { createEvent } from '../controllers/eventController.js';
import upload from '../config/multerConfig.js'

const router = express.Router();

// POST route to create a new event
router.post('/create',upload.single('image'), createEvent);

export default router;
