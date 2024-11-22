import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import '../styles/UserManagement.css'

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState("name");
  const [filteredRole, setFilteredRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: null,
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  useEffect(() => {
    setUsers([
      { id: 1, name: "Virat Kohli", email: "Virat@gmail.com", role: "Admin", status: "Active" },
      { id: 2, name: "Rohit Sharma", email: "Rohit@gmail.com", role: "User", status: "Inactive" },
    ]);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("role");
    toast.success("You have logged out successfully!");
    window.location.href = "/login";
  };

  const handleSort = (sortBy) => {
    setSortedBy(sortBy);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilteredRole(e.target.value);
  };

  const handleEditUser = (user) => {
    setNewUser(user);
    setShowAddUserModal(true);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === newUser.id ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers);
    setNewUser({ id: null, name: "", email: "", role: "User", status: "Active" });
    setShowAddUserModal(false);
    toast.success("User updated successfully!");
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
    setNewUser({ id: null, name: "", email: "", role: "User", status: "Active" });
    setShowAddUserModal(false);
    toast.success("User added successfully!");
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    toast.success("User deleted successfully!");
  };

  const sortUsers = (users) => {
    return users.sort((a, b) => {
      if (sortedBy === "name") return a.name.localeCompare(b.name);
      if (sortedBy === "role") return a.role.localeCompare(b.role);
      return 0;
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filteredRole === "All" || user.role === filteredRole)
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard - User Management</h2>
      <p>Manage your users efficiently.</p>

      <div className="row mb-3">
        <div className="col-md-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name or email"
            className="form-control"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </div>

        <div className="col-md-4">
          {/* Filter by Role */}
          <select
            className="form-control"
            value={filteredRole}
            onChange={handleFilterChange}
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="col-md-4">
          {/* Sorting Options */}
          <div className="d-flex">
            <button onClick={() => handleSort("name")} className="btn btn-secondary mr-2">
              Sort by Name
            </button>
            <button onClick={() => handleSort("role")} className="btn btn-secondary">
              Sort by Role
            </button>
          </div>
        </div>
      </div>

      {/* Add User Button */}
      <button
        className="btn btn-success mb-3"
        onClick={() => setShowAddUserModal(!showAddUserModal)} // Toggle the form visibility
      >
        {showAddUserModal ? "Close Form" : "Add User"}
      </button>

      {/* Add or Edit User Form */}
      {showAddUserModal && (
        <div className="mb-3">
          <h3>{newUser.id ? "Update User" : "Add New User"}</h3>
          <form onSubmit={newUser.id ? handleUpdateUser : handleAddUser}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                required
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              {newUser.id ? "Update User" : "Add User"}
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-3 ml-2"
              onClick={() => setShowAddUserModal(false)} // Close form without adding
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* User Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortUsers(currentUsers).map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`badge ${user.status === "Active" ? "badge-success" : "badge-danger"}`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map((_, index) => (
            <li key={index} className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserManagement;
