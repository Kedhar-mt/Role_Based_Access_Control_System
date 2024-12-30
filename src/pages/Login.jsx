import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImage from "../assets/login.jpg"; // Import the image
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminCredentials = { username: "admin", password: "admin123", role: "admin" };
  const userCredentials = { username: "user", password: "user123", role: "user" };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminCredentials.username && password === adminCredentials.password) {
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("role", adminCredentials.role);
      toast.success("Admin login successful!");
      navigate("/dashboard");
    } else if (username === userCredentials.username && password === userCredentials.password) {
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("role", userCredentials.role);
      toast.success("User login successful!");
      navigate("/user-dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={loginImage} alt="Login Illustration" />
        <h2>Login</h2>
        <p>Please enter your credentials to access the dashboard.</p>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username (e.g., user or admin)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password (e.g., user123 or admin123)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
