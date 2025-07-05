import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded dummy credentials
    if (email === 'user@demo.com' && password === '123456') {
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p style={{ fontSize: '13px' }}>Use: <strong>user@demo.com</strong> / <strong>123456</strong></p>
    </div>
  );
};

export default Login;
