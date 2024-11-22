import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userImage from "../assets/user.jpg"; // Import the user image
import '../styles/UserDashboard.css'

const UserDashboard = () => {
  const [userData, setUserData] = useState({
    username: "user",
    email: "user@gmail.com",
    role: "user",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newUserData, setNewUserData] = useState(userData);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      navigate("/login");
    }

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setNewUserData(JSON.parse(storedUserData));
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userData");
    toast.success("You have logged out successfully!");
    navigate("/login");
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setUserData(newUserData);
    sessionStorage.setItem("userData", JSON.stringify(newUserData));
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setIsChangingPassword(false);
    setNewPassword("");
    toast.success("Password changed successfully!");
  };

  return (
    <div className="container mt-5">
      {/* User Image */}
      <div className="text-center mb-4">
        <img
          src={userImage}
          alt="User"
          className="rounded-circle"
          style={{ width: "150px", height: "150px", objectFit: "cover", border: "5px solid #f4f4f9" }}
        />
      </div>

      <h1>Welcome to Your Dashboard, {userData.username}!</h1>

      {/* Profile Section */}
      <div className="card mt-4">
        <div className="card-header">Profile Details</div>
        <div className="card-body">
          <h5 className="card-title">Profile Information</h5>

          {isEditing ? (
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={newUserData.username}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newUserData.email}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, email: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Role:</strong> {userData.role}</p>
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                Update Profile
              </button>
            </>
          )}
        </div>
      </div>

      {/* Password Change Section */}
      <div className="mt-4">
        {isChangingPassword ? (
          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Change Password
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setIsChangingPassword(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <button className="btn btn-warning" onClick={() => setIsChangingPassword(true)}>
            Change Password
          </button>
        )}
      </div>

      {/* Logout Button */}
      <div className="mt-4">
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
