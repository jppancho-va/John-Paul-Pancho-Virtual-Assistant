import React from 'react';

const PerformanceGrid = () => {
  return (
    <section className="performance-grid">
      <div className="grid-header">
        {/* Matching your Tech Stack header style */}
        <h2 className="tech-stack-header">PROVEN IMPACT & PERFORMANCE</h2>
      </div>

      <div className="grid-container">
        <div className="col">
          <img src="/images/weekly_performance1.jpg" alt="Performance 1" />
          <img src="/images/weekly_performance2.jpg" alt="Performance 2" />
          <img src="/images/daily_calls1.jpg" alt="Calls 1" />
          <img src="/images/actual_earnings1.JPG" alt="Earnings 1" />
        </div>
        <div className="col">
          <img src="/images/weekly_performance3.jpg" alt="Performance 3" />
          <img src="/images/weekly_performance4.jpg" alt="Performance 4" />
          <img src="/images/actual_earnings2.JPG" alt="Earnings 2" />
          <img src="/images/daily_calls2.jpg" alt="Calls 2" />
        </div>
        <div className="col">
          <img src="/images/global_ranking.jpg" alt="Global Ranking" />
        </div>
        <div className="col">
          <img src="/images/client_feedback.jfif" alt="Feedback" />
          <img src="/images/customer_survey1.jpg" alt="Survey 1" />
          <img src="/images/customer_survey2.jpg" alt="Survey 2" />
          <img src="/images/customer_survey3.jpg" alt="Survey 3" />
        </div>
      </div>
    </section>
  );
};

export default PerformanceGrid;
