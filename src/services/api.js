import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Adjust the base URL if needed for your MockAPI or backend

// User-related API calls
export const getUsers = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/users`);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (user) => {
  try {
    return await axios.post(`${API_BASE_URL}/users`, user);
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    return await axios.put(`${API_BASE_URL}/users/${id}`, user);
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/users/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Role-related API calls
export const getRoles = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/roles`);
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
};

export const addRole = async (role) => {
  try {
    return await axios.post(`${API_BASE_URL}/roles`, role);
  } catch (error) {
    console.error('Error adding role:', error);
    throw error;
  }
};

export const updateRole = async (id, role) => {
  try {
    return await axios.put(`${API_BASE_URL}/roles/${id}`, role);
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
};

export const deleteRole = async (id) => {
  try {
    return await axios.delete(`${API_BASE_URL}/roles/${id}`);
  } catch (error) {
    console.error('Error deleting role:', error);
    throw error;
  }
};
