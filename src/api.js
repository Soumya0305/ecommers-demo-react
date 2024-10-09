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
};

export const addItemtoCart = async (token, product) => {
 return await axios.post(`${API_URL}/cart/add-to-cart`,  product , {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
}

export const getCartItems = async (token) => {
  return await axios.get(`${API_URL}/cart/my-cart`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const removeItemFromCart = async (token, payload) => {
  return await axios.post(`${API_URL}/cart/remove-from-cart`,
    payload , {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const updateCartQuantity = async (token, payload) => {
  return await axios.post(`${API_URL}/cart/update-cart-quantity`, payload, 
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
  };

export const addNewAddress = async (token, payload) => {
  return await axios.post(`${API_URL}/address/add-new-address`, payload,
    {headers: {
      Authorization: `Bearer ${token}`
    }}
  )
};

export const getAllAddress = async (token) => {
  return await axios.post(`${API_URL}/address/`)
}
