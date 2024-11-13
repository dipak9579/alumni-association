// controllers/jobController.js
import JobPost from "../models/JobPost.js";

export const createJobPost = async (req, res) => {
    try {
      const { title, description, location, requirements, applyUrl } = req.body;
  
      const jobPost = await JobPost.create({
        title,
        description,
        location,
        requirements,
        applyUrl,  // Include the URL in the job post creation
        postedBy: req.user.id,
      });
  
      res.status(201).json({ message: 'Job post created successfully', jobPost });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
// Fetch all job posts
export const getJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find().populate('postedBy', 'name role'); // Populate poster details
    res.status(200).json({ jobPosts });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};