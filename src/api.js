import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchProducts = async () => {
  return await axios.get(`${API_URL}/products`);
};
