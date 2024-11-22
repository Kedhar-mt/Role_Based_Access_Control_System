import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";

import ProtectedRoute from "./routes/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/user-dashboard">User Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
          </Route>

          {/* User Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
