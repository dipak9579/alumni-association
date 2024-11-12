// routes/jobRoutes.js
import express from 'express';
import { createJobPost,} from '../controllers/jobController.js';
import { authMiddleware, isAlumni } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Alumni-only route to create a job post
router.post('/create', authMiddleware, isAlumni, createJobPost);

// Route to get all job posts (accessible by students and alumni)
// router.get('/getJobs',  getAllJobPosts);

export default router;
