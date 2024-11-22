import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <button className="btn btn-primary mr-2" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
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

export default UserTable;
