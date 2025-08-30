import React from 'react';
import './ui.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>🌍 USGS Earthquake Visualizer</h1>
      <p>Visualizing all recorded earthquakes from the past 24 hours.</p>
    </header>
  );
};

export default Header;