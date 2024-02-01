// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">Modern Login</div>
        <div className="input-group">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            className="input-field"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-primary" type="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
