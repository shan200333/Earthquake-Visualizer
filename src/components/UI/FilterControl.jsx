
import React from 'react';
import './ui.css';

const FilterControl = ({ minMagnitude, onFilterChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="magnitude-filter">Show magnitude:</label>
      <select 
        id="magnitude-filter" 
        value={minMagnitude} 
        onChange={onFilterChange}
      >
        <option value="0">All</option>
        <option value="2.5">2.5+</option>
        <option value="4.5">4.5+</option>
        <option value="6.5">6.5+</option>
      </select>
    </div>
  );
};

export default FilterControl;