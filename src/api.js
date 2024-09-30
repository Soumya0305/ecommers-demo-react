import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchProducts = async (category) => {
  return await axios.get(`${API_URL}/products?category=${category ? category : ""}`);
};

export const getProductDetail = async (productId) => {
  return await axios.get(`${API_URL}/products/${productId}`);
}
