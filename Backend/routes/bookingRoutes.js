// src/routes/bookingRoutes.js
import express from 'express';
import { createBooking} from '../controllers/bookingController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to create a booking
router.post('/create',authMiddleware, createBooking);



export default router;
