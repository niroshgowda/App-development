// src/components/Tips.js
import React from 'react';
import './Tips.css';
import Admin from './Admin';

const Tips = () => {
  const travelTips = [
    {
      id: 1,
      title: 'Packing Tips',
      content: 'Pack light and only bring the essentials. Don’t forget travel adapters and chargers.',
    },
    {
      id: 2,
      title: 'Budget Travel',
      content: 'Set a budget for your trip and stick to it. Look for affordable accommodation and dining options.',
    },
    {
      id: 3,
      title: 'Stay Connected:',
      content: 'Purchase a local SIM card or an international data plan to stay connected.'
    },
    {
      id: 4,
      title: 'Learn Basic Phrases',
      content: 'Learn a few basic phrases in the local language. Locals appreciate it when you make an effort.',
    },
    {
      id: 5,
      title: 'Leave No Trace',
      content: 'Respect the environment by disposing of waste properly and avoiding activities that harm nature.',
    },
  ];

  return (
    <div className="tips-container">
    <Admin/>
      <h1 className="tips-heading">Travel Tips</h1>
      <ul className="tips-list">
        {travelTips.map((tip, index) => (
          <li key={tip.id} className={`tip-item-${index}`}>
            <h2 className="tip-title">{tip.title}</h2>
            <p className="tip-content">{tip.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
