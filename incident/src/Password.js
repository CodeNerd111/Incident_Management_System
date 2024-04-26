import React, { useState } from 'react';
 
const ForgotPassword = ({ onForgotPassword }) => {
  const [email, setEmail] = useState('');
 
  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    onForgotPassword(email);
    // Reset email input after handling forgot password
    setEmail('');
  };
 
  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};
 
export default ForgotPassword;