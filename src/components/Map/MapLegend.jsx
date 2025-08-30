import React from 'react';
import './style.css';

const Legend = () => {
  const grades = [0, 1.0, 2.5, 4.5, 6.5, 8.0];
  const colors = ['#a3f600', '#dcf400', '#f7db11', '#fdb72a', '#fca35d', '#ff5f65'];
  const labels = ['< 1.0', '1.0 - 2.5', '2.5 - 4.5', '4.5 - 6.5', '6.5 - 8.0', '> 8.0'];

  return (
    <div className="legend">
      <h4>Magnitude</h4>
      {grades.map((grade, index) => (
        <div key={grade} className="legend-item">
          <i style={{ backgroundColor: colors[index] }}></i>
          <span>{labels[index]}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;