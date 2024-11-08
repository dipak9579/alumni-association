// src/components/RecentNews.js
import React from 'react';
import './RecentNews.css';

const RecentNews = () => {
  return (
    <section className="recent-news">
      <h2>Recent News</h2>
      <div className="news-items">
        <div className="news-card">
          <h3>Alumni Meetup 2024 Announced</h3>
          <p>Our annual alumni meetup is set for March 2024! Register now to reconnect and network with fellow alumni.</p>
        </div>
        <div className="news-card">
          <h3>New Scholarship Fund</h3>
          <p>A new scholarship fund has been created to support students from underrepresented backgrounds.</p>
        </div>
        {/* Add more news items as needed */}
      </div>
    </section>
  );
};

export default RecentNews;
