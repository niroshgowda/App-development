import React from 'react';
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './Analyses.css';
import Navbar from './Navbar';

const pieChartData = [
  { name: 'Rare users', value: 53 },
  { name: 'Others', value: 15 },
  { name: 'Active users', value: 32 },
];

const barChartData = [
  { name: 'Category A', users: 10 },
  { name: 'Category B', users: 25 },
  { name: 'Category C', users: 40 },
  // Add more data points as needed
];

const COLORS = ['#ff6347', '#000000', '#00CED1'];

const Analyses = () => {
  return (
    <div>
    <Navbar/>
    <div className="analysis-container">
      <div className="pie-chart-container">
        <h2 className="h2">Usage of our Website</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="center" iconType="circle" />
        </PieChart>
      </div>
      <div className="bar-chart-container">
        <h2 className="h23">User Categories</h2>
        <BarChart width={400} height={400} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
    </div>
  );
};

export default Analyses;
