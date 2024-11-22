// Mock User Data
let users = [
    { id: 1, username: 'Virat Kohli', email:'ViratKohli@gmail.com',role: 'Admin', status: 'Active' },
    { id: 2, username: 'Rohit Sharma',email:'RohitSharma@gmail.com', role: 'User', status: 'Inactive' },
  ];
  
  // Mock Role Data
  let roles = [
    { name: 'Admin', permissions: ['Read', 'Write'] },
    { name: 'User', permissions: ['Read'] },
  ];
  
  // Simulate API Call to Fetch Users
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 1000); // Simulate 1 second delay
    });
  };
  
  // Simulate API Call to Add a User
  export const addUser = (newUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userWithId = { ...newUser, id: users.length + 1 };
        users.push(userWithId);
        resolve(userWithId);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  // Simulate API Call to Update a User
  export const updateUser = (id, updatedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.map((user) => (user.id === id ? { ...user, ...updatedData } : user));
        resolve({ id, ...updatedData });
      }, 1000);
    });
  };
  
  // Simulate API Call to Delete a User
  export const deleteUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.filter((user) => user.id !== id);
        resolve({ message: `User with ID ${id} deleted` });
      }, 1000);
    });
  };
  
  // Simulate API Call to Fetch Roles
  export const fetchRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 1000); // Simulate 1 second delay
    });
  };
  
  // Simulate API Call to Add a Role
  export const addRole = (newRole) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles.push(newRole);
        resolve(newRole);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  // Simulate API Call to Update a Role
  export const updateRole = (name, updatedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.map((role) => (role.name === name ? { ...role, ...updatedData } : role));
        resolve({ name, ...updatedData });
      }, 1000);
    });
  };
  
  // Simulate API Call to Delete a Role
  export const deleteRole = (name) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.filter((role) => role.name !== name);
        resolve({ message: `Role ${name} deleted` });
      }, 1000);
    });
  };
  