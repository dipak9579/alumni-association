import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobList.css';


const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/jobs/getJobs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data.jobPosts);
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-post" key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p className="posted-by">Posted by: {job.postedBy.name} ({job.postedBy.role})</p>
          <p>Location: {job.location}</p>
          <p>Requirements: {job.requirements.join(', ')}</p>
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="apply-link">Apply Here</a>
        </div>
      ))}
    </div>
  );
  
};

export default JobList;
