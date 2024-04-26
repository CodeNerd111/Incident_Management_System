import React from 'react';
//import './DashboardIncident.css';
 
const Dashboard = () => {
  return (
    <div className="dashboard-incident-page">
      <h2>Dashboard Incident Page</h2>
      {/* Your incident dashboard content goes here */}
 
      {/* Buttons */}
      <div className="buttons">
        <button className="create-button">Create</button>
        <button className="view-button">View</button>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}
 
export default Dashboard;