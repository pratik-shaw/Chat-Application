// src/api/api.ts

import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:5000'; // Update to your backend URL

// Function to create a user account
export const createUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/users`, { email, password });
    return response.data;
};

// You can also add other API functions, like loginUser
export const loginUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/login`, { email, password });
    return response.data;
};

// Export other functions as needed
