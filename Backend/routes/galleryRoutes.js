import express from 'express';
import { uploadImage, getImages } from '../controllers/galleryController.js';

const router = express.Router();

router.post('/upload', uploadImage);  // Route for uploading image
router.get('/getImage', getImages);  // Route for fetching all images

export default router;
