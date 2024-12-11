import Gallery from '../models/Gallery.js'; // Assume you have a Gallery model
import upload from '../config/multerConfig.js'
export const uploadImage = (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload error', message: err.message });
    }

    try {
      const imageUrl = req.file.path; // Cloudinary URL for the uploaded image

      // Save image URL to MongoDB
      const newImage = new Gallery({
        imageUrl,
      });

      await newImage.save();

      res.status(200).json({ url: imageUrl });
    } catch (err) {
      res.status(500).json({ error: 'Error uploading image to Cloudinary', message: err.message });
    }
  });
};

export const getImages = async (req, res) => {
  try {
    const images = await Gallery.find(); // Fetch all images from the database
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching images', message: err.message });
  }
};


