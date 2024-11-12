// models/JobPost.js
import mongoose from 'mongoose';

const JobPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  requirements: { type: [String] },
  applyUrl: { type: String, required: true },  // New field for application URL
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('JobPost', JobPostSchema);
