import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: {} // Consider initializing this from localStorage if needed
    },
    reducers: {
        _updateCartData(state, action) {
            state.cartData = action.payload; // This will replace the entire cart
        },
        _resetCartData(state) {
            state.cartData = []; // Resets the cart
        },
        _addItemToCart(state, action) {
            state.cartData.push(action.payload); // Add individual item
        },
        _removeItemFromCart(state, action) {
            state.cartData = state.cartData.filter(item => item.id !== action.payload.id);
            // Removes item based on ID or any unique property
        }
    }
})

// Dispatch actions
export const { _updateCartData, _resetCartData, _addItemToCart, _removeItemFromCart } = cartSlice.actions;

// Default reducer export for store configuration
export default cartSlice.reducer;