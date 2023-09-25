import React from 'react';
import './Userprofile.css';
import Navbar from './Navbar';

const Userprofile= () => {
  const userActivityData = [
    {
      day: 'Day 1',
      loggedIn: '5',
      signedIn: '6',
      photographerProfile:3,
    },
    {
      day: 'Day2',
      loggedIn: '10',
      signedIn: '15',
      photographerProfile: 8,
    },

  ];

  return (
    <div className="table-container">
    <Navbar/>
      <h1>User Activity Table</h1>
      <table className="user-activity-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Logged In</th>
            <th>Signed In</th>
            <th>Photographer's Profile</th>
          </tr>
        </thead>
        <tbody>
          {userActivityData.map((activity, index) => (
            <tr key={index}>
              <td>{activity.day}</td>
              <td>{activity.loggedIn}</td>
              <td>{activity.signedIn}</td>
              <td>{activity.photographerProfile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userprofile;
