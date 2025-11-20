import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5001/login', {
        username,
        password
      });

      if (response.data.success) {
        setMessage(response.data.message);
        onLogin();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && (
          <div className={`alert mt-3 ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
