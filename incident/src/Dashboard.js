import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="buttons">
        <Link to="/create" className="create-button">Create</Link>
        <Link to="/view" className="view-button">View</Link>
      </div>
    </div>
  );
};

export default Dashboard;




