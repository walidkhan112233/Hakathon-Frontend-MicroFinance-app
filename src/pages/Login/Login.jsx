import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find user with matching credentials
    const user = users.find(
      (u) =>
        u.cnic === cnic &&
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save logged-in user details
      alert("Login successful!");
      navigate("/userdashboard"); // Redirect to User Dashboard
    } else {
      alert("Invalid CNIC, Email, or Password!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label>CNIC:</label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Enter your CNIC"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
