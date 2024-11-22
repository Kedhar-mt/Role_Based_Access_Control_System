import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify'; // Assuming react-toastify is being used

const UserForm = ({ onSave, roles, userToEdit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');
  const [buttonText, setButtonText] = useState('Save User');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const toastRef = useRef(false); // Track if the toast has already been triggered

  // When userToEdit changes, populate the form fields with the current user data
  useEffect(() => {
    if (userToEdit) {
      setUsername(userToEdit.username);
      setEmail(userToEdit.email);
      setRole(userToEdit.role);
      setStatus(userToEdit.status);
      setButtonText('Update User'); // Change button text to "Update"
    } else {
      setButtonText('Save User'); // Reset to "Save User" for new user
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    // Validate fields before saving
    if (!username || !email || !role) {
      toast.error('Please fill out all fields!');
      return;
    }

    setIsSubmitting(true); // Set submitting state to true

    const user = {
      username,
      email,
      role,
      status,
    };

    // Pass the user data back to the parent component
    onSave(user);

    // Show toast only if it's not shown already (using useRef)
    if (!toastRef.current) {
      toastRef.current = true; // Mark the toast as triggered
      toast.success(userToEdit ? 'User updated successfully!' : 'User saved successfully!');
    }

    // Clear form after save
    setUsername('');
    setEmail('');
    setRole('');
    setStatus('Active');

    setIsSubmitting(false); // Reset submitting state after action
  };

  return (
    <div className="container">
      <h3>{buttonText}</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              {roles.map((role, index) => (
                <option key={index} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
