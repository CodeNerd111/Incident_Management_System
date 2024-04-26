import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For example, you can check if the username and password are valid
    // If valid, you can navigate to another page
    // If invalid, you can show an alert message
    if (username === 'ashu' && password === '1234') {
      // Navigate to the dashboard or any other page
      navigate('/dashboard');
    } else {
      // Show an alert message for invalid credentials
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/Registration');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
