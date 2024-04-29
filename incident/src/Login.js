import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'ashu' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/Registration');
  };

  const handleForget=()=>{
    navigate('/Password');
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
      <button onClick={handleForget}>Forgot</button>
    </div>
  );
};

export default Login;
