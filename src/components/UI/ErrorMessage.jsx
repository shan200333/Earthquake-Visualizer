import React from 'react';
import './ui.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="center-container">
      <div className="error-message">
        <p><strong>Error:</strong> {message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;