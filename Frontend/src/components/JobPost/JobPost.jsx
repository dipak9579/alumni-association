import React, { useState } from 'react';
import axios from 'axios';
import './JobPost.css';


const CreateJobPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [requirements, setRequirements] = useState('');
  const [applyUrl, setApplyUrl] = useState('');  // New state for application URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/jobs/create',
        { title, description, location, requirements: requirements.split(','), applyUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Job post created successfully!');
    } catch (error) {
      console.error('Error creating job post', error);
      alert('Failed to create job post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form1'>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="text" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Requirements (comma separated)" />
      <input type="url" value={applyUrl} onChange={(e) => setApplyUrl(e.target.value)} placeholder="Application URL" required />  {/* New input */}
      <button type="submit">Create Job Post</button>
    </form>
  );
};

export default CreateJobPost;
