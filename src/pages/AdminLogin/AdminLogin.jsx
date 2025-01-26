import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials
    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin1234';

    if (email === adminEmail && password === adminPassword) {
      setError('');
      alert('Login successful');
      navigate('/admindashboard');  // Redirect to admin dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
