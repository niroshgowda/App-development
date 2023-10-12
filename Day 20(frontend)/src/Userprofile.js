import React from 'react';
import './Userprofile.css';
import Navbar from './Navbar';

const Userprofile= () => {
  const userActivityData = [
    {
     Name: 'Nirosh',
     Email: 'niro@gmail.com',
     Password: 'niro#123',
     UsagePercentage: '70%',
    },
    {
      Name: 'Log',
     Email: 'log@gmail.com',
     Password: 'log23',
     UsagePercentage: '60%',
    },
    {
      Name: 'Ben',
     Email: 'Ben@gmail.com',
     Password: 'Ben78',
     UsagePercentage: '80%',
    },

  ];

  return (
    <div className="table-container">
    <Navbar/>
      <h1>User Activity Table</h1>
      <table className="user-activity-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Usage Percentage</th>
          </tr>
        </thead>
        <tbody>
          {userActivityData.map((activity, index) => (
            <tr key={index}>
              <td>{activity.Name}</td>
              <td>{activity.Email}</td>
              <td>{activity.Password}</td>
              <td>{activity.UsagePercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userprofile;
