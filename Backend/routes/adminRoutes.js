import express from 'express';
import { loginAdmin,getProtectedRoute } from '../controllers/adminController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

// Admin login route
router.post('/login', loginAdmin);
router.get('/protected-route', authenticateToken, getProtectedRoute);

export default router;

