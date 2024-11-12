import express from 'express';
import { registerUser, loginUser,getUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/profile', authMiddleware, getUserProfile);

// Student-only route
router.get('/student-dashboard', authMiddleware, roleMiddleware('student'), (req, res) => {
  res.json({ message: 'Welcome to the student dashboard' });
});

// Alumni-only route
router.get('/alumni-dashboard', authMiddleware, roleMiddleware('alumni'), (req, res) => {
  res.json({ message: 'Welcome to the alumni dashboard' });
});

export default router;
