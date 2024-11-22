import React, { useState, useEffect } from 'react';

const RoleForm = ({ role, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    permissions: [], // Initialize empty permissions
  });

  // When role is passed in, set form data to pre-fill the form
  useEffect(() => {
    if (role) {
      setFormData({
        name: role.name,
        permissions: role.permissions || [], // Make sure permissions is an array
      });
    }
  }, [role]); // Run this effect whenever the 'role' prop changes

  // Handle form data changes (e.g., role name)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle permission toggle
  const handlePermissionChange = (permission) => {
    setFormData((prevData) => {
      const newPermissions = [...prevData.permissions];
      if (newPermissions.includes(permission)) {
        // Remove permission
        return {
          ...prevData,
          permissions: newPermissions.filter((perm) => perm !== permission),
        };
      } else {
        // Add permission
        return {
          ...prevData,
          permissions: [...newPermissions, permission],
        };
      }
    });
  };

  // Save the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') {
      alert('Role name cannot be empty');
      return;
    }
    onSave(formData); // Pass formData to onSave function
    setFormData({ name: '', permissions: [] }); // Clear the form after saving
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{role ? 'Edit Role' : 'Add Role'}</h5>
        <form onSubmit={handleSubmit}>
          {/* Role Name Input */}
          <div className="mb-3">
            <label htmlFor="roleName" className="form-label">
              Role Name
            </label>
            <input
              type="text"
              className="form-control"
              id="roleName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Permissions Section */}
          <div className="mb-3">
            <label className="form-label">Permissions</label>
            <div>
              {['Read', 'Write', 'Delete'].map((permission) => (
                <div key={permission} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={permission}
                    checked={formData.permissions.includes(permission)} // Check if permission exists in array
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <label className="form-check-label" htmlFor={permission}>
                    {permission}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            {role ? 'Update Role' : 'Save Role'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
