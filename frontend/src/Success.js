import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Success.css';

function Success({ onLogout }) {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2 className="text-center mb-3">Login Successful!</h2>
        <p className="text-center mb-4">Welcome to your dashboard, admin.</p>
        <button onClick={onLogout} className="btn btn-outline-primary w-100">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Success;
