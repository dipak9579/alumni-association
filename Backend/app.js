import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import jobRoutes from './routes/jobRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import galleryRoutes from './routes/galleryRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/jobs',jobRoutes)
app.use('/api/events',eventRoutes)
app.use('/api/bookings', bookingRoutes);
app.use('/api/gallery', galleryRoutes);

// Admin routes
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => res.send('Alumni Association API is running'));

export default app;
