import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("role");
    toast.success("You have logged out successfully!");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the RBAC system, Admin!</p>

      {/* Navigation Buttons */}
      <div className="row mt-4">
        {/* User Management Section */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">Add, edit, or delete users in the system.</p>
              <Link to="/users" className="btn btn-primary">
                Manage Users
              </Link>
            </div>
          </div>
        </div>

        {/* Role Management Section */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Role Management</h5>
              <p className="card-text">Define and manage roles and their permissions.</p>
              <Link to="/roles" className="btn btn-primary">
                Manage Roles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-3">
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Dashboard;