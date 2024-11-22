import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Import toast
import RoleForm from '../components/RoleForm'; // Adjust the path as needed
import { fetchRoles, addRole, updateRole, deleteRole } from '../mockApi'; // Import mock API functions

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null); // To store the role being edited

  // Available permissions
  const allPermissions = ['Read', 'Write', 'Delete'];

  // Fetch roles when the component is mounted
  useEffect(() => {
    const getRoles = async () => {
      const fetchedRoles = await fetchRoles(); // Mock API call to fetch roles
      setRoles(fetchedRoles);
    };
    getRoles();
  }, []);

  const handleSave = async (role) => {
    try {
      if (editingRole) {
        // Update existing role
        await updateRole(role); // Mock API call to update role
        setRoles(
          roles.map((r) => (r.name === editingRole.name ? role : r))
        );
        setEditingRole(null); // Reset the editing state
        toast.success('Role updated successfully!'); // Show success toast
      } else {
        // Add new role
        await addRole(role); // Mock API call to add new role
        setRoles([...roles, role]);
        toast.success('Role added successfully!'); // Show success toast
      }
      console.log('Role saved:', role);
    } catch (error) {
      toast.error('Error saving role!'); // Show error toast
      console.error('Error saving role:', error);
    }
  };

  const handleEdit = (index) => {
    setEditingRole(roles[index]); // Set the role being edited
  };

  const handleDelete = async (index) => {
    try {
      const roleToDelete = roles[index];
      await deleteRole(roleToDelete.name); // Mock API call to delete role
      const updatedRoles = roles.filter((role, i) => i !== index);
      setRoles(updatedRoles);
      toast.success('Role deleted successfully!'); // Show success toast
      console.log('Role deleted at index:', index);
    } catch (error) {
      toast.error('Error deleting role!'); // Show error toast
      console.error('Error deleting role:', error);
    }
  };

  return (
    <div className="container">
      <h1>Role Management</h1>

      {/* Pass the editing role (if any) to pre-fill the form inputs */}
      <RoleForm onSave={handleSave} role={editingRole} permissions={allPermissions} />

      <h2 className="mt-4">Roles List</h2>
      {roles.length === 0 ? (
        <p>No roles added yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Role</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr key={index}>
                  <td>{role.name}</td>
                  <td>{role.permissions.join(', ')}</td>
                  <td>
                    <div className="button-group">
                      <button
                        className="btn btn-warning btn-sm mx-1"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
