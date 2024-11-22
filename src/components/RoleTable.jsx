import React from 'react';

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button className="btn btn-primary mr-2" onClick={() => onEdit(role)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(role.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
